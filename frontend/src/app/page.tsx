import ClientView from "@/components/clientView";
// import { productList } from "./data/productList";



export default async function Home() {

  const res = await fetch('http://localhost:5000/api/products');
  const data = await res.json();




  return (
    <>
      <ClientView productList={data} />
    </>
  );
}
