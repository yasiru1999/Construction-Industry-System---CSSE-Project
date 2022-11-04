import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/purchase_order.dart';
import 'add_purchase_order.dart';
import 'home_view.dart';

// ignore: camel_case_types
class LandingView extends StatefulWidget {
  const LandingView({super.key});
  @override
  State<LandingView> createState() => _LandingViewState();
}

// ignore: camel_case_types
class _LandingViewState extends State<LandingView> {
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: const Text('Purchase Order management'),
      ),
      // ignore: avoid_unnecessary_containers
      body: Container(
          child: Stack(
            children: <Widget> [
              Center(
                  child: Row(
                  children: [
                  Padding(padding: const EdgeInsets.only(left: 550, top: 1),
                   child: Card(
                      child: Stack(
                        children: <Widget> [
                        TextButton(
                            style: ButtonStyle(foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                            ),
                            onPressed: () {
                              Navigator.push(context, MaterialPageRoute(builder: (context) => const TabBarDemo()),);
                            }, child: const Text('View Purchase Orders'))
                      ])
                   ))])),

              Center(
                  child: Row(
                      children: [
                        Padding(padding: const EdgeInsets.only(left: 550, top: 100),
                            child: Card(
                                child: Stack(
                                    children: <Widget> [
                                      TextButton(
                                          style: ButtonStyle(foregroundColor: MaterialStateProperty.all<Color>(Colors.blue),
                                          ),
                                          onPressed: () {
                                            Navigator.push(context, MaterialPageRoute(builder: (context) => const addOrderView()),);
                                          }, child: const Text('Add Purchase Orders'))
                                    ])
                            ))]))
            ],
          ),
      ),
    );
  }
}


