import React, { Component } from 'react';
import './App.css';
import {Container, Col, Row, Badge, ButtonGroup, Button, Dropdown, Navbar} from 'react-bootstrap';
import xmark from './xmark.png';
import checkmark from './checkmark.webp';

let difficulty = 1;
let correctAnswer;
let plScore = 0;
let opScore = 0;
let rounds = 3;
let proceed;

class App extends Component {
  generateRGB = () => {
    let r = Math.floor(Math.random() * 256).toString();
    let g = Math.floor(Math.random() * 256).toString();
    let b = Math.floor(Math.random() * 256).toString();
    return 'RGB( ' + r + ' , ' + g + ' , ' + b + ' )';
  }

  setColors = () => {
    proceed = true;
    this.setScore();
    let numbers = [];
    for(let i = 0; i < 3 * difficulty; i++){
      let num = this.generateRGB();
      numbers.push(num);
    }

    correctAnswer = Math.floor(Math.random() * 3);
    document.getElementById('but-1').style.backgroundColor = numbers[0];
    document.getElementById('but-2').style.backgroundColor = numbers[1];
    document.getElementById('but-3').style.backgroundColor = numbers[2];

    if(difficulty > 1){
      correctAnswer = Math.floor(Math.random() * 6);
      document.getElementById('but-4').style.backgroundColor = numbers[3];
      document.getElementById('but-5').style.backgroundColor = numbers[4];
      document.getElementById('but-6').style.backgroundColor = numbers[5];
    }
    if(difficulty > 2){
      correctAnswer = Math.floor(Math.random() * 9);
      document.getElementById('but-7').style.backgroundColor = numbers[6];
      document.getElementById('but-8').style.backgroundColor = numbers[7];
      document.getElementById('but-9').style.backgroundColor = numbers[8];
    }
    
    document.getElementById('badge').innerHTML = numbers[correctAnswer];
  }

  checkIfCorrect = (e) => {
    if(proceed === true){
      proceed = false;
      let id = e.target.id;
      let isCorrect;
      let t = 'changeIcon 2s';

      document.getElementById(id).style.animation = 'changeBtn 1s';      

      document.getElementById('i-0.0').style.display = 'inline';
      document.getElementById('i-0.1').style.display = 'inline';
      document.getElementById('i-0.2').style.display = 'inline';
      document.getElementById('i-0.3').style.display = 'inline';
      document.getElementById('i-0.4').style.display = 'inline';
      document.getElementById('i-0.5').style.display = 'inline';
      document.getElementById('i-0.6').style.display = 'inline';
      document.getElementById('i-0.7').style.display = 'inline';
      document.getElementById('i-0.8').style.display = 'inline';

      document.getElementById('i-0.0').style.animation = t;
      document.getElementById('i-0.1').style.animation = t;
      document.getElementById('i-0.2').style.animation = t;
      document.getElementById('i-0.3').style.animation = t;
      document.getElementById('i-0.4').style.animation = t;
      document.getElementById('i-0.5').style.animation = t;
      document.getElementById('i-0.6').style.animation = t;
      document.getElementById('i-0.7').style.animation = t;
      document.getElementById('i-0.8').style.animation = t;

      switch(correctAnswer){
        case 0:
          id === "but-1" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.0').style.display = 'none';
          document.getElementById('i-1.0').style.display = 'inline';
          document.getElementById('i-1.0').style.animation = t;
          break;
        case 1:
          id === "but-2" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.1').style.display = 'none';
          document.getElementById('i-1.1').style.display = 'inline';
          document.getElementById('i-1.1').style.animation = t;
          break;
        case 2:
          id === "but-3" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.2').style.display = 'none';
          document.getElementById('i-1.2').style.display = 'inline';
          document.getElementById('i-1.2').style.animation = t;
          break;
        case 3:
          id === "but-4" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.3').style.display = 'none';
          document.getElementById('i-1.3').style.display = 'inline';
          document.getElementById('i-1.3').style.animation = t;
          break;
        case 4:
          id === "but-5" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.4').style.display = 'none';
          document.getElementById('i-1.4').style.display = 'inline';
          document.getElementById('i-1.4').style.animation = t;
          break;
        case 5:
          id === "but-6" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.5').style.display = 'none';
          document.getElementById('i-1.5').style.display = 'inline';
          document.getElementById('i-1.5').style.animation = t;
          break;
        case 6:
          id === "but-7" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.6').style.display = 'none';
          document.getElementById('i-1.6').style.display = 'inline';
          document.getElementById('i-1.6').style.animation = t;
          break;
        case 7:
          id === "but-8" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.7').style.display = 'none';
          document.getElementById('i-1.7').style.display = 'inline';
          document.getElementById('i-1.7').style.animation = t;
          break;
        case 8:
          id === "but-9" ? isCorrect = true : isCorrect = false;
          document.getElementById('i-0.8').style.display = 'none';
          document.getElementById('i-1.8').style.display = 'inline';
          document.getElementById('i-1.8').style.animation = t;
          break;
        default:
          break;
      }

      isCorrect === true ? plScore += 1 : opScore += 1;
      this.setScore();

      setTimeout(() => {
        document.getElementById(id).style.animation = '';
        document.getElementById('i-1.0').style.display = 'none';
        document.getElementById('i-1.1').style.display = 'none';
        document.getElementById('i-1.2').style.display = 'none';
        document.getElementById('i-1.3').style.display = 'none';
        document.getElementById('i-1.4').style.display = 'none';
        document.getElementById('i-1.5').style.display = 'none';
        document.getElementById('i-1.6').style.display = 'none';
        document.getElementById('i-1.7').style.display = 'none';
        document.getElementById('i-1.8').style.display = 'none';
        document.getElementById('i-0.0').style.display = 'none';
        document.getElementById('i-0.1').style.display = 'none';
        document.getElementById('i-0.2').style.display = 'none';
        document.getElementById('i-0.3').style.display = 'none';
        document.getElementById('i-0.4').style.display = 'none';
        document.getElementById('i-0.5').style.display = 'none';
        document.getElementById('i-0.6').style.display = 'none';
        document.getElementById('i-0.7').style.display = 'none';
        document.getElementById('i-0.8').style.display = 'none';
        (opScore === rounds)||(plScore === rounds) ? this.announceResult() : this.setColors();
      }, 2000);
    }
  }

