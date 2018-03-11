const scribble = require('scribbletune');

// example data
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const min = Math.min(...data);
const numberOfScales = [...Array(5)].map((d, i) => i + 1); // [1, 2, 3, 4, 5]

// creates array of notes like 'c1', 'd1', 'e1', 'gb1', 'ab1', 'bb1', 'c2', ...
const notes = numberOfScales.reduce((res, num) =>
  res.concat(scribble.mode('c', 'whole tone', num, false))
, []);

const midiData = scribble.clip({
  notes: data.map(value => notes[value - min]),
  pattern: 'x',
  noteLength: '1/16',
});

// write the MIDI file 🎵🎵🎵
scribble.midi(midiData, 'data-sonification.mid');
