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
    const API_URL = " http://localhost:3500/items"
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
     /* JSON.parse(localStorage.getItem('shoppingList')) || */ []
      /* [21,12,12] */
      );
      //setItems(items);

      /* Avoiding default nature of useEffect using useEffect dependencies */

      /* useEffect(() => {
        console.log('load time')
      },[]) */

      /* When useEffect runs in the order of rendering */

      /* console.log('before useEffect') */

      const [newItem,setNewItem] = useState("")
      const [search,setSearch] = useState("")
      const [fetchError,setFetchError] = useState("")
      const [isLoading,setIsLoading] = useState(true)


    useEffect(() => {
      //using useEffect with localStorage
      /* localStorage.setItem('shoppingList', JSON.stringify(items)); */

      //using useEffect with JSON server
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          //console.log(response)
          if(!response.ok) throw new Error("Did not receive expected data from server")
          const listItems = await response.json();
          console.log(listItems)
          setItems(listItems);
          setFetchError(null);
        } catch (err) {
          //console.log(err.message)
          setFetchError(err.message)
        } finally{
          setIsLoading(false)
        }
      }
      /* in the case the api takes sometim to respond,the user may get and empty list displayed, to avpid this we use the setTimeout fn */
      setTimeout(() => {
        fetchItems();
      },2000);
    },[])


     /*  console.log('after useEffect') */

     
       

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
      <main>
        {isLoading && <p> Loading items...</p>}
        {fetchError && <p style ={{ color: "red"}}>{`Error : ${fetchError}`} </p>}
        {!fetchError && !isLoading &&
            <Content 
              items={items.filter(item => ((item.item).toUpperCase()).includes(search.toUpperCase()))}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
        />}
      </main>
      <Footer 
        length={items.length}
      />
    </div>
    </>
  )
}

export default App
