import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import portfolios from "./portfolio.json"


const Portfolio = (props) => {
  return (
    <>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
        <MDBCardBody>
<MDBCardTitle>{props.name}</MDBCardTitle>
          <MDBCardText>
            {props.description}
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    {portfolios.map(portfolio => (
      <Portfolio
      name={portfolio.name}
      image={portfolio.image}
      description={portfolio.description}
      github={portfolio.github}
      url={portfolio.url}
      />
    ))}
    </>
  )
}

export default Portfolio;