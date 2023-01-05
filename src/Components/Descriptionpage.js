import { Button } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"


const Descriptionpage=({movies})=>{

    const {djeja}=useParams()
    const found = movies.find(el=>el.id==djeja)

    return(
        <div>
            <h1>{found.title}</h1>
            <p>{found.description}</p>

            <video width="560" height="315" muted controls> 
                <source src={found.videoURL}/>
            </video>

            <br/>

            <Link to='/'><Button variant="outline-info">BACK TO HOME</Button></Link>
        </div>
    )
}

export default Descriptionpage