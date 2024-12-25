import 'package:e_commerce_app/core/theme/constant/app_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({super.key});

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
      body: Center(
        child: Text('main screen'),
      ),
      bottomNavigationBar: BottomNavigationBar(
        showSelectedLabels: false,
        showUnselectedLabels: false,
        type: BottomNavigationBarType.fixed,
        items: [
          BottomNavigationBarItem(
            icon: SvgPicture.asset(AppIcons.navHome),
            label: 'home',
          ),
          BottomNavigationBarItem(
            icon: SvgPicture.asset(AppIcons.navCategory),
            label: 'categoty',
          ),
          BottomNavigationBarItem(
            icon: SvgPicture.asset(AppIcons.navSearch),
            label: 'search',
          ),
          BottomNavigationBarItem(
            icon: SvgPicture.asset(AppIcons.navUser),
            label: 'user',
          ),
        ],
      ),
    );
  }
}
