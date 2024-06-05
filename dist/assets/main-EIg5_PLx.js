(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const v={"gDGBD - Open G":["G","D","G","B","D"],"gCGCD - Double C":["G","C","G","C","D"],"gDGCD - Sawmill":["A","D","G","B","D"],"fDGCD - Cumberland Gap":["F","D","G","C","D"],"gCGCC - Darling Corey":["G","C","G","C","C"]},N={Chromatic:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Major:["C","D","E","F","G","A","B"],Minor:["C","D","Eb","F","G","Ab","Bb"],"Major Pentatonic":["C","D","E","G","A"],"Minor Pentatonic":["C","Eb","F","G","Bb"],Blues:["C","Eb","F","Gb","G","Bb"],Ionian:["C","D","E","F","G","A","B"],Dorian:["C","D","Eb","F","G","A","Bb"],Phrygian:["C","Db","Eb","F","G","Ab","Bb"],Lydian:["C","D","E","F#","G","A","B"],Mixolydian:["C","D","E","F","G","A","Bb"],Aeolian:["C","D","Eb","F","G","Ab","Bb"],Locrian:["C","Db","Eb","F","Gb","Ab","Bb"]},O={Chromatic:["D","D#","E","F","F#","G","G#","A","A#","B","C","C#"],Major:["D","E","F#","G","A","B","C#"],Minor:["D","E","F","G","A","Bb","C"],"Major Pentatonic":["D","E","F#","A","B"],"Minor Pentatonic":["D","F","G","A","C"],Blues:["D","F","G","G#","A","C"],Ionian:["D","E","F#","G","A","B","C#"],Dorian:["D","E","F","G","A","B","C"],Phrygian:["D","Eb","F","G","A","Bb","C"],Lydian:["D","E","F#","G#","A","B","C#"],Mixolydian:["D","E","F#","G","A","B","C"],Aeolian:["D","E","F","G","A","Bb","C"],Locrian:["D","Eb","F","G","Ab","Bb","C"]},T={Chromatic:["E","F","F#","G","G#","A","A#","B","C","C#","D","D#"],Major:["E","F#","G#","A","B","C#","D#"],Minor:["E","F#","G","A","B","C","D"],"Major Pentatonic":["E","F#","G#","B","C#"],"Minor Pentatonic":["E","G","A","B","D"],Blues:["E","G","A","A#","B","D"],Ionian:["E","F#","G#","A","B","C#","D#"],Dorian:["E","F#","G","A","B","C#","D"],Phrygian:["E","F","G","A","B","C","D"],Lydian:["E","F#","G#","A#","B","C#","D#"],Mixolydian:["E","F#","G#","A","B","C#","D"],Aeolian:["E","F#","G","A","B","C","D"],Locrian:["E","F","G","A","Bb","C","D"]},I={Chromatic:["F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],Major:["F","G","A","Bb","C","D","E"],Minor:["F","G","Ab","Bb","C","Db","Eb"],"Major Pentatonic":["F","G","A","C","D"],"Minor Pentatonic":["F","Ab","Bb","C","Eb"],Blues:["F","Ab","Bb","B","C","Eb"],Ionian:["F","G","A","Bb","C","D","E"],Dorian:["F","G","Ab","Bb","C","D","Eb"],Phrygian:["F","Gb","Ab","Bb","C","Db","Eb"],Lydian:["F","G","A","B","C","D","E"],Mixolydian:["F","G","A","Bb","C","D","Eb"],Aeolian:["F","G","Ab","Bb","C","Db","Eb"],Locrian:["F","Gb","Ab","Bb","Cb","Db","Eb"]},k={Chromatic:["G","G#","A","A#","B","C","C#","D","D#","E","F","F#"],Major:["G","A","B","C","D","E","F#"],Minor:["G","A","Bb","C","D","Eb","F"],"Major Pentatonic":["G","A","B","D","E"],"Minor Pentatonic":["G","Bb","C","D","F"],Blues:["G","Bb","C","Db","D","F"],Ionian:["G","A","B","C","D","E","F#"],Dorian:["G","A","Bb","C","D","E","F"],Phrygian:["G","Ab","Bb","C","D","Eb","F"],Lydian:["G","A","B","C#","D","E","F#"],Mixolydian:["G","A","B","C","D","E","F"],Aeolian:["G","A","Bb","C","D","Eb","F"],Locrian:["G","Ab","Bb","C","Db","Eb","F"]},x={Chromatic:["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],Major:["A","B","C#","D","E","F#","G#"],Minor:["A","B","C","D","E","F","G"],"Major Pentatonic":["A","B","C#","E","F#"],"Minor Pentatonic":["A","C","D","E","G"],Blues:["A","C","D","D#","E","G"],Ionian:["A","B","C#","D","E","F#","G#"],Dorian:["A","B","C","D","E","F#","G"],Phrygian:["A","Bb","C","D","E","F","G"],Lydian:["A","B","C#","D#","E","F#","G#"],Mixolydian:["A","B","C#","D","E","F#","G"],Aeolian:["A","B","C","D","E","F","G"],Locrian:["A","Bb","C","D","Eb","F","G"]},H={Chromatic:["B","C","C#","D","D#","E","F","F#","G","G#","A","A#"],Major:["B","C#","D#","E","F#","G#","A#"],Minor:["B","C#","D","E","F#","G","A"],"Major Pentatonic":["B","C#","D#","F#","G#"],"Minor Pentatonic":["B","D","E","F#","A"],Blues:["B","D","E","F","F#","A"],Ionian:["B","C#","D#","E","F#","G#","A#"],Dorian:["B","C#","D","E","F#","G#","A"],Phrygian:["B","C","D","E","F#","G","A"],Lydian:["B","C#","D#","F","F#","G#","A#"],Mixolydian:["B","C#","D#","E","F#","G#","A"],Aeolian:["B","C#","D","E","F#","G","A"],Locrian:["B","C","D","E","F","G","A"]},u={C:N,"C#":{Chromatic:["C#","D","D#","E","F","F#","G","G#","A","A#","B","C"],Major:["C#","D#","F","F#","G#","A#","C"],Minor:["C#","D#","E","F#","G#","A","B"],"Major Pentatonic":["C#","D#","F","G#","A#"],"Minor Pentatonic":["C#","E","F#","G#","B"],Blues:["C#","E","F#","G","G#","B"],Ionian:["C#","D#","F","F#","G#","A#","C"],Dorian:["C#","D#","E","F#","G#","A#","B"],Phrygian:["C#","D","E","F#","G#","A","B"],Lydian:["C#","D#","F","F","G#","A#","C"],Mixolydian:["C#","D#","F","F#","G#","A#","B"],Aeolian:["C#","D#","E","F#","G#","A","B"],Locrian:["C#","D","E","F#","G","A","B"]},D:O,"D#":{Chromatic:["D#","E","F","F#","G","G#","A","A#","B","C","C#","D"],Major:["D#","F","G","G#","A#","C","D"],Minor:["D#","F","F#","G#","A#","B","C#"],"Major Pentatonic":["D#","F","G","A#","C"],"Minor Pentatonic":["D#","F#","G#","A#","C#"],Blues:["D#","F#","G#","A","A#","C#"],Ionian:["D#","F","G","G#","A#","C","D"],Dorian:["D#","F","F#","G#","A#","B","C#"],Phrygian:["D#","E","F#","G#","A#","B","C#"],Lydian:["D#","F","G","A","A#","C","D"],Mixolydian:["D#","F","G","G#","A#","C","C#"],Aeolian:["D#","F","F#","G#","A#","B","C#"],Locrian:["D#","E","F#","G#","A","B","C#"]},E:T,F:I,"F#":{Chromatic:["F#","G","G#","A","A#","B","C","C#","D","D#","E","F"],Major:["F#","G#","A#","B","C#","D#","F"],Minor:["F#","G#","A","B","C#","D","E"],"Major Pentatonic":["F#","G#","A#","C#","D#"],"Minor Pentatonic":["F#","A","B","C#","E"],Blues:["F#","A","B","C","C#","E"],Ionian:["F#","G#","A#","B","C#","D#","F"],Dorian:["F#","G#","A","B","C#","D#","E"],Phrygian:["F#","G","A","B","C#","D","E"],Lydian:["F#","G#","A#","C","C#","D#","F"],Mixolydian:["F#","G#","A#","B","C#","D#","E"],Aeolian:["F#","G#","A","B","C#","D","E"],Locrian:["F#","G","A","B","C","D","E"]},G:k,"G#":{Chromatic:["G#","A","A#","B","C","C#","D","D#","E","F","F#","G"],Major:["G#","A#","C","C#","D#","F","F"],Minor:["G#","A#","B","C#","D#","E","F#"],"Major Pentatonic":["G#","A#","C","D#","F"],"Minor Pentatonic":["G#","B","C#","D#","F#"],Blues:["G#","B","C#","D","D#","F#"],Ionian:["G#","A#","C","C#","D#","F","F"],Dorian:["G#","A#","B","C#","D#","F","F#"],Phrygian:["G#","A","B","C#","D#","E","F#"],Lydian:["G#","A#","C","C","D#","F","F"],Mixolydian:["G#","A#","C","C#","D#","F","F#"],Aeolian:["G#","A#","B","C#","D#","E","F#"],Locrian:["G#","A","B","C#","D","E","F#"]},A:x,"A#":{Chromatic:["A#","B","C","C#","D","D#","E","F","F#","G","G#","A"],Major:["A#","C","D","D#","F","G","A"],Minor:["A#","C","C#","D#","F","F#","G#"],"Major Pentatonic":["A#","C","D","E","G"],"Minor Pentatonic":["A#","C#","D#","F","G#"],Blues:["A#","C#","D#","E","F","G#"],Ionian:["A#","C","D","D#","F","G","A"],Dorian:["A#","C","C#","D#","F","G","G#"],Phrygian:["A#","B","C#","D#","F","F#","G#"],Lydian:["A#","C","D","E","F","G","A"],Mixolydian:["A#","C","D","D#","F","G","G#"],Aeolian:["A#","C","C#","D#","F","F#","G#"],Locrian:["A#","B","C#","D#","E","F#","G#"]},B:H},b=document.getElementById("tuning"),B=document.getElementById("scaleNote"),D=document.getElementById("scaleType"),g=document.getElementById("leftHanded"),m=document.getElementById("extraBass"),y=document.getElementById("disableColors"),M=document.getElementById("fretboard"),d=document.querySelector(".extra-options"),L=document.querySelector(".container"),h=["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],f=["A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"];function J(n,t=!1){return t?f[n%f.length]:h[n%h.length]}function $(n){return n.some(t=>t.includes("b"))}function q(n,t,l){const c=[],e=$(t),o=[...v[n]];return l&&o.splice(1,0,o[2]),o.forEach((r,s)=>{const A=[];let i=h.indexOf(r);i===-1&&(i=f.indexOf(r));for(let F=0;F<=12;F++)if(s===0&&F<5)A.push("");else{const E=s===0?F-5:F,a=J(i+E,e);t.includes(a)?A.push(a):A.push("")}c.push(A)}),c}function G(){const n=b.value,t=B.value,l=D.value,c=u[t][l],e=g.checked,o=m.checked,r=y.checked;let s=q(n,c,o);M.innerHTML="",e&&(s=s.reverse()),r?L.classList.add("disable-colors"):L.classList.remove("disable-colors"),s.forEach((A,i)=>{const F=document.createElement("div");F.className="string",A.forEach((E,a)=>{const C=document.createElement("div");if(C.className="fret",e?(i===0&&a>0&&C.classList.add("left-edge"),(i===s.length-1&&a>5||i===s.length-2&&a<=5&&a>0)&&C.classList.add("right-edge")):((i===0&&a>5||i==1&&a<=5&&a>0)&&C.classList.add("left-edge"),i===s.length-1&&a>0&&C.classList.add("right-edge")),!e&&i===s.length-1&&a>0&&C.classList.add("right-edge"),(a===0||!e&&i===0&&a===5||e&&i===s.length-1&&a===5)&&C.classList.add("top-row"),(!e&&i===0&&a<5||e&&i===s.length-1&&a<5)&&C.classList.add("hidden"),E){const j=E.replace("#","s").replace("b","b"),p=document.createElement("div");p.className=`note ${j}`,p.innerText=E,C.appendChild(p)}F.appendChild(C)}),M.appendChild(F)}),S()}function P(){const n=B.value,t=D.value;D.innerHTML="";const l=Object.keys(u[n]);l.forEach(c=>{const e=document.createElement("option");e.value=c,e.textContent=c,D.appendChild(e)}),l.includes(t)&&(D.value=t)}function S(){localStorage.setItem("tuning",b.value),localStorage.setItem("scaleNote",B.value),localStorage.setItem("scaleType",D.value),localStorage.setItem("leftHanded",g.checked),localStorage.setItem("extraBass",m.checked),localStorage.setItem("disableColors",y.checked),localStorage.setItem("extraOptionsVisible",d.style.display!=="none")}function w(){const n=localStorage.getItem("tuning"),t=localStorage.getItem("scaleNote"),l=localStorage.getItem("scaleType"),c=localStorage.getItem("leftHanded"),e=localStorage.getItem("extraBass"),o=localStorage.getItem("disableColors"),r=localStorage.getItem("extraOptionsVisible");n&&(b.value=n),t&&(B.value=t),P(),l&&(D.value=l),c!==null&&(g.checked=JSON.parse(c)),e!==null&&(m.checked=JSON.parse(e)),o!==null&&(y.checked=JSON.parse(o)),r!==null&&(d.style.display=JSON.parse(r)?"block":"none")}function V(){d.style.display==="none"||!d.style.display?d.style.display="block":d.style.display="none",S()}function z(){b.addEventListener("change",G),B.addEventListener("change",()=>{const n=D.value;P(),Object.keys(u[B.value]).includes(n)&&(D.value=n),G()}),D.addEventListener("change",G),g.addEventListener("change",G),m.addEventListener("change",G),y.addEventListener("change",G),w(),G()}const K=document.getElementById("tuning");Object.keys(v).forEach(n=>{const t=document.createElement("option");t.value=n,t.innerText=n,K.appendChild(t)});const Q=document.getElementById("scaleNote");Object.keys(u).forEach(n=>{const t=document.createElement("option");t.value=n,t.innerText=n,Q.appendChild(t)});const R=document.getElementById("scaleType"),U=["Chromatic","Major","Minor","Major Pentatonic","Minor Pentatonic","Blues"];U.forEach(n=>{const t=document.createElement("option");t.value=n,t.innerText=n,R.appendChild(t)});z();document.getElementById("toggleOptions").addEventListener("click",V);