  setScore = () => {
    let left = plScore.toString();
    let right = opScore.toString();
    document.getElementById('score').textContent = left + ':' + right;
    document.getElementById('score2').textContent = left + ':' + right;
    this.setState({plScore});
  }

  setColor = () => {
    let scoreClass = 'badge-';
    if(plScore > opScore){
      scoreClass += 'success';
    }
    if(plScore === opScore){
      scoreClass += 'warning';
    }
    if(plScore < opScore){
      scoreClass += 'danger';
    }
    return scoreClass;
  }

  setText = () => {
    let text;
    plScore > opScore ? text = 'WIN' : text = 'DEFEAT';
    return text;
  }

  setDifficultyColor = () => {
    let color = 'badge-';
    if(difficulty === 1){
      color += 'success';
    }
    if(difficulty === 2){
      color += 'warning';
    }
    if(difficulty === 3){
      color += 'danger';
    }
    return color;
  }

  announceResult = () => {
    document.getElementById('container').style.animation = 'hideContainer 3s';
    setTimeout(() => {
      document.getElementById('container').style.display = 'none';
      document.getElementById('endContainer').style.display = 'block';
      document.getElementById('endContainer').style.animation = 'showContainer 3s';
      setTimeout(() => {
        document.getElementById('endContainer').style.opacity = 1;
      }, 3000);
    }, 3000);
  }

  componentDidMount = () => {
    this.setScore();
    this.setColors();
    this.handleEasy();
  }

