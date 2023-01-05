
import {Card,Button} from 'react-bootstrap'
import Rating from '@mui/material/Rating'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Cardmovies=({el, movies, setMovies})=>{

    const handledelete=(a)=> setMovies(movies.filter(el=> el.id !==a))
    const [showMore, setShowMore] = useState(false);


    return(
        <div>

                <Card style={{ width: '18rem' }}>
                <Link to={`/Descriptionpage/${el.id}`}>
                    <Card.Img variant="top" src={el.posterURL} style={{width :'286px',height:'310px'}} />
                    </Link>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
    
                            <Card.Text>
                            {showMore ? el.description : `${el.description.substring(0, 100)}`}
                            <button onClick={()=> setShowMore(!showMore)} className="btn">{showMore ? 'Show Less' : '...Show More'}</button>
                            
                            </Card.Text>

                            <Rating name="read-only" value={el.rating} readOnly />
                            
                            <Button onClick={()=>handledelete(el.id)} variant="primary">DELETE</Button>

                            
                        </Card.Body>
                </Card>
            
        </div>
    )
}

export default Cardmovies