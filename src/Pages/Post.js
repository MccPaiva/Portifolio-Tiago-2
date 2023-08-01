import React from "react";
import doge from "../images/doge.jpg"
import { useParams } from "react-router-dom";
import rawData from "../postData.json";
import { Link } from "react-router-dom";

const Post = () => {

  const postData = rawData;

  const { slug } = useParams();
  const post = postData[slug];
  const { title, text, image} = post;


  return (
    <div className="post">
      <div id="topper"></div>

      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={title}></img>

      <div className="text container">

        <h1>{title}</h1>

        <p>{text}</p>
      </div>
    </div>
  );
};
  
export default Post;