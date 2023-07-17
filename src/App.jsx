import { useState, useCallback } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hook/useMovies'
import { useSearch } from './hook/useSearch'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='flex flex-col ml-5 justify-center items-center w-[100%]'>
      <header className='flex flex-col justify-center items-center'>
        <h1 className='sm:text-xl font-bold text-lg text-primary mt-5 mb-5 uppercase'>Movies search</h1>
        <form onSubmit={handleSubmit} className='flex items-center justify-center'>
          <input className='bg-gray-500 text-white rounded-full py-2 pr-2 pl-5 border-solid border-1 border-transparent' onChange={handleChange} value={search} name='query' type='text' placeholder='Avengers, Matrix, etc.' />
          <input className='ml-5' type='checkbox' onChange={handleSort} checked={sort} />
          <button className='ml-5 bg-primary text-white font-bold rounded-full pl-2 pr-2 pt-1 pb-1'>Search</button>
        </form>
        {error && <p className='text-red-600'>{error}</p>}
      </header>
      <main className='flex justify-center w-[100%]'>
        {
          loading ? 'Loading...' : <Movies movies={movies} />
        }

      </main>
    </div>
  )
}

export default App
