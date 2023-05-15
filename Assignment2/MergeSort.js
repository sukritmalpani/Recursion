function mergeSort(value) {
    const arr = convertInput(value);

    function convertInput(value) {
        const tmp = value.split(' ');
        const newArr = [];
        for (let i = 0; i < tmp.length; i += 1) {
            if (tmp[i]) newArr.push(parseInt(tmp[i]))
        }
        return newArr;
    }

    function mergeSortAlg(arr) {
        if (arr.length < 2) {
            return arr;
        }
        const middle = Math.ceil(arr.length / 2);
        const left = arr.slice(0, middle);
        const right = arr.slice(middle);
        return merge(mergeSortAlg(left), mergeSortAlg(right));

        function merge(a, b) {
            const c = [];
            aIndex = 0;
            bIndex = 0;
            while (aIndex < a.length && bIndex < b.length) {
                if (a[aIndex] < b[bIndex]) {
                    c.push(a[aIndex]);
                    aIndex++;
                } else {
                    c.push(b[bIndex]);
                    bIndex++;
                }
            }
            while (a[aIndex]) {
                c.push(a[aIndex]);
                aIndex++;
            }
            while (b[bIndex]) {
                c.push(b[bIndex]);
                bIndex++;
            }
            return c;
        }
    }

    convertInput(value);
    const sorted = mergeSortAlg(arr);
    console.log(sorted);
}
mergeSort("72 38 9 19");