import styled from 'styled-components';

const ContactSectionStyled = styled.form`
  padding-left: 50px;
  margin-bottom: 30px;
  padding-top: 20px;
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;
    background: none;
    border-radius: 5px;
    margin-left: 70px;
    margin-top: 5px;
  }
  button:hover {
    background-color: grey;
    color: white;
  }
`;

export default ContactSectionStyled;
