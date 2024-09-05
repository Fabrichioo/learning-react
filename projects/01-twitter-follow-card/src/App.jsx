import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    id: 1,
    userName: "midudev",
    name: "Miguel Angel Durán",
    isFollowing: true,
  },
  {
    id: 2,
    userName: "pheralb",
    name: "Pablo Amigo",
    isFollowing: false,
  },
  {
    id: 3,
    userName: "juanmah",
    name: "Juanma Hernández",
    isFollowing: true,
  },
  {
    id: 4,
    userName: "mariaperez",
    name: "María Pérez",
    isFollowing: false,
  }
  // Add more users as needed...
];

export function App() {
  return (
    <>
      <section className="App">
        {users.map(({ id, userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={id}
              userName={userName}
              isFollowing={isFollowing}
            >
               {name}
            </TwitterFollowCard>
          )
        )}
      </section>
    </>
  );
}

export default App
