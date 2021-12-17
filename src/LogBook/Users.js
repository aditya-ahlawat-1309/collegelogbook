import React from 'react'
import logo from "../logo.svg";
import Data from "./data.json"
import "./Users.css";
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import NavbarJS from '../Components/Navbar';

const Users = ({users}) => {
  const [searchTerm , setSearchTerm] = useState('');
    return (
      <div>
        <div class="users-chitkara">
          {/* <NavbarJS/> */}

          <div className="d-flex">
            <img src={logo} className="App-logo mx-3 my-3" alt="logo" />
            <h1
              class="users-heading mx-3 my-3"
              style={{ textAlign: "center", fontWeight: "300" }}
            >
              Chitkara 2019 CSE <br />
              LOGBOOK
            </h1>
          </div>
          <a href="/logout" className="link-users">
            Logout
          </a>
          <a href="/signup" className="link-users">
            Give Referral
          </a>
          <a href="/middle-page" className="link-users">
           Back
          </a>
          <br />
          <br />
          <input
            type="text"
            placeholder="Search with Name ...."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            style={{
              width: "80%",
              borderRadius: "25px",
              height: "40px",
              fontSize: "20px",
              backgroundColor: "white",
              border: "none",
            }}
            className="mx-5"
          />
          <br />
          <br />

          {Data.filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.Name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          }).map((val) => {
            return (
              <div>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "center",
                    fontSize: "1.275rem",
                    backgroundColor: "white",
                    padding: "5px",
                    color: "black",
                    borderRadius: "25px",
                  }}
                  className="mx-5"
                >
                  <div style={{ width: "95%" }}>
                    <li class="li">
                      <div class="identity-users">
                        {val.Name}
                        <br />
                        Section : &nbsp;{val.Section}
                        <br />
                        Roll No. : {val.Id}
                        <br />
                        Ph .No. : &nbsp;{val.Mobile}
                        <br/>
                        Email : &nbsp;{val.Email}
                      </div>
                    </li>
                    <hr />
                    <small className="text-black bg-blue bold">
                      CU 20{val.Id.toString().substring(0, 2)} Batch
                    </small>
                  </div>
                </div>
                <br />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Users




//////////////// Simpler Mathod /////////////////////



// var data = require('../../file.json'); // forward slashes will depend on the file location
// var data = [
//     {
//       "id": 1,
//       "gender": "Female",
//       "first_name": "Helen",
//       "last_name": "Nguyen",
//       "email": "hnguyen0@bloomberg.com",
//       "ip_address": "227.211.25.18"
//     }, {
//       "id": 2,
//       "gender": "Male",
//       "first_name": "Carlos",
//       "last_name": "Fowler",
//       "email": "cfowler1@gnu.org",
//       "ip_address": "214.248.201.11"
//     }
// ];

// for (var i = 0; i < data.length; i++)
// {
//     var obj = data[i];
//     console.log(`Name: ${obj.last_name}, ${obj.first_name}`);
// }


    {
      /* <div>
           <ul class="ul">     
    <li class="li">
    <div class="identity-users">
    {val.Name}
    <br/>
    Section : &nbsp;{val.Section}<br/>
    Roll No. : {val.Id}<br/>
    Ph .No. : &nbsp;{val.Mobile}</div>
    </li>  
    <hr></hr>
               </ul>   

                        </div>  */
    }