import React from "react";

const CategorySelector = ({ category, onCategoryChange }) => {
  const categories = [
    { id: "general", name: "General" },
    { id: "business", name: "Business" },
    { id: "entertainment", name: "Entertainment" },
    { id: "health", name: "Health" },
    { id: "science", name: "Science" },
    { id: "sports", name: "Sports" },
    { id: "technology", name: "Technology" },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-2 mb-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2 rounded-md ${
            category === cat.id
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-blue-200 *:**:not-[]:"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
