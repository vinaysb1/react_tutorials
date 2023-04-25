import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic: 'react'
      }
    }
    handleUsernameChange = event => {
        this.setState({
            username:event.target.value
        })
    }
    handleCommentsChange= event =>{
        this.setState({
            comments:event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    
    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
    const {username,comments,topic} = this.setState
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>username </label>
                <input type='text'
                value={username}
                onChange={this.handleUsernameChange} />        
        </div>
        <div>
                <label>comments </label>
                <input type='comments'
                value={username}
                onChange={this.handleCommentsChange} />        
        </div>
        <div>
                <label>Topic </label>
                <select value={topic}
                onChange={this.handleTopicChange} >
                    <option value= "react">React</option>
                    <option value= "angular">Angular</option>
                    <option value= "vue">Vue</option> 
                    </select>   
       </div>
       <button type='submit'>submit</button>
        </form>
    )
      
  }
}

export default Form
