import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className=" h-screen bg-red-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl text-red-600">Oops!</h1>
        <p className="text-xl text-red-400 p-5">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-red-400 text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
