import 'package:flutter/material.dart';
import 'package:toonflix/screens/home_screen.dart';
import 'package:toonflix/services/api_service.dart';

void main() {
  APiService().getTodaysToons();
  runApp(const App());
}

class App extends StatelessWidget {
  // widget에 key를 stateless widget이라는 super class를 보냄.
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: HomeScreen(),
    );
  }
}
