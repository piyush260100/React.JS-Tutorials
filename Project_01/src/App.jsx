//import React from 'react'

const App = () => {
  return (
    // Fragments are empty tags used to wrap multiple element into one unit
    <>
      <div id="parent1">
        <h1 id="child1">Hello React Developer</h1>
        <br />
        <p id="child2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          inventore accusamus natus vero perspiciatis excepturi quidem
          voluptatum aliquid, officiis laboriosam ullam iure voluptates illum
          maiores. Tenetur maxime quia dolores aperiam dolorum ad rem dolore
          deleniti quis pariatur, odit reprehenderit optio itaque placeat
          impedit eaque. Excepturi quis cupiditate pariatur eum recusandae.
        </p>
        <br />
        <h2 id="child3">Bye</h2>
      </div>
      <br />
      <div id="parent2">
        <h1 id="parent2child1">Hello Guys</h1>
        <br />
        <h2 id="parent2child2">Welcome</h2>
      </div>
    </>
  );
};

export default App;
