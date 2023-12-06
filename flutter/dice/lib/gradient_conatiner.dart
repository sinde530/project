import 'package:dice/styled_text.dart';
import 'package:flutter/material.dart';

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(context) {
    return Container(
      decoration: const BoxDecoration(
        // 그라디언트
        gradient: LinearGradient(
            colors: [Colors.red, Colors.blue],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight),
      ),
      // 디스플레이 중간에 추가해줌.
      child: const Center(
        child: StyledText(),
      ),
    );
  }
}
