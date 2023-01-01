import Cardmovies from './Cardmovies';

const Listmovies=({movies,titre, setMovies})=>{

    const x = movies.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()))
                    .map(el=> <Cardmovies el={el} movies={movies} setMovies={setMovies}/> )

    return(
        <div className='listsyle'>
            {
              x.length === 0 ? <img src="/image.jpg" alt='Notfound'/> : x
            }
            
        </div>

    )
}

export default Listmovies