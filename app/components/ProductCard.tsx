import * as React from "react";
import { Product } from "../utils/services/productsService";
import Image from "next/image";

interface IProductCardProps {
  product: Product;
}

const ProductCard: React.FunctionComponent<IProductCardProps> = ({
  product,
}) => {
  return (
    <div className="flex flex-col shadow-lg m-5">
      <Image
        className="w-fit h-auto"
        src={product.image}
        alt="product image"
        width={100}
        height={100}
      />
      <div className="">
        <h2 className="">{product.title}</h2>
        <p>${product.price}</p>
        <div className="">
          <button className="">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
