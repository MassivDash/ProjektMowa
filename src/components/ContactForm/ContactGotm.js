import React from "react";
import { navigateTo } from "gatsby-link";
import './ContactForm.scss'

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Dziękuje za wysłanie wiadomości"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
        <section className="ContactForm">
      <div className="container">
        <div className="columns contact">
        <div className="column">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label className="label">
              Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
            </label>
          </p>
          
          <div className="field">
          <div className="control">
            <label className="label">
              Imię i Nazwisko:<br />
            </label>
            <input className="input" type="text" name="name" onChange={this.handleChange}/>
            </div>
          </div>
          <div className="control">
          <div className="field">
            <label className="label">
              E-mail:<br />
            </label>
            <input className="input" type="email" name="email" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="control">
          <div className="field">
            <label className="label">
              Wiadomośc:<br />
            </label>
            <textarea className="textarea" name="message" onChange={this.handleChange}/>
          </div>
          </div>
          <div className="control">
          <div className="field">
            <button className="Sent" type="submit">Wyslij</button>
          </div>
          </div>
        </form>
      </div>
      </div>
      </div>
      </section>
    );
  }
}

