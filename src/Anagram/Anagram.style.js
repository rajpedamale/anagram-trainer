import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5em;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 20px;
  width: 400px;
  min-height: 300px;
  position: absolute;
  //top: 50%;
  left: 50%;
  transform: translate(-50%, 50px);
`;

export const Encouragement = styled.div`
  margin-top: 21px;
  padding: 10px;
  font-size: 1.5em;
  font-weight: bold;
  color: #488304;
`;

export const Answer = styled.div`
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
`;
