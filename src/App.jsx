import { useState, useEffect } from "react";
import CategorySelector from "./components/CategorySelector";
import axios from "axios";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
  const PAGE_SIZE = 10;

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${PAGE_SIZE}&page=${currentPage}&apiKey=${API_KEY}`,
      );

      console.log("API Response:", response.data);

      const articles = response.data.articles || [];
      setNews(articles);
      setTotalResults(response.data.totalResults || 0);
      setTotalPages(Math.ceil((response.data.totalResults || 0) / PAGE_SIZE));
    } catch (error) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-blue-900 text-white p-4 mb-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">News App</h1>
        </div>
      </header>
      <main className="container mx-auto p-4  font-bold text-xl">
        <div>
          <CategorySelector
            category={category}
            onCategoryChange={handleCategoryChange}
          />
        </div>
        <div>
          <p className="text-gray-500 text-medium mb-4 justify-center flex p-3">
            Total Results: {totalResults}
          </p>
        </div>
        {loading && (
          <div className="flex justify-center items-center ">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        {error && <div className="alert alert-error">{error}</div>}
        {!loading && !error && <NewsList articles={news} />}
        {totalPages > 1 && (
          <div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPrevious={handlePreviousPage}
              onNext={handleNextPage}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
