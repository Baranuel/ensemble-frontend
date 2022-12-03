import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

function CreateEnsembleForm(props) {
  const { createEnsemble, setVisible, onChange, errors } = props;
  return (
    <>
      <Form onSubmit={createEnsemble} method="POST">
        <Close>
          <h3 onClick={() => setVisible(false)}>X</h3>
        </Close>
        <h2>Log in</h2>
        <label htmlFor="">Title</label>
        <br />
        <input name="title" onChange={onChange} type="text" />
        <br />
        <label htmlFor="">Genre </label>
        <br />
        <input name="genre" onChange={onChange} type="text" />
        <br />
        <label htmlFor="">Location </label>
        <br />
        <input name="location" onChange={onChange} type="text" />
        <br />
        <label htmlFor="instruments">Instruments </label>
        <br />
        <input name="instruments" onChange={onChange} type="text" />
        <br />

        {errors && (
          <Errors>
            {errors?.map((err, ix) => (
              <p key={ix}>{err}</p>
            ))}
          </Errors>
        )}
        <ButtonCss text="Create" />
      </Form>
    </>
  );
}
export default CreateEnsembleForm;

const Errors = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: pink;
  border-radius: 10px;
  color: red;
`;

const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  h3 {
    cursor: pointer;
  }
`;

const Form = styled.form`
  width: 40%;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  background: white;
  position: fixed;
  top: 5%;
  right: 30%;
  h2 {
    margin-bottom: 2rem;
  }
`;

const ButtonCss = styled(Button)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
`;
