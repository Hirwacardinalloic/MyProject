// src/components/About.jsx
import './About.css'

const About = () => {
  return (
    <section id="About" className="about-container">
      <div className="about-me-holder">
        <section>
          <h2 className="first-text">
            About <br />Myself
          </h2>
          <p className="second-text">
            Hello I’m a software developer! I can help you build a product,
            feature or website. Look through some of my work and experience! If
            you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </p>
          <h4 className="icon">LET’S CONNECT</h4>
          <ul className="icon-img">
            <li><a href="#"><img src="images/twitter.png" alt="twitter" /></a></li>
            <li><a href="#"><img src="images/linkedin.png" alt="linkedin" /></a></li>
            <li><a href="#"><img src="images/medium.png" alt="medium" /></a></li>
            <li><a href="#"><img src="images/github.png" alt="github" /></a></li>
            <li><a href="#"><img src="images/vec.png" alt="vector" /></a></li>
          </ul>
          <button className="click-btn">Get my resume</button>
        </section>

        <section>
          <ul className="lang">
            <li className="lang-exp">
              <div className="no-1">
                <p>Languages</p>
                <img src="images/arrows-down.png" alt="arrow" />
              </div>
              <ul className="languages">
                <li><img src="images/js.png" alt="js" /><a href="#">JavaScript</a></li>
                <li><img src="images/html..png" alt="html" /><a href="#">HTML</a></li>
                <li><img src="images/css..png" alt="css" /><a href="#">CSS</a></li>
              </ul>
            </li>

            <li className="lang-exp">
              <div className="no-1">
                <p>Frameworks</p>
                <img src="images/arrow.png" alt="arrow" />
              </div>
              <hr />
            </li>

            <li className="lang-exp">
              <div className="no-1">
                <p>Skills</p>
                <img src="images/arrow.png" alt="arrow" />
              </div>
              <hr />
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default About
