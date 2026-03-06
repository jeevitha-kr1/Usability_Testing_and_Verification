import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResultFound from "../../assets/no-results.png";
import { use } from "react";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  //function which calls the movie search api and get the results based on the query and then set the data and loading state
const fetchMovies = () => {
//fetch the movie query
};
useEffect(() => {
  fetchMovies();
}, [query]);
  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <div className="content">
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="resultNotFound">
                <p>Sorry, Results not found!</p>
                <img className="logo" src={noResultFound} />
              </div>
            </>
          )}
        </ContentWrapper>
      )}
    </div>
  );
};

export default SearchResult;
