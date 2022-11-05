import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/purchase_order.dart';
import 'dart:math';

  final nameTextController = TextEditingController();
  final managerNameTextController = TextEditingController();
  final contactTextController = TextEditingController();
  final addressTextController = TextEditingController();
  final itemTextController = TextEditingController();
  final quantityTextController = TextEditingController();
  final dateTextController = TextEditingController();
  final approveTextController = TextEditingController();
  final priorityTextController = TextEditingController();


  updateDataWidget(BuildContext context, String id) async {
    return  Scaffold(
      appBar: AppBar(
        title: const Text('Purchase Order management'),
      ),
      // ignore: avoid_unnecessary_containers
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[

            TextFormField(
              controller: nameTextController,
              decoration: const InputDecoration(
                hintText: 'Site name',
                labelText: 'Site Name',
              ),
            ),

            TextFormField(
              controller: managerNameTextController,
              decoration: const InputDecoration(
                hintText: 'Site Manager name',
                labelText: 'Site Manager name',
              ),
            ),

            TextFormField(
              controller: contactTextController,
              decoration: const InputDecoration(
                hintText: 'Site Manager Contact number',
                labelText: 'Site Manager Contact number',
              ),
            ),

            TextFormField(
              controller: addressTextController,
              decoration: const InputDecoration(
                hintText: 'Site Address',
                labelText: 'Site Address',
              ),
            ),

            TextFormField(
              controller: itemTextController,
              decoration: const InputDecoration(
                hintText: 'Order Item',
                labelText: 'Order Item',
              ),
            ),

            TextFormField(
              controller: quantityTextController,
              decoration: const InputDecoration(
                hintText: 'Enter Quantity',
                labelText: 'Enter Quantity',
              ),
            ),

            TextFormField(
              controller: dateTextController,
              decoration: const InputDecoration(
                hintText: 'Due Date',
                labelText: 'Due Date',
              ),
            ),

            TextFormField(
              controller: approveTextController,
              decoration: const InputDecoration(
                hintText: 'The Approve',
                labelText: 'The Approve',
              ),
            ),

            TextFormField(
              controller: priorityTextController,
              decoration: const InputDecoration(
                hintText: 'Item priority',
                labelText: 'Item priority',
              ),
            ),

            Container(
                padding: const EdgeInsets.only(left: 150.0, top: 40.0),
                child: ElevatedButton(
                  onPressed: () {
                    if(nameTextController.text.isNotEmpty){
                      Provider.of<purchaseOrderProvider>(context, listen: false ).fetchSpecificData({
                        "id" : id,
                        "orderId" : 'OR${random()}',
                        "siteName" : nameTextController.text,
                        "siteManager" : managerNameTextController.text,
                        "siteContactNo" : contactTextController.text,
                        "siteAddress" : addressTextController.text,
                        "itemName" : itemTextController.text,
                        "orderQty" : quantityTextController.text,
                        "dueDate" : dateTextController.text,
                        "approver" : approveTextController.text,
                        "priority" : priorityTextController.text,
                      },id);
                    }
                  },
                  child: const Text('update'),
                )),
          ],
        ),
      ),
    );
  }


String random() {

  Random random = Random();
  int randomNumber = random.nextInt(100);
  String rno = randomNumber.toString();
  return rno;

}







