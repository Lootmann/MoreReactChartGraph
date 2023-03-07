import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="px-4 py-2 flex text-2xl gap-4 bg-slate-400">
      <Link to={"/victory"} className="hover:bg-yellow-600 px-2 rounded-md">
        Victory
      </Link>

      <Link to={"/vis"} className="hover:bg-yellow-600 px-2 rounded-md">
        React-vis
      </Link>

      <p>Header</p>
      <p>Header</p>
    </div>
  );
}

export default Header;
