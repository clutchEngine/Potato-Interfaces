const fS=Object.keys(localStorage).reduce((obj,key)=>{if(key!="weather-api-key"&&key!="weather-city"){obj[key]=localStorage.getItem(key);}return obj;},{});console.log(fS);
function findGroups(obj, minLength = 4, minKeys = 4) {const entries = Object.entries(obj);const groups = new Map();for (const [key, value] of entries) {if (typeof value !== "string") continue;for (let start = 0; start < value.length; start++) {for (let end = start + minLength; end <= value.length; end++) {const substring = value.slice(start, end);if (!groups.has(substring)) {groups.set(substring, new Set());}groups.get(substring).add(key);}}}const candidates = [...groups].filter(([sequence, keys]) => keys.size >= minKeys).map(([sequence, keys]) => ({sequence,keys: [...keys]}));candidates.sort((a, b) => b.sequence.length - a.sequence.length);const results = [];for (const candidate of candidates) {const isRedundant = results.some(existing =>existing.sequence.includes(candidate.sequence) &&existing.keys.length >= candidate.keys.length &&candidate.keys.every(key => existing.keys.includes(key)));if (!isRedundant) {results.push(candidate);}}return results;}
const pI = findGroups(fS, 4, 4); // pi stands for potential interestd
console.log(pI); // CLUUUUTCH remove this when release


const weezer = document.getElementById("weezer"); // Wooo ooo I look just like buddy holly
if (localStorage.getItem("weezer") == "I look just like buddy holly") {
    weezer.style.display = "none";
    document.querySelector("logo-and-form").style.marginTop = "140px";
} else {
    document.querySelector("logo-and-form").style.marginTop = "70px";
    async function sF(query) {
    const serpFetch = await fetch("/idx/search.php?q=" + query.trim().toLowerCase());
    const jSp = await serpFetch.json();
    console.log(jSp);
    weezer.innerHTML += `
    	<div class="feed-card">
        	<h4>${jSp["results"][0]["title"]}</h4>
            <p>${jSp["results"][0]["snippet"]}</p>
        </div>
    `
}
pI.forEach((thg, idx)=>{
    if (idx < 9) {
    console.log(thg["sequence"]);
    sF(thg["sequence"]);
    }
})
}
