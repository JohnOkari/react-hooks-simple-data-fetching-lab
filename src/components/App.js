import React, { useState, useEffect } from "react";

function App() {
  const [imageDog, setImageDog] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const url = "https://dog.ceo/api/breeds/image/random";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setImageDog(data.message);
        setIsLoaded(true);
      });
  }, []); 

  if (!isLoaded) return <p>Loading...</p>;
  
  return <img src={imageDog} alt="A Random Dog" />;
}

export default App;
