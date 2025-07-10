// src/components/HeroSection.jsx
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="h-container">
      <div className="header-holder">
        <h1 className="first-text">I’m Loic <br />Glade to see you!</h1>
        <p className="second-text">
          I’m a software developer! I can help you build a product, feature or website.
          Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
        </p>
        <h4 className="icon">LET’S CONNECT</h4>
        <ul className="icon-img">
          <li><a href="#"><img className="t-social-media" src="images/twitter.png" alt="twitter" /></a></li>
          <li><a href="#"><img className="l-social-media" src="images/linkedin.png" alt="linkedin" /></a></li>
          <li><a href="#"><img className="m-social-media" src="images/medium.png" alt="medium" /></a></li>
          <li><a href="#"><img className="g-social-media" src="images/github.png" alt="github" /></a></li>
          <li><a href="#"><img className="v-social-media" src="images/vec.png" alt="vector" /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default HeroSection
