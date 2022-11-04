import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/purchase_order.dart';

// ignore: camel_case_types
class addOrderView extends StatefulWidget {
  const addOrderView({super.key});
  @override
  State<addOrderView> createState() => _addOrderViewState();
}

// ignore: camel_case_types
class _addOrderViewState extends State<addOrderView> {

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: const Text('Purchase Order management'),
      ),
      // ignore: avoid_unnecessary_containers
      body: Container(
        child :Consumer<purchaseOrderProvider>(
          builder: (context,model,_)=> FutureBuilder(
              future: model.fetchData(),
              builder: (context, snapshot) => ListView.builder(
                  itemCount: model.purchaseOrders?.length,
                  itemBuilder: (context, int index) {
                    return Form(
                      key: _formKey,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[

                          TextFormField(
                            decoration: const InputDecoration(
                              icon: Icon(Icons.person),
                              hintText: 'Enter your name',
                              labelText: 'Name',
                            ),
                          ),

                          Text(model.purchaseOrders?[index]['orderID']),

                          TextFormField(
                            decoration: const InputDecoration(
                              icon: Icon(Icons.phone),
                              hintText: 'Enter a phone number',
                              labelText: 'Phone',
                            ),
                          ),
                          TextFormField(
                            decoration: const InputDecoration(
                              icon: Icon(Icons.calendar_today),
                              hintText: 'Enter your date of birth',
                              labelText: 'Dob',
                            ),
                          ),
                          Container(
                              padding: const EdgeInsets.only(left: 150.0, top: 40.0),
                              child: const ElevatedButton(
                                onPressed: null,
                                child: Text('Submit'),
                              )),
                        ],
                      ),
                    );
                  })),
        ),),
    );
  }
}





