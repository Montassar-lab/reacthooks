import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

const Cardmovies=({el, movies, setMovies})=>{

    const handledelete=(a)=> setMovies(movies.filter(el=> el.id !==a))
    const [showMore, setShowMore] = useState(false);


    return(
        <div>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={el.posterURL} style={{width :'286px',height:'310px'}} />
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
    
                            <Card.Text>
                            {showMore ? el.description : `${el.description.substring(0, 100)}`}
                            <button onClick={()=> setShowMore(!showMore)} className="btn">{showMore ? 'Show Less' : '...Show More'}</button>
                            
                            </Card.Text>

                            <Card.Text>{el.rating}</Card.Text>
                            
                            <Button onClick={()=>handledelete(el.id)} variant="primary">DELETE</Button>

                            
                        </Card.Body>
                </Card>
            
        </div>
    )
}

export default Cardmovies