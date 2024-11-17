import React, { useState } from 'react';
import { Container, Row, Form} from 'react-bootstrap';
import { data } from '../../helper/data';
import LegendCard from './LegendCard';

const LegendContainer = () => {
    const [show, setShow] = useState(true)
   const [search, setSearch] = useState("")

    console.log(data);
    // Console.log usage in React:
// ✅ Top level - after imports (for data checking)
// ✅ Inside useEffect (for state/prop changes)
// ✅ In event handlers (onClick, onChange etc.)
// ❌ Avoid inside component body (causes multiple renders)



  return (
    <>  {/* Add Fragment to wrap multiple elements */}

    <Form.Control type="search" placeholder="Search Legends" onChange={handleChange}  />
  <Container>
  <Row>
    {data.map((legend) => 
        
        <LegendCard key={legend.id}  legend={legend}  />
      
    )}
     
  </Row>
    
  </Container> 
  </>
  )
 }; 

export default LegendContainer;


