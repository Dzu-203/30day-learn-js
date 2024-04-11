function calculate(cells) {
    const array = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
    ];
    
    for (let index = 0; index < array.length; index++) {
        const [a,b,c] = array[index];
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            return cells[a];
        }
    }
    return null
}

arr = [
    null,null,null,
    'x','x','x',
    null,null,null
]

const a = calculate(arr)
console.log(a)