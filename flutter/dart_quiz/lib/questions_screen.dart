import 'package:flutter/material.dart';

class QuestionsScreen extends StatefulWidget {
  const QuestionsScreen({super.key});

  @override
  State<QuestionsScreen> createState() {
    return _QuestionScreen();
  }
}

class _QuestionScreen extends State<QuestionsScreen> {
  @override
  Widget build(context) {
    return SizedBox(
      width: double.infinity,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Text(
            'The Questions...',
            style: TextStyle(
              color: Colors.amber,
            ),
          ),
          const SizedBox(
            height: 30,
          ),
          ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(),
              child: const Text('Answer 1')),
          ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(),
              child: const Text('Answer 2')),
          ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(),
              child: const Text('Answer 3')),
        ],
      ),
    );
  }
}
