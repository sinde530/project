import 'package:e_commerce_app/presentation/components/top_app_bar/default_app_bar.dart';
import 'package:e_commerce_app/presentation/components/top_app_bar/home_app_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../pages/main/cubit/bottom_navigation_cubit.dart';

class TopAppBar extends StatelessWidget implements PreferredSizeWidget {
  const TopAppBar({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<BottomNavigationCubit, BottomNav>(builder: (_, state) {
      switch (state) {
        case BottomNav.home:
          return const HomeAppBar();
        case BottomNav.category:
        case BottomNav.search:
        case BottomNav.user:
          return DefaultAppBar(state);
      }
    });
  }

  @override
  Size get preferredSize => Size.fromHeight(44);
}
