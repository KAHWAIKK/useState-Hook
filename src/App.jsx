/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */

import Header from './header';
import Content from './Content';
import Footer from './Footer';


function App() {
 /*  const [count, setCount] = useState(0) */

  return (
    <>
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
    </>
  )
}

export default App
