import './App.css'
import AdminPage from './pages/AdminPage/AdminPage'
import { CustomerProvider } from './contexts/CustomerContext'

function App() {

  return (
    <>
      <CustomerProvider>
        <AdminPage></AdminPage>
      </CustomerProvider>
    </>
  )
}

export default App