cat = Cat(3, "Barsik")
cow = Cow(5, "Burenka", 10)

print(cat)
print(cat.make_sound())
print(cat.scratch())
print(f"Lives: {cat.lives}")

print()

print(cow)
print(cow.make_sound())
print(cow.give_milk())