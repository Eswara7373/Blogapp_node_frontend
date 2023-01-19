import React, { useState, useEffect } from "react";
import ArticlesCard, { TopPostCard, TopPostsCardsHead } from "../Components/ArticlesCard";
import Header from "../Components/Header";


export default function Food() {
  const [Post, setPost] = useState("");
  const [FirstPost, setFirstPost] = useState("");
  const [TopPost, setTopPost] = useState("");

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/foodPost")
      .then((res) => res.json()).then((json) => setPost(json));
  }, []);

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/foodFirstPost")
      .then((res) => res.json()).then((json) => setFirstPost(json));
  }, []);

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/foodTopPost")
      .then((res) => res.json()).then((json) => setTopPost(json));
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="d-flex content-box">
          <div className="content-box-main">
            <h2 className=" mt-3">Food</h2>
            <div className="line"></div>
            {Post && Post.map((val) => {
              return (
                <>
                  <ArticlesCard id={val.id} img={val.img} title={val.title}
                    details={val.details} date={val.date} type={val.type}/>
                  <hr />
                </>
              );
            })}
          </div>
          <div className="content-box-side">
            <h2 className="mt-3">Top Posts</h2>
            <div className="line mb-4"></div>
            {FirstPost && FirstPost.map((val) => {
              return (
                <>
                  <TopPostCard id={val.id} img={val.img} title={val.title}
                    date={val.date} type={val.type} num={val.num}/>
                  <hr />
                </>
              );
            })}
            {TopPost && TopPost.map((val) => {
              return (
                <>
                  <TopPostsCardsHead id={val.id} img={val.img} title={val.title} 
                    date={val.date} type={val.type} num={val.num} />
                  <hr />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
