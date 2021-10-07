import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Error from './components/Error'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Lodging from './pages/Lodging'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route
                    exact
                    path="/Lodging/:lodgingId"
                    render={(props) => <Lodging {...props} />}
                />
                <Route exact path="/about">
                    <About />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
