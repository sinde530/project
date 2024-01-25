def count_char(s, input_char):
  len_s = len(s)
  count = 0

  while True:
    for index in range(0, len_s):
      s_char = s[index]
      if input_char == s_char:
        count = count + 1
    break

  print("len_s", len_s)
  print("count", count)
  return count
