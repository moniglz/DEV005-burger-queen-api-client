//import React, { useState } from 'react';

export const Login=()=>{

    return (

        <div>
        <form>
          <div>
            <h3>Contact Form</h3>
          </div>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="number"
              name="phonenumber"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <button>Submit Contact</button>
          </div>
        </form>
      </div>

    );
}
