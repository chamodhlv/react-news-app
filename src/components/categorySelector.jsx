import React from "react";

const categorySelector = ({ category, onCategoryChange }) => {
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
    <div className="flex justify-around mb-4">
      <div>
        {categories.map((cat) => (
          <button
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 py-2 rounded-md ${category === cat.id ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"}`}
            key={cat.id}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default categorySelector;
