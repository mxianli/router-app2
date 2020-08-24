import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Shop() {
  //only when [] is null, then load data one time
  useEffect(()=>{
    fetchItems();
   
  }, []);
  //here must items, not data, otherwise not work
  const [items, setItems] = useState([]);

  const fetchItems = async() => {
    //const url= 'https://fortnite-public-api.theapinetwork.com/prod09/store/get';
    const url2 = 'https://fortnite-api.theapinetwork.com/store/get';
    const data = await fetch(url2);
    const jsonItems = await data.json();
    console.log(jsonItems.data);
    setItems(jsonItems.data);
  };
    
  return (
    //console.log('output', items.length),
    <div >
      {   
        items.map(item => (
            
         <h1 key= {item.itemId}  > 
          <Link to={ `/shop/itemId:${item.itemId}`} > abv {item.item.name} </Link>  
         </h1>
        ))      
      }
      
    </div>
  );
}

export default Shop;
