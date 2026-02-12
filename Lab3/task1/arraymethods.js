function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}


function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr );

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
alert( arr2 );


let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
alert( arr3 );


function copySorted(arr) {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);

alert( sorted );
alert( arr4 );


function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}



let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names );



let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));


function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}




let arr5 = [ pete, john, mary ];

sortByAge(arr5);


alert(arr5[0].name); 
alert(arr5[1].name); 
alert(arr5[2].name);


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let arr6 = [ john, pete, mary ];
alert( getAverageAge(arr6) );


function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );


let users2 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users2);






