# Array-Sorting-Algorithm
A sorting algorithm for arrays implemented with javascript.

simple function that returns an array of numbers arranged from lowest to highest regardless of duplicity or number of times a particular number occurs.

```javascript
arr = [1,4,5,3,6,6,7,6,5,6,3,4,6,4];

console.log(sort(arr));

would return [ 1, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7 ].
```

going a step further, i added new method to the array constructor that takes an argument to determine the order i.e ascending or descending of the values contained within the array.

the syntax :


```javascript
arr = [1,4,5,3,6,6,7,6,5,6,3,4,6,4];

console.log(arr.mysort("up"));

would still return [ 1, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 6, 7 ]
```

while 

```javascript
console.log(arr.mysort("down"));

would return [ 7, 6, 6, 6, 6, 6, 5, 5, 4, 4, 4, 3, 3, 1 ]
```


