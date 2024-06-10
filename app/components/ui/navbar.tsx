import Link from "next/link";
import * as React from "react";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className="px-20 py-5 bg-slate-600 text-white flex flex-row">
      <Link href={"/"}>tipo Olx</Link>
      <Link className="ml-auto" href={"/create-product"}>
        Create Product
      </Link>
    </div>
  );
};

export default Navbar;
