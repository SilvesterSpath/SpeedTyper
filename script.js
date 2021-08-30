const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameContainer = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
  'sigh',
  'tense',
  'airplane',
  'ball',
  'pies',
  'juice',
  'warlike',
  'bad',
  'north',
  'dependent',
  'steer',
  'silver',
  'highfalutin',
  'superficial',
  'quince',
  'eight',
  'feeble',
  'admit',
  'drag',
  'loving'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Generate random word form 'array'
function getRandomWord(){
  const randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber]
}

// Add word to DOM
function addWordToDOM(){
  randomWord = getRandomWord();
  word.innerHTML = randomWord
}

// Add score to DOM
function updateScore(){  
  score++;
  scoreEl.innerHTML = score;
}

// Game over show endscreen
function gameOver(){  
  endgameContainer.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is: ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;
  endgameContainer.style.display = 'flex';
}

// Update time
function updateTime(){
  time--;
  timeEl.innerHTML = time + 's';
  if (time === 0){
    clearInterval(timeInterval)
    // End game
    gameOver()
  }
}

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Focus on text on start
text.focus();

addWordToDOM();

// Event listeners

text.addEventListener('input', e => {
  const insertedText = e.target.value;
  if(insertedText === randomWord){        
    updateScore();    
    addWordToDOM();
    // Clear input field
    e.target.value = "";
    time += 3;
  }
})




