import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import GenericButton from "../components/GenericButton";

function CreateEnsembleForm(props) {
  const { createEnsemble, setVisible, onChange, errors } = props;
  const bgRef = useRef();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    e.keyCode === 27 ? setVisible(false) : "";
  };

  const closeModal = (e) => {
    if (e.target === bgRef.current) {
      setVisible(false);
    }
  };

  return (
    <>
      <Div
        ref={bgRef}
        onClick={(e) => {
          closeModal(e);
        }}
      >
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
      </Div>
    </>
  );
}
export default CreateEnsembleForm;

const Div = styled.div`
  background: rgba(1, 1, 1, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

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
  width: 35%;
  min-width: 600px;
  z-index: 3;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.2);
  background: white;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  h2 {
    margin-bottom: 2rem;
  }
`;

const ButtonCss = styled(GenericButton)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
`;
