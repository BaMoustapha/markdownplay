import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';

const App = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const download = () => {
    const doc = new jsPDF();
    doc.text(newTodo, 15, 15);
    doc.save("text.pdf");
  };

  return (
    <main className='container-fluid bg-dark'>
      <div className='container'>
        <div className='row d-flex'>
          <h3 className='text-center me-5 text-white my-4'>Markdown Editor</h3>
          <div className='col-md-6'>
            <textarea
              type='text'
              className='form-control mb-3 bg-secondary text-white'
              value={newTodo}
              onChange={handleOnChange}
            />
          </div>
          <div className='col-md-6'>
            <textarea className='form-control' value={newTodo} readOnly></textarea>
          </div>
        </div>
      </div>
      <div className='text-center mx-auto'>
        <button className='text-center bg-primary rounded text-white fs-3' onClick={download}>
          Download Text
        </button>
      </div>
    </main>
  );
};

export default App;
