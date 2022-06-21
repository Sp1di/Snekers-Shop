import React from "react";
import styles from "./Overlay.module.scss";

function Overlay(props) {
return(
<div   className={styles.overlay} >
    <div className={styles.drawer}>
        <h2 className="mb-40 d-flex justify-between ">
            Корзина<img onClick={props.onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>
        <div className={styles.items}>
            <div className="cartItem d-flex align-center">
                <div style={{backgroundImage:'url(/img/sneakers/1.jpg)'}}
                    className="cartItemImg ">

                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <strong>12 999 р.</strong>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
            </div>
            <div className="cartItem d-flex align-center">
                <div style={{backgroundImage:'url(/img/sneakers/1.jpg)'}}
                    className="cartItemImg ">
                </div>
                <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <strong>12 999 р.</strong>
                </div>
                <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li >
                            <span>Итого:</span>
                            <div></div>
                            <strong> 21 498 руб.</strong>
                        </li>
                        <li >
                            <span>Налог 5%:</span>
                            <div></div>
                            <strong>1044 руб.</strong>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ</button>
                </div>
            </div>
</div>
)
}
export default Overlay;