import React, { useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { data } from '../../helper/data';
import LegendCard from './LegendCard';

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
    {data.map((legend) => 
        
        <LegendCard key={legend.id}  legend={legend}  />
      
    )}
     
  </Row>
    
  </Container>;
};

export default LegendContainer;
