export const dynamic = "force-dynamic";
const API_KEY = process.env.API_KEY;


export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/4/auth/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/day"
    }?access_token=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();

  const results = data.results;
  return (
    <h1 className='text-red-50'>AB17</h1>
  )}
