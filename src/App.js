import React from "react";

function App() {
  return (
      <div className="wrapper clear">
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="logo"/>
                <div >
                    <h3 className="text-uppercase">Sneakers Shop</h3>
                    <p>Магазин лучших кросовок</p>
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
            <h1 className="mb-40">Все кросовки</h1>
            <div className="sneakers d-flex">
                <div className="card">
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
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/2.jpg" alt="2"/>
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
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/3.jpg" alt="3"/>
                    <h5>Мужские Кроссовки Nike Air Max 270</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column ">
                            <span>Цена:</span>
                            <strong>11 204 р.</strong>
                        </div>
                        <button className="button">
                            <img width={8} height={8} src="/img/plus.svg" alt="Plus"/>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <img width={133} height={112} src="/img/Sneakers/4.jpg" alt="4"/>
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
            </div>
        </div>
      </div>
  );
}

export default App;
