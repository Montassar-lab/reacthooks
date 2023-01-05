import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rating } from "@mui/material"

const Filtermovie =({titre,setTitre,etoile,setEtoile})=>{

    const handlereset=()=>{
        setTitre('')
        setEtoile(0)
    }

    return(
        <div className='frstyle'>
             
              <Form.Control
                value = {titre}
                type="Text"
                className='inputstylefilter'
                placeholder="type here to filter..."
                onChange={(e)=>setTitre(e.target.value) }
                autoFocus
              />

            <Rating value={etoile} name="simple-controlled" onChange={(e)=>setEtoile(e.target.value)}/>
            
            <Button onClick={handlereset} variant="outline-warning">Reset</Button>{' '}
            

        </div>
    )
}

export default Filtermovie