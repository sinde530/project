import 'package:dice/styled_text.dart';
import 'package:flutter/material.dart';

var startAlignment = Alignment.topLeft;
var endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer({super.key});

  @override
  Widget build(context) {
    // var를 이용하여, 데이터를 재 할당 할수있게 해주자.
    startAlignment = Alignment.center;
    endAlignment = Alignment.center;

    return Container(
      decoration: BoxDecoration(
        // 그라디언트
        gradient: LinearGradient(
            colors: const [Colors.red, Colors.blue],
            begin: startAlignment,
            end: endAlignment),
      ),
      // 디스플레이 중간에 추가해줌.
      child: const Center(
        child: StyledText(),
      ),
    );
  }
}
