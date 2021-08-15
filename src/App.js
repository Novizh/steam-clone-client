import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import GameDetails from './pages/GameDetails';
import React from 'react';

function App() {
    return (
        <React.Fragment>
            <Register />
            <Login />
            <Home />
            <GameDetails />
        </React.Fragment>
    );
}

export default App;
