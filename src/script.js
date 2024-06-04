import tunings from './tunings.json';
import scales from './scales.json';

const tuningSelect = document.getElementById('tuning');
const scaleNoteSelect = document.getElementById('scaleNote');
const scaleTypeSelect = document.getElementById('scaleType');
const leftHandedCheckbox = document.getElementById('leftHanded');
const extraBassCheckbox = document.getElementById('extraBass');
const disableColorsCheckbox = document.getElementById('disableColors');
const fretboard = document.getElementById('fretboard');
const extraOptions = document.querySelector('.extra-options');
const container = document.querySelector('.container');

const noteNamesSharps = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
const noteNamesFlats = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];

function getNoteName(index, useFlats = false) {
    if (useFlats) {
        return noteNamesFlats[index % noteNamesFlats.length];
    }
    return noteNamesSharps[index % noteNamesSharps.length];
}

function isFlatScale(scaleNotes) {
    return scaleNotes.some(note => note.includes('b'));
}

function getFretboardNotes(tuning, scaleNotes, extraBass) {
    const fretboardNotes = [];
    const useFlats = isFlatScale(scaleNotes);
    const tuningNotes = [...tunings[tuning]];

    if (extraBass) {
        tuningNotes.splice(1, 0, tuningNotes[2]);
    }

    tuningNotes.forEach((stringNote, stringIndex) => {
        const stringNotes = [];
        let noteIndex = noteNamesSharps.indexOf(stringNote);
        if (noteIndex === -1) noteIndex = noteNamesFlats.indexOf(stringNote);

        for (let fret = 0; fret <= 12; fret++) {
            if (stringIndex === 0 && fret < 5) { // Handle the fifth string starting at the fifth fret
                stringNotes.push('');
            } else {
                const actualFret = stringIndex === 0 ? fret - 5 : fret;
                const note = getNoteName(noteIndex + actualFret, useFlats);
                if (scaleNotes.includes(note)) {
                    stringNotes.push(note);
                } else {
                    stringNotes.push('');
                }
            }
        }
        fretboardNotes.push(stringNotes);
    });

    return fretboardNotes;
}

function updateFretboard() {
    const tuning = tuningSelect.value;
    const scaleNote = scaleNoteSelect.value;
    const scaleType = scaleTypeSelect.value;
    const scaleNotes = scales[scaleNote][scaleType];
    const isLeftHanded = leftHandedCheckbox.checked;
    const extraBass = extraBassCheckbox.checked;
    const disableColors = disableColorsCheckbox.checked;

    let notes = getFretboardNotes(tuning, scaleNotes, extraBass);

    fretboard.innerHTML = '';

    if (isLeftHanded) {
        notes = notes.reverse();
    }

    if (disableColors) {
        container.classList.add('disable-colors');
    } else {
        container.classList.remove('disable-colors');
    }

    notes.forEach((stringNotes, stringIndex) => {
        const stringDiv = document.createElement('div');
        stringDiv.className = 'string';

        stringNotes.forEach((note, fretIndex) => {
            const fretDiv = document.createElement('div');
            fretDiv.className = 'fret';

            // Add the styling to draw the left and right borders of the fretboard first in right handed mode, and again in left handed mode
            if (!isLeftHanded) {
                if ((stringIndex === 0 && fretIndex > 5) || (stringIndex == 1 && fretIndex <= 5 && fretIndex > 0)) {
                    fretDiv.classList.add('left-edge');
                }

                if (stringIndex === notes.length - 1 && fretIndex > 0) {
                    fretDiv.classList.add('right-edge');
                }
            }
            else {
                if (stringIndex === 0 && fretIndex > 0) {
                    fretDiv.classList.add('left-edge');
                }

                if ((stringIndex === notes.length - 1 && fretIndex > 5) || (stringIndex === notes.length - 2 && fretIndex <= 5 && fretIndex > 0)) {
                    fretDiv.classList.add('right-edge');
                }
            }

            if (!isLeftHanded && stringIndex === notes.length - 1 && fretIndex > 0) {
                fretDiv.classList.add('right-edge');
            }


            if (fretIndex === 0 || (!isLeftHanded && stringIndex === 0 && fretIndex === 5) || (isLeftHanded && stringIndex === notes.length - 1 && fretIndex === 5)) {
                fretDiv.classList.add('top-row');
            }

            if ((!isLeftHanded && stringIndex === 0 && fretIndex < 5) || (isLeftHanded && stringIndex === notes.length - 1 && fretIndex < 5)) {
                fretDiv.classList.add('hidden');
            }

            if (note) {
                const noteClass = note.replace('#', 's').replace('b', 'b');
                const noteDiv = document.createElement('div');
                noteDiv.className = `note ${noteClass}`;
                noteDiv.innerText = note;
                fretDiv.appendChild(noteDiv);
            }
            stringDiv.appendChild(fretDiv);
        });

        fretboard.appendChild(stringDiv);
    });

    saveSettings();
}

