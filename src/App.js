import { useState, useEffect } from "react";
import Form from "./Form";
//import List from "./List";
import Table from "./Table";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItem(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
    { /*<List item={item} />*/}
    <Table item={item}/>
    </div>
  );
}

export default App;
