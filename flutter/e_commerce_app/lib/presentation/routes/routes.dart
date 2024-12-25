import 'package:e_commerce_app/presentation/pages/home/home.dart';
import 'package:e_commerce_app/presentation/pages/splash/splash.dart';
import 'package:e_commerce_app/presentation/routes/route_path.dart';
import 'package:go_router/go_router.dart';

final GoRouter router = GoRouter(
  routes: [
    GoRoute(
      path: RoutePath.splash,
      name: 'splash',
      builder: (context, state) => const Splash(),
    ),
    GoRoute(
      path: RoutePath.home,
      name: 'home',
      builder: (context, state) => const Home(),
    ),
  ],
  initialLocation: '/splash',
);
