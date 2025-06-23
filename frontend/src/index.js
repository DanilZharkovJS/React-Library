import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
// let num = 1
// const vanya = 'vanya pedik'
// const vanyaa = 'vanya pedik'
// while (num < 100) {
//     num++
//     console.log(vanya)
//     console.log(vanyaa)
// }