import Board from "../../components/Board/Board";
import CustomerTable from "../../components/CustomTable/CustomTable";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import { useOverview } from "../../contexts/OverviewContext";
import './AdminPage.css'

function AdminPage() {
  const { overview } = useOverview();

  return (
    <>
      <div className="admin-page">
        <div className="nav-side">
          <Nav />
        </div>
        <div className="content-side">
          <Header />
          <div className="dash-board">
            {overview.map((item, index) => (
              <Board
                key={index}
                label={item.label}
                value={item.value}
                percent={item.percent}
                icon={item.icon}
                background={item.background}
                href={item.href}
              />
            ))}
          </div>
          <CustomerTable />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
