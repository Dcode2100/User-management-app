import React from "react";
import "./App.css";
function App() {
  const [item, setItem] = React.useState([
    { id: "1", name: "abce", description: "random text1" },
    { id: "2", name: "xyz", description: "random text2" },
    { id: "3", name: "pqr", description: "random text3" },
    { id: "4", name: "lmn", description: "random text4" },
    { id: "5", name: "ijk", description: "random text5" },
  ]);

  function handleRemove(itemID) {
    
    const newlist = item.filter(item => item.id !== itemID)
    setItem(newlist)
  }
  return (
    <div className="app">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleRemove(item.id)} className="td-btn">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td>
            <button className="add-btn">Add</button>
          </td>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
