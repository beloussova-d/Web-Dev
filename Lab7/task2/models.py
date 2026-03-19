class Animal:
    def __init__(self, age, name, voice):
        self.name = name
        self.age = age
        self.voice = voice

    def make_sound(self):
        return f"{self.name} says {self.voice}"

    def info(self):
        return f"Name: {self.name}, Age: {self.age}"

    def __str__(self):
        return self.info()

class Cat(Animal):
    def __init__(self, age, name, lives=9):
        super().__init__(age, name, "Meow")
        self.lives = lives

    def make_sound(self):
        return f"Cat {self.name} softly says {self.voice} 😺"

    def scratch(self):
        return f"{self.name} is scratching!"

class Cow(Animal):
    def __init__(self, age, name, milk_amount):
        super().__init__(age, name, "Moo")
        self.milk_amount = milk_amount

    def info(self):
        return f"Cow {self.name}, Age: {self.age}, Milk: {self.milk_amount}L"

    def give_milk(self):
        return f"{self.name} gives {self.milk_amount} liters of milk"