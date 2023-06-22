import { useRouter } from "next/router";

function TopRatedMovieList({ movieArray, loading }) {
  const router = useRouter();
  const { searchedMovie } = router.query;

  function movieClicked(id) {
    router.push(`/${searchedMovie}/${id}`);
  }

  return (
    <>
      <section className="text-gray-600 relative">
        <div id="movie-list" className="flex flex-wrap justify-between">
          {loading ? (
            new Array(4).fill(0).map((_, index) => (
              <div
                className="px-8 py-2 mb-4 border-l-2 border-[#EF3E38] border-opacity-60 flex items-center space-x-12 w-full"
                key={index}
              >
                {/* Placeholder content */}
              </div>
            ))
          ) : (
            <>
              <div className="flex flex-col ">
                {movieArray
                  .filter((movie) => movie.backdrop_path)
                  .filter((movie) => movie.original_language === "en")
                  .slice(0, 4)
                  .map((movie, index) => {
                    const releaseDate = new Date(movie.release_date);
                    const formattedReleaseDate = releaseDate.toLocaleDateString(
                      "en-US",
                      { month: "short", day: "2-digit", year: "numeric" }
                    );

                    return (
                      <div
                        className="rounded-2xl hover:scale-[1.01] transition duration-300 flex flex-row items-center justify-center mb-8 space-x-8 px-6 bg-black/50"
                        key={movie.id}
                        onClick={() => movieClicked(movie.id)}
                      >
                        <p className="text-white text-5xl">{index + 1}</p>
                        <img
                          className="rounded-xl"
                          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                          alt={movie.original_title}
                        />
                        <div>
                          <h2 className="text-lg w-[300px] sm:text-3xl text-white font-semibold title-font">
                            {movie.original_title}
                          </h2>
                          <h2 className="text-lg w-[300px] sm:text-3xl text-white font-semibold title-font">
                            {movie.vote_average}
                          </h2>
                          <p className="leading-relaxed text-2xl pb-0 text-gray-600">
                            {formattedReleaseDate}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="flex flex-col">
                {movieArray
                  .filter((movie) => movie.backdrop_path)
                  .filter((movie) => movie.original_language === "en")
                  .slice(4, 8)
                  .map((movie, index) => {
                    const releaseDate = new Date(movie.release_date);
                    const formattedReleaseDate = releaseDate.toLocaleDateString(
                      "en-US",
                      { month: "short", day: "2-digit", year: "numeric" }
                    );

                    return (
                      <div
                        className="rounded-2xl hover:scale-[1.01] transition duration-300 flex flex-row items-center justify-center mb-8 space-x-8 px-6 bg-black/50"
                        key={movie.id}
                        onClick={() => movieClicked(movie.id)}
                      >
                        <p className="text-white text-5xl">{index + 5}</p>
                        <img
                          className="rounded-xl"
                          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
                          alt={movie.original_title}
                        />
                        <div>
                          <h2 className="text-lg w-[300px] sm:text-3xl text-white font-semibold title-font">
                            {movie.original_title}
                          </h2>
                          <h2 className="text-lg w-[300px] sm:text-3xl text-white font-semibold title-font">
                            {movie.vote_average}
                          </h2>
                          <p className="leading-relaxed text-2xl pb-0 text-gray-600">
                            {formattedReleaseDate}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default TopRatedMovieList;
