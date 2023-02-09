import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/layouts/About';
import Alert from './components/layouts/Alert';
import Footer from './components/layouts/Footer';
import Home from './components/layouts/Home';
import Navbar from './components/layouts/Navbar';
import Notfound from './components/layouts/Notfound';
import SingleUser from './components/layouts/SingleUser';
import { AlertProvider } from './context/alert/AlertContext';
import { GlobalStateProvider } from './context/github/GithubContext';

function App() {
  return (
    <>
      <GlobalStateProvider>
        <AlertProvider>
          <Router>
            <div>
              <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main className="container mx-auto px-3 pb-12">
                  <Alert />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user/:login" element={<SingleUser />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/notfound" element={<Notfound />} />
                    <Route path="/*" element={<Notfound />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </div>
          </Router>
        </AlertProvider>
      </GlobalStateProvider>
    </>
  );
}

export default App;
