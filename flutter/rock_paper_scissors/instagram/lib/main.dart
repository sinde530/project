import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Insta Clone',
      theme: ThemeData(
        colorScheme:
            ColorScheme.light(primary: Colors.white, secondary: Colors.black),
        useMaterial3: true,
      ),
      home: InstaHome(),
    );
  }
}

class InstaHome extends StatelessWidget {
  const InstaHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Instagram',
          style: TextStyle(color: Colors.black),
        ),
        centerTitle: false,
      ),
      body: const Placeholder(),
    );
  }
}
