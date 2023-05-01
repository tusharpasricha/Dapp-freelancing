import React from 'react'
import useEth from "../contexts/EthContext/useEth";
import { useLocation } from 'react-router-dom';


const Check = () => {

    const { state: { contract, accounts } } = useEth();
    const location = useLocation()
    const para = location.state;
    const submitHandler = async (e) => {
        await contract.methods.closeProject(para.num).send({ from: accounts[0] });


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
     <div className='remainder'>"Accept Work"<span><button onClick={submitHandler} className='b'>Accept</button></span></div>
     
    

  </div>
  )
}

export default Check