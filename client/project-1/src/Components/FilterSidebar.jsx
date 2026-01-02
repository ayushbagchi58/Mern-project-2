import React, { useState } from "react";

const FilterSidebar = ({ onApply }) => {
  const [filters, setFilters] = useState({
    size: [],
    color: [],
    brand: []
  });

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "White", "Red"];
  const brands = ["Gucci", "Turtle", "Peter England"];

  const handleCheckbox = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);

      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((i) => i !== value)
          : [...prev[type], value],
      };
    });
  };

  const apply = () => onApply(filters);

  return (
    <div className="col-12 col-md-3 col-lg-2 p-0">
      <div className="bg-light border-end h-100 p-3 sticky-md-top">
        <h5 className="fw-bold border-bottom pb-2 mb-3">Filters</h5>

        {/* Size */}
        <div className="mb-3">
          <h6 className="fw-semibold">Size</h6>
          {sizes.map((item) => (
            <div className="form-check" key={item}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={filters.size.includes(item)}
                onChange={() => handleCheckbox("size", item)}
              />
              <label className="form-check-label">{item}</label>
            </div>
          ))}
        </div>

        {/* Color */}
        <div className="mb-3">
          <h6 className="fw-semibold">Color</h6>
          {colors.map((item) => (
            <div className="form-check" key={item}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={filters.color.includes(item)}
                onChange={() => handleCheckbox("color", item)}
              />
              <label className="form-check-label">{item}</label>
            </div>
          ))}
        </div>

        {/* Brand */}
        <div className="mb-4">
          <h6 className="fw-semibold">Brand</h6>
          {brands.map((item) => (
            <div className="form-check" key={item}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={filters.brand.includes(item)}
                onChange={() => handleCheckbox("brand", item)}
              />
              <label className="form-check-label">{item}</label>
            </div>
          ))}
        </div>

        <button className="btn btn-primary w-100" onClick={apply}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
