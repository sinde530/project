import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import '../../components/top_app_bar/top_app_bar.dart';
import '../category/category_screen.dart';
import '../home/home_screen.dart';
import '../search/search_screen.dart';
import '../user/user_screen.dart';
import 'cubit/bottom_navigation_cubit.dart';
import 'cubit/mall_type_cubit.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(providers: [
      BlocProvider(create: (_) => BottomNavigationCubit()),
      BlocProvider(create: (_) => MallTypeCubit()),
    ], child: const MainScreenView());
  }
}

class MainScreenView extends StatelessWidget {
  const MainScreenView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const TopAppBar(),
      body: BlocBuilder<BottomNavigationCubit, BottomNav>(builder: (_, state) {
        switch (state) {
          case BottomNav.home:
            return const HomeScreen();
          case BottomNav.category:
            return const CategoryScreen();
          case BottomNav.search:
            return const SearchScreen();
          case BottomNav.user:
            return const UserScreen();
        }
      }),
      bottomNavigationBar: BlocBuilder<BottomNavigationCubit, BottomNav>(
        builder: (_, state) {
          return BottomNavigationBar(
            items: List.generate(
              BottomNav.values.length,
              (index) => BottomNavigationBarItem(
                icon: SvgPicture.asset(BottomNav.values[index].icon),
                label: BottomNav.values[index].toName,
                activeIcon:
                    SvgPicture.asset(BottomNav.values[index].actionIcon),
              ),
            ),
            onTap: (index) =>
                context.read<BottomNavigationCubit>().changeNavIndex(index),
            type: BottomNavigationBarType.fixed,
            currentIndex: state.index,
            showSelectedLabels: false,
            showUnselectedLabels: false,
          );
        },
      ),
    );
  }
}
