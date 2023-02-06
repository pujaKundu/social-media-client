import React from 'react';


const Reactions = ({src}) => {
    return (
      <>
        <img className="w-6 h-6 hover:scale-125 m-2" src={src} alt="love" />
      </>
    );
};

export default Reactions;