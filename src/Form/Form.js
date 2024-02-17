import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <div className="container-fluid">
        <div className="headingss">
            LET'S CONNECTED
        </div>
        <div className="headingm">
        Contact our support team or make an appointment with our experts.
        </div>
        
        <form className="d-flex flex-wrap">

            <div className="hm">
                First Name
                <input type="text"/>
            </div>

            <div className="hm">
                Email
                <input type="text" />
            </div>

            <div className="hm">
                Contact No.
                <input type="text" />
            </div>

            
            <div className="hms">
                Contact No.
                <input type="text" />
            </div>
            {/* <input type="email" placeholder="Email"/> */}
            
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        
    </div>
  )
}
