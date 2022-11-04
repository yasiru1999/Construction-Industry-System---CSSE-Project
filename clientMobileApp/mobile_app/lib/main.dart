import 'package:flutter/material.dart';
import 'package:mobile_app/providers/purchase_order.dart';
import 'package:mobile_app/views/home_view.dart';
import 'package:mobile_app/views/landing_page.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(const MyApp());
}
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider (
        providers: [
          ChangeNotifierProvider(create: (_) => purchaseOrderProvider() )
        ],
        child: MaterialApp (
          debugShowCheckedModeBanner: false,
          theme: ThemeData.light(),
          home: const LandingView(),
        )
    );
  }
}

