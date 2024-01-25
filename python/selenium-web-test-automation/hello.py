input = int(input("Please enter an interger: "))

if input < 0:
  input = 0
  print("입력값이 음수여서 0으로 치환합니다.")
elif input == 0:
  print("0")
elif input == 1:
  print("1")
else:
  print("1 이상")

