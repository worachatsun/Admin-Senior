import React, { Component } from 'react'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { configureStore } from '../store'
import { Router, Route, Link, hashHistory } from 'react-router'
class App extends Component {

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <Provider store={configureStore()}>
                       <Routes/>
                    </Provider>
                </div>
            </div>
        )
    }
}

export default App