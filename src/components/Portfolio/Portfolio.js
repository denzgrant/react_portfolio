import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import dineImg from '../../images/DineInDineOut.jpg';
// import weatherImg from '../../images/WeatherDashboard.png';
import workDayImg from '../../images/WorkDayScheduler.png';
import burgerImg from '../../images/eatdaburger.jpg';
import dasImg from '../../images/dasFlix.jpg';
import workOutImg from '../../images/FitnessTracker.gif';
import './Portfolio.css'




const projects = [
  {
    "id": 1,
    "name": "Dine-In or Dine-Out",
    "image": dineImg,
    "description": "Project where the user can input a type of meal and their zip code and then receive results of recipes or restaurants that serve the meal near them.",
    "gihub": "https://github.com/denzgrant/SnapesOnAPlane",
    "url": "https://denzgrant.github.io/SnapesOnAPlane/"
  },
  {
    "id": 2,
    "name": "Weather Dashboard",
    // "image": weatherImg,
    "description": "Weather Dashboard uses API calls to get the current and 5-Day forecast for any location by typing in the citie's name.",
    "gihub": "https://github.com/denzgrant/Weather-Dashboard",
    "url": "https://denzgrant.github.io/Weather-Dashboard/"
  },
  {
    "id": 3,
    "name": "Work Day Scheduler",
    "image": workDayImg,
    "description": "Allows the user to saves tasks and highlight future work hours. Tasks are saved in local storage and moment.js is used to highlight the hour of the day block.",
    "gihub": "https://github.com/denzgrant/Work-Day-Scheduler",
    "url": "https://denzgrant.github.io/Work-Day-Scheduler/"
  },
  {
    "id": 4,
    "name": "Eat-Da-Burger",
    "image": burgerImg,
    "description": "Eat-Da-Burger! is a restaurant app that lets users input the name of burgers they'd like to eat mad with Express and MySQL. This project follows the MVC design.",
    "gihub": "https://github.com/denzgrant/Eat-Da-Burger-",
    "url": "https://drg-eat-da-burger.herokuapp.com/"
  },
  {
    "id": 5,
    "name": "DasFlix",
    "image": dasImg,
    "description": "A full-stack application where the user can create watchlists consisting of cards representing movies/tv shows, these cards are rendered to the page from a third party API. Local username and password authentication is used to access the website. The user’s watchlist, password, and username is stored in a database. Feel free to use the test login, username: '1@1'. password: '1'",
    "gihub": "https://github.com/denzgrant/DasFlix-",
    "url": "http://www.dasflix.com/"
  },
  {
    "id": 6,
    "name": "Workout Tracker",
    "image": workOutImg,
    "description": "Workout Tracker application that utilizes Mongoose to allow the user to add new exercises to a new workout plan or add exercises to a previous workout plan. A stats page is rendered based on the multiples exercises created.",
    "gihub": "https://github.com/denzgrant/Workout-Tracker",
    "url": "http://lower-goose-19055.herokuapp.com/"
  }
]



const Portfolio = () => {
  return (
    <>
      <MDBContainer >
        <MDBRow>
          {projects.map((proj, index) => (
            <MDBCol key={index} sm="6" md="6">
              <MDBCard style={{ width: "22rem", marginTop: "4em" }}>
                <MDBCardImage className="img-fluid" src={proj.image} waves />
                <MDBCardBody>
                  <MDBCardTitle>{proj.name}</MDBCardTitle>
                  <MDBCardText>
                    {proj.description}
                  </MDBCardText>
                  <MDBBtn href={proj.gihub} target="_blank">Github</MDBBtn>
                  <MDBBtn href={proj.url}  target="_blank">Demo</MDBBtn>
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