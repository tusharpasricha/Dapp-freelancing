import { EthProvider } from "./contexts/EthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Find from './pages/find';
import Signup from "./pages/Signup";

import Become from "./pages/become";

import app from "./data/firebase";

import RequireAuth from "./routes/PrivateRoute";
import { getAuth } from 'firebase/auth';
import { AuthProvider } from "./stores/AuthContext";


function App() {

  const auth = getAuth(app);
  console.log(auth.currentUser);
  // const navigate = useNavigate();

  return (
    <AuthProvider>
    <EthProvider>
      <div id="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/find" element={
          <RequireAuth>
          <Find/>
          </RequireAuth>
          } />
          <Route path="/become" element={<Become />} />
      </Routes>
    </BrowserRouter>
        
      </div>
    </EthProvider>
    </AuthProvider>
  );
}

export default App;
