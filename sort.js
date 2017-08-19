function sort(array) {
    for (let i = 0; i < arr.length; i++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let one = arr[i];
                let two = arr[i + 1];
                arr[i] = two;
                arr[i + 1] = one;
            }
        }
    }
    return arr;
}
