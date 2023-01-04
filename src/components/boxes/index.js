import React from 'react';

const GridBox = ({ children }) => {
  return (
    <div className="grid grid-cols-5 gap-4 md:gridbox py-12">
    {children.map((child,i) => (
      <div key={i} className="">{child}</div>
    ))}
  </div>
  );
};

export default GridBox;
