export default function filterHandler(event, results) {
  const filter = [];
  results.map((product) => {
    if (product.origin.value === event.target.value) {
      filter.push(product);
    }
  });
  return filter;
}
