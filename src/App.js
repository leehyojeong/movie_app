import React from 'react';

function Food({fav, picture}) {
  return <div>
    <h2>I like {fav}</h2>
    <img src={picture}/>
  </div>;
}

const foodIlike = [
  {
    id: 1,
    name: "kim",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.RSRN70ESBp8mYHmq8Q8znQHaDt%26pid%3DApi&f=1"
  },
  {
    id: 2,
    name: "don",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2bPqskIIDjez0ZuvbApLjAHaEK%26pid%3DApi&f=1"
  }
]
function App() {
  return (
  <div>
    {foodIlike.map((dish, idx)=>(
      <Food fav={dish.name} picture={dish.image} key={idx}/>
    ))}
  </div>
  );
}

export default App;
