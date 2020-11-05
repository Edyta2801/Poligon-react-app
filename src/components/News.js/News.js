/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import Author from '../Author/Author';
import Scoring from '../Scoring/Scoring';

const yellow = '#f1c40f';

const styles = {
  backgroundColor: 'grey',
  border: 'red 1px solid',
  padding: '10px',
  para: {
    background: yellow
  }
};

function News({ header, intro, author }) {
  const [score] = useState(7);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Author author={author} />
      <Scoring score={score} />
    </div>
  );
}

export default News;