import 'package:dice/styled_text.dart';
import 'package:flutter/material.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer(this.color1, this.color2, {super.key});

  final Color color1;
  final Color color2;

  @override
  Widget build(context) {
    return Container(
      decoration: BoxDecoration(
        // 그라디언트
        gradient: LinearGradient(
          // colors: [Colors.red, Colors.blue],
          colors: [color1, color2],
          begin: startAlignment,
          end: endAlignment,
        ),
      ),
      // 디스플레이 중간에 추가해줌.
      child: const Center(
        child: StyledText("123"),
      ),
    );
  }
}
