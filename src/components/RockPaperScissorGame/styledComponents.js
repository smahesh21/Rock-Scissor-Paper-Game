import styled from 'styled-components'

export const RockPaperScissorGameContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
`

export const HeaderContainer = styled.div`
  width: 90%;
  height: 150px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 40px;
  padding-left: 16px;
  padding-right: 16px;
  @media screen and (max-width: 576px) {
    margin-left: 16px;
  }
`
export const TextContainer = styled.div`
  width: 15%;
  height: 90%;
`
export const Description = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto'
  font-size: 18px;
  margin-top: 18px;
    margin-bottom: 0px;
`
export const ScoreCount = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #223a5f;
`

export const ResponsiveContainer = styled.div`
  background-color: transparent;
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ImagesContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: none;
  background-color: transparent;
  align-self: center;
  margin-left: 800px;
  margin-bottom: 25px;
`
export const ImagesListContainer = styled.ul`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  list-style-type: none;
  @media screen and (max-width: 576px) {
    flex-wrap: wrap;
    padding: 0px;
  }
`

export const PopupContainer = styled.div`
  height: 30px;
  width: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Bree Serif';
  background-color: #ffffff;
  align-self: flex-end;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding-left: 16px;
  padding-top: 3px;
`
export const InnerModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px;
  background-color: white;
  height: 100%;
  width: 100%;
`
export const ModalImage = styled.img`
  height: 500px;
  width: 500px;
  flex-wrap: wrap;
  margin-bottom: 25px;
  @media screen and (max-width: 576px) {
    height: 20px;
    width: 20px;
    border: 1px solid white;
  }
`
export const ModalButton = styled.div`
  height: 100%;
  width: 100%;
  outline: none;
  text-align: center;
  background-color: transparent;
  align-self: flex-end;
`
export const CloseModalButton = styled(ModalButton)`
  width: 30px;
  align-self: flex-end;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const GameResult = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const Image = styled.img`
  height: 200px;
  width: 200px;
  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`
export const PlayAgain = styled.button`
  height: 40px;
  width: 120px;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
`
export const GameStatus = styled.p`
  font-family: 'Roboto';
  font-size: '40px';
  color: #ffffff;
`
