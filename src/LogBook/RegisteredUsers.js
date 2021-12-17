import React from 'react'
import { useState, useEffect } from "react";

import axios from "axios";
const RegisteredUsers = () => {
     const [expenseList, setExpenseList] = useState([]);
const [searchTerm, setSearchTerm] = useState("");
     useEffect(() => {
       axios.get("http://localhost:5000/read/").then((response) => {
         console.log(response);
         setExpenseList(response.data);
       });
     }, []);

  
    
    return (
      <div style={{ backgroundColor: "orange" }}>
        <br />
        <h1>Registered Candidates List</h1>
        <br />
        <br />


<div>
  <input type="text" placeholder="Search with Name ...." 
  onChange={(event) =>{
  setSearchTerm(event.target.value);}}
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
</div>


        {expenseList.filter((val,key) => {
            if (searchTerm == "") {
              return val;
            } else if (
              val.Name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
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
                        <br />
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
        <a href="/middle-page" class="login-home">BACK</a>
      </div>
    );
}

export default RegisteredUsers
