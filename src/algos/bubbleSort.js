export const BubbleSort = async (numbers, setNumbers) => {
    let steps = []; // Collect each step of the sorting process
    let arr = [...numbers]; // Work on a copy of the array
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;

                steps.push([...arr]); // Store the current step after the swap
            }
        }
        // If no two elements were swapped by inner loop, then break
    } while (swapped);

    return steps; // Return all the steps recorded
};
