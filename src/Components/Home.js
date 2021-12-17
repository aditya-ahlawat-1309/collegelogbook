import React from 'react'
import NavbarJS from "./Navbar";
import "./Home.css"
import naac from "../naac.jpg";
import mine from "../mine.jpg";
function Home() {
    return (
      <div >
        <NavbarJS />
        <div>
          <img
            src={naac}
            height="10%"
            width="100%"
          />
        </div>
        <div className="container">
          <img
            src={mine}
            width="100%"
            height="300%"
            style={{ opacity: "0.45" }}
          />

          <div className="centered">
            <b>
              Chitkara University in Punjab, has been founded by <br />
              Dr. Ashok Chitkara and Dr. Madhu Chitkara,
              <br /> who have been passionate teachers
              <br />
              for more than 40 years now.
            </b>{" "}
            <br />
            Since inception, Chitkara University has been different.
            <br /> Our students have been different. So are our faculty, our
            academic strengths and our outlook towards teaching and learning.
            Within a decade, most of our academic programs are ranked in top 50
            programs in the country.
            <br />
            Students from around the country are getting attracted to Chitkara
            University because of our commitment to teaching excellence, focus
            on research, tailored courses that makes our education relevant to
            changing career dynamics and formidable industry partnerships.
            <br /> Come and 'Explore Your Potential' at Chitkara University
            2019-2023 batch ...
          </div>
        </div>
      </div>
    );
}

export default Home
