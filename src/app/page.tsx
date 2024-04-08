import "../styles/Menu.css"
import { Menu } from "@/components/Menu";
import { getAllTitle } from "@/server/Actions";

export default async function Home() {
  const title = await getAllTitle();  

  return (
    <>
      <Menu title={title}/>
    </>
  );
}
