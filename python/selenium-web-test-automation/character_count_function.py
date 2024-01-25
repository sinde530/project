import count_module

string = 'supercalifragilisticexpialidocious'
input_char = 'i'

def count_char(string, input_char):
  len_s = len(string)
  count = 0

  while True:
    for index in range(0, len_s):
      s_char = string[index]
      if input_char == s_char:
        count = count + 1
    break
  return count

a = count_module.count_char(string, input_char)

print("입력된 문자 = %c 이고 몇 개가 들어있나? %d개" %(input_char, a))
