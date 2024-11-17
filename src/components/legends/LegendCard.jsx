import React, { useState } from 'react'
import {Col, Card} from 'react-bootstrap';

const LegendCard = ({legend}) => {
    const [show, setShow] = useState(true)
  return (
    
      <Col xs={10} sm={8} md={6} lg={4} xl={3} className='g-3'>
    <Card  onClick={()=> setShow(!show)} role="button" >
        {
            show ? <Card.Img variant="top" src={legend.img} className="legend-image" title={legend.name}   /> : <> <Card.Body onClick={()=> setShow(true)} >
            <Card.Title>{legend.name}</Card.Title>
           <ul className='m-auto w-100 '  > 
            {legend.statistics.map(item => <li className='list-unstyled h5 text-start' >⚽{item}</li>)}
           </ul>
           
          </Card.Body   >
          <Card.Footer>
            Career Years: {legend.official_career}
          </Card.Footer></> 
        }

      
      
    </Card></Col>
    
  )
}

export default LegendCard
