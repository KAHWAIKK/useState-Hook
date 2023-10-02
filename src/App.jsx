/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import Header from './Header';
import SearchItem from './SearchItem';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import { useState,useEffect } from 'react';


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
       JSON.parse(localStorage.getItem('shoppingList')) || []
      /* [21,12,12] */
      );
      //setItems(items);

      /* Avoiding default nature of useEffect using useEffect dependencies */

      /* useEffect(() => {
        console.log('load time')
      },[]) */

      /* When useEffect runs in the order of rendering */

      /* console.log('before useEffect') */

      useEffect(() => {
        localStorage.setItem('shoppingList', JSON.stringify(items));
      },[items])


     /*  console.log('after useEffect') */

      const [newItem,setNewItem] = useState("")
      const [search,setSearch] = useState("")

      const setAandSaveItems = (newItems) => {
        setItems(newItems);
       
      }

      const addItem = (item) => {
        const id = items.length ? items[items.length -1].id + 1 : 1;
        const myNewItem = { id, checked: false ,item}
        const listItems = [...items, myNewItem];
        setItems(listItems);
      }

      const handleCheck = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.map((item) => item.id === id ? { ...item,checked : !item.checked} : item); 
      setItems(listItems);
      }   
      const handleDelete = (id) => {
      //console.log(`key : ${id}`);
      const listItems = items.filter((item) => item.id !== id)
      setItems(listItems);;
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
      <AddItems
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
