import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

function ExplorePage() {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY) {
      setPageNo((prev) => prev + 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pageNo,params.explore]);
  useEffect(() => {
    setPageNo(1)
    setData([])
    fetchData()

  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="pt-16">
        <div className="container mx-auto">
          <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
            Popular {params.explore} Shows
          </h3>
          <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
            {data.map((exploreData, index) => {
              return(
                <Card
                  data={exploreData}
                  media_type={params.explore}
                  key={exploreData.id + "exploreSection"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ExplorePage;
