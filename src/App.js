import React, { useState } from 'react';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';

const App = () => {
  const [newTodo, setNewTodo] = useState('');

  const handleOnChange = (e) => {
    setNewTodo(e.target.value);
  };

  const download = () => {
    const doc = new jsPDF();
    const textLines = newTodo.split('\n');
    
    textLines.forEach((line, index) => {
      const splitText = doc.splitTextToSize(line, doc.internal.pageSize.width - 20);
      doc.text(10, 10 + index * 10, splitText);
    });
  
    doc.save("text.pdf");
  }

  return (
    
    <main className='container-fluid bg-black'>
      <div className='container'>
        <div className='row d-flex'>
          <h3 className='text-center me-5 text-white my-4'>Markdown Editor</h3>
          <div className='col-md-7'>
            <textarea
              type='text'
              className='form-control mb-3 bg-secondary text-white'
              value={newTodo}
              onChange={handleOnChange}
            />
          </div>
          <div className='col-md-4'>
            <textarea className='form-control text2' value={newTodo} readOnly></textarea>
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
