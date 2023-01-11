import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import ImgButton from '../ImgButton'

import {
  MainContainer,
  CardOne,
  Heading,
  ParaOne,
  ParaTwo,
  InnerCardOne,
  CardTwo,
  RulesButton,
  RulesContainer,
  PopupContainer,
  CloseButton,
  CloseContainer,
  PopupImg,
  Image,
  ResultsContainer,
  ResultCard,
  ResultHead,
  LastHead,
} from './styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    renderView: false,
    id: choicesList[0].id,
    id2: choicesList[0].id,
    status: '',
  }

  imgButtonClick = val => {
    this.setState({id: val})
    this.setState({renderView: true})
    const len = choicesList.length
    const filterMethod = Math.floor(Math.random() * len)
    const finalVal = choicesList[filterMethod]
    const secondId = finalVal.id
    this.setState({id2: secondId})
    if (val === 'ROCK') {
      if (secondId === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score - 1,
        }))
        this.setState({status: 'YOU LOSE'})
      } else if (secondId === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
        this.setState({status: 'YOU WON'})
      } else {
        this.setState({status: 'IT IS DRAW'})
      }
    } else if (val === 'PAPER') {
      if (secondId === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
        this.setState({status: 'YOU WON'})
      } else if (secondId === 'SCISSORS') {
        this.setState(prevState => ({
          score: prevState.score - 1,
        }))
        this.setState({status: 'YOU LOSE'})
      } else {
        this.setState({status: 'IT IS DRAW'})
      }
    } else if (val === 'SCISSORS') {
      if (secondId === 'PAPER') {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }))
        this.setState({status: 'YOU WON'})
      } else if (secondId === 'ROCK') {
        this.setState(prevState => ({
          score: prevState.score - 1,
        }))
        this.setState({status: 'YOU LOSE'})
      } else {
        this.setState({status: 'IT IS DRAW'})
      }
    }
  }

  onPlay = () => {
    this.setState({renderView: false})
  }

  resultsView = () => {
    const {id, id2, status} = this.state
    const res = choicesList.filter(e => id === e.id)
    const res2 = choicesList.filter(e => id2 === e.id)
    return (
      <>
        <ResultsContainer>
          <ResultCard>
            <ResultHead>YOU</ResultHead>
            <Image src={res[0].imageUrl} alt="your choice" />
          </ResultCard>
          <ResultCard>
            <ResultHead>OPPONENT</ResultHead>
            <Image src={res2[0].imageUrl} alt="opponent choice" />
          </ResultCard>
        </ResultsContainer>
        <LastHead>{status}</LastHead>
        <RulesButton type="button" onClick={this.onPlay}>
          PLAY AGAIN
        </RulesButton>
      </>
    )
  }

  render() {
    const {renderView, score} = this.state
    if (renderView === false) {
      return (
        <MainContainer>
          <CardOne>
            <Heading>
              ROCK <br />
              PAPER <br />
              SCISSORS
            </Heading>
            <InnerCardOne>
              <ParaOne>Score</ParaOne>
              <ParaTwo>{score}</ParaTwo>
            </InnerCardOne>
          </CardOne>
          <CardTwo>
            {choicesList.map(e => (
              <ImgButton
                key={e.id}
                item={e}
                imgButtonClick={this.imgButtonClick}
              />
            ))}
          </CardTwo>

          <Popup
            modal
            trigger={
              <RulesContainer>
                <RulesButton type="button">Rules</RulesButton>
              </RulesContainer>
            }
          >
            {close => (
              <>
                <PopupContainer>
                  <CloseContainer>
                    <CloseButton type="button" onClick={() => close()}>
                      <RiCloseLine />
                    </CloseButton>
                  </CloseContainer>
                  <PopupImg
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </PopupContainer>
              </>
            )}
          </Popup>
        </MainContainer>
      )
    }
    return (
      <MainContainer>
        <CardOne>
          <Heading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Heading>
          <InnerCardOne>
            <ParaOne>Score</ParaOne>
            <ParaTwo>{score}</ParaTwo>
          </InnerCardOne>
        </CardOne>
        {this.resultsView()}
        <Popup
          modal
          trigger={
            <RulesContainer>
              <RulesButton type="button">Rules</RulesButton>
            </RulesContainer>
          }
        >
          {close => (
            <>
              <PopupContainer>
                <CloseContainer>
                  <CloseButton type="button" onClick={() => close()}>
                    <RiCloseLine />
                  </CloseButton>
                </CloseContainer>
                <PopupImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            </>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default PlayingView
