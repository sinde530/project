import "package:flutter/material.dart";

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        // backgroundColor: Colors.amber,
        body: Container(
          decoration: const BoxDecoration(
            // 그라디언트
            gradient: LinearGradient(
                colors: [Colors.red, Colors.blue],
                begin: Alignment.topLeft,
                end: Alignment.bottomRight),
          ),
          // 디스플레이 중간에 추가해줌.
          child: const Center(
            child: Text(
              "Hello World",
              style: TextStyle(color: Colors.amber, fontSize: 28),
            ),
          ),
        ),
      ),
    ),
  );
}
