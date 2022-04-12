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
      const URL = "/productsCategory/"
      // const URL = "/productsCategory/" + categoryId
      const response = await api.get(URL);
      setProduct(response.data);
    }
    catch (error) {
    }
  }
  return (
    <>
      <h1>Produtos da categoria</h1>
      <ul style={{ listStyle: "none" }}>
        {product.map((item) => (
          <ProductItem key={item.id} prmProduct={item} />
        ))}
      </ul>
    </>
  );
}