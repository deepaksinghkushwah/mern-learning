import ListAudio from "../components/Audio/ListAudio"

const Home = () => {
  return (
    <div className="text-justify">
      <h1 className="text-4xl">Welcome to Music Page</h1>
      <hr className="mt-3" />
      <ListAudio/>
    </div>
  )
}

export default Home