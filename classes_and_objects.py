if __name__ == "__main__":
    
    class Person:
        def __init__(self, name:str, surname:str, age:int)->None:
            self.name = name
            self.surname = surname
            self.age = age

        def introduce_self(self)->None:
            print(f"\nMy name is {self.name}")
            print(f"My surname is {self.surname}")
            print(f"I am {self.age}")
            

    guy1 = Person("Masixole", "Boya", 24)

    guy1.introduce_self()







