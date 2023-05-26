export const getRandomIdsArr = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return new Array(6).fill(null).map(() => Math.floor(Math.random() * (max - min + 1) + min));
};

export const swapHelper = (arr, a, b) => {
    const arrToSwap = [...arr];
    const temp = arrToSwap[a];
    arrToSwap[a] = arrToSwap[b];
    arrToSwap[b] = temp;
    return arrToSwap;
};