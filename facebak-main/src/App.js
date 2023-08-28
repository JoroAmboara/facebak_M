// App.js
import "./App.css";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Retirez la partie auth.onAuthStateChanged car elle utilise Firebase

    dispatch(setLoading(false));
    console.log("User is not logged in.");
  }, [dispatch]); // Ajoutez "dispatch" comme dépendance

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  return (
    <div className="app">
      {isLoading ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authenticate />}</>
      )}
    </div>
  );
}

export default App;
