const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
];

const planetList = document.getElementById('planetList');

planets.forEach(planet => {
    const div = document.createElement('div');
    div.className = 'planet';
    div.textContent = planet;
    planetList.appendChild(div);
});