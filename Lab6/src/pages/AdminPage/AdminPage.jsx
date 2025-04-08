import Board from "../../components/Board/Board";
import CustomerTable from "../../components/CustomerTable/CustomerTable";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";

import cart from "../../assets/ButtonCart.png";
import dollar from "../../assets/ButtonDollar.png";
import profile from "../../assets/ButtonProfile.png";

import './AdminPage.css'

function AdminPage() {
    return (
        <>
            <div className="admin-page">
                <div className="nav-side">
                    <Nav></Nav>
                </div>
                <div className="content-side">
                    <Header></Header>
                    <div className="dash-board">
                        {/* background = a, b, c */}
                        <Board label={"Turnover"} value={92405} percent={5.53} icon={cart} background={"a"}></Board>
                        <Board label={"Profit"} value={32218} percent={5.39} icon={dollar} background={"b"}></Board>
                        <Board label={"New customer"} value={289} percent={6.48} icon={profile} background={"c"}></Board>
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
                    <CustomerTable></CustomerTable>
                </div>
            </div>
        </>
    );
}

export default AdminPage;