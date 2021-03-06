import React from 'react'
import {Link} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const App = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">StreamsOut</Link>
            <div className="right menu">
                <Link to="/" className="item">
                    Streams
                </Link>
                <GoogleAuth />
            </div>
        </div> 
    )
}

export default App