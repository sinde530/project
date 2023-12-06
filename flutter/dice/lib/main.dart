import "package:flutter/material.dart";

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: Center(
          // 디스플레이 중간에 추가해줌.
          child: Text("Hello world"),
        ),
      ),
    ),
  );
}
