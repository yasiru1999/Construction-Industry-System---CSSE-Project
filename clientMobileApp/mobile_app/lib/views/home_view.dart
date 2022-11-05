import 'package:flutter/material.dart';
import 'package:mobile_app/views/pending_purchase_order.dart';
import 'package:mobile_app/views/rejected_purchase_order.dart';
import 'approve_Purchase_order.dart';



void main() {
  runApp(const TabBarDemo());
}

class TabBarDemo extends StatelessWidget {
  const TabBarDemo({super.key});


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            bottom: const TabBar(
              tabs: [
                Tab(text: 'Pending'),
                Tab(text: 'Accept'),
                Tab(text: 'Reject'),
              ],
            ),
            title: const Text('Tabs Demo'),
          ),
          body: const TabBarView(
            children: [
              pendingView(),
              approveView(),
              rejectView(),
            ],
          ),
        ),
      ),
    );
  }
}
