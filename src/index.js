import React from 'react';
import ReactDOM from 'react-dom';


// Se evalúa cualquier código JavaScript entre llaves y el resultado 
// de esta evaluación se incrusta en el lugar definido en el HTML 
// producido por el componente.

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
