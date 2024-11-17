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

const handleChange = (e) => {

    setSearch(e.target.value)
    
}

    const filterData = data.filter(legend => legend.name.toLowerCase().includes(search.trim().toLowerCase()))

  return (
    <>
      {/* Add Fragment to wrap multiple elements */}

    <Form.Control type="search" placeholder="Search Legends" onChange={ handleChange}  />
  <Container>
  <Row>
    {filterData.map((legend) => 
        
        <LegendCard key={legend.id}  legend={legend}  />
      
    )}
     
  </Row>
    
  </Container> 
  </>
  )
 }; 

export default LegendContainer;


