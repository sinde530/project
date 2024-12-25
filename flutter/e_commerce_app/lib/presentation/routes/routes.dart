import 'package:e_commerce_app/presentation/pages/home/home_screen.dart';
import 'package:e_commerce_app/presentation/pages/splash/splash_screen.dart';
import 'package:e_commerce_app/presentation/routes/route_path.dart';
import 'package:go_router/go_router.dart';

final GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: RoutePath.splash,
      name: 'splash',
      builder: (context, state) => const SplashScreen(),
    ),
    GoRoute(
      path: RoutePath.home,
      name: 'home',
      builder: (context, state) => const HomeScreen(),
    ),
  ],
  initialLocation: '/splash',
);
