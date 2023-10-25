import React from "react";
import { Colors } from "./Components/Colors";
import{Card ,CardContent} from"@mui/material"
function App() {
  return (
<Card sx={{height:1000,bgcolor:"lightgoldenrodyellow"}}>
  <CardContent>
    <Colors/>
    </CardContent>

  </Card>

  );
}

export default App;
