import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    color: #494949;
    background: #f8f8f2;
    text-align: center;
    width: 60%;
    padding: 30px;
    border-radius: 20px;
  }

  h2 {
    font-size: 22px;
  }

  form {
    padding-top: 20px;
  }

  input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #494949;
    border-radius: 20px;
    background: #f8f8f2;
    color: #494949;
    font-size: 18px;
    width: 50%;
  }

  button {
    background: #259bd9;
    padding: 10px 40px;
    border: none;
    border-radius: 30px;
    color: #f8f8f2;
    font-size: 18px;
    font-weight: 900;
    cursor: pointer;
    opacity: 0.9;
    margin-top: 10px;
    box-shadow: 3px 3px #4949496b;
  }

  button:hover {
    transform: translateY(-5px);
    transition: color 0.2s;
    opacity: 1;
  }

  @media (max-width: 1000px) {
    section {
      width: 90%;
    }
    h2 {
      font-size: 18px;
    }
    input {
      width: 80%;
      font-size: 14px;
    }
  }
`;

export default Container;
