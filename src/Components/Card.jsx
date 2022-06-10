import React from "react";

export default function Card(props) {
return(
<div className="card">
    <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked"/>
    </div>
    <img width={133} height={112} src="/img/Sneakers/1.jpg" alt="1"/>
    <h5>Мужские Кроссовки Nike Air Max 270</h5>
    <div className="d-flex justify-between ">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <strong>11 204 р.</strong>
        </div>
        <button className="button">
            <img width={8} height={8} src="/img/plus.svg" alt="Plus"/>
        </button>
    </div>
</div>
)
}