  render() { 
    let active1 = rounds === 3 ? "active" : "";
    let active2 = rounds === 5 ? "active" : "";
    let active3 = rounds === 9 ? "active" : "";
    return ( 
      <div className="App">
        <header className="App-header">
          <Container id="endContainer" style={{display: 'none', opacity: 0}}>
            <h1 className="scoreHeader">
              <Badge id="score2" pill className={this.setColor()}></Badge>
            </h1>
            <h1 className="textHeader">
              <Badge className={this.setDifficultyColor()}>{this.setText()}</Badge>
            </h1>
          </Container>
          <Container id="container">
            <Col style={{padding: 0}}>
              <Row className="justify-content-center">
                <h1>
                  <Badge id="score" pill className={this.setColor()} style={{marginBottom: 10}}></Badge>
                </h1>
              </Row>
              <Row className="justify-content-center">
                <h1>
                  <Badge id="badge" variant="success" style={{marginBottom: 10}}></Badge>
                </h1>
              </Row>
              <Row>
                <Col style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-1" className="bt">
                    <img id="i-0.0" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.0" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-2" className="bt">
                    <img id="i-0.1" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.1" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-3" className="bt">
                    <img id="i-0.2" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.2" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
              </Row>
              <Row>
                <Col id="row-2.1" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-4" className="bt">
                    <img id="i-0.3" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.3" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col id="row-2.2" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-5" className="bt">
                    <img id="i-0.4" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.4" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col id="row-2.3" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-6" className="bt">
                    <img id="i-0.5" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.5" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
              </Row>
              <Row>
                <Col id="row-3.1" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-7" className="bt">
                    <img id="i-0.6" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.6" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col id="row-3.2" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-8" className="bt">
                    <img id="i-0.7" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.7" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
                <Col id="row-3.3" style={{padding: 5}}>
                  <button onClick={(e) => this.checkIfCorrect(e)} id="but-9" className="bt">
                    <img id="i-0.8" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={xmark} />
                    <img id="i-1.8" alt="rrr" style={{height: 50, display: 'none', opacity: 0}} src={checkmark} />
                  </button>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Dropdown style={{marginTop: 10}}>
                  <Dropdown.Toggle variant="secondary">
                        POINTS TO WIN
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item className={active1} id="dropdown1" onClick={(e) => this.roundsNumber(e)}>3</Dropdown.Item>
                    <Dropdown.Item className={active2} id="dropdown2" onClick={(e) => this.roundsNumber(e)}>5</Dropdown.Item>
                    <Dropdown.Item className={active3} id="dropdown3" onClick={(e) => this.roundsNumber(e)}>9</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Row>
              <Navbar className="fixed-bottom bg-dark justify-content-center">
                <ButtonGroup style={{marginTop: 20}} className="btn-group-lg">
                  <Button onClick={this.handleEasy} variant="success">Easy</Button>
                  <Button onClick={this.handleMedium} variant="warning">Medium</Button>
                  <Button onClick={this.handleHard} variant="danger">Hard</Button>
                </ButtonGroup>
              </Navbar>
            </Col>
          </Container>
        </header>
      </div>
     );
  }

  roundsNumber = (e) => {
    rounds = parseInt(e.target.innerHTML, 10);
    this.setState({rounds});
    plScore = 0;
    opScore = 0;
    this.setColors();
  }

  handleEasy = () => {
    difficulty = 1;
    plScore = 0;
    opScore = 0;
    document.getElementById('row-3.3').style.display = 'none';
    document.getElementById('row-3.2').style.display = 'none';
    document.getElementById('row-3.1').style.display = 'none';
    document.getElementById('row-2.3').style.display = 'none';
    document.getElementById('row-2.2').style.display = 'none';
    document.getElementById('row-2.1').style.display = 'none';
    this.setColors();
  }
  handleMedium = () => {
    difficulty = 2;
    plScore = 0;
    opScore = 0;
    document.getElementById('row-3.3').style.display = 'none';
    document.getElementById('row-3.2').style.display = 'none';
    document.getElementById('row-3.1').style.display = 'none';
    document.getElementById('row-2.1').style.display = 'block';
    document.getElementById('row-2.2').style.display = 'block';
    document.getElementById('row-2.3').style.display = 'block';
    this.setColors();
  }
  handleHard = () => {
    difficulty = 3;
    plScore = 0;
    opScore = 0;
    document.getElementById('row-2.1').style.display = 'block';
    document.getElementById('row-2.2').style.display = 'block';
    document.getElementById('row-2.3').style.display = 'block';
    document.getElementById('row-3.1').style.display = 'block';
    document.getElementById('row-3.2').style.display = 'block';
    document.getElementById('row-3.3').style.display = 'block';
    this.setColors();
  }
}
 
export default App;
