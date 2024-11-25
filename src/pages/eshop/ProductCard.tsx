import { FaStar } from "react-icons/fa";
import { IProductType } from "./ProductsPage";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "../../components/shared/Button";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../components/utils/CurrencyFormat";

export const ProductCard = ({ product }: { product: IProductType }) => {
  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <Link to={"#"}>
        <img
          className="h-60 rounded-t-lg object-fit object-center"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span>
      <div className="mt-4 px-5 pb-5">
        <Link to={"#"}>
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product.title}
          </h5>
        </Link>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {product.rating.rate}
          </span>

          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-2xl font-bold text-slate-700">
              {formatCurrency(product.price)}
            </span>
          </p>
          <Button>
            <IoCartOutline size={16} />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
