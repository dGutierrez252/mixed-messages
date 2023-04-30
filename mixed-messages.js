const time = ['At dawn', 'In the morning', 'At noon', 'In the afternoon', 'At dusk', 'At night', 'At midnight'];
const animal = ['dog', 'cat', 'racoon', 'pigeon', 'lizard', 'shark', 'chicken'];
const action = ['walk', 'run', 'sneak', 'fly', 'swim', 'bust', 'materialize'];
const place = ['yard', 'car', 'bedroom', 'kitchen', 'pants', 'house', 'bathroom'];

const random = (arr) => arr[Math.floor(Math.random()*7)];

const sentenceGenerator = () => console.log(`${random(time)}, a ${random(animal)} will ${random(action)} into your ${random(place)}.`);

sentenceGenerator();