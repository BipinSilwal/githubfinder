import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/layouts/About';
import Footer from './components/layouts/Footer';
import Home from './components/layouts/Home';
import Navbar from './components/layouts/Navbar';
import Notfound from './components/layouts/Notfound';
import { GlobalStateProvider } from './context/github/GithubContext';

function App() {
  return (
    <>
      <GlobalStateProvider>
        <Router>
          <div>
            <div className="flex flex-col justify-between h-screen">
              <Navbar />
              <main className="container mx-auto px-3 pb-12">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/notfound" element={<Notfound />} />
                  <Route path="/*" element={<Notfound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </GlobalStateProvider>
    </>
  );
}

export default App;
