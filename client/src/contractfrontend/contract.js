import React, { useState } from 'react'
import { collection, updateDoc, doc, getDoc,where, getDocs, query,getCountFromServer } from "firebase/firestore";
import { db } from '../data/firebase';

import './contract.css'
import useEth from "../contexts/EthContext/useEth";
import { useLocation } from 'react-router-dom';
   
const Contract = (props) => {
  
  const { state: { contract, accounts } } = useEth();
  const location = useLocation()
  const para = location.state;
  const submitHandler = async (e) => {
    

    
    await contract.methods.pickProject(para.num).send({ from: accounts[0] , value:100 });
    const q = query(collection(db, "portfolio"), where("name", "==", "e"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (doc1) => {
    console.log(doc1.id, " => ", doc1.data());
    const portDoc = doc(db, 'portfolio', doc1.id);
    
    
    await updateDoc(portDoc, { status: 1 });
    console.log('updated')
});


}
  return (
    <div className='contract'>
      <div className='contract_details'>
        <table>
          <tr>
          <th>Freelancer</th>
          <th>Cost</th>
          </tr>

          <tr>
            <td>{para.name}</td>
            <td>{para.price}Wei</td>
          </tr>
          
          
        </table>
      
      </div>
       <div className='remainder'>"REMAINDER: ONCE DEPLOYED, THIS CONTRACT IS SET IN STONE - <span>NO TURNING BACK!</span><span><button onClick={submitHandler} className='b'>Go Ahead</button></span></div>
       
      

    </div>
  )
}

export default Contract