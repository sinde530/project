import 'dart:convert';
import 'dart:io';
import 'dart:math';

void main() {
  print("가위, 바위, 보 중 하나를 정해서 입력해 주세요.");

  const list = ['가위', '바위', '보'];
  final String userInput = stdin.readLineSync(encoding: utf8) ?? 'Error';
  final cpuInput = list[Random().nextInt(3)];

  print(cpuInput);

  final result = getResult(userInput, cpuInput);
  print(result);
}

getResult(String userInput, String cpuInput) {
  const cpuWin = 'CPU가 승리 하였습니다.';
  const playerWin = 'Player가 승리 하였습니다.';
  const draw = '비겼습니다.';
  String result = draw;

  switch (userInput) {
    case '가위':
      if (cpuInput == '바위') {
        result = cpuWin;
      }
      if (cpuInput == '보') {
        result = playerWin;
      }
    case '바위':
      if (cpuInput == '보') {
        result = cpuWin;
      }
      if (cpuInput == '가위') {
        result = playerWin;
      }
    case '보':
      if (cpuInput == '가위') {
        result = cpuWin;
      }
      if (cpuInput == '바위') {
        result = playerWin;
      }
    default:
      result = '올바른 값을 입력 해 주세요.';
  }

  return result;
}
