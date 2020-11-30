export function onStockTags(productData) {
  const arrayData = [];
  productData.forEach((element) => {
    element.offers.forEach((item) => {
      if (!arrayData.includes(item.onStock)) {
        arrayData.push(item.onStock);
      }
    });
  });

  return (
    <div>
      {arrayData.map((element, index) => (
        <span index={index}>{element}</span>
      ))}
    </div>
  );
}

export function originTags(productData) {
  const arrayData = [];
  productData.forEach((element) => {
    if (!arrayData.includes(element.origin)) {
      arrayData.push(element.origin);
    }
  });

  return (
    <div>
      {arrayData.map((element, index) => (
        <span index={index}>{element}</span>
      ))}
    </div>
  );
}
