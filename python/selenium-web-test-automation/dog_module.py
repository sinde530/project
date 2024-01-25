class Dog:
  def __init__(self, name):
    self.name = name
    self.tricks = []
    print("self.name", self.name)

  def add_trick(self, trick):
    self.tricks.append(trick)
