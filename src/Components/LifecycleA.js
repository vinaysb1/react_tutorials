import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"vinay"
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate (prevProps, prevState){
        console.log('LifecycleA hetSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('LifecycleA tcomponentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'codevolution'
        })
    }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <button onclick = {this.changeState}>Change state</button>
        LifecycleA<LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
