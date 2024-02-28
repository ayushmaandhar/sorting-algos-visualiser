export const InsertionSort = async(numbers) => {

    let steps = []; // Collect each step of the sorting process
    let arr = [...numbers]; // Work on a copy of the array
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i-1;
        while (j > -1 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
            arr[j + 1] = current;
            steps.push([...arr]); // Store the current step
        }
    }
    return steps; // Return all the steps recorded

}
