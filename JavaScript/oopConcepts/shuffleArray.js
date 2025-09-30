//

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

cards.sort(() => Math.random() - 0.5);

console.log(cards);

// sort() not efficient for large arrays as it is not a stable sort

// Fisher-Yates (Knuth) Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements this swap is maybe similar to that in python
    }
    return array;
}