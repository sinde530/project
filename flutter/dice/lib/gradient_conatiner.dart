import 'package:flutter/material.dart';

const startAlignment = Alignment.topLeft;
const endAlignment = Alignment.bottomRight;

class GradientContainer extends StatelessWidget {
  const GradientContainer(this.color1, this.color2, {super.key});

  final Color color1;
  final Color color2;

  void rollDice() {
    //
  }

  @override
  Widget build(context) {
    return Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            // colors: [Colors.red, Colors.blue],
            colors: [color1, color2],
            begin: startAlignment,
            end: endAlignment,
          ),
        ),
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            // child: StyledText("123"),
            children: [
              Image.asset(
                'assets/images/dice-2.png',
                width: 200,
              ),
              // 의미없는 사이즈 추가해주는 박스
              const SizedBox(height: 20),
              TextButton(
                // onPressed onClick, onChange같은 역활
                onPressed: rollDice,
                style: TextButton.styleFrom(
                    padding: const EdgeInsets.only(
                      top: 20,
                    ),
                    foregroundColor: Colors.white,
                    textStyle: const TextStyle(fontSize: 28)),
                child: const Text('Roll Dice'),
              )
            ],
          ),
        ));
  }
}
