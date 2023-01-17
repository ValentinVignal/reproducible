import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

void main() {
  runApp(const MyApp());
}

final aProvider = Provider.autoDispose<int>((ref) {
  return 1;
});

final bProvider = Provider.autoDispose<int>((ref) {
  return 2;
});

final cProvider = Provider.autoDispose<int>(
  (ref) {
    return ref.watch(aProvider) + ref.watch(bProvider);
  },
  dependencies: [
    aProvider,
    bProvider,
  ],
);

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      child: MaterialApp(
        initialRoute: '/a',
        routes: {
          '/a': (context) => const AScreen(),
          '/b': (context) => const BScreen(),
        },
      ),
    );
  }
}

class AScreen extends StatelessWidget {
  const AScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      overrides: [
        aProvider,
        bProvider,
      ],
      child: const Screen(),
    );
  }
}

class BScreen extends StatelessWidget {
  const BScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return ProviderScope(
      overrides: [
        bProvider,
      ],
      child: const Screen(),
    );
  }
}

class Screen extends ConsumerWidget {
  const Screen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final a = ref.watch(aProvider);
    final b = ref.watch(bProvider);
    final c = ref.watch(cProvider);
    return Scaffold(
      appBar: AppBar(),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('a: $a, b: $b, c: $c'),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed('/a');
              },
              child: const Text('A Screen'),
            ),
            const SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed('/b');
              },
              child: const Text('B Screen'),
            ),
          ],
        ),
      ),
    );
  }
}
