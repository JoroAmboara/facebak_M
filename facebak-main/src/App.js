import "./App.css";
import Homepage from "./Homepage";
import Authenticate from "./authenticate/Authenticate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setLoading } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(false));
    console.log("User is not logged in.");
  }, [dispatch]);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);
  
  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>{user ? <Homepage /> : <Authenticate />}</>
      )}
    </div>
  );
}

export default App;
