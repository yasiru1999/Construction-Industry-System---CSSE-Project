const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');


const employeeRoute = require('./routes/employee.route');
const purchaseOrderRoute = require('./routes/purchaseOrder.route');
const siteRoute = require('./routes/site.route');
const supplyItemsRoute = require('./routes/SupplyItem.route');
const supplierOrderRoute = require('./routes/supplierOrder.route');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;
//change
//app.set('PORT',(8080));

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(error) =>{
    if(error){
        console.log('Error occurred while connecting to the database: ',error.message);
    }
});

mongoose.connection.once('open',()=>{
    console.log('Database Connected Successfully');
})

app.route('/').get((req,res) => {
    res.send('Test API call');
})

app.use('/api/users', require('./routes/users'));
app.use('/employees',employeeRoute());
app.use('/uploads', express.static('uploads'));
app.use('/purchaseOrder',purchaseOrderRoute())
app.use('/sites', siteRoute());
app.use('/supplyItem', supplyItemsRoute());
app.use('/supplierOrder', supplierOrderRoute());

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`);
})
