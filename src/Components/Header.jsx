import React from "react"

function Header(props){

    return(
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="logo"/>
                <div >
                    <h3 className="text-uppercase">Sneakers Shop</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex ">
                <li onClick={props.onClickCart}  className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/basket.svg" alt="basket" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/unliked.svg" alt="like" />
                </li>
                <li>
                    <img width={25} height={25} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    )
}
export default Header