def calculate(a, b, operator):
    if operator == '+':
        value = a + b
    elif operator == '-':
        value = a - b
    elif operator == '%':
        value = a % b
    elif operator == '*':
        value = a * b
    else:
        value = None

    return value
