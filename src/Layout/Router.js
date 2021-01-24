import React, { Component } from 'react'
import Appbar from '../Components/Appbar'
import {
    Route,
} from "react-router-dom";
import Home from '../Screens/Home';

export default class Router extends Component {

    render() {
        return (
            <>
                <Appbar />
                <div style={{ height: 84 }} />
                <Route
                    path='/'
                    exact
                    render={
                        props => <Home {...props} />
                    }
                />
            </>
        )
    }
}
