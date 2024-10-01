import React from 'react';
import { PunctuationDisplay, SevenSegmentDisplay } from './SevenSeg';

import './App.css';

function App() {
  return (
    <div className="App">
      <SevenSegmentDisplay digit={0} />
      <SevenSegmentDisplay digit={1} />
      <PunctuationDisplay chr=':'/>
      <SevenSegmentDisplay digit={2} />
      <SevenSegmentDisplay digit={3} />
      <PunctuationDisplay chr=':'/>
      <SevenSegmentDisplay digit={4} />
      <SevenSegmentDisplay digit={5} />
      <PunctuationDisplay chr=':'/>
      <SevenSegmentDisplay digit={6} />
      <SevenSegmentDisplay digit={7} />
      <PunctuationDisplay chr='.'/>
      <SevenSegmentDisplay digit={8} />
      <SevenSegmentDisplay digit={9} />
      </div>
  );
}

export default App;
