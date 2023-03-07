import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="px-4 py-2 flex text-2xl gap-4 bg-pink-900">
      <Link to={"/victory"}>Victory</Link>
      <p>Header</p>
      <p>Header</p>
      <p>Header</p>
    </div>
  );
}

export default Header;
