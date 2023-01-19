import React from 'react'
import { Link } from "react-router-dom";
 
 export default function Card(props) {
   return (
    <Link to="/nextPage" state={{ data: props}}  className=" text-decoration-none text-dark hori-card">
    <img src={props.img} alt="" height="200px" width="328px" className="card-img"/>
    <div className="hori-box">
        <h3>{props.title} </h3>
        <p className="text-muted lh-sm ">{props.details} </p>
        <p className="mt-5 mx-4">
           <span className="fw-bold">{props.type} : </span>{props.date}
        </p>
    </div>
</Link>
   )
 }
 
 export function LatestArticleCard(props) {
  return (
    <Link to="/nextPage" state={{ data: props}} className="text-decoration-none text-dark d-flex vertical-sm-card ">
    <img src={props.img} alt="" height="200px" width="250px" className="hori-sm-img"/>
    <div className="ms-5 ver-sm-box">
      <h3 >{props.title}</h3>
      <p className="text-muted lh-sm"> {props.details} </p>
      
      <p className="mx-4">
        <span className="fw-bold">{props.type} : </span>{props.date}
     </p>
   </div>
 </Link>
  )
}









