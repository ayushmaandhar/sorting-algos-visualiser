export const ShellSort = async (numbers, setNumbers) => {
    let steps = [];
    let arr = [...numbers];
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size.
        // The first gap elements arr[0..gap-1] are already in gapped order
        // keep adding one more element until the entire array is gap sorted
        for (let i = gap; i < n; i += 1) {
            // add arr[i] to the elements that have been gap sorted
            // save arr[i] in temp and make a hole at position i
            let temp = arr[i];
            
            // shift earlier gap-sorted elements up until the correct location for arr[i] is found
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // put temp (the original arr[i]) in its correct location
            arr[j] = temp;
            steps.push([...arr]); // Store the current step after the insertion
        }
    }

    return steps; // Return all the steps recorded for visualization
};
