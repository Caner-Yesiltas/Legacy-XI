import React from 'react';
import { Container } from 'react-bootstrap';
import { data } from '../../helper/data';

const LegendContainer = () => {
    console.log(data);
    // Console.log usage in React:
// ✅ Top level - after imports (for data checking)
// ✅ Inside useEffect (for state/prop changes)
// ✅ In event handlers (onClick, onChange etc.)
// ❌ Avoid inside component body (causes multiple renders)
  return <Container>
  
    
  </Container>;
};

export default LegendContainer;
