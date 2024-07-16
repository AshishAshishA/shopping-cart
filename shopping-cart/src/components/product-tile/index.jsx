import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product = {} }) {
  const { category, id, image, price, title } = product;
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    console.log("removing", id);
    dispatch(removeFromCart({ id }));
  }
  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rouded-xl">
      <div className="">
        <img className="h-[110px]" src={image} alt={title} />
      </div>
      <div>
        <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mt-5">
        <button
          onClick={
            cart.some((item) => item.id === id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          {cart.some((item) => item.id === id)
            ? "Remove From Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
