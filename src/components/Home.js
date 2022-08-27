import React from "react";
import AnimatedText from 'react-animated-text-content';
import Typical from 'react-typical'
import Modal from "./Modal";

const Home = () => {

  return (
    <div>
      <div className="backmag">
        <div className="headingmain container">
          <h1>Prepare child to <Typical className="typical"
            steps={['Educate', 1000, 'Improve Skills', 1000, 'Gaining Knowledge', 1000]}
            loop={Infinity}
            wrapper="b"
          />
          </h1>

          <AnimatedText
            type="chars" // animate words or chars
            animation={{
              x: '200px',
              y: '-20px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="bounce"
            interval={0.06}
            duration={0.8}
            tag="p"
            className="animated-paragraph"
            includeWhiteSpaces
            threshold={0.1}
            rootMargin="20%"
          >
            End the poverty and begin to rich
          </AnimatedText>

        </div>
      </div>

      <div className="container">
        <h1 className="center">Education to become Rich</h1>
        <p>This web is helping you to become a job holders to earn money for your family support and support you to become a
          good and prosperior person in this Land.We are here to help those boys and girls those are not able to study because they are busy to earn money
          for family support but we are to support family and thier education to become a good and happy
        </p>
      </div>

      <div className="cardsetting">
        <div className="card" style={{ width: "300px", marginBottom: "5px" }}>
          <div className="card-body">
            {/* <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <h1 className="card-text"> 1 to 8 class</h1>
            {/* <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>
        <div className="card" style={{ width: "300px", marginBottom: "5px" }}>
          <div className="card-body">
            {/* <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <h1 className="card-text"> 9th to 12 class</h1>
            {/* <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>
        <div className="card" style={{ width: "300px", marginBottom: "5px" }}>
          <div className="card-body">
            {/* <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <h1 className="card-text"> 13 to phd class</h1>
            {/* <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a> */}
          </div>
        </div>

      </div>





    </div>
  );
};

export default Home;


