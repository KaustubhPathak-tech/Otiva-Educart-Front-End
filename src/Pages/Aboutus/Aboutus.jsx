import React from "react";

import "./Aboutus.css";
import icon from "../../assets/final logo.webp";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";

const Aboutus = () => {
  return (
    <div>
      <div className="home-container-1">
        <LeftsideBar />
      </div>
      <div className="home-container-2" style={{ marginTop: "5%" }} id="about-container">
        <div class="row" style={{}} id="row1">
          <div class="col-lg-12" style={{}}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={icon} width="auto" />
            </Card>
          </div>
          {/* <div class="col-lg-12" style={{}}>
            <Card>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "30px",
                    margin: "2% 0% 1% 0%",
                    padding: "1% 5% 1% 5%",
                  }}
                >
                  Stack Over Flow Clone 2023
                </Card.Title>
                <Card.Text
                  style={{ margin: "4% 8% 5% 8%", padding: "3% 8% 3% 8%" }}
                >
                  No more doubts ! Ask your Doubts if Any.
                </Card.Text>
              </Card.Body>
            </Card>
          </div> */}
        </div>

        <div class="row" id="row2">
          <div class="col-lg-12">
            <Card style={{}}>
              <Card.Body>
                <Card.Text style={{ fontSize: "20px", textAlign: "justify" }}>
                  <b>
                    {" "}
                    <span style={{color: "blue" }} id="aboutheading">
                      Welcome To Stack Over Flow Clone 2023
                    </span>{" "}
                  </b>{" "}
                  <br /><br />
                  Stack Over Flow Clone 2023 is a Professional Educational
                  Platform. Here we will provide you only interesting content,
                  which you will like very much. We're dedicated to providing
                  you the best of Educational, with a focus on dependability and
                  Ask and Answer Programming Questions. We're working to turn
                  our passion for Educational into a booming online website. We
                  hope you enjoy our Educational as much as we enjoy offering
                  them to you. I will keep posting more important posts on my
                  Website for all of you. Please give your support and love.
                  Thanks For Visiting Our Site. <br />{" "} <br />
                  <span
                    style={{
                      textAlign: "center",
                      color: "red",
                    }}
                   id="aboutfooter">
                    {" "}
                    Have a nice day!{" "}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div class="row"></div>
      </div>
    </div>
  );
};

export default Aboutus;
