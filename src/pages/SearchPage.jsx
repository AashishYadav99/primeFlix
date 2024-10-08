import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function SearchPage() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const navigate=useNavigate()

  // Function to fetch data based on the query
  const fetchData = async () => {
    try {
      // Use URLSearchParams to extract the query parameter
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get("q") || "";

      const response = await axios.get(`/search/multi`, {
        params: {
          query: query,
          page: 1,
        },
      });

      // Update data state
      setData(response.data.results || []);
      console.log("Fetched data:", response.data.results);
    } catch (error) {
      console.error("Search API request error:", error);
    }
  };

  // Effect to fetch data when the query changes
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setQuery(queryParams.get("q") || "");
    fetchData();
  }, [location.search]);

  return (
    <>
      <div className="py-16">
        <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-30">
          <input type=" text" placeholder="search here..." onChange={(e)=>navigate(`/search?q=${e.target.value}`)} className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900"/>
        </div>
        <div className="container mx-auto">
          <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
            Search Results for "{query}"
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
            {data.length > 0 ? (
              data.map((searchData) => (
                <Card
                  data={searchData}
                  media_type={searchData.media_type}
                  key={searchData.id + "search"}
                />
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPage;
