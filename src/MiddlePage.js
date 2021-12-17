import React from 'react'
import "./MiddlePage.css"
const MiddlePage = () => {
    return (
      <div className="middle-page-div">
        <br />
        <br />
        <br />
        <br />
        <div style={{backgroundColor:"orange",position:"absolute",height:"100%",width:"100%"}}>
          <a
            style={{
              backgroundColor: "black",
              padding: "15px",
              textDecoration: "none",
              color: "white",
            }}
            href="/chitkara-users"
          >
            CU 2019 CSE Alumni
          </a>
          <br />
          <br />
          <br />
          <a
            style={{
              backgroundColor: "white",
              padding: "15px",
              textDecoration: "none",
              color: "black",
            }}
            href="/non-alumni"
          >
            Non-Alumni
          </a>
        </div>
      </div>
    );
}

export default MiddlePage
