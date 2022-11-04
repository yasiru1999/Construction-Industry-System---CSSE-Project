const SupplyItem = require('../models/SupplyItem.model');

const addSupplyItem = async (request, response) => {

    const Item = new SupplyItem(request.body);


    await Item.save((error, Item) => {
        if(error){
            response.status(500).json({ error: error.message });
            console.log(error.message)
        }
        else{
            response.status(200).
            json({
                success: true,
                Item: Item
            })
        }
    });
}
//
// const getSite = async(request,response) => {
//     try {
//         SupplyItem.findById(request.params.id, (error, data) => {
//             if (error) {
//                 response.status(500).json({error: error.message});
//             } else {
//                 response.status(200).json({
//                     success: true,
//                     site: data
//                 })
//             }
//         })
//     } catch (e) {
//         console.log(e);
//     }
// }
const getSupllyAllItems = async (request, response) => {

    try{
        const items = await SupplyItem.find();
        response.status(200).
        json({
            success: true,
            items: items
        })
    } catch (error) {
        response.status(404).json({
            success: false,
            error: error.message
        });
    }
}

//change
const updateSupplyItem = async (request,response) => {
    const item = (request.body);

    console.log(item);

    SupplyItem.findByIdAndUpdate({ _id: request.params.id }, item).then(result => {
        console.log(result);
        response.status(200).json({ message: "Successfully Updated" })
    })
}

const deleteItem = async (request,response) => {
    await SupplyItem.findByIdAndRemove(request.params.id,(error,item) => {
        if(error){
            response.status(500).json({ error: error.message });
        }
        else{
            response.status(200).
            json({
                success: true,
                item: item
            })
        }
    })
}

const getSupplierByItem = async(request,response) => {
    try {
        let item = request.params.item;
        SupplyItem.find({ItemName: item}, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json(data)
            }
        })
    } catch (e) {
        console.log(e);
    }
}

const getSupplierByCode = async(request,response) => {
    try {
        let code = request.params.code;
        SupplyItem.findOne({supID: code}, (error, data) => {
            if (error) {
                response.status(500).json({error: error.message});
            } else {
                response.status(200).json(data)
            }
        })
    } catch (e) {
        console.log(e);
    }
}


/*router.get("/getAll/:item", async (req, res) => {
    try {
      let module = req.params.module;
      const allSessions = await NoticeSession.find({ moduleNo: module });
      res.status(200).json(allSessions);
    } catch (err) {
      res.json(err);
    }
})*/




module.exports = {
    addSupplyItem,
    getSupllyAllItems,
    updateSupplyItem,
    deleteItem,
    getSupplierByItem,
    getSupplierByCode

}