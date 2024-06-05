import './styles.css';
import tunings from './tunings.json';
import scales from './scales.json';
import chords from './chords.json';
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

// Populate the scale type dropdown based on selected scale note
function updateScaleTypeDropdown() {
    const scaleNote = scaleNoteSelect.value;
    const scaleTypeSelect = document.getElementById('scaleType');
    scaleTypeSelect.innerHTML = '';

    const scaleTypes = Object.keys(scales[scaleNote]);
    scaleTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.innerText = type;
        scaleTypeSelect.appendChild(option);
    });
}

// Populate the chord note dropdown
const chordNoteSelect = document.getElementById('chordNote');
Object.keys(chords).forEach(note => {
    const option = document.createElement('option');
    option.value = note;
    option.innerText = note;
    chordNoteSelect.appendChild(option);
});

// Populate the chord type dropdown based on selected chord note
function updateChordTypeDropdown() {
    const chordNote = chordNoteSelect.value;
    const chordTypeSelect = document.getElementById('chordType');
    chordTypeSelect.innerHTML = '';

    const chordTypes = Object.keys(chords[chordNote]);
    chordTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.innerText = type;
        chordTypeSelect.appendChild(option);
    });
}

// Update scale types and chords when note selections change
scaleNoteSelect.addEventListener('change', updateScaleTypeDropdown);
chordNoteSelect.addEventListener('change', updateChordTypeDropdown);

// Initialize the app
initializeApp();

document.getElementById('toggleOptions').addEventListener('click', toggleExtraOptions);

// Initial population of scale and chord types
updateScaleTypeDropdown();
updateChordTypeDropdown();
