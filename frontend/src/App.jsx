import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvide } from "./context/AuthContext";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import "C://Users//DELL//Desktop//mern//mern-app//frontend//dist//output.css"; // Adjust the path as needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <AuthProvide>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App;
