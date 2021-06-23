import React from 'react'
import HotelCard from './HotelCard'

const HotelGrid = ({guests, removeGuest, editGuest}) => {
    if (!guests) return <h2>Loading....</h2>
    const guestsList = guests.map((guest) => {
        return (
            <>
            <HotelCard guest={guest} removeGuest={removeGuest} key={guest._id} editGuest={editGuest} />
            <hr/>
            </>
        )
    });
    return (
        <>
        {guestsList}
        </>
    )
}

export default HotelGrid
