import { useState, useEffect } from "react";
import axios from "axios";

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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">News App</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
