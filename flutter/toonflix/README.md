# ios / flutter run --release

# android

```typescript
rm -rf android
flutter create --platforms=android .
flutter run --release
```

# toonflix

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

## Flutter Create CLI

```flutter
flutter create --platforms=android,ios --org com.sample test
```

## Start Emulator

```flutter
<!-- Command + Shift + P -->
Flutter: Launch Emulator
```

## Run Flutter

```flutter
flutter run
```

# Naver Webtoon Unofficial API <br>

====================================

- `/today`: Retruns today's comics.
- `/:id`: Returns a comic's information by `:id`
- `/:id/episodes`: Returns the latest episodes for a comic.
