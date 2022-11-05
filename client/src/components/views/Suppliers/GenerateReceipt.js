import jsPDF from 'jspdf';
import "jspdf-autotable";

const GeneratePdf = order =>{

    const orderDoc = new jsPDF();

    const tableColumn = ["User ID","Name","Email","Course","Contact Number"," Gender"];
    const tableRows = [];

    order.forEach(order => {
        const OrderData = [
            order.orderId,
            order.itemName,
            order.approvedQty,
            order.dueDate,
            order.approver,
            order.condition
        ];

        tableRows.push(OrderData);
    });

    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();


    orderDoc.autoTable(tableColumn,tableRows,{startY:20});
    orderDoc.text("Order Receipt",14,15);
    orderDoc.save(`Order_Report${order.orderId + " " + year +" "+ month +" "+date}.pdf`);
};

export default GeneratePdf;