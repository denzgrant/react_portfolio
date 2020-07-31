import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import './Portfolio.css'
import projects from '../../projects.json'



const Portfolio = () => {
  return (
    <>
      <MDBContainer >
        <MDBRow >
          {projects.map((proj, index) => (
            <MDBCol key={index} sm="6" md="6">
              <MDBCard className="cards">
                <MDBCardImage className="img-fluid" src={process.env.PUBLIC_URL + proj.image} />
                <MDBCardBody>
                  <MDBCardTitle>{proj.name}</MDBCardTitle>
                  <MDBCardText>
                    {proj.description}
                  </MDBCardText>
                  <MDBBtn href={proj.gihub} target="_blank">Github</MDBBtn>
                  <MDBBtn href={proj.url} target="_blank">Demo</MDBBtn>
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