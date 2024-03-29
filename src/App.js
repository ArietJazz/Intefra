import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom";
import Routers from "./pages/Routers";
import 'swiper/css';


function App() {
    return (
      <ChakraProvider>
            <BrowserRouter>
              <Routers/>
            </BrowserRouter>
      </ChakraProvider>
    );
}

export default App;
