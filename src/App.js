import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown > 0) {
        setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);
    } else {
        window.location.href = "https://www.google.com";
    }
  }, [countdown]);

  return (
    <div className="App">
      Redirecting in {countdown} seconds...
    </div>
  );
}

export default App;
