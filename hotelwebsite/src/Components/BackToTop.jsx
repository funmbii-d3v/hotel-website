import React , {useEffect, useState}from 'react'
import { FaArrowUp } from "react-icons/fa6";
const BackToTop = () => {
    const[visible, setVisible]= useState(false)
  useEffect(()=>{
    const backToTop= ()=>{
        setVisible(window.scrollY> 50)
    }
    window.addEventListener('scroll', backToTop)
    return()=> window.removeEventListener('scroll', backToTop)
  }, [])
    const topPage=()=>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    if(!visible) return null
  return (
    <div>
      <button className='topbtn' onClick={topPage}><FaArrowUp/></button>
    </div>
  )
}
export default BackToTop