import sys
import random

def checkMoney():
    if money <= 0:
        bribe = input(print("You are out of money. Would you like to accept a bribe?[y/n]")).lower()
        if bribe == "y":
            print("you were caught by the police and sentenced to "+str(random.randint(5,15))+" years in prison")
            sys.exit()
        else:
            print("You ran out of money. You can't afford anything anymore.")
            sys.exit()
    else:
        return

money = 1000

costs = {
    "food" : 500,
    "medicine": 400,
    "utilities": 300,
}

children = ["Amanda","Michael","Adam","Jerry"]

starting = "You are Ibrahim. You only have a $"+str(money)+" and you need to budget this so you and your children survive. Your children's names are:"

for i in children:
    if i == children[-1]:
        starting+= ", and "+i
    elif i == children[0]:
        starting+= i
    else:
        starting+= ", "+i
print(starting)

print("costs:")
for i in costs:
    print(i,costs[i])

x = input("would you like to buy food?[y/n]").lower()
if x == "y":
    money-=costs["food"]
    checkMoney()
    print("You have $"+str(money)+" left")
else:
    print("Jerry starved. Poor Jerry")
    sys.exit()

y = input("would you like to buy medicine?[y/n]").lower()
if y == "y":
    money-=costs["medicine"]
    checkMoney()
    print("You have $"+str(money)+" left")
else:
    print("Amanda died of the flu. Poor Amanda")
    sys.exit()

z = input("would you like to buy utilities?[y/n]").lower()
if z == "y":
    money-=costs["utilities"]
    checkMoney()
    print("You have $"+str(money)+" left")
else:
    print("Everyone froze to death.")
    sys.exit()
