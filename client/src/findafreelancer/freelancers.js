import React from 'react'
import './freelancers.css'
import { useState ,useEffect } from 'react';
import useEth from "../contexts/EthContext/useEth";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from '../data/firebase';


const Freelancer = () => {
  const { state: { contract, accounts } } = useEth();

  const ffdeposite = async e => {
    // if (e.target.tagName === "INPUT") {
    //   return;
    // }
    // if (inputValue === "") {
    //   alert("Please enter a value to write.");
    //   return;
    // }
   var inputValue =0.00001;
    const newValue = parseInt(inputValue);
    await contract.methods.Deposite().send({ from: accounts[0],value:newValue });
  };

 
  const something = async () => {
    console.log("clicked")  
  };

  const[freelancers,setFreelancers]=useState([])

  useEffect(()=>{
    const q =query(collection(db,"portfolio"))

    getDocs(q).then(docs=>{
      let freelancersData=[];
      docs.forEach(doc=>{
        freelancersData=[...freelancersData,{
          name:doc.data().name,
          category:doc.data().category,
          link:doc.data().link,
          desc:doc.data().desc,
          price:doc.data().price

        }]
      })
      setFreelancers(freelancersData)
      console.log(freelancers)
    })
  })


  
  return (
    <>
    <div className='allfreelancer'>
      <h1>freelancers</h1>
      {freelancers.map(each=>(
        <div>
        <h1>{each.name}</h1>
        <h2>{each.category}</h2>
        <h2>{each.link}</h2>
        <h3>{each.desc}</h3>
        <p>{each.price}</p>
        <button onClick={ffdeposite}>CONTRACT</button>
      </div>

      ))}
    </div>
    </>
    
  )
}

export default Freelancer