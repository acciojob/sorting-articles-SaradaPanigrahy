//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Sort alphabetically, ignoring "a", "an", "the"
const sortedArray = bands.sort((a, b) => {
    const nameA = a.replace(/^(a |an |the )/i, "").trim().toLowerCase();
    const nameB = b.replace(/^(a |an |the )/i, "").trim().toLowerCase();
    return nameA.localeCompare(nameB);
});

// Get the ul element
let list = document.getElementById("band");

// Append each band as a list item
sortedArray.forEach((item) => {
    let li = document.createElement("li");
    li.textContent = item; // safer than innerHTML here
    list.appendChild(li);
});
