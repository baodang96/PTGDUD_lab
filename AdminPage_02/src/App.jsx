import './App.css'
import AdminPage from './pages/AdminPage/AdminPage'
import { CustomerProvider } from './contexts/CustomerContext'
import { OverviewProvider } from './contexts/OverviewContext'

function App() {

  return (
    <>
      <CustomerProvider>
        <OverviewProvider>
          <AdminPage></AdminPage>
        </OverviewProvider>
      </CustomerProvider>
    </>
  )
}

export default App