import 'dart:ffi';

import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/purchase_order.dart';

// ignore: camel_case_types
class pendingView extends StatefulWidget {
  const pendingView({super.key});
  @override
  State<pendingView> createState() => _pendingViewState();
}

// ignore: camel_case_types
class _pendingViewState extends State<pendingView> {
  get quantity => null;

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
                                      child: Icon(Icons.send)
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
                                    Padding(padding: const EdgeInsets.only(left: 350, top: 5),
                                        child: Column (
                                          children: const [
                                             TextButton(onPressed: null , child: Text('view')),
                                             TextButton(onPressed: null , child: Text('Edit')),
                                             TextButton(onPressed: null , child: Text('Delete')),
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


