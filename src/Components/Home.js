import React from 'react'
import NavbarJS from "./Navbar";
import "./Home.css"
function Home() {
    return (
      <div >
        <NavbarJS />
        <div>
          <img
            src="https://www.chitkara.edu.in/wp-content/themes/chitkara/images/home-banner/NAAC-a-plus-banner-updated.jpg"
            height="10%"
            width="100%"
          />
        </div>
        <div className="container">
          <img
            src="https://lh3.googleusercontent.com/6qte9lvFUdLJ8en-FuZLVHsNhmEOo9c7v2RAgJ4ltKWSzXegmBHR1BTQlnUr3v2Y3045GSmiTnixz-c7cBxkrQgvK3XLhGEmfYCsPgJqqF1pPELvUmoV4IidxMdE0MOqMll3buknZ6UjblL-4rsyTL03SZd8WCRgndGYR2lQuPOb0hIrJjMR2mxUSaGKV1gWcoSqiZUaPD0KhmCIhHsFx7O8GVcPZpe0Dig84GzpTTtFTy3ChAXcl7WSQUxReUyE0anXgFMHbAsbf2DuDB5aPOPCNLY-vmVUzhhgnCOZ93bgWK_cdXPwuC9rrL_YUQ3H5qoqO_-F9ial1RsM90H8sQYvT1j9yZvQfKdq-F2ru0suoTJZzWvBJWX0NEAwOrWrLRYEq77fY2fMzuwG0jkGAO4OlQK2gVp7axOHHhBdFzWuNhdlj-yMcrFIIMnN5nSbq_hmFytr_XrjsyCzOg_wQAbcjD-x900VZpvdpoGVgYk8Ax4inat2x86ug3BWgQe_gSBtF5amBj0h9K_yl_UIav0nXWRGUewZ_nLGroXa3_3unGZZyCygcydh0jHX6LSXe5PQRLrx2IZKsvh_n_EcRFxx7KJtqG0hQDRWIGsK6nF5d3olb7T3lB1smfPUdxjGNTnJphpujDdYrTUk9Og4b05GXiSvmUuJiByiR8M2rgr4VGHPEoOxZj6CUFJDlQOt-xDTNilj3hYC5SAN376iHMx4=w662-h883-no?authuser=0"
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
