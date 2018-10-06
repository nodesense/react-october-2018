# Problems

Parent L1 (data)
  Child L2
    Child L3
      ..
        ..


         Child L 10 (data)
    
# Problem 2

  Siblings sharing data

  Parent
    Child 1
    Child 2

# Problem 3

  No common parent/child

# Problem 3
  Routing


# OOP
class Calculator {
  int sum = 0;
  // impure function
  int add(int value) {
    // sum is mutable
    // sum is a state
    sum += value;
    return sum;
  }
}

class Cart {
  items: [];
  addItem(item) {
    this.items.push(item)
  }
}

calc = new Calculator()
calc.add(10) ==> 10
calc.add(10) ==> 20
calc.add(20) ==> 40
calc.add(20)
calc.add(10)
calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)calc.add(20)
calc.add(10)

# Functional Style

// Pure function
function add(sum, value) {
  // immutable
  return sum + value;
}

function addItem(items, item) {
  return [...items, item]
}

addItem([], {id: 1}) // [{id: 1}]

addItem([], {id: 1}) // [{id: 1}]

add(10, 20) // 30
add(10, 20) // 30
add(10, 20) // 30
add(10, 20) // 30