import data from "../db.json";
import { ItemCard } from "./ItemCard";

function Home() {
  const list = data;

  return (
    <div>
      {list?.map((item) => {
        return <ItemCard key={item.id} data={item} />;
      })}
    </div>
  );
}
export default Home;
