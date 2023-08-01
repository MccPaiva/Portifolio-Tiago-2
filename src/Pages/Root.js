import React from "react";
import rawData from "../postData.json";
import { HashLink as Link } from 'react-router-hash-link';

const Root = () => {

  const postData = rawData;

  return (
    <div>
    <section className='landing'>
    <div>
      <h1>Tiago Almeida</h1><br/>
      <p>A excelência não é um ato, mas um hábito.</p>
    </div>
  </section>

    <div className="posts"> 

        <h1>Peças</h1>

        <section className="articles">
          {Object.entries(postData).map(([slug, { title, thumb }]) => (
          <Link smooth={true} to={`/posts/${slug}#topper`} className="article" key={slug}>
            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${thumb})` }} className="background"></div>
            <h3>{title}</h3>
          </Link>
          ))}
        </section>
    </div>
    </div>
  );
};
  
export default Root;