import React, { useState } from 'react';
import '../Pages/Contact.css';
import '../Components/Footer';

function Contact () {
  // States pour gérer les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fonction de gestion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérifier que tous les champs sont remplis
    if (!name || !email || !message) {
      setErrorMessage('Merci de remplir tous les champs.');
      setSuccessMessage('');
      return;
    }

    console.log('Envoi du formulaire:', { name, email, message });

    // Utilisation de SMTP.js pour envoyer l'email
    window.Email.send({
      SecureToken: "JNaystiqYU6UlQK9z", // Public key
      To: "victoire.dew@gmail.com",  // Adresse email de destination
      From: email,  // Email utilisateur
      Subject: 'Message de ${name} via le portfolio',
      Body: `
        Nom: ${name}
        Email: ${email}
        Message: ${message}
      `
    })
      .then((response) => {
        if (response === 'OK') {
          setSuccessMessage('Merci pour votre message!');
          setErrorMessage('');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setSuccessMessage('');
          setErrorMessage('Une erreur est survenue, veuillez réessayer.');
        }
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Une erreur est survenue, veuillez réessayer.');
        console.error('Error sending email:', error);
      });
  };

  const handleFocus = () => {
    setErrorMessage('');
  };

  return (
    <div className="contact-container">
      <h1>Parlons de votre projet</h1>
      <p>Si vous avez en tête un projet, je serais ravie de vous écouter m'en parler.<br/>
        Contactez-moi via le formulaire ci-dessous et je reviendrai vers vous au plus vite!
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            onFocus={handleFocus}
          />
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            onFocus={handleFocus}
          />
        </div>
        <textarea
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
          onFocus={handleFocus}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="submit-button-container">
          <button type="submit" className="submit-button">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
