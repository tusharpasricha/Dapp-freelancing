import React from 'react'
import './freelancers.css'
import { useState ,useEffect } from 'react';
import { collection, doc, getDoc, getDocs, query,getCountFromServer } from "firebase/firestore";
import { db } from '../data/firebase';
import { useNavigate } from 'react-router-dom';
import useEth from "../contexts/EthContext/useEth";
import { async } from '@firebase/util';



const Freelancer = () => {
  const { state: { contract, accounts } } = useEth();
   console.log(contract)
  const navigation =useNavigate();
 
const something = (each) => {
    navigation('/contract',{state:{price:each.price , name:each.name,num:each.num}})
  };
const something2 = (each) => {
    navigation('/check',{state:{price:each.price , name:each.name,num:each.num}})
};

  const[freelancers,setFreelancers]=useState([])
  const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   console.log("inside useeffect"+contract)
  //   const loadProjects = async () => {
  //     const numProjects = await contract.methods.numProjects().call();
  //     const projects = [];
  //     for (let i = 0; i < numProjects; i++) {
  //       const project = await contract.methods.projects(i).call();
  //       projects.push(project);
  //     }
  //     setProjects(projects);
  //   };
  //   loadProjects();
  //   console.log(projects)
  // }, []);
   
  const refresh =async()=>{
    const numProjects = await contract.methods.numProjects().call();
      const projects = [];
      for (let i = 0; i < numProjects; i++) {
        const project = await contract.methods.projects(i).call();
        projects.push(project);
      }
      setProjects(projects);
      console.log(projects)
  }

  const renderArray = projects.map(item => (
    <div key={item.id}>
      <p>ID: {item.id}</p>
      <p>Name: {item.name}</p>
      <p>Name: {item.price}</p>
    </div>
  ));

    // const q =query(collection(db,"portfolio"))
    // getDocs(q).then(docs=>{
    //   let freelancersData=[];
    //   docs.forEach(doc=>{
    //     freelancersData=[...freelancersData,{
    //       id:doc.data().id,
    //       name:doc.data().name,
    //       category:doc.data().category,
    //       link:doc.data().link,
    //       desc:doc.data().desc,
    //       price:doc.data().price,
    //       status:doc.data().status,
    //       num:doc.data().status

    //     }]
    //   })
    //   setFreelancers(freelancersData)
    //   console.log(freelancers)
    // })




  
  return (
    <>
    <div className='allfreelancers'>
      <h1>FREELANCERS</h1>
      <button onClick={refresh} >Refresh</button>
      <div>{renderArray}</div>
      
      
    {freelancers.map(each=>(

    <div className='cards'>

                <div className='card'>
                    <div className='freeimg'>
                    </div>

                    <div className='card_info'>
                        <div className="card_status">
                            <p>Status: {each.status?"Taken":"Free"} </p>
                        </div>
                        <div className='nt'>
                        <h1 className="card_title">{each.name}</h1>
                        <h3 >{each.category} </h3>
                        </div>

                        <div className="card_body">
                        {each.desc}
                            <p>Salary:{each.price} Wei </p>
                        </div>
                        <div className="card_body">
                            <p>Portfolio Link: {each.link}</p>
                        </div>
                        {each.status==0?
                       
                        <div >
                              <button className='b' onClick={()=>{something(each)}} > CONTRACT</button>
                        </div>:
                        <div >
                        <button className='b' onClick={()=>{something(each)}} > CHECK</button>
                        </div>
                        
                        }

                    </div>

                </div>
            
        </div>
       ))}
       </div>
   
    </>
    
  )
}

export default Freelancer