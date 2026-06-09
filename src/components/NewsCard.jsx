import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      {article.source?.name && (
        <p className="text-gray-400 font-normal text-sm mb-2">
          Source: {article.source.name}
        </p>
      )}
      <p className="text-gray-400 font-normal text-sm">{article.description}</p>
      <div className="card-actions justify-end mt-4">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white font-bold btn btn-link"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
