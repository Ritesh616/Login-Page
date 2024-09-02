import React from 'react'
import './Customer.css';

const Customer = () => {
  return (
    <div className='App'>
        <table>
          <thead className='head'>
            <tr>
                <th>id</th>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Address</th>
            </tr>
          </thead>  

          <tbody>
            <tr>
            <th>1</th>
            <th>Aniket Bansode</th>
            <th>aniketbansode15@gmail.com</th>
            <th>8237440506</th>
            <th>pune</th>
            </tr>

            <tr>
            <th>2</th>
            <th>Ritesh Shende</th>
            <th>riteshshende616@gmail.com</th>
            <th>9022524700</th>
            <th>pune</th>
            </tr>
            </tbody>    
           
          </table>
      
    </div>
  )
}

export default Customer
