import React from "react";

import "./Aboutus.css";
import icon from "../../assets/otiva.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";

const Aboutus = () => {
  return (
    <div>
      <div className="home-container-1">
        <LeftsideBar />
      </div>
      <div
        className="home-container-2"
        style={{ marginTop: "5%" }}
        id="about-container"
      >
        <div class="row" id="row2">
          <div class="col-lg-12">
            <Card style={{}}>
              <Card.Body>
                <Card.Text style={{ fontSize: "18px", textAlign: "left" }}>
                  <div className="aboutUspara">
                    <p>
                      <span id="aboutHead">Welcome to Otiva Educart</span> , your go-to destination for a
                      transformative educational experience. We take pride in
                      being a professional educational platform committed to
                      delivering content that not only captivates your interest
                      but also enriches your learning journey. At Otiva Educart,
                      we believe in the power of education to shape minds,
                      foster curiosity, and empower individuals to reach their
                      full potential. Our dedication revolves around providing
                      you with the best in education, with a keen focus on
                      reliability and an interactive space for asking and
                      answering programming questions.{" "}
                    </p>
                    <br />
                    <b>Our Mission and Values:</b>
                    <br />
                    <p>
                      {" "}
                      At the heart of Otiva Educart is a mission to make
                      education accessible, engaging, and impactful. We strive
                      to go beyond the conventional boundaries of learning,
                      breaking down complex topics into digestible, intriguing
                      content. Our commitment to dependability means that you
                      can trust us to be your reliable companion on your
                      educational quest. We understand that the journey of
                      learning is not a solitary one, and thus, we have created
                      a space that encourages interaction. Whether you're a
                      seasoned programmer or just starting, our platform is
                      designed to cater to your needs, providing a supportive
                      environment for both asking and answering programming
                      questions.</p> <br /><b>Why Choose Otiva Educart:</b><p> What sets Otiva
                      Educart apart is our unwavering passion for education.
                      We're not just a website; we are a community that shares
                      the enthusiasm for continuous learning. Our team is
                      dedicated to curating content that sparks your curiosity
                      and fosters a love for knowledge. Whether you are a
                      student seeking guidance, a professional looking to
                      upskill, or an enthusiast exploring the world of
                      programming, Otiva Educart is your one-stop destination.
                      Our commitment extends beyond the virtual realm. We
                      understand the challenges individuals face in their
                      educational journeys, and we are here to provide the
                      necessary support and resources. The user-friendly
                      interface of our website ensures a seamless experience,
                      allowing you to navigate through a plethora of educational
                      content effortlessly.{" "}
                    </p>
                    <br />
                    <b>Your Support Matters:</b>
                    <p>
                      As we embark on this journey of fostering education, we
                      invite you to be an integral part of the Otiva Educart
                      community. Your support and love fuel our passion,
                      inspiring us to continually enhance our platform and
                      deliver content that resonates with your educational
                      aspirations. Whether you actively participate in
                      discussions, share our content, or simply explore the
                      wealth of knowledge we offer, your engagement contributes
                      to the vibrancy of Otiva Educart. In conclusion, we extend
                      our heartfelt gratitude for visiting our site. Otiva
                      Educart is not just a platform; it's a commitment to
                      fostering a love for learning and providing a space where
                      education transcends boundaries. Stay tuned for more
                      enriching posts, interactive discussions, and a journey of
                      education that goes beyond the ordinary. Thank you for
                      being a part of the Otiva Educart family, where education
                      meets inspiration.
                    </p>
                  </div>
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
