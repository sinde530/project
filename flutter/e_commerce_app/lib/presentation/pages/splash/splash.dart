import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class Splash extends StatelessWidget {
  const Splash({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xFF5F0080),
      body: Center(
        child: SvgPicture.asset('assets/svg/main_logo.svg'),
      ),
    );
  }
}
