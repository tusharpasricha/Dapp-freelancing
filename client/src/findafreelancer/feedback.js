import React, { useContext } from 'react';

import { useState } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc } from "firebase/firestore";
import './feedback.css'

const Feedback = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

  

    

    const submitHandler = (e) => {
        e.preventDefault();
        addDoc(collection(db, "purpose"), {
            name,email,message
        }).then(() => {
            console.log('Added');
            alert('Added');
            e.target.reset();
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <>
        <form className='form' onSubmit={submitHandler}>
        <h1>Feedback</h1>
      
            <input placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
            
            <input placeholder='Email' type="text" value={email} onChange={e => setEmail(e.target.value)} />
                
            <input placeholder='Message' type="text" value={message} onChange={e => setMessage(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        
        </>
    )
}

export default Feedback;