import React from "react";



export default function Card(props) {
return(
<div className="card">
    <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
    </div>
    <img width={133} height={112} src={props.imageUrl} alt="1"/>
    <h5>{props.title}</h5>
    <div className="d-flex justify-between ">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <strong>{props.price} р.</strong>
        </div>
        <button className="button">
            <img width={8} height={8} src="/img/plus.svg" alt="Plus"/>
        </button>
    </div>
</div>
)
}
