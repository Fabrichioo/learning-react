import { useEffect, useState } from 'react'
import {
  CAT_ENDPOINT_RANDOM_IMG_ID,
  CAT_IMG_PREFIX,
  QUERY_PROPS
} from '../constants'

import getRandomFact from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(setFact)
  }

  useEffect(refreshFact, [])
  return { fact, refreshFact }
}

export default function useCatImage ({ fact }) {
  const [urlImage, setUrlImage] = useState()
  useEffect(() => {
    if (!fact) return

    fetch(CAT_ENDPOINT_RANDOM_IMG_ID)
      .then((res) => res.json())
      .then((data) => {
        const { _id } = data
        const threeFirstWords = fact.split(' ', 3).join(' ')
        const newUrlImage = `${CAT_IMG_PREFIX}${_id}/says/${threeFirstWords}${QUERY_PROPS}`

        setUrlImage(newUrlImage)
      })
  }, [fact])
  return { urlImage }
}
