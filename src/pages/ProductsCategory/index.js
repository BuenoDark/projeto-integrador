/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem";
import api from "../../services/api";
import { useParams } from 'react-router-dom';

export default function ProductsCategory() {

  // Captura do id de categoria parâmetro passado para a página
  const categoryId = useParams("id");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    callApiProductsCategory();
  }, []);

  async function callApiProductsCategory() {

    try {
      const URL = "/categories/" + categoryId['id'];
      const response = await api.get(URL);
      setProduct(response.data.products);
    }
    catch (error) {
      console.error('error', error);
    }
  }
  return (
    <>
      <body style={{textDecoration:"none",background:"#e5e5e5",padding: "0 20px"  }}>
      <h1 style={{ fontSize: "50px", color:"black" }}>Produtos da categoria</h1>
      <ul style={{display: "flex",alignItems: "center"}}>
        <li style={{display: "flex",flexWrap: "wrap",justifyContent: "center"}}>
        {product.map((item) => (
          <ProductItem key={item.id} prmProduct={item} />
        ))}
          </li>
        </ul>
        </body>
    </>
  );
}
