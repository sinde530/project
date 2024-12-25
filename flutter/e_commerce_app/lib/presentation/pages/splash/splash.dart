import 'dart:async';

import 'package:e_commerce_app/core/theme/constant/app_icons.dart';
import 'package:e_commerce_app/presentation/routes/route_path.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:go_router/go_router.dart';

//  TODO Login bloc
class Splash extends StatefulWidget {
  const Splash({super.key});

  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  void initState() {
    super.initState();
    Timer(Duration(seconds: 2), () => context.go(RoutePath.home));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).colorScheme.primary,
      body: Center(
        child: SvgPicture.asset(AppIcons.mainLogo),
      ),
    );
  }
}
