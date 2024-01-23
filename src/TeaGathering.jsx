import React from 'react';
import Cup from './Cup.jsx';

function TeaGathering() {
  let cups = [];
  for (let i = 1; i <= 12; i++) {
    // Key( The key attribute helps React identify which items have changed, been added, or been removed. It is essential for optimizing the rendering performance and ensuring a stable component state.)
    cups.push(<Cup key={i} guest={i} />);
  }
  return <div>{cups}</div>;
}

export default TeaGathering;
