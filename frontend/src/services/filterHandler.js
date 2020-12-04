export default function filterHandler(tagTitle, originFilter, setOriginFilter) {
  originFilter.includes(tagTitle)
    ? removeFilter(tagTitle, originFilter, setOriginFilter)
    : addFilter(tagTitle, originFilter, setOriginFilter);

  function removeFilter(tagTitle, originFilter, setOriginFilter) {
    const index = originFilter.findIndex((elem) => elem === tagTitle);
    setOriginFilter([
      ...originFilter.slice(0, index),
      ...originFilter.slice(index + 1),
    ]);
  }

  function addFilter(tagTitle, originFilter, setOriginFilter) {
    setOriginFilter([...originFilter, tagTitle]);
  }
}
