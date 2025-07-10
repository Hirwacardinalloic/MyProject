// src/components/Contact.jsx
import './Contact.css'

const Contact = () => {
  return (
    <footer>
      <section id="Contact" className="contacts">
        <div className="contact-intro">
          <h1 className="contact-me">Contact me</h1>
          <p className="paragraph item">
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding —
            I’d love to help with it!
          </p>
        </div>

        <form
          className="contact-section"
          action="https://formspree.io/f/xyyoddrv"
          method="post"
        >
          <input
            className="text-holder1"
            type="text"
            name="name"
            placeholder="Name"
            maxLength="30"
            required
          />
          <input
            className="text-holder1"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="text-area"
            name="message"
            placeholder="Write your message here"
            maxLength="500"
            required
          />
          <div id="form-button">
            <button className="click-btn" type="submit">Get In Touch</button>
            <p id="form-error"></p>
          </div>
        </form>
      </section>
    </footer>
  )
}

export default Contact
