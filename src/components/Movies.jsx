function ListOfMovies ({ movies }) {
  return (
    <ul className='grid grid-cols-autofit w-[100%] gap-[1.87rem] items-center mb-5'>
      {
          movies.map(movie => (
            <li className='text-center' key={movie.id}>
              <div className='grid justify-items-stretch'>
                <h3 className='mt-5 font-semibold text-gray-200'>{movie.title}</h3>
                <p className='font-semibold text-gray-200'>{movie.year}</p>
                <img className='rounded-lg w-60 h-64 object-fit justify-self-center' src={movie.image} alt={movie.title} />
              </div>

            </li>
          ))
        }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p className='text-gray-200'>No se encontraron peliculas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (

    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />

  )
}
