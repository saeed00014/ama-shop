import ProductCard from "../../../components/productCard";
import { productInfo } from "../../../data/data";

const Products = () => {
  return (
    <div className="flex flex-row gap-1 h-full overflow-x-scroll">
      {productInfo.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
