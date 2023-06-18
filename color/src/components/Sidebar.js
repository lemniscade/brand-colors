import React from 'react'
import Modal from 'react-modal'
import {GrClose} from 'react-icons/gr'
import { useState } from 'react'


function Sidebar() {
    const [modalIsOpen,setModalIsOpen]=useState(false)
   const toggleModal=()=>{
    setModalIsOpen(!modalIsOpen);
   }
  return (
    <>
    <aside className="sidebar">
    <div className="logo">
        <a onClick={toggleModal} >Brand <b>Colors</b></a>
    </div>
    <div className="description">
    The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
    </div>
    <nav className="menu">
        <ul>
            <li>
                <a>About BrandColors</a>
            </li>
        </ul>
    </nav>
    </aside>
    <Modal
        isOpen={modalIsOpen}
        // appElement={document.getElementById('#root')}
        onRequestClose={toggleModal}
        ariaHideApp={false}
        // appElement={document.getElementById('root')}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}><GrClose/></button>
        <h3>About Brand Colors</h3>
        <p>BrandColors was created by DesignBombs. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over 2 million pageviews. There are now over 600 brands with 1600 colors and the collection is always growing.</p>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </>
  )
}
Modal.setAppElement('#root');
export default Sidebar