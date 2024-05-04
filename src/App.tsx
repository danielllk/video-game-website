import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button colorScheme="blue">Button</Button>
    </div>
  );
}

export default App;
