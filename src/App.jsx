/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
 /*  const [count, setCount] = useState(0) */
      const [ items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
      ]/* [21,12,12] */);
      //setItems(items);

      const handleCheck = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.map((item) => item.id === id ? { ...item,checked : !item.checked} : item); 
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      }   
      const handleDelete = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems);
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
      }

  return (
    <>
    <div className="App">
      <Header title="Groceries" />
      {/* PROPS DRILLING-passing down to the child component */}
      <Content 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
        length={items.length}
      />
    </div>
    </>
  )
}

export default App
