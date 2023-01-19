import React, { useState, useEffect } from "react";

import Header from "../Components/Header";
import Card, { LatestArticleCard } from "../Components/HomeCard";

import LgImgOverlay, { SmImgOverlay } from "../Components/ImgOverlay";

export default function Home() {
  const [Latest, setLatest] = useState("");
  const [LatestArticle, setLatestArticle] = useState("");
  const [smImg, setsmImg] = useState("");
  const [lgImg, setlgImg] = useState("");

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/latest")
    .then((res) => res.json()).then((json) => setLatest(json));
  }, []);

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/latestArticle")
    .then((res) => res.json()).then((json) => setLatestArticle(json));
  }, []);

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/smText")
    .then((res) => res.json()).then((json) => setsmImg(json));
  }, []);

  useEffect(() => {
    fetch("https://blogapp-node-backend-5r3annq8j-eswara7373.vercel.app/lgText")
    .then((res) => res.json()).then((json) => setlgImg(json));
  }, []);

  return (
    <>
      <Header />
      <div className="container box">
        {lgImg && lgImg.map((val) => {
            return (
              <LgImgOverlay img={val.img} text={val.text} type={val.type} date={val.date} />
            );
        })}
        <div className="side-box d-flex">
          {smImg && smImg.map((val) => {
              return (
                <SmImgOverlay img={val.img} text={val.text} text1={val.text1} type={val.type}
                  date={val.date} />
              );
          })}
        </div>
      </div>
      <div className="container">
        <h2 className="mt-4 mb-1">The Latest</h2>
        <div className="line mb-4"></div>
        <div className="cards-container">
          {Latest && Latest.map((val) => {
              return (
                <>
                  <Card id={val.id} img={val.img} title={val.title}
                    details={val.details} date={val.date} type={val.type} />
                  <hr />
                </>
              );
            })}
        </div>

        <h2 className="mt-5 mb-1">The Latest Article</h2>
        <div className="line"></div>
        <div className="d-flex ver-article ">
          <div>
            {LatestArticle && LatestArticle.map((val) => {
                return (
                  <>
                    <LatestArticleCard id={val.id} img={val.img} title={val.title}
                      details={val.details} date={val.date} type={val.type} />
                    <hr />
                  </>
                );
              })}
          </div>

          <div className="side-bar">
            <p className="text-center ad">Advertisement</p>
            <img src="https://tpc.googlesyndication.com/daca_images/simgad/14781010476110498296"
              alt="" width="250px" height="720px" className="ad-img" />
          </div>
        </div>
      </div>
    </>
  );
}
