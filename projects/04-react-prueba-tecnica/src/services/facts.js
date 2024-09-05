import { CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export default function getRandomFact () {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then((res) => res.json())
    .then((data) => data.fact)
}
