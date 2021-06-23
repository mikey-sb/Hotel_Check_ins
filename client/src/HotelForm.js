import {useState} from 'react'

import {postGuest} from "./HotelService"


const HotelForm = ({addGuest}) => {

    const [formData, setFormData] = useState({checkedIn: false});



    const handleSubmit = (e) => {
        e.preventDefault();
        postGuest(formData).then((data) => {
            addGuest(data);
        })
    }

    const onChange = (e) => {
        const newFormData = {...formData}
        // newFormData[e.target.id] = e.target.value;
        // formData[e.target.id] = e.target.value;
        console.log(e.target.checked);
        console.log(newFormData)


        e.target.hasOwnProperty('checked') ? newFormData.checkedIn = e.target.checked : newFormData[e.target.id] = e.target.value;

        setFormData(newFormData)
    }


    return (
        <form className="form-container" onSubmit={handleSubmit} method="post">

            <label htmlFor="name">Name:</label>
            <input onChange={onChange} type="text" id="name" required/>

            <label htmlFor="email">Email:</label>
            <input onChange={onChange} type="text" id="email" required/>

            <label htmlFor="checkedIn">Checked-In:</label>
            <input onChange={onChange} type="checkbox" id="checkedIn" value="true" />

            <input type="submit" value="Save" id="save"/>
            
        </form>
      



       
    )
}

export default HotelForm
