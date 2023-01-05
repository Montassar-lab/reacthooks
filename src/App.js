import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Addmovie from './Components/Addmovie';
import Descriptionpage from './Components/Descriptionpage';
import Filtermovie from './Components/Filtermovie';
import Header from './Components/Header';
import Home from './Components/Home';
import Listmovies from './Components/Listmovies';

function App() {

  const [movies,setMovies]=useState([
    {title : 'March of the Penguins',
    videoURL:'https://www.youtube.com/watch?v=L7tWNwhSocE&t=21s', 
    posterURL : 'https://m.media-amazon.com/images/M/MV5BMTM1NDc5MDYxMl5BMl5BanBnXkFtZTcwMjMzNDAzMQ@@._V1_.jpg', 
    description : 'In the Antarctic, every March since the beginning of time, the quest begins to find the perfect mate and start a family.', 
    rating : 5,
    id : Math.random()},
    {title : 'Surviving Paradise: A Family Tale',
    videoURL:'https://www.youtube.com/watch?v=L7tWNwhSocE&t=21s',
    posterURL : 'https://occ-0-55-185.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWmjwaF0GL2E-2ewvgPFdQOolgSDocWbVKVYZiXYCIqsEBrMLF9V239DQs6E6EDzWqEonQouE5_oWQQstuWeHQa-WREtwJi_4mhq.jpg?r=4f1', 
    description : 'In this wildlife drama, a worsening dry season in the Kalahari Desert leaves prides, packs and herds to rely on the power of family to survive.', 
    rating : 4,
    id : Math.random()},
    {title : 'The Rescue', 
    videoURL:'https://www.youtube.com/watch?v=L7tWNwhSocE&t=21s',
    posterURL : 'https://lumiere-a.akamaihd.net/v1/images/therescue-poster_1080x1600_e9ca44a1.jpeg', 
    description : 'THE RESCUE chronicles the enthralling, against-all-odds story that transfixed the world in 2018: the daring rescue of twelve boys and their coach from deep inside a flooded cave in Northern Thailand. Academy Award®-winning directors and producers E', 
    rating : 3,
    id : Math.random()},
    {title : 'Polar Bear', 
    videoURL:'https://www.youtube.com/watch?v=L7tWNwhSocE&t=21s',
    posterURL : 'https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/polarbear-movie-poster-image-.jpg', 
    description : 'Imagine a vast, wild, and magical place in the far north of Alaska where one of earths greatest natural spectacles unfolds. Discover a land that has evolved intact and untamed since the beginning of time, a world few have truly seen until now.', 
    rating : 3,
    id : Math.random()}
  ])

  const [titre,setTitre] = useState('')
  const [etoile,setEtoile] = useState(0)
  

  return (
    <div>
      <Header/>

      <br/>
      
        <div className='filtrstyle'>
        
            <Addmovie movies={movies} setMovies={setMovies} />
            <Filtermovie titre={titre} setTitre={setTitre} etoile={etoile} setEtoile={setEtoile}/>
       
        </div>
       
        <br/>
        <br/>

            

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Listmovies' element={<Listmovies movies={movies} titre={titre} setMovies={setMovies} etoile={etoile}/>}/>
      <Route path='/Descriptionpage/:djeja' element={<Descriptionpage movies={movies}/>}/> 
      </Routes>
    </div>

  );
}

export default App;
