import unittest
from calculator_module import Calculator


class CalculatorTest(unittest.TestCase):

  def test_add(self):
    calc = Calculator(1, 2)
    c = calc.plus()
    self.assertEqual(c, 3)

  def test_minus(self):
    calc = Calculator(1, 2)
    c = calc.minus()
    self.assertEqual(c, -1)

  def test_mul(self):
    calc = Calculator(1, 2)
    c = calc.mul()
    self.assertEqual(c, 2)

  def test_div(self):
    calc = Calculator(1, 2)
    c = calc.div()
    self.assertEqual(c, 0.5)

if __name__ == '__main__':
  unittest.main()
  unittest.main(verbosity=2)