function updateScaleTypeOptions() {
    const scaleNote = scaleNoteSelect.value;
    const selectedScaleType = scaleTypeSelect.value;
    scaleTypeSelect.innerHTML = '';

    const scaleTypes = Object.keys(scales[scaleNote]);
    scaleTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        scaleTypeSelect.appendChild(option);
    });

    if (scaleTypes.includes(selectedScaleType)) {
        scaleTypeSelect.value = selectedScaleType;
    }
}

function saveSettings() {
    localStorage.setItem('tuning', tuningSelect.value);
    localStorage.setItem('scaleNote', scaleNoteSelect.value);
    localStorage.setItem('scaleType', scaleTypeSelect.value);
    localStorage.setItem('leftHanded', leftHandedCheckbox.checked);
    localStorage.setItem('extraBass', extraBassCheckbox.checked);
    localStorage.setItem('disableColors', disableColorsCheckbox.checked);
    localStorage.setItem('extraOptionsVisible', extraOptions.style.display !== 'none');
}

function loadSettings() {
    const savedTuning = localStorage.getItem('tuning');
    const savedScaleNote = localStorage.getItem('scaleNote');
    const savedScaleType = localStorage.getItem('scaleType');
    const savedLeftHanded = localStorage.getItem('leftHanded');
    const savedExtraBass = localStorage.getItem('extraBass');
    const savedDisableColors = localStorage.getItem('disableColors');
    const savedExtraOptionsVisible = localStorage.getItem('extraOptionsVisible');

    if (savedTuning) tuningSelect.value = savedTuning;
    if (savedScaleNote) scaleNoteSelect.value = savedScaleNote;
    updateScaleTypeOptions(); // Populate scale type options based on saved scale note
    if (savedScaleType) scaleTypeSelect.value = savedScaleType;
    if (savedLeftHanded !== null) leftHandedCheckbox.checked = JSON.parse(savedLeftHanded);
    if (savedExtraBass !== null) extraBassCheckbox.checked = JSON.parse(savedExtraBass);
    if (savedDisableColors !== null) disableColorsCheckbox.checked = JSON.parse(savedDisableColors);
    if (savedExtraOptionsVisible !== null) {
        extraOptions.style.display = JSON.parse(savedExtraOptionsVisible) ? 'block' : 'none';
    }
}

export function toggleExtraOptions() {
    if (extraOptions.style.display === 'none' || !extraOptions.style.display) {
        extraOptions.style.display = 'block';
    } else {
        extraOptions.style.display = 'none';
    }
    saveSettings();
}

export function initializeApp() {
    tuningSelect.addEventListener('change', updateFretboard);
    scaleNoteSelect.addEventListener('change', () => {
        const previousScaleType = scaleTypeSelect.value;
        updateScaleTypeOptions();
        if (Object.keys(scales[scaleNoteSelect.value]).includes(previousScaleType)) {
            scaleTypeSelect.value = previousScaleType;
        }
        updateFretboard();
    });
    scaleTypeSelect.addEventListener('change', updateFretboard);
    leftHandedCheckbox.addEventListener('change', updateFretboard);
    extraBassCheckbox.addEventListener('change', updateFretboard);
    disableColorsCheckbox.addEventListener('change', updateFretboard);

    // Load saved settings
    loadSettings();

    // Initial render
    updateFretboard();
}