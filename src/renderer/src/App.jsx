import DataTable from './components/DataTable.jsx'

function App() {
  const initUsers = [
    { id: 0, LastName: 'Pupkin', FirstName: 'Vasiliy' },
    { id: 1, LastName: 'Doe', FirstName: 'John' }
  ]

  return (
    <>
      <div className="text">Electron Lab for Hexlet</div>
      <p className="tip">Please try to add new users!</p>
      <div className="actions">
        <div className="action">
          <DataTable initUsers={initUsers} />
        </div>
      </div>
    </>
  )
}

export default App
