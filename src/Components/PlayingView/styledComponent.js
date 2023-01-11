import styled from 'styled-components'

export const MainContainer = styled.div`
  padding: 50px;
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 560px) {
    padding: 20px;
  }
`

export const CardOne = styled.div`
  border: 2px solid white;
  border-radius: 15px;
  width: 70%;
  height: 150px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin-left: 10px;
`
export const InnerCardOne = styled.div`
  height: 100px;
  width: 150px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ParaOne = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 22px;
`
export const ParaTwo = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  color: #223a5f;
  font-size: 28px;
  margin-top: -18px;
`
export const CardTwo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  margin-left: 400px;
  margin-right: 300px;
  @media screen and (max-width: 560px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`

export const RulesButton = styled.button`
  height: 40px;
  width: 120px;
  font-family: 'Bree Serif';
  color: #223a5f;
  font-weight: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 8px;
  @media screen and (max-width: 560px) {
    margin-bottom: 25px;
  }
`
export const RulesContainer = styled.div`
  align-self: flex-end;
  margin-right: 50px;
  @media screen and (max-width: 560px) {
    margin-right: 1 px;
  }
`
export const PopupContainer = styled.div`
  height: 550px;
  width: 800px;
  background-color: white;
  @media screen and (max-width: 560px) {
    height: 500px;
    width: 80%;
    margin-left: 35px;
  }
`
export const CloseButton = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  margin: 20px;
  @media screen and (max-width: 560px) {
    margin: 10px;
  }
`
export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const PopupImg = styled.img`
  height: 400px;
  width: 700px;
  margin-left: 50px;
  @media screen and (max-width: 560px) {
    width: 80%;
    height: 350px;
    margin-left: 25px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
  margin-right: 100px;
  @media screen and (max-width: 560px) {
    margin-right: 1px;
  }
`
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 560px) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-left: 120px;
  @media screen and (max-width: 560px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`
export const ResultHead = styled.h1`
  font-weight: 600;
  font-family: 'Roboto';
  color: white;
  font-size: 25px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-top: 50px;
  @media screen and (max-width: 560px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`
export const LastHead = styled.p`
  font-weight: 600;
  font-family: 'Roboto';
  color: white;
  font-size: 30px;
`
