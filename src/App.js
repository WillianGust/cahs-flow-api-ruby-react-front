import './App.css';

function App() {
  return (
    <div>
      <div className="divCards">
        <div className="card mb-3 divBox" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-header mb-3">Total value</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">$19.950,20</h6>
          </div>
        </div>
        <div className="card mb-3 divBox" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-header mb-3">Revenues</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">$20.750,20</h6>
          </div>
        </div>
        <div className="card mb-3 divBox" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-header mb-3">Expenses</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">- $800,00</h6>
          </div>
        </div>
      </div>

      <div>
        <form className="row g-3 justify-content-center">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              name="tipo"
              value=""
              id="tipo"
              placeholder="Search..."
            />
          </div>
          <div className="col-4">
            <button type="submit" className="btn btn-primary mb-3">
              Search
            </button>
          </div>
          <div className="col-2 btnAdd">
            <a href="/add" className="btn btn-primary mb-3">
              Add
            </a>
          </div>
        </form>
      </div>

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
            <tr>
              <td>Recebimento de pagamento</td>
              <td>$ 500,00</td>
              <td style={{ backgroundColor: '#00c3ff52' }}>Credit</td>
              <td style={{ width: '20px' }}>
                <a
                  href="/delete/7"
                  className="btn btn-outline-danger"
                  onClick={() => window.confirm('Confirm?')}
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr>
              <td>Pagamento de fornecedor</td>
              <td>- $ 800,00</td>
              <td style={{ backgroundColor: '#f4262669' }}>Debt</td>
              <td style={{ width: '20px' }}>
                <a
                  href="/delete/8"
                  className="btn btn-outline-danger"
                  onClick={() => window.confirm('Confirm?')}
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr>
              <td>Transferência bancária</td>
              <td>$ 250,20</td>
              <td style={{ backgroundColor: '#00c3ff52' }}>Credit</td>
              <td style={{ width: '20px' }}>
                <a
                  href="/delete/9"
                  className="btn btn-outline-danger"
                  onClick={() => window.confirm('Confirm?')}
                >
                  Delete
                </a>
              </td>
            </tr>

            <tr>
              <td>Venda carro</td>
              <td>$ 20.000,00</td>
              <td style={{ backgroundColor: '#00c3ff52' }}>Credit</td>
              <td style={{ width: '20px' }}>
                <a
                  href="/delete/10"
                  className="btn btn-outline-danger"
                  onClick={() => window.confirm('Confirm?')}
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
