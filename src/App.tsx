// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views
import Error from "./views/Error";
import Main from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
