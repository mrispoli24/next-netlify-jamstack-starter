import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`Hello functions are coming...`);

    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(json => console.log(json))
  });

  return <div>Welcome to Next.js!</div>;
}

export default Home;
