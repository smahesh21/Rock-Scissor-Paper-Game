import {Component} from 'react'
import Popup from 'reactjs-popup'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import GameOptions from '../GameOptions'

import {
  RockPaperScissorGameContainer,
  ResponsiveContainer,
  HeaderContainer,
  TextContainer,
  ScoreContainer,
  Description,
  ScoreCount,
  Score,
  ImagesListContainer,
  ModalContainer,
  InnerModalContainer,
  CloseModalButton,
  ModalImage,
  ModalButton,
  PopupContainer,
  GameResultContainer,
  GameResult,
  Image,
  GameStatus,
  PlayAgain,
} from './styledComponents'

const gameStatusConstants = {
  inProgress: 'IN_PROGRESS',
  lost: 'LOST',
  win: 'WON',
  draw: 'DRAW',
}

class RockPaperScissorGame extends Component {
  state = {
    score: 0,
    userChoiceId: '',
    systemChoiceId: '',
    gameStatus: gameStatusConstants.inProgress,
  }

  setUserChoice = id => {
    this.setState(
      {userChoiceId: id, systemChoiceId: this.getSystemChoicedId()},
      this.checkResult,
    )
  }

  getSystemChoicedId = () => {
    const {choicesList} = this.props
    const index = Math.floor(Math.random() * 3)
    return choicesList[index].id
  }

  onClickPlayAgain = () => {
    this.setState({
      userChoiceId: '',
      systemChoiceId: '',
      gameStatus: gameStatusConstants.inProgress,
      score: 0,
    })
  }

  checkResult = () => {
    const {userChoiceId, systemChoiceId, gameStatus} = this.state

    if (userChoiceId === systemChoiceId) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoiceId === 'PAPER') {
      if (systemChoiceId === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (userChoiceId === 'ROCK') {
      if (systemChoiceId === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    } else if (userChoiceId === 'SCISSORS') {
      if (systemChoiceId === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
          gameStatus: gameStatusConstants.win,
        }))
      } else {
        this.setState(prevState => ({
          score: prevState.score - 1,
          gameStatus: gameStatusConstants.lost,
        }))
      }
    }
  }

  renderResultView = () => {
    const {userChoiceId, systemChoiceId, gameStatus} = this.state
    const {choicesList} = this.props
    const userChoice = choicesList.find(
      eachChoice => eachChoice.id === userChoiceId,
    )
    const systemChoice = choicesList.find(
      eachChoice => eachChoice.id === systemChoiceId,
    )

    let imageURL = null
    if (userChoiceId === systemChoiceId) {
      const choice = choicesList.find(
        eachChoice => eachChoice.id === userChoiceId,
      )
      imageURL = choice.imageUrl
    }

    const userImageUrl = userChoice.imageUrl
    const systemImageUrl = systemChoice.imageUrl

    return (
      <GameResultContainer>
        {gameStatus === 'WON' && (
          <GameResult>
            <Image src={userImageUrl} alt="your choice" />
            <Image src={systemImageUrl} alt="opponent choice" />
          </GameResult>
        )}
        {gameStatus === 'LOST' && (
          <GameResult>
            <Image src={userImageUrl} alt="your choice" />
            <Image src={systemImageUrl} alt="opponent choice" />
          </GameResult>
        )}
        {gameStatus === 'DRAW' && (
          <GameResult>
            <Image src={imageURL} alt="your choice" />
            <Image src={imageURL} alt="opponent choice" />
          </GameResult>
        )}
        {gameStatus === 'WON' && <GameStatus>YOU WON</GameStatus>}
        {gameStatus === 'LOST' && <GameStatus>YOU LOSE</GameStatus>}
        {gameStatus === 'DRAW' && <GameStatus>IT IS DRAW</GameStatus>}
        <PlayAgain type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </GameResultContainer>
    )
  }

  renderGameViewBasedOnStatus = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderRockPaperScissorGame()
      case gameStatusConstants.win:
        return this.renderResultView()
      case gameStatusConstants.lost:
        return this.renderResultView()
      case gameStatusConstants.draw:
        return this.renderResultView()
      default:
        return null
    }
  }

  renderModaL = () => (
    <Popup
      modal
      trigger={<ModalButton type="button">Rules</ModalButton>}
      closeOnEscape
      window
    >
      {close => (
        <InnerModalContainer>
          <CloseModalButton type="button" onClick={() => close()}>
            <AiOutlineCloseSquare size={24} />
          </CloseModalButton>
          <ModalImage
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </InnerModalContainer>
      )}
    </Popup>
  )

  renderHeader = () => {
    const {score} = this.state
    return (
      <HeaderContainer>
        <TextContainer>
          <Description>Rock Paper Scissors</Description>
        </TextContainer>
        <ScoreContainer>
          <Score>Score</Score>
          <ScoreCount>{score}</ScoreCount>
        </ScoreContainer>
      </HeaderContainer>
    )
  }

  renderRockPaperScissorGame = () => {
    const {choicesList} = this.props

    return (
      <>
        <ResponsiveContainer>
          <ImagesListContainer>
            {choicesList.map(eachChoice => (
              <GameOptions
                eachChoice={eachChoice}
                setUserChoice={this.setUserChoice}
                key={eachChoice.id}
              />
            ))}
          </ImagesListContainer>
          <PopupContainer>{this.renderModaL()}</PopupContainer>
        </ResponsiveContainer>
      </>
    )
  }

  render() {
    return (
      <RockPaperScissorGameContainer>
        {this.renderHeader()}
        {this.renderGameViewBasedOnStatus()}
      </RockPaperScissorGameContainer>
    )
  }
}

export default RockPaperScissorGame
