import "package:dice/gradient_conatiner.dart";
import "package:flutter/material.dart";

void main() {
  runApp(
    const MaterialApp(
      home: Scaffold(
        body: GradientContainer(Colors.deepPurple, Colors.greenAccent),
      ),
    ),
  );
}
