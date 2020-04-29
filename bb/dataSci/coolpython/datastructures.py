
##########################

# DATA STRUCTURES

#########################

# Lists

list = [True, "unity", 95]
print(list)


list.append(5)
list.extend([19])
print(list)
list2 = ["peace", "justice"]

print(list+list2)

combined = list+list

one = combined.pop(0)
print(one)
print(combined)

########################

#

team = ("mj", "ai", "magic")

p1, p2, p3 = team
print(p3, p2, p1)

team2 = ["kobe","curry","lebron"]
matchup = zip(team, team2)

print(matchup)

for element in matchup:
  print(element)