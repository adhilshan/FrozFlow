import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Pages/Login';
import CreateAccount from './Pages/CreateAccount';
import Dashboard from './Pages/Dashboard';
import { motion } from 'framer-motion';

// ... (previous imports)

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%", // Slide in from the right
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100%", // Slide out to the left
  },
};

// ... (rest of the code)

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/auth/login"
            element={
              <motion.div
                key="login"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/auth/create-account"
            element={
              <motion.div
                key="create-account"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <CreateAccount />
              </motion.div>
            }
          />
          <Route
            path="/"
            element={
              <motion.div
                key="dashboard"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Dashboard />
              </motion.div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
