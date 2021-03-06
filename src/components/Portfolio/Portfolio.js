import React , { useEffect } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './Portfolio.css'
import projects from '../../projects.json'
import Aos from "aos"; 
import "aos/dist/aos.css"



const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 }); 
  }, [])
  return (
    <>
      <MDBContainer >
        <MDBRow >
          {projects.map((proj, index) => (
            <MDBCol key={index} sm="6" md="6">
              <MDBCard data-aos="zoom-in" className="cards">
                <MDBCardImage className="img-fluid" src={process.env.PUBLIC_URL + proj.image} />
                <MDBCardBody>
                  <MDBCardTitle>{proj.name}</MDBCardTitle>
                  <MDBCardText className="text">
                    {proj.description}
                  </MDBCardText>
                  <MDBBtn color="elegant" href={proj.gihub} target="_blank"className="button">Github</MDBBtn>
                  <MDBBtn color="elegant" href={proj.url} target="_blank"className="button">Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  )
}

export default Portfolio;