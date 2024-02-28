export const SelectionSort = async (numbers) => {
    let steps = []; // Collect each step of the sorting process
    let arr = [...numbers]; // Work on a copy of the array
    let n = arr.length;

    for (let i = 0; i < n-1; i++) {
        // Find the minimum element in the unsorted array
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
            steps.push([...arr]); // Store the current step after swap
        }
    }

    return steps; // Return all the steps recorded
};