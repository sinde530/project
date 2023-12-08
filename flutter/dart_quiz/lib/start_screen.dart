import 'package:flutter/material.dart';

class StartScreen extends StatelessWidget {
  // const StartScreen(this.startQuiz, {super.key});
  const StartScreen(this.switchScreen, {super.key});

  final void Function() switchScreen;

  @override
  Widget build(context) {
    return Center(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Image.asset(
            'assets/images/quiz-logo.png',
            width: 300,
            color: Colors.lightBlue,
          ),

          // Opacity를 사용하여 불투명도를 조절 할 수 있음.
          // Opacity(
          //   opacity: 0.6,
          //   child: Image.asset(
          //     'assets/images/quiz-logo.png',
          //     width: 300,
          //   ),
          // ),
          const SizedBox(
            height: 80,
          ),
          const Text(
            'Learn Flutter the fun way!',
            style: TextStyle(
              color: Colors.white,
              fontSize: 24,
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          // () {} 익명 함수
          OutlinedButton.icon(
            onPressed: () {
              switchScreen();
            },
            style: OutlinedButton.styleFrom(
              foregroundColor: Colors.white,
            ),
            icon: const Icon(Icons.arrow_right_alt),
            label: const Text('Start Quit'),
          )
        ],
      ),
    );
  }
}
