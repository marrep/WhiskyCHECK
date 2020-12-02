export default function createOriginTag(productData) {
  const arrayData = [];
  productData.forEach((element) => {
    if (!arrayData.includes(element.origin)) {
      arrayData.push(element.origin);
    }
  });

  return (
    <>
      {arrayData.map((element, index) => (
        <label htmlFor={element[index]}>
          {element}
          <input
            type="checkbox"
            name="origin"
            value={element}
            id={element[index]}
          />
        </label>
      ))}
    </>
  );
}
