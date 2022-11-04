import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/purchase_order.dart';

// ignore: camel_case_types
class approveView extends StatefulWidget {
  const approveView({super.key});
  @override
  State<approveView> createState() => _approveViewState();
}

// ignore: camel_case_types
class _approveViewState extends State<approveView> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      // ignore: avoid_unnecessary_containers
      body: Container(
          child :Consumer<purchaseOrderProvider>(
            builder: (context,model,_)=> FutureBuilder(
                future: model.fetchData(),
                builder: (context, snapshot) => ListView.builder(
                    itemCount: model.purchaseOrders?.length,
                    itemBuilder: (context, int index) {
                      return Card(
                          child: Stack(
                              children: <Widget> [
                                Column(
                                    children: const [
                                      Padding(padding: EdgeInsets.only(left: 10, top: 5),
                                          child: Icon(Icons.send,size: 20,)
                                      ),
                                    ]
                                ),

                                Column(
                                    children: [
                                      Padding(padding: const EdgeInsets.only(left: 80, top: 5),
                                          child: Column (
                                            children: const [
                                              Text('Order ID'),
                                              Text('    Item Name'),
                                              Text('        Item Quantity'),
                                              Text('Status     ')
                                            ],
                                          )
                                      ),
                                    ]
                                ),

                                Column(
                                    children: [
                                      Padding(padding: const EdgeInsets.only(left: 250, top: 5),
                                          child: Column (
                                            children: [
                                              Text(model.purchaseOrders?[index]['orderId']),
                                              Text(model.purchaseOrders?[index]['itemName']),
                                              Text((model.purchaseOrders?[index]["quantity"]).toString()),
                                              Text(model.purchaseOrders?[index]['approvelStatus'])
                                            ],
                                          )
                                      ),
                                    ]
                                ),
                                Column(
                                    children: [
                                      Padding(padding: const EdgeInsets.only(left: 350, top: 40),
                                          child: Column (
                                            children: const [
                                              TextButton(onPressed: null , child: Text('view')),
                                            ],
                                          )
                                      ),
                                    ]
                                ),

                              ])
                      );
                    })),
          ),),
    );
  }
}


