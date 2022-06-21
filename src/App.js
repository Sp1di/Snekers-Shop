import React from "react";
import Overlay  from "./Components/Overlay";
import Card from "./Components/Card";
import Header from "./Components/Header";



const arr=[
    {
        title:'Мужские Кроссовки Nike Air Max 270',
        price: 12999, 
        imageUrl: '/img/Sneakers/1.jpg',
    },    
    {
        title:'Мужские Кроссовки Nike Blazer Mid Suede', 
        price: 8490, 
        imageUrl: '/img/Sneakers/2.jpg', 
    },
    {
        title:'Кроссовки Puma X Aka Boku Future Rider', 
        price: 8990, 
        imageUrl: '/img/Sneakers/3.jpg' ,
    },
    {
        title:'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 12990, 
        imageUrl: '/img/Sneakers/4.jpg' ,
    },
];

function App() {

    const [cartOpened,setCartOpened] = React.useState(false);

  return (
      <div className="wrapper clear"> 
        {cartOpened && <Overlay onClose={()=> setCartOpened(false)} />}
         <Header onClickCart={()=> setCartOpened(true)} />
        <div className="content p-50">
            <div className="d-flex align-center mb-40 justify-between" >
                <h1 >Все кросовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="sneakers d-flex">
                {arr.map((obj)=>(
                    <Card 
                        title={obj.title} 
                        price={obj.price}
                        imageUrl={obj.imageUrl}
                        
                    />
                ))}
            </div>
        </div>
      </div>
  );
}

export default App;
