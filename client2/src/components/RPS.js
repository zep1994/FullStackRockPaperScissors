import React from 'react'

class RPS extends React.Component {
    constructor(props) {
        super(props) 
            this.state = {
                userScore: 0,
                userName: '',
                compScore: 0,
                compName: 'Bob'
            }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.game = this.game.bind(this)
    }

    
    handleInput(event) {
        this.setState({
            userName: event.target.value
        })   
    }

    handleSubmit(event) {
        alert("Alerts suck, but so does your name     " + this.state.userName)
        event.preventDefault()
    }


    getcomputerChoice() {
        let choices = ['r', 'p', 's']
        let randomChoice = Math.floor(Math.random() * 3)
        return choices[randomChoice]
    }


    game(userChoice) {
        let compChoice = this.getcomputerChoice()
        switch (userChoice + compChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                alert("user wins")
                this.handleUserScore()
                break
            case 'rp':
            case 'ps':
            case 'sr':
                alert("comp wins")
                this.handleCompScore()
                break
            case 'rr':
            case 'ss':
            case 'pp':
                alert("tie")
                break
            default: 
                alert("something went wrong")
        }
    }

    handleUserScore() {
        this.setState(prevState => ({
            userScore: prevState.userScore + 1
        }))
    }

    handleCompScore() {
        this.setState(prevState => ({
            compScore: prevState.compScore + 1
        }))
    }

    render() {
        return (
            <div className="rps-header">
                <h1>Rock Paper Scissors</h1>

                    <form className="name-input" onSubmit={this.handleSubmit}>
                        <label>Enter your battle name</label><br />
                        <input type="text" value={this.state.userName} name="name" onChange={this.handleInput} />
                        <input type="submit" className="submit" value="submit" />
                    </form>

                    <p>Rock beats Scissors</p><br />

                    <div className="score-board">
                        <p>{this.state.userName}</p>
                        <p>User Score: {this.state.userScore}</p><br />
                        <p>{this.state.compName}</p>
                        <p>Computer Score: {this.state.compScore}</p>
                    </div>

                    <div className="btn-choice">
                        <button onClick={(r) => this.game("r")}>Rock</button>
                        <button onClick={(p) => this.game("p")}>Paper</button>
                        <button onClick={(s) => this.game("s")}>Scissors</button>
                    </div>
            </div>
        )
    }
}

export default RPS