import React from "react";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
const Page = async () => {
  let products = await productList();
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      {products.map((item) => (
        <div key={item.id}>
          <h3>Name:{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Page;
