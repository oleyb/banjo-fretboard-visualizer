import './styles.css';
import tunings from './tunings.json';
import scales from './scales.json';
import { initializeApp, toggleExtraOptions } from './script.js';

// Populate the tuning dropdown
const tuningSelect = document.getElementById('tuning');
Object.keys(tunings).forEach(tuning => {
    const option = document.createElement('option');
    option.value = tuning;
    option.innerText = tuning;
    tuningSelect.appendChild(option);
});

// Populate the scale note dropdown
const scaleNoteSelect = document.getElementById('scaleNote');
Object.keys(scales).forEach(note => {
    const option = document.createElement('option');
    option.value = note;
    option.innerText = note;
    scaleNoteSelect.appendChild(option);
});

// Populate the scale type dropdown
const scaleTypeSelect = document.getElementById('scaleType');
const scaleTypes = [
    'Chromatic', 'Major', 'Minor', 'Major Pentatonic', 'Minor Pentatonic', 'Blues'
];
scaleTypes.forEach(type => {
    const option = document.createElement('option');
    option.value = type;
    option.innerText = type;
    scaleTypeSelect.appendChild(option);
});

// Initialize the app
initializeApp();

document.getElementById('toggleOptions').addEventListener('click', toggleExtraOptions);
