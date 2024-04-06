import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
  <main>
    <div className="container">
      <h2>Questions and answers to login </h2>
      <section className="info">
        {questions.map( (question) => {
          return( <SingleQuestion key={question.id} {...question}/>)
          // must use () after return here for the code to work 
          // but return is supposed to work nevertheless , i dont know why?
        })}
      </section>
    </div>
  </main>
  )
}




export default App;
