import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numero: 0,
        };

        this.updateNumero = this.updateNumero.bind(this);
    }

    updateNumero() {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    render() {
        return (
            <section>
                <div>
                    <div style={{"width":"80%", "margin":"0 auto"}}>
                        <Title></Title>
                        <h2>{this.state.numero}</h2>
                        <button onClick={ this.updateNumero }>Crear cuenta</button>
                        <img src={process.env.PUBLIC_URL + '/images/place.png'}/>
                        <div>
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
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
