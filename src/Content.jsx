import { useState } from "react";

const Content = () => {
  const [ name, setName] = useState("Kahwai");
  const [ count, setCount] = useState(2);
    
    const handleNameChange = () =>{
    const names = ["Rob","Mark","Kevin"]
    const int = Math.floor(Math.random() * 3);
    setName(names[int])
   }
 

 const handleClick = () =>{
    setCount(count +1)
     console.log(count)
    //setCount(count +1)
    
    

 }
 /* passing a parameter in a click event */
 const handleClick2 = (name) =>{
   console.log(` ${name} was clicked`)
 }
 /* Accessing the event object in the click event function */
 const handleClick3 = (e) =>{
   console.log(e);//we get the event object with its keys and properties
   console.log(e.target);//console returns the button element with its assocoated innertext
   console.log(e.target.innerText);//console returns the innertext of the button element i.e Clicked
 }
 

  return (
    <main>
        <p onClick={handleClick}>Hello {name}!</p>
        <button onClick={handleNameChange}>Change Name</button>
        {/* passing a parameter in a click event */}
        <button onClick={() =>handleClick2("Kahwai")}>Clicked</button>
        <button onClick={(e) =>handleClick3(e)}>Clicked</button>
    </main>
  )
}

export default Content