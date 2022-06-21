import React,{useState} from "react";
import styles from "./Card.module.scss"

function  Card(props){

const [isAdded,setIsAdded] = React.useState(false);

const onClickPlus=()=>{
    setIsAdded(!isAdded);
}


return(
<div className={styles.card}>
    <div className={styles.favorite} onClick={props.onAddToFavorite}>
        <img src="img/unliked.svg" alt="Unliked"/>
    </div>
    <img width={133} height={112} src={props.imageUrl} alt="1"/>
    <h5>{props.title}</h5>
    <div className="d-flex justify-between ">
        <div className="d-flex flex-column">
            <span>Цена:</span>
            <strong>{props.price} р.</strong>
        </div>
        <img className={styles.plus} onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg ": "/img/btn-plus.svg"} alt="Plus"/>
    </div>
</div>
)
}

export default Card;