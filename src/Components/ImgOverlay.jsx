import React from 'react'

export  function SmImgOverlay(props) {
  return (
    <div className="position-relative smallImgBox">
        <img src={props.img} alt="" className='img-sm'/>
        <div class="bottom-left-small">
            <h5 className='m-0'>{props.text}</h5>
            <h5>{props.text1}</h5>
            <p className='grey-text'> {props.type} / {props.date} </p>
        </div>
    </div>
  )
}
const LgImgOverlay = (props) => {
  return (
    <div className="position-relative largeImgBox">
         
        <img src={props.img} alt="" className='img-lg'/>
       
        <div className="bottom-left">
           <h3>{props.text}</h3>
           <p className='grey-text'>{props.type} / {props.date}</p>
        </div>
    </div>
  )
}
export default LgImgOverlay