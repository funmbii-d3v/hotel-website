import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageRoute from './Routes/PageRoute'
import "./Components/Styles/App.css"
import styles from './Components/Styles/modal.module.css'
const App = () => {
  const [isOpen, setisOpen] = useState(true)
  const navigate = useNavigate()

  const toggleModal = () => {
    console.log('before:', isOpen)
    setisOpen(!isOpen)
  }
  const goToRooms = () => {
    setisOpen(false)
    navigate('/rooms')
  }

  return (
    <div className='body'>
      {isOpen &&(
        <div className={styles.modals}>
          <div className={styles.modalBox}>
            <img src={"/Assets/image/Logo.png"} alt="hotel logo" height={150} width={150} className={styles.img}/>
            <h1 className={styles.heading}>Hello, customer!</h1>
            <h2 className={styles.text}>Welcome to L'Hòtel</h2>
            <p className={styles.mini}>—home away from home✨</p>
            <p>Looking to spend the night?</p>
            <button onClick={goToRooms} className={styles.link}>Check out our rooms</button>
            <button onClick={toggleModal} className={styles.cancel}>Maybe Later</button>
          </div>
        </div>
      )}
      <PageRoute/>
    </div>
  )
}
export default App