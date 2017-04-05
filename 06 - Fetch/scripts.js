const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)  // fetch returns a promise
  .then(data => data.json())  // json() returns another promise, and the data has no type at this point
  .then(data => cities.push(...data));  // the data as json; WITHOUT using spread, it's an array inside an array;
                                        // the spread causes the individual values to go into the arreay,
                                        // rather than the array into the array

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');  // 2nd parameter is flags; 'g'lobal, 'i'nsensitive (not case sensative)
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>`
  }).join('');  // turn array into one, big string
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('keyup', displayMatches);
