import React, {useState} from 'react'
import {putGuest} from './HotelService';

const HotelCheckbox = ({guest, editGuest}) => {

    const [formData, setFormData] = useState({
        name: guest.name,
        email: guest.email,
        checkedIn: guest.checkedIn
    })

    const onChange = (e) => {
        console.log('change called')

        const copyState = {...formData};

        copyState.checkedIn = !copyState.checkedIn
        setFormData(copyState);
    }

    const onSubmit = (e) => {

        e.preventDefault()
        putGuest(guest._id, formData)
        .then(() => editGuest({...formData, _id: guest._id}))
        console.log('submit called')
        

    }

    return (
        <div>
        <form onSubmit={onSubmit} id='update-form' >
            <input type="checkbox" onChange={onChange} checked={formData.checkedIn} id="checkedIn" />
            <input type="submit" value="Save" id="save"/>

            </form>
        </div>
    )
}

export default HotelCheckbox
