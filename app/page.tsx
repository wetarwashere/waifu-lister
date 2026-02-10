import { getWaifuData } from "./lib/db"
import Card from "./components/card/card"

const Home = async () => {
  const waifus = await getWaifuData()

  return (
    <Card waifus={waifus} />
  );
}

export default Home
