import './App.css';
import { useState } from 'react';
import { Fragment } from 'react';
import Modal from './components/Modal';
import Form from './components/Form';

function App() {
const [data, setData] = useState([
  {name: "Diyor", surname: "Nuriddinov", id:1},
  {name: "Javohir", surname: "Nuriddinov", id:2},
  {name: "Bahodir", surname: "Saidakbarov", id:3},
])

const [showModal, setShowModal] = useState(true)

const closeModal = function(){
    setShowModal(false)
}


  return (
    <>
     {data.map((item)=>{
        return(
          <Fragment key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.surname}</h2>
        </Fragment>
        )
     })}
     <button onClick={()=>setShowModal(true)}>Modal</button>

    {showModal&&<Modal closeModal={closeModal} >
          <h1>Salom</h1>
          <h2>Dasturchilar</h2>
    </Modal>}

    </>
  );
}

export default App;
