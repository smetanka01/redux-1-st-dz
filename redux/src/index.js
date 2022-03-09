import store from "./counter-with_redux/store";
import * as actions   from "./counter-with_redux/action";
import {bindActionCreators} from 'redux'

const increment = document.getElementById('increment')
const decrement = document.getElementById('decrement')
let countDisplay = document.getElementById('count-display')

const {inc, dec} = bindActionCreators(actions, store.dispatch)

countDisplay.innerText = store.getState()

increment.addEventListener('click', inc)
decrement.addEventListener('click', dec)

store.subscribe(() =>  countDisplay.innerText = store.getState())
