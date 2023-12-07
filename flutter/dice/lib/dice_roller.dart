import 'package:flutter/material.dart';

class DiceRoller extends StatefulWidget {
  const DiceRoller({super.key});
  // createState 커맨드로 오버라이드 및 상태위젯도 같이 추가됨.
  @override
  State<DiceRoller> createState() {
    // TODO: implement createState
    return _DiceRollerState();
  }
}

// _는 private이란 뜻
class _DiceRollerState extends State<DiceRoller> {
  var activeDiceImages = 'assets/images/dice-2.png';

  void rollDice() {
    setState(() {
      activeDiceImages = 'assets/images/dice-4.png';
    });
  }

  @override
  Widget build(context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      // child: StyledText("123"),
      children: [
        Image.asset(
          activeDiceImages,
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
    );
  }
}
