import './App.css';
import { useEffect, useState } from 'react';
import {getGuests, deleteGuest} from "./HotelService"
import HotelForm from './HotelForm';
import HotelGrid from './HotelGrid';

function App() {

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests()
    .then((data) => {
      console.log(data);
      setGuests(data)
    })
  }, []);

  const addGuest = (guest) => {
    let temp = guests.map(g => g);
    temp.push(guest);
    setGuests(temp);
  }

  const editGuest = (updatedGuest) => {
    const copiedState = [...guests]
    const index = copiedState.findIndex((guest) => {
      return guest._id === updatedGuest._id
    })
    copiedState[index] = updatedGuest
    setGuests(copiedState)
  }

  const removeGuest = (id) => {
    deleteGuest(id).then(()=>{
      let temp = guests.map(g=>g);
      const toDel = guests.map(g => g._id).indexOf(id);
      temp.splice(toDel, 1);
      setGuests(temp);
    })
  }
  


  return (
    <div className="App">
      <HotelForm addGuest={addGuest} />
      <HotelGrid guests={guests} removeGuest={removeGuest} editGuest={editGuest}/>
    </div>
  );
}

export default App;
