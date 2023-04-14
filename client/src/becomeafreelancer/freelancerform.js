import React from 'react'
import { useState } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc } from "firebase/firestore";

const Freelancerform = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('');
    const options = ['Video Editor', 'Photo Editor', 'Logo Designer', 'Animators'];

    const submitHandler = (e) => {
        e.preventDefault();
        addDoc(collection(db, "portfolio"), {
            category,link,desc,price
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
    <div>Freelancerform</div>
    <form className='form' onSubmit={submitHandler}>
             <input placeholder='Name' type="text" value={name} onChange={e => setName(e.target.value)} />
            
            <select onChange={e => setCategory(e.target.value)}>
  
                    <option>Please choose one category</option>
                    {options.map((option, index) => {
                        return <option key={index} >
                            {option}
                        </option>
                    })}
                </select>
            
            <input placeholder='Portfolio Link' type="text" value={link} onChange={e => setLink(e.target.value)} />
                
            <input placeholder='Description' type="text" value={desc} onChange={e => setDesc(e.target.value)} />
            <input placeholder='Price' type="number" value={price} onChange={e => setPrice(e.target.value)} />

            <button type='submit'>Add</button>

    </form>
    </>
  )
}

export default Freelancerform