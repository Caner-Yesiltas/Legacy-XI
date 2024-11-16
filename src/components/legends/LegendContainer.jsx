import React, { useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { data } from '../../helper/data';

const LegendContainer = () => {
    const [show, setShow] = useState(true)

    console.log(data);
    // Console.log usage in React:
// ✅ Top level - after imports (for data checking)
// ✅ Inside useEffect (for state/prop changes)
// ✅ In event handlers (onClick, onChange etc.)
// ❌ Avoid inside component body (causes multiple renders)
  return <Container>
  <Row>
    {data.map(legend=> 
    <Col xs={10} sm={8} md={6} lg={4} xl={3} className='g-3'  >
    <Card >
        {
            show ? <Card.Img onClick={()=> setShow(false)} variant="top" src={legend.img} className="legend-image"   /> : <> <Card.Body onClick={()=> setShow(true)} >
            <Card.Title>{legend.name}</Card.Title>
           <ul className='m-auto w-100 '  > 
            {legend.statistics.map(item => <li className='list-unstyled h5 text-start' >⚽{item}</li>)}
           </ul>
           
          </Card.Body   >
          <Card.Footer>
            Career Years: {legend.official_career}
          </Card.Footer></> 
        }

      
      
    </Card></Col>  )  }
  </Row>
    
  </Container>;
};

export default LegendContainer;
