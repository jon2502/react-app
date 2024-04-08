import ListGroup from "./components/ListGroup"
import Alert from "./components/alert"
import Button from "./Button"
import { useState } from "react"

function App(){
    const [alertVisibile, setAletVisilility]=useState(false)
    
    return <div>
      {alertVisibile && <Alert onClose={()=>setAletVisilility(false)}>My alert</Alert>}
      <Button onClick={() => setAletVisilility(true)}>My button</Button>
    </div>
}

export default App