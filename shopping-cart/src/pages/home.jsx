import { useEffect, useState } from "react";
import ProductTile from "../components/product-tile";
import { Circles } from "react-loader-spinner";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const res = await response.json();

      if (res) {
        setProducts(res);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center">
          <Circles
            height={"100"}
            width={"100"}
            color={"#7f1d1d"}
            visible={true}
          />
        </div>
      )}
      <div className="min-h-[88vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
        {!loading &&
          products &&
          products.length &&
          products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
