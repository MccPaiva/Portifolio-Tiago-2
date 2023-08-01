import React from "react";
import rawData from "../postData.json"
import { Link } from "react-router-dom";

const Error = () => {


  const postData = rawData;

  return (
    <div>
        <section className="title">
          <h1>404</h1>
          <h2>Página não encontrada</h2>
        </section>
    </div>
  );
};
  
export default Error;