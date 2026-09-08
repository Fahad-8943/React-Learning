import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ResumeGenerator from "./pages/ResumeGenerator";
import UserForm from "./pages/UserForm";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";
import ViewResume from "./pages/ViewResume";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resume" element={<ResumeGenerator />}></Route>
        <Route path="/form" element={<UserForm />}></Route>
        <Route path="/history" element={<History />}></Route>

        <Route path="/resume/:id/view" element={<ViewResume/>}></Route>

        <Route path="/*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
