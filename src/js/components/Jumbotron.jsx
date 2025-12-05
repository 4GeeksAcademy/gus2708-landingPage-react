import React, { useState, useEffect } from 'react';
import logo from "../../img/zeldalogo.png";

const Jumbotron = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let description = screenWidth > 768
    ? "is an action-adventure sequel to Breath of the Wild where players control Link in a vast Hyrule, now with new sky islands and underground areas to explore. The core gameplay centers on creative freedom, using new abilities like Ultrahand to build contraptions and Fuse to combine materials with weapons and shields. The story follows Link and Zelda as they investigate a mysterious gloom and must battle the demon king Ganondorf to save the kingdom."
    : "is an action-adventure sequel to Breath of the Wild where players control Link in a vast Hyrule, now with new sky islands and underground areas to explore.";

  return (
    <div className="p-5 marginContainer text-center bg-body-tertiary rounded-3">
      <img className="mb-4 logo" src={logo} alt="Zelda Logo" />
      <h1 className="text-body-emphasis mb-4">The Legend of Zelda Tears of the kingdom</h1>
      <p className="lead">
        {description}
      </p>
    </div>
  );
}

export default Jumbotron;