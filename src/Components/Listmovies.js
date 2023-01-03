import Cardmovies from './Cardmovies';

const Listmovies=({movies,titre, setMovies, etoile})=>{

    const x = movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile)
                    .map(el=> <Cardmovies key={el.id} el={el} movies={movies} setMovies={setMovies}/> )

    return(
        <div className='listsyle'>
            {
              x.length === 0 ? <img src="/image.jpg" alt='Notfound'/> : x
            }
            
        </div>

    )
}

export default Listmovies