import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import './App.css';

import indigo400 from 'material-ui/styles/colors';

import Title from './components/Title'

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="Header-background">
                    <div style={{"width":"80%", "margin":"0 auto"}}>
                        <div className="Header-main">
                            <Title></Title>
                            <RaisedButton label="Crear cuenta" primary={true}/>
                            <img src={process.env.PUBLIC_URL + '/images/place.png'} className="Header-ilustration"/>
                        </div>
                    </div>
                </div>
                <div style={{'background-color': indigo400, 'padding': '50px'}}>
                    <ul>
                        <li>
                            <h3>Calificaciones con emociones.</h3>
                            <p>Califica tus lugares con experiencias, no con números.</p>
                        </li>
                        <li>
                            <h3>Funcionamos sin internet</h3>
                            <p>Somo la primer App Offline.</p>
                        </li>
                        <li>
                            <h3>Tus lugares favositos</h3>
                            <p>Agrega tus lugares favoritos, para visitar.</p>
                        </li>
                    </ul>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
