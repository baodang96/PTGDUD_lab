import { useState } from 'react';
import Calculation from './Calculation';
import './Table.css'

export default function Table() {
    const [data, setData] = useState([]);

    return (
        <div>
            {/* Truyền setData xuống Calculation để nhận dữ liệu từ Calculation */}
            <Calculation setData={setData} />

            {/* Tạo bảng khi có dữ liệu */}
            {data.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Invest</th>
                            <th>Rate</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Lặp qua dữ liệu và hiển thị trong bảng */}
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.y}</td>
                                <td>{Math.round(item.ivm)}</td>
                                <td>{item.rate}</td>
                                <td>{Math.round(item.result)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}