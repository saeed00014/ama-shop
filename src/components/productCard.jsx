import { useDispatch } from "react-redux";
import { addcard } from "../store/dataSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handlePost = (product) => {
    dispatch(addcard(product));
  };

  return (
    <article className="flex flex-col items-stretch justify-between w-[10rem] h-full bg-g_Text_White px-3 py-2">
      <img
        src={product.img}
        alt="product image"
        className="w-[130px] h-[130px]"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <span className="-ml-1">
              {(
                product.price -
                (product.price * product.discountPrecent) / 100
              ).toLocaleString("ar-EG")}
            </span>
            <span className="text-[.5rem]">تومان</span>
          </div>
          <span className="flex py-[1px] px-[5px] text-[.9rem] bg-red-600 rounded-full text-white">
            {product.discountPrecent}%
          </span>
        </div>
        <del className="text-[.8rem] -mt-1">
          {product.price.toLocaleString("ar-EG")}
        </del>
        <button
          onClick={() => handlePost(product)}
          className="text-[.8rem] bg-red-600 rounded-full text-white pb-1"
        >
          {" "}
          افزودن به سبد خرید{" "}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
