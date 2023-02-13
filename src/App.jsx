import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Homepage, Profile, Login, Registration } from "./pages/index";

function App() {
  return (
    <div style={{ width: "98.5vw" }} className=" m-0 p-0 box-border">
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
