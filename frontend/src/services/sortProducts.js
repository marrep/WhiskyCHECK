export default function sortProducts(
  sortSelector,
  setProductView,
  productView
) {
  console.log(sortSelector);
  if (sortSelector === "NameUp") {
    setProductView(
      Object.assign(
        [],
        productView.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        })
      )
    );
  }
  if (sortSelector === "NameDown") {
    setProductView(
      Object.assign(
        [],
        productView.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          return 0;
        })
      )
    );
  }
}
