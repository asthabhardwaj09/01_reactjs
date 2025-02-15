import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App |</h1>
    </div>
  )
}
// astha
// this code will not run because react library have its own policy.
//  We can write our code whether in jsx or without jsx then it will convert into tree like (below code same) but we cannot write this way directly. 
// when we write the code in jsx or without jsx then it will be converted into tree like strutucre using babel

// const reactElement={
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement=(
  <a href='https://google.com' target='_blank'>visit google</a>
)

const username="chai or react"

const reactElement =React.createElement(

  'a',
  {href:'https://google.com', target:"_blank"},
  'click me to visit google',
  username

)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // anotherElement
  // <App></App>


)

