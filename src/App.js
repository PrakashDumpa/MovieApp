import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import NavBar from "./components/NavBar";
import MovieCardItemDetails from "./components/MovieCardItemDetails";
import Layout from "./components/Layout";

const App = () => (
  <BrowserRouter>
    {/* <NavBar /> */}
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<MovieCardItemDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
