const fetchRandomCharacterBtn = document.getElementById(
  'fetch-random-character'
);

fetchRandomCharacterBtn.addEventListener('click', loadRandomCharacter);

async function loadRandomCharacter() {
  const randomId = Math.floor(Math.random() * 58) + 1;
  const url = fetch('https://web.dragonball-api.com/api/characters/');

  try {
    // Fetch data from the Dragon Ball API
    const response = await fetch(url);
    const characterData = await response.json();

    // Build the HTML using template literals + innerHTML
    document.querySelector('.character-info__card').innerHTML = `
          <h2>${characterData.name}</h2>
           <img src="${character.image}" alt="${character.name}" />
        <p><strong>Ki:</strong> ${character.ki}</p>
        <p><strong>Max Ki:</strong> ${character.maxKi}</p>
        <p><strong>Race:</strong> ${character.race}</p>
        <p><strong>Gender:</strong> ${character.gender}</p> `;
  } catch (error) {
    // Fall back UI if API fails
    document.querySelector('.character-info__card').innerHTML = `
        <p>Failed to load character 😢</p>
      `;

    console.error('Error loading character:', error.message);
  }
}
