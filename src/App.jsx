
import { useState,useEffect } from 'react';
import Navbar from './component/navbar/Navbar';
import Footer from './component/footer/Footer';
import Home from './pages/Home/Home'
import Preloader from './component/Preloader/PreLoader';
function App() {
  const [loading,setloading]=useState(true);
  useEffect(()=>{
    const fakedatafetch=()=>{
      setTimeout(()=>{
        setloading(false);
      },3000)
    }
    fakedatafetch();
  })
  return (
    loading ? <Preloader /> :
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </>
  )
}

export default App
