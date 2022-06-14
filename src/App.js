import React from "react";
import Overlay  from "./Components/Overlay";
import Card from "./Components/Card";
import Header from "./Components/Header";


const arr=[
    {
        title:'Мужские Кроссовки Nike Blaze Mid Suede',
        price: 12999, 
        imageUrl: '/img/Sneakers/1.jpg',
    },    
    {
        title:'Мужские Кроссовки Nike Blaze Mid Suede', 
        price: 15600, 
        imageUrl: '/img/Sneakers/2.jpg', 
    },
    {
        title:'Мужские Кроссовки Nike Blaze Mid Suede', 
        price: 8499, 
        imageUrl: '/img/Sneakers/3.jpg' ,
    },
    {
        title:'Мужские Кроссовки Nike Blaze Mid Suede',
        price: 8999, 
        imageUrl: '/img/Sneakers/4.jpg' ,
    },
];

function App() {
  return (
      <div className="wrapper clear"> 
        <Overlay/>
        <Header/>
        <div className="content p-50">
            <div className="d-flex align-center mb-40 justify-between" >
                <h1 >Все кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers d-flex">
                {arr.map((obj)=>
                <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
                )}
            </div>
        </div>
      </div>
  );
}

export default App;
