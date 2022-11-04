import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

// ignore: camel_case_types
class purchaseOrderProvider extends ChangeNotifier{
  final httpClient = http.Client();
  List<dynamic>? purchaseOrders;
  Map<String,String> customHeaders = {
    "Accept" : "application/json",
    "Content-type" : "application/json;charset=UTF-8"
  };

  //get request
  Future fetchData() async {
    final Uri restAPIURL = Uri.parse("http://localhost:8070/purchaseOrder/get-all");
    http.Response response = await httpClient.get(restAPIURL);
    final Map parsedData = await json.decode(response.body.toString());
    purchaseOrders = parsedData['purchaseOrder'];
  }

  //post request
  Future addData(Map<String,String> body) async {
    final Uri restAPIURL = Uri.parse("http://localhost:8070/purchaseOrder/add");
    http.Response response = await httpClient.post(restAPIURL, headers: customHeaders, body: jsonEncode(body));
    return response.body;
  }

  //get specific request
  Future fetchSpecificData(String id) async {
    final Uri restAPIURL = Uri.parse('http://localhost:8070/purchaseOrder/get-one/$id');
    http.Response response = await httpClient.get(restAPIURL, headers: customHeaders);
    final Map parsedData = await json.decode(response.body.toString());
    purchaseOrders = parsedData['purchaseOrder'];
  }


}
