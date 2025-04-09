import Board from "../../components/Board/Board";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import cart from "../../assets/ButtonCart.png";
import dollar from "../../assets/ButtonDollar.png";
import profile from "../../assets/ButtonProfile.png";
import imp from "../../assets/Download.png";
import exp from "../../assets/Moveup.png";
import file from "../../assets/Filetext1.png";
import dash from "../../assets/Squaresfour1.png";

import "./AdminPage.css";
import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
import Modal from "../../components/Modal/Modal";
import UserForm from "../../components/UserForm/UserForm";
import { useState } from "react";

function AdminPage({customers, setCustomers}) {
  const [isModalOpenAdd, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleUserSubmit = (data) => {
    setCustomers([...customers, data]);
  };


  return (
    <>
      <div className="admin-page">
        <div className="nav-side">
          <Nav></Nav>
        </div>
        <div className="content-side">
          <Header></Header>
          <Label text={"Overview"} icon={dash}></Label>
          <div className="dash-board">
            {/* background = a, b, c */}
            <Board
              label={"Turnover"}
              value={92405}
              percent={5.53}
              icon={cart}
              background={"a"}
            ></Board>
            <Board
              label={"Profit"}
              value={32218}
              percent={5.39}
              icon={dollar}
              background={"b"}
            ></Board>
            <Board
              label={"New customer"}
              value={289}
              percent={6.48}
              icon={profile}
              background={"c"}
            ></Board>
          </div>
          {/* <div class="grid-table">
                        <div class="table-header">Header 1</div>
                        <div class="table-header">Header 2</div>
                        <div class="table-header">Header 3</div>

                        <div>Row 1, Cell 1</div>
                        <div>Row 1, Cell 2</div>
                        <div>Row 1, Cell 3</div>

                        <div>Row 2, Cell 1</div>
                        <div>Row 2, Cell 2</div>
                        <div>Row 2, Cell 3</div>

                        <div>Row 3, Cell 1</div>
                        <div>Row 3, Cell 2</div>
                        <div>Row 3, Cell 3</div>
                    </div> */}
          <div className="title-table">
            <Label icon={file} text={"Detailed report"}></Label>
            <div className="group-button">
              <Button label={"Import"} icon={imp} onClick={openModal}></Button>
              <Button label={"Export"} icon={exp}></Button>
            </div>
          </div>
          <CustomerTable customers={customers}></CustomerTable>
          <Modal isOpen={isModalOpenAdd} onClose={closeModal}>
            <UserForm onSubmit={handleUserSubmit}></UserForm>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
