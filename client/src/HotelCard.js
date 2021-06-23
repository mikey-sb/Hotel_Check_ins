import React from 'react'
import HotelCheckbox from './HotelCheckbox'

const HotelCard = ({guest, removeGuest, editGuest}) => {
    return (
        <>

        <h1>Name: {guest.name}</h1>
        <h1>Email: {guest.email}</h1>
        {guest.checkedIn ? <p>checked in</p> : <p>not checked in</p>}
        <button onClick={()=>removeGuest(guest._id)}> 🗑 </button>
        <HotelCheckbox guest={guest} editGuest={editGuest} />
        
            
        </>
    )
}

export default HotelCard
