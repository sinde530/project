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
        children: [
          const Text('The Questions...'),
          const SizedBox(
            height: 30,
          ),
          ElevatedButton(onPressed: () {}, child: const Text('Answer 1')),
          ElevatedButton(onPressed: () {}, child: const Text('Answer 2')),
          ElevatedButton(onPressed: () {}, child: const Text('Answer 3')),
        ],
      ),
    );
  }
}
