import React, { useState } from 'react';
import axios from 'axios';
import Container from './styles';
import Alert from '../Alert/styles';

export default function FormSubscription() {
  const [email, setEmail] = useState([]);
  const [alert, setAlert] = useState(false);

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubscribe(e) {
    e.preventDefault();

    const response = await axios.post(
      `https://us3.api.mailchimp.com/3.0/lists/subscribe.json
      ?apikey=94b6cbb6aa51e7afb5b7c695d3eccccc&email[email]=${email}&send_welcome=false`
    );

    console.log(response.data);

    setAlert(true);
    setEmail('');
    setInterval(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <Container>
      {!alert ? (
        <section>
          <h2>
            Deixe o seu melhor e-mail aqui{' '}
            <span role="img" aria-label="Mão apontando para baixo">
              👇
            </span>
            <br />
            para receber mais informações.
          </h2>
          <form onSubmit={handleSubscribe}>
            <input
              required
              type="email"
              placeholder="tinoco@email.com"
              value={email}
              onChange={handleInputChange}
            />
            <br />
            <button type="submit">Ok!</button>
          </form>
        </section>
      ) : (
        <Alert background="#28a745" color="#f8f8f2">
          <p>Obrigado!</p>
        </Alert>
      )}
    </Container>
  );
}
