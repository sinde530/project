import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';
import '../../../core/theme/constant/app_icons.dart';
import '../category/category_screen.dart';
import '../home/home_screen.dart';
import '../search/search_screen.dart';
import '../user/user_screen.dart';
import 'cubit/bottom_navigation_cubit.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (_) => BottomNavigationCubit(),
      child: const MainScreenView(),
    );
  }
}

class MainScreenView extends StatelessWidget {
  const MainScreenView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(44),
        child: Container(
          color: Theme.of(context).colorScheme.primary,
          padding: const EdgeInsets.symmetric(vertical: 6, horizontal: 8),
          child: AppBar(
            backgroundColor: Colors.transparent,
            centerTitle: true,
            title: Text(
              "Tab Bar",
              style:
                  TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
            ),
            leadingWidth: 86,
            leading: Padding(
              padding: const EdgeInsets.all(8.0),
              child: SvgPicture.asset(AppIcons.mainLogo),
            ),
            actions: [
              Padding(
                padding: const EdgeInsets.all(4.0),
                child: SvgPicture.asset(
                  AppIcons.location,
                  colorFilter: ColorFilter.mode(
                      Theme.of(context).colorScheme.background,
                      BlendMode.srcIn),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(4.0),
                child: SvgPicture.asset(
                  AppIcons.cart,
                  colorFilter: ColorFilter.mode(
                      Theme.of(context).colorScheme.background,
                      BlendMode.srcIn),
                ),
              )
            ],
          ),
        ),
      ),
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
