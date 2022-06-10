import React from "react";
import Overlay  from "./Components/Overlay";
import Card from "./Components/Card";

function App() {
  return (
      <div className="wrapper clear">
        <Overlay/>
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="logo"/>
                <div >
                    <h3 className="text-uppercase">Sneakers Shop</h3>
                    <p className="opacity-5">Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="d-flex ">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/basket.svg" alt="basket" />
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/like.svg" alt="like" />
                </li>
                <li>
                    <img width={25} height={25} src="/img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
        <div className="content p-50">
            <div className="d-flex align-center mb-40 justify-between" >
                <h1 >Все кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers d-flex">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
      </div>
  );
}

export default App;
