import React, { useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function ItemDetail({match}) {
  //only when [] is null, then load data one time
  useEffect(()=>{
    fetchItems();
     
  }, []);
  //here must items, not data, otherwise not work
  const [item, setItem] = useState([]);
  const fetchItems = async() => {
    const ids = match.params.itemId.split (':') ;
    console.log ('ids', ids[1])
    const item = await fetch(`https://fortnite-api.theapinetwork.com/store/get?itemId={{${ ids[1] }}}`);

    console.log('item', item +',  match.params.id='+match.params.itemId );
    setItem(item);
  };
    
  return (
  //  console.log('output', items.length),
    <div >
      {    
          <h1>{item.name}</h1>
      }
    </div>
  );
}

export default ItemDetail;
