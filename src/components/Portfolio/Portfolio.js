import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import portfolios from "./portfolio.json"


const Portfolio = (props) => {
  return (
    <>
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src={props.image} waves />
          <MDBCardBody>
            <MDBCardTitle>{props.name}</MDBCardTitle>
            <MDBCardText>
              {props.description}
            </MDBCardText>
            <MDBBtn href="#">{props.url}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {portfolios.map(port => (
        <port
          name={port.name}
          image={port.image}
          description={port.description}
          github={port.github}
          url={port.url}
        />
      ))}
    </>
  )
}

export default Portfolio;