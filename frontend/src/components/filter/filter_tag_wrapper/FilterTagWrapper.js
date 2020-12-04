import React from "react";

export default function FilterTagWrapper({
  originFilter,
  filterHandler,
  setOriginFilter,
}) {
  console.log(originFilter);

  return (
    <div>
      {originFilter.map((filterTag) => (
        <span
          onClick={(event) =>
            filterHandler(event.target.innerHTML, originFilter, setOriginFilter)
          }
        >
          {filterTag}
        </span>
      ))}
    </div>
  );
}
