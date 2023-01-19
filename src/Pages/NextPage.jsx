import React from "react";
import Button from "react-bootstrap/Button";
import logo from '../images/face.png';
import share from '../images/share.svg';
import clap from '../images/clap.svg';
import { useLocation } from "react-router-dom";

const NextPage = () => {
 
  const location= useLocation();
   const {data } = location.state;
   console.log(data)
   
  return (
    <>
  
      <div className="container header ">
        <div className="d-flex mt-3">
          <p className="h6 vlogo">The</p>
          <h3 className="head4"> Siren</h3>
        </div>
        <Button variant="outline-primary h-25 mt-3 " >Get Started</Button>
      </div>
      <hr className="hr" />
      <div className="d-flex next-box">
        <div className="share-box">
          <a href="#k" className="d-flex text-decoration-none ">
            <img src={clap} alt=""/>
            <p className="ms-4 text-dark my-3">9.3K</p>
          </a>
          <a href="#ff" className="d-flex mt-3 text-decoration-none">
            <img src={share} alt=""/>
            <p className="ms-4 text-dark my-3">Share this article</p>
          </a>
        </div>
        <div className="box-center">
          <h3 className="my-3 ">{data.title} </h3>
          <div className="d-flex mb-3">
            <img src={logo} alt="" className="circle me-3 "/>
            <div className="logo-detail">
              <h5 className="m-0 mt-1">Dmitry Nozhe</h5>
              <p className="grey-text m-0 text-muted">
                {data.date} · 10 min read
              </p>
            </div>
            <a href="#fg" className="mt-3 ms-5">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook text-grey"></i></a>
              <a href="https://www.instagram.com/"><i className="fab fa-instagram-square ms-1 text-grey"></i></a>
              <a href="https://twitter.com/"><i className="fab fa-twitter ms-1 text-grey"></i></a>
              <a href="https://www.youtube.com/"><i className="fab fa-youtube ms-1 text-grey"></i></a>
            </a>
          </div>
          <img src={data.img} alt="" height="200px" width="396px" className="card-img" />

          <p className="next-para">
            {data.details}
          </p>

          <div className="resp-share-box ">
          <a href="#k" className="d-flex text-decoration-none">
            <img src={clap} alt="" className="img-res"/>
            <p className="text-dark ">9.3K</p>
          </a>
          <a href="#ff" className="d-flex text-decoration-none">
            <img src={share} alt="" className="img-res"/>
            <p className="text-dark ">Share this article</p>
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default NextPage;
