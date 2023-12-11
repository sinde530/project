# dart_quiz

A new Flutter project.

## Getting Started

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://docs.flutter.dev/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://docs.flutter.dev/cookbook)

For help getting started with Flutter development, view the
[online documentation](https://docs.flutter.dev/), which offers tutorials,
samples, guidance on mobile development, and a full API reference.

### SizedBox
```dart
플러터에는 사이즈 설정 속성이 없는 위젯이 많기 때문에, 화면에 꽉 차게 설정하기 위해서는 사이즈 설정 속성이 있는 위젯을 이용하여 세팅해 줄 수 있다.
 
SizedBox나 Container와 같이 사이즈를 설정할 수 있는 위젯의 크기를 double.infinity 로 설정한 뒤, 기본 위젯을 자식으로 설정해준다.

SizedBox(	
  width: double.infinity,	//가로 꽉 차게 설정	
  height: double.infinity,	//세로 꽉 차게 설정	
  child: Container(	//꽉 채우고자하는 위젯		
        //생략
  )
)
```