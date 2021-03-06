import React, { useState } from 'react';
import axios from 'axios';
import Container from './styles';
import Alert from '../Alert/styles';

export default function FormSubscription() {
  const [email, setEmail] = useState([]);
  const [showAlert, setshowAlert] = useState(false);
  const [alert, setAlert] = useState(false);

  function handleInputChange(e) {
    setEmail(e.target.value);
  }

  async function handleSubscribe(e) {
    e.preventDefault();

    await axios
      .put(
        'https://api.sendgrid.com/v3/marketing/contacts',
        { contacts: [{ email }] },
        {
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_SENDGRID_API_KEY}`,
          },
        }
      )
      .then(() => {
        setAlert(true);
        setEmail('');
      })
      .catch(() => {
        setAlert(false);
      })
      .finally(() => {
        setshowAlert(true);
        setInterval(() => {
          setshowAlert(false);
        }, 5000);
      });
  }

  return (
    <Container>
      {// eslint-disable-next-line no-nested-ternary
      showAlert ? (
        alert ? (
          <Alert background="#28a745" color="#f8f8f2">
            <p>Obrigado!</p>
          </Alert>
        ) : (
          <Alert background="#dc3545" color="#f8f8f2">
            <p>Algo deu errado! Tente novamente dentro de alguns instantes. </p>
          </Alert>
        )
      ) : (
        ''
      )}

      <section>
        <h2>
          Deixe o seu melhor e-mail aqui
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
    </Container>
  );
}
