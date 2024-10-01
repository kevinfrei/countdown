import React from 'react';

import './SevenSeg.css';

export interface ValidPuncutationProps {
  chr: ":" | ".";
}

export function PunctuationDisplay({chr}: ValidPuncutationProps): JSX.Element {
  switch (chr) {
    case ".":
      return (
        <div className="punctuation-display">
          <div className="SEG0" id="p0"/>
          <div className="SEG0" id="p1"/>
          <div className="SEG0" id="p2"/>
          <div className="SEG0" id="p3"/>
          <div className="SEG0" id="p4"/>
          <div className="SEG1" id="p5"/>
        </div>
      );
    case ":":
      return (
        <div className="punctuation-display">
          <div className="SEG0" id="p0"/>
          <div className="SEG1" id="p1"/>
          <div className="SEG0" id="p2"/>
          <div className="SEG1" id="p3"/>
          <div className="SEG0" id="p4"/>
          <div className="SEG0" id="p5"/>
        </div>
      );
    default:
      return (
        <div className="punctuation-display">
          <div className="SEG0" id="p0"/>
          <div className="SEG0" id="p1"/>
          <div className="SEG0" id="p2"/>
          <div className="SEG0" id="p3"/>
          <div className="SEG0" id="p4"/>
          <div className="SEG0" id="p5"/>
        </div>
      );
  }
}

const segments = [
  ['1', '1', '1', '0', '1', '1', '1'], // 0
  ['0', '0', '1', '0', '0', '1', '0'], // 1
  ['1', '0', '1', '1', '1', '0', '1'], // 2
  ['1', '0', '1', '1', '0', '1', '1'], // 3
  ['0', '1', '1', '1', '0', '1', '0'], // 4
  ['1', '1', '0', '1', '0', '1', '1'], // 5
  ['1', '1', '0', '1', '1', '1', '1'], // 6
  ['1', '0', '1', '0', '0', '1', '0'], // 7
  ['1', '1', '1', '1', '1', '1', '1'], // 8
  ['1', '1', '1', '1', '0', '1', '1']  // 9
];
export interface SevenSegmentProps {
  digit: number;
}
export function SevenSegmentDisplay({digit}: SevenSegmentProps): JSX.Element {
  return (
    <div className="seven-segment-display">
      {segments[digit].map((on, i) => <div className={`SEG${on}`} id={`s${i}`}/>)}
    </div>
  );
};
