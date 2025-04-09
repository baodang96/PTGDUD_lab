import Board from "../../components/Board/Board";
import CustomerTable from "../../components/CustomTable/CustomTable";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import imp from "/assets/Download.png";
import exp from "/assets/Moveup.png";
import file from "/assets/Filetext1.png";
import dash from "/assets/Squaresfour1.png";

import AddCustomerModal from "../../components/Modal/AddCustomerModal"; // import modal

import { useOverview } from "../../contexts/OverviewContext";
import './AdminPage.css'
import Label from "../../../../Lab6/src/components/Label/Label";
import Button from "../../../../Lab6/src/components/Button/Button";
import { useState } from "react";

function AdminPage() {
  const { overview } = useOverview();

  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <div className="admin-page">
        <div className="nav-side">
          <Nav />
        </div>
        <div className="content-side">
          <Header />
          <Label text={"Overview"} icon={dash}></Label>
          <div className="dash-board">
            {overview.map((item) => (
              <Board
                key={item.id}
                label={item.label}
                value={item.value}
                percent={item.percent}
                icon={item.icon}
                background={item.background}
                href={item.href}
              />
            ))}
          </div>
          <div className="title-table">
            <Label icon={file} text={"Detailed report"}></Label>
            <div className="group-button">
              <Button label={"Import"} icon={imp} onClick={() => setShowAddModal(true)}></Button>
              <Button label={"Export"} icon={exp}></Button>
              {showAddModal && <AddCustomerModal onClose={() => setShowAddModal(false)} />}
            </div>
          </div>
          <CustomerTable />
        </div>
      </div>
    </>
  );
}

export default AdminPage;
