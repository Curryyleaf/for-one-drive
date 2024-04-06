import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people , setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today </h3>
        <List people ={people }/>
        <button onClick={[] }>
          Clear all
        </button>
      </section>
    </main>
  )
}

export default App;

// import React, { useState } from 'react';
// import data from './data';
// import List from './List';

// function App() {
//   const [people, setPeople] = useState(data);

//   return (
//     <main>
//       <section className="container">
//         <h3>0 birthdays today </h3>
//         {people.map((person) => (
//           <List
//             key={person.id}
//             id={person.id}
//             name={person.name}
//             age={person.age}
//             image={person.image}
//           />
//         ))}
//         <button onClick={[]}>
//           Clear all
//         </button>
//       </section>
//     </main>
//   );
// }

// export default App;
