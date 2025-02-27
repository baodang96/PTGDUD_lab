// 


import { useState } from 'react';
import './Caculation.css';
import Table from './Table';

export default function Calculation({ setData }) {
    const [ivm, setIVM] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);

    const handleCalc = () => {
        console.log(ivm, rate, goal);
        if (ivm <= 0 || rate <= 0 || goal <= 0) {
            alert.log("Giá trị đầu vào không hợp lệ!");
            return; // Dừng hàm nếu có giá trị không hợp lệ
        }

        let newIVM = ivm;
        let year = new Date().getFullYear();
        const resultData = []; // Mảng tạm để chứa kết quả

        // Chạy vòng lặp khi newIVM chưa đạt mục tiêu
        while (newIVM < goal) {
            let result = newIVM + (newIVM * (rate / 100));
            
            resultData.push({
                y: year,
                ivm: newIVM,
                rate: rate,
                result: result
            });

            newIVM = result;  // Cập nhật giá trị mới của đầu tư
            year += 1; // Tăng năm sau mỗi lần lặp

            // Kiểm tra nếu vòng lặp có thể bị vô hạn (tránh khi tỷ lệ lãi suất quá thấp)
            if (result <= 0) {
                console.log("Lãi suất quá thấp, không thể đạt được mục tiêu!");
                break;
            }
        }

        // Truyền dữ liệu lên cho parent component (Table)
        setData(resultData);
    }

    return (
        <>
            <div id='flex'>
                <div>
                    <div>
                        <span>Invest</span>
                        <input 
                            type="number" 
                            id="invest"
                            onChange={(e) => setIVM(Number(e.target.value))} 
                        />
                    </div>
                    <div>
                        <span>Rate</span>
                        <input 
                            type="number" 
                            id="rate"
                            onChange={(e) => setRate(Number(e.target.value))} 
                        />
                    </div>
                    <div>
                        <span>Goal</span>
                        <input 
                            type="number" 
                            id="goal" 
                            onChange={(e) => setGoal(Number(e.target.value))} 
                        />
                    </div>
                </div>
                <div>
                    <button id='cal' onClick={handleCalc}>Cal</button>
                </div>
            </div>
        </>
    );
}
