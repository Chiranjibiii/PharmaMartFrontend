import { Link } from "react-router-dom";
import type { Product } from "../../../pages/auth/productTypes";



interface CardProps{
  data:Product
}

const Card:React.FC<CardProps>=({data})=>{
  return (
   <>
    <Link to={`/product/${data.id}`}>

     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-xs">
      <img
        src={data.productImageUrl}
        alt="Product"
        className="rounded-t-lg p-4 h-48 w-full object-contain"
      />

      <div className="px-4 pb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {
            data?.productName
          }
        </h3>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
           {
            data.productPrice
           }
          </span>
          <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    </Link>
   </>
  );
};

export default Card;
