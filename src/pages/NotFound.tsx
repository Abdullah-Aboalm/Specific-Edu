import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center my-10">
      <p className="text-4xl font-bold">Oops! We can't find that page.</p>
      <Link
        to={"/"}
        className="w-fit flex items-center mt-8 px-4 py-2 font-bold rounded-md bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white transition ring-2 ring-indigo-600"
      >
        Back to Home <Home className="ml-2" />
      </Link>
    </div>
  );
};

export default NotFound;
