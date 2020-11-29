export default function selectRandomItems(criteria, data, amount) {
  const shuffle = require("shuffle-array");
  const returnedItemSelection = [];
  const productFilter = data.filter((product) => product.origin === criteria);
  for (var i = 0; i < amount; i++) {
    const shuffledItemSelection = shuffle(productFilter);
    returnedItemSelection.push(
      shuffledItemSelection[Math.floor(Math.random() * productFilter.length)]
    );
  }
  return returnedItemSelection;
}
