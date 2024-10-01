import { useState } from 'react';

let list = 
[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

]


function App() {
  const [word,setWord] = useState('');
  const [meaning,setMeaning] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    let word = list.find((item)=>item.word.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
    setWord(word?.meaning);
  }  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(word){
      setMeaning(word);
    }else{
      setMeaning('Word not found in the dictionary.')
    }
  }
  
  return (
    <div className="App">
    <h1>Dictionary App</h1>
      <form>
        <input type="text" onChange={handleChange} placeholder='Search for a word...'/>
        <button onClick={handleSubmit}>Search</button>
      </form>

      {meaning && 
      <>
      <p style={{fontWeight:'bold'}}>Definition:</p>
      <p>{meaning}</p>
      </>
      }
    </div>
  );
}

export default App;
