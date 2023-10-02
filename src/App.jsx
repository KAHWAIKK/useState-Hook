/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';


function App() {
 /*  const [count, setCount] = useState(0) */
      const [ items, setItems] = useState(
        /* This was the default state */
      /*   [
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
      ] */
      JSON.parse(localStorage.getItem('shoppingList'))
      /* [21,12,12] */
      );
      //setItems(items);

      const [newItem,setNewItem] = useState("")
      const [search,setSearch] = useState("")

      const setAandSaveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem('shoppingList', JSON.stringify(newItems));
      }

      const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const myNewItem = { id, checked: false ,item}
        const listItems = [...items, myNewItem];
        setAandSaveItems(listItems);
      }

      const handleCheck = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.map((item) => item.id === id ? { ...item,checked : !item.checked} : item); 
      setAandSaveItems(listItems);
      }   
      const handleDelete = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.filter((item) => item.id !== id)
      setAandSaveItems(listItems);;
      }

      const handleSubmit = (e) => {
        //console.log(e)
        e.preventDefault();
        if(!newItem) return;
        console.log(newItem)
        addItem(newItem);
        /* ADD ITEM */
        setNewItem("") ;
        //console.log(e)
        console.log('submitted successfully')
      }

  return (
    <>
    <div className="App">
      <Header title="Groceries" />
      {/* PROPS DRILLING-passing down to the child component */}      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item => ((item.item).toUpperCase()).includes(search.toUpperCase()))}
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
