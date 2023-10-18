import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
  switch(action.type){
      case "INC":
          return {
              ...state,
              value: state.value + 1
          };
      case "DEC":
          return {
              ...state,
              value: state.value - 1
          };
      case "PLS":
          return {
              ...state,
              value: state.value + 5
          };
      case "MNS":
          return {
              ...state,
              value: state.value - 3
          };
      case "RND":
          return {
              ...state,
              value: state.value * action.payload
          };
      default:
          return state;
  }
}

const store = createStore(reducer);
const update = () => {
    document.getElementById('counter').textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const pls = () => ({type: 'PLS'});
const mns = () => ({type: 'MNS'});
const rnd = (value) => ({type: 'RND', payload: value});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});
document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec());
});
document.getElementById('pls').addEventListener('click', () => {
    store.dispatch(pls());
});
document.getElementById('mns').addEventListener('click', () => {
    store.dispatch(mns());
});
document.getElementById('rnd').addEventListener('click', () => {
    const value = Math.floor(Math.random()*10);
    if (value == 0){
      store.dispatch(rnd(1))
    }else{
    store.dispatch(rnd(value));
  }});

ReactDOM.render(
    <React.StrictMode>
        <>
        
        </>
    </React.StrictMode>,
    document.getElementById('root')
);