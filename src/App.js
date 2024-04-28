// Matheus Peres Medeiros Barreto

import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import picChucknorris from './assets/images/ChuckNorris.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ações possíveis
const ACTIONS = {
    SET_PIADA: 'SET_PIADA',
    SET_CATEGORIAS: 'SET_CATEGORIAS',
    SET_RESULTADO_BUSCA: 'SET_RESULTADO_BUSCA',
    SET_ERRO: 'SET_ERRO',
    SET_KEYWORD: 'SET_KEYWORD',
    TOGGLE_CATEGORIAS: 'TOGGLE_CATEGORIAS',
};

// Gerenciando o estado a partir do uso de Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_PIADA:
            return { ...state, piada: action.payload };
        case ACTIONS.SET_CATEGORIAS:
            return { ...state, categorias: action.payload };
        case ACTIONS.SET_RESULTADO_BUSCA:
            return { ...state, resultadoBusca: action.payload };
        case ACTIONS.SET_ERRO:
            return { ...state, erro: action.payload };
        case ACTIONS.SET_KEYWORD:
            return { ...state, keyword: action.payload };
        case ACTIONS.TOGGLE_CATEGORIAS:
            return { ...state, mostrarCategorias: !state.mostrarCategorias };
        default:
            return state;
    }
};

function App() {
    const initialState = {
        piada: '',
        categorias: [],
        keyword: '',
        resultadoBusca: '',
        erro: '',
        mostrarCategorias: false,
    };

    const [state, dispatch] = useReducer(reducer, initialState);


    const getPiadaAleatoria = () => {};
    const getCategorias = () => {};
    const buscarPorPalavraChave = () => {};

    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                <img src={picChucknorris} alt="ChuckNorrisImage" style={{ height: "200px", width: "400px" }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1>Piadas do Chuck Norris</h1>
            </div>
        </div>
    );
}

export default App;
