import { useSelector } from "react-redux";
import ProductCard from "./product";

const Products = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className="flex flex-col md:gap-4 gap-2">
      {data.cards[0] ? (
        data.cards.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })
      ) : (
        <p className="flex justify-center w-full pt-4"> سبد خرید خالی است </p>
      )}
    </div>
  );
};

export default Products;
