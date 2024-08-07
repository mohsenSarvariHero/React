import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { Button } from "./components/Button";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="d-flex justify-content-center">
      <div>
        {visible && (
          <Alert onClose={() => setVisible(false)}>
            heloo world <b>mohsen</b>
          </Alert>
        )}
        <Button color="primary" onClick={() => setVisible(true)}>
          my Button
        </Button>
        <ListGroup />
      </div>
    </div>
  );
}

export default App;
