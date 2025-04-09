import Board from "../../components/Board/Board";
import CustomerTable from "../../components/CustomTable/CustomTable";
 import Header from "../../components/Header/Header";
 import Nav from "../../components/Nav/Nav";
 
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
                         <Board></Board>
                         <Board></Board>
                         <Board></Board>
                         <Board></Board>
                     </div>
                     <CustomerTable></CustomerTable>
                 </div>
             </div>
         </>
     );
 }
 
 export default AdminPage;