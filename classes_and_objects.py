class Person:
    def __init__(self, name, surname, age):
        self.name = name
        self.surname = surname
        self.age = age

    def introduce_self(self):
        print(f"My name is {self.name}")
        print(f"My surname is {self.surname}")
        print(f"I am {self.age}")