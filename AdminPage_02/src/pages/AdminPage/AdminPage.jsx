import Board from "../../components/Board/Board";
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
                     <div class="grid-table">
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
                     </div>
                 </div>
             </div>
         </>
     );
 }
 
 export default AdminPage;