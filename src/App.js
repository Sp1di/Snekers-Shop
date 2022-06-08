import React from "react";

function App() {
  return (
      <div className="wrapper">
        <header className="headerLeft">
            <div>
                <img src="/img/logo.png" />
                <div className="headerInfo">
                    <h3>Sneakers Shop</h3>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    <svg/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <svg/>
                </li>
            </ul>
        </header>
      </div>
  );
}

export default App;
