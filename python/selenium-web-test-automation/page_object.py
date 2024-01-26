# import module_test

# c = module_test.calculate(4, 123, '*')
# print(c)

# -------------------------------- #

# import count_module

# s = 'supercalifragilisticexpialidocious'
# input_char = 'i'

# a = count_module.count_char(s, input_char)
# print("입력된 문자 = %c 이고 몇 개가 들어있나? %d개" %(input_char, a))

# -------------------------------- #

# print("doens\'t")
# print("doens't")
# print('"Yes", he said.')

# -------------------------------- #

# a = 'Life is '
# b = 'cool!'
# print(a + b)

# -------------------------------- #

# 리스트형 실습(2)
# s = 'supercalifragilisticexpialidocious'
# list_s = list(s)
# print("list_s", list_s)
# input_char = input("세어보기 원하는 알파벳 입력: ")

# result = list_s.count(input_char)

# print("입력된 문자 = %c 이고 몇 개가 들어있나? %d개" %(input_char, result))

# -------------------------------- #

# tuple
# t = (12345, 54321, 'hello!')
# print(t[2])

# u = t, ("새로추가함", "1234")
# print(u)

# 집합
# s = set("Python")
# print(s)

# t = set("AAA")
# print(t)

# -------------------------------- #

# student_info = {
#   "홍길동": 1234,
#   "철수": 56789,
#   "영희": 8272,
# }

# student_name = input("학생 이름을 입력하세요. ")

# for d_name in student_info.keys():
#   if student_name == d_name:
#       student_number = student_info[d_name]
#       print("이름: %s" %(student_name))
#       print("학번: %s" %(student_number))
#       break

# -------------------------------- #

# 파일 입출력
# f = open('workfile', 'w')
# f.write('abcd')
# f.close() # save 역활

# f = open("workfile", 'r')
# print(f.read())

# with open("python.txt", "w") as f:
#   f.write("Life is too short, you need python")

# 입력된 파일 불러와 구구단 출력
# f = open("구구단.txt", "w")

# for table in range(2, 10):
#   table_name = "*** " + str(table) + "단" + " ***" + "\n"
#   f.write(table_name)

#   for number in range(1, 10):
#     table_line = str(table) + '*' + str(number) + '=' + str(table * number) + "\n"
#     f.write(table_line)
# f.close()

# filename = '구구단.txt'
# f = open(filename, 'r')
# lines = f.readlines()

# for line in lines:
#     print(line.strip())

# -------------------------------- #


# from dog_module import Dog

# d = Dog("Fido")
# e = Dog("Buddy")

# d.add_trick('roll over')
# e.add_trick('play dead')

# print(d.tricks)

# -------------------------------- #

from calculator_module import Calculator

calc = Calculator(1, 2)

value = calc.plus()
print(value)
value = calc.minus()
print(value)
value = calc.mul()
print(value)
value = calc.div()
print(value)
