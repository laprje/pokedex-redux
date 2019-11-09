import axios from 'axios';

//INITIAL STATE
const initialState = {
    username: '',
    pokemon: {results: []},
    loading: false
}

//ACTION CONSTANTS
const SET_USERNAME = 'SET_USERNAME';
const GET_POKEMON = 'GET_POKEMON'

//ACTION BUILDERS
export const setUsername =(username) => {
    return {
        type: SET_USERNAME,
        payload: username
    }
}

export const getPokemon = (url) => {
    let pokemonPromise = axios.get(url).then(res => {
        return res.data;
    })
    return {
        type: GET_POKEMON,
        payload: pokemonPromise
    }
}

//REDUCER FUNCTION
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERNAME:
            return {... state, username: action.payload}
        case GET_POKEMON + '_PENDING':
            return {...state, loading: true}
        case GET_POKEMON + '_REJECTED':
            return {...state, loading: false}
        case GET_POKEMON + '_FULFILLED':
            return {...state, loading: false, pokemon: action.payload}
        default: return state;
    }
}