import React from 'react'
import { useState, useId } from 'react';
import { db } from '../data/firebase';
import { collection, addDoc } from "firebase/firestore";
import useEth from "../contexts/EthContext/useEth";

const Freelancerform = () => {
    const { state: { contract, accounts } } = useEth();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [link, setLink] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState('')
    const [status, setStatus] = useState(0);
    const [num, setNum] = useState(0); // Use state to store the value of num
    const id = useId()
    const options = ['Video Editor', 'Photo Editor', 'Logo Designer', 'Animators'];


    const submitHandler = async (e) => {
        console.log(contract)
        e.preventDefault();
        await contract.methods.addProject(name,price).send({ from: accounts[0] }).then(() => {
            setStatus(0)
            console.log("Added to blockchain")
        }).then(() => {

            addDoc(collection(db, "portfolio"), {
                name, category, link, desc, price, status, id, num
            }).then(() => {
                console.log('Added');
                alert('Added');
                e.target.reset();
                setNum(num + 1); // Update the value of num by adding 1 to its previous value

            }).catch(err => {
                console.log(err);
            })

        });

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
