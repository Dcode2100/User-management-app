import React,{useState,useEffect} from 'react'
import './BankModule.css'
import Modal from '../modal/Modal.jsx'
const BankModule = () => {
    const [item, setItem] = React.useState([
        { id: "1", name: "abce", description: "random text1" },
        { id: "2", name: "xyz", description: "random text2" },
        { id: "3", name: "pqr", description: "random text3" },
        { id: "4", name: "lmn", description: "random text4" },
        { id: "5", name: "ijk", description: "random text5" },
      ]);
      const [showModal, setShowModal] = React.useState(false);
      const [newItem, setNewItem] = useState({ id: "", name: "", description: ""});
      
      function handleRemove(itemID) {
        const newlist = item.filter((item) => item.id !== itemID);
        setItem(newlist);
      }
    
      function handleAddItem(){
        setItem((prevItems) => [...prevItems, newItem]);
        setShowModal(false);
        setNewItem({id: "", name: "", description: ""});
      }
  return (
    <div className="app-wrapper">
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
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="td-btn"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          Add
        </button>
        {showModal && (
          <Modal
            setShowModal={setShowModal}
            setNewItem={setNewItem}
            handleAddItem={handleAddItem}
          />
        )}
      </div>
  )
}

export default BankModule