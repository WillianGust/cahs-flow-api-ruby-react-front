import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [extract, setExtract] = useState([]);
  const [total_value, setTotalValue] = useState([]);
  const [revenues, setRevenues] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
   // Carregar os dados da API ao montar o componente
   useEffect(() => {
    fetchData();
  },[]);

  // Função para carregar os dados da API
  const fetchData = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/cashes`);
      const data = await response.json();
      setListCash(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setListCash = (data) => {
    setExtract(data.extract);
    setTotalValue(data.total_value);
    setRevenues(data.revenues);
    setExpenses(data.expenses);
  }
// Função para realizar busca na pagina
  const handleSearch = async (event) => {
    event.preventDefault();

    const searchValue = document.querySelector("input[name='tipo']").value;
    try {
      const response = await fetch(`${apiUrl}/api/cashes?tipo=${encodeURIComponent(searchValue)} `)
      const data = await response.json();
      setListCash(data);
    } catch(error){
      console.error('Error to search extract: '.error);
    }
  };

  // Função para excluir um registro
  const handleDelete = async (id) => {
    if ( window.confirm("Confirm delete?" )){
      try {
        await fetch(`${apiUrl}/api/cashes/${id}`, {
          method: 'DELETE',
        });
        fetchData();
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    }
  };

  // Função para adicionar um novo registro (exemplo)
  const handleAdd = () => {
    setShowForm(true);
    };

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
    const tipo = document.querySelector(".formAdd input[name='tipo']").value;
    const valor = document.querySelector(".formAdd input[name='valor']").value;
    const status = document.querySelector(".formAdd select[name='status']").value;

      const newRecord = {
        tipo: tipo,
        value: valor,
        status: status,
      };

      await fetch(`${apiUrl}/api/cashes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecord),
      });

  fetchData();
  setShowForm(false);
  } catch (error) {
    console.error('Error adding record:', error);
  }
};

  return (
    <div>
      <div className="card mb-3 divBox" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-header mb-3">Total value</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            ${extract.length > 0 ? total_value.toFixed(2) : '0.00'}
          </h6>
        </div>
      </div>
      <div className="card mb-3 divBox" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-header mb-3">Revenues</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            ${extract.length > 0 ? revenues.toFixed(2) : '0.00'}
          </h6>
        </div>
      </div>
      <div className="card mb-3 divBox" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-header mb-3">Expenses</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            - ${extract.length > 0 ? expenses.toFixed(2) : '0.00'}
          </h6>
        </div>
      </div>
    {/* Search input add new */}
      <div>
        <form onSubmit={handleSearch} className="row g-3 justify-content-right">
          <div className="col-6">
            <input type="text" className="form-control" name="tipo" id="tipo" placeholder="Search..." />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary mb-3">Search</button>
          </div>
        <div className="col-2 btnAdd">
          <button className="btn btn-primary mb-3" onClick={handleAdd}>Add</button>
        </div>
        </form>
      </div>

      {showForm && (
      <form onSubmit={handleRegister} className="formAdd">
        <div className="mb-3">
          <label htmlFor="type" className="form-label">Type</label>
          <input type="text" className="form-control" name="tipo" id="tipo" placeholder="Enter the type of movement" />
        </div>

        <div className="mb-3">
          <label htmlFor="value" className="form-label">Value</label>
          <input type="number" step="0.01" min="0" className="form-control" name="valor" id="value" placeholder="Inform the value" />
        </div>

        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select className="form-select" name="status" id="status">
            <option value="0">Input</option>
            <option value="1">Output</option>
          </select>
        </div>
        <button type="submit" className="btn btn-outline-primary">Save</button>
        <a href="/" className="btn btn-outline-danger">Cancel</a>
      </form>)}

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {extract.map((item) => (
              <tr key={item.id}>
                <td>{item.tipo}</td>
                <td>${item.value}</td>
                <td style={{ backgroundColor: item.status === 0 ? '#00c3ff52' : '#f4262669' }}>
                  {item.status === 0 ? 'Credit' : 'Debt'}
                </td>
                <td style={{ width: '20px' }}>
                  <button className="btn btn-outline-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
