export const MergeSort = async (numbers, setNumbers) => {
    let steps = [];
    let arr = [...numbers];

    const merge = (arr, left, middle, right) => {
        let n1 = middle - left + 1;
        let n2 = right - middle;
        
        // Create temp arrays
        let L = new Array(n1);
        let R = new Array(n2);
        
        // Copy data to temp arrays L[] and R[]
        for (let i = 0; i < n1; i++)
            L[i] = arr[left + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[middle + 1 + j];
        
        // Merge the temp arrays back into arr[l..r]
        let i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
        
        // Copy the remaining elements of L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
        
        // Copy the remaining elements of R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    };

    const mergeSort = (arr, left, right) => {
        if (left >= right) {
            return; // Returns recursively
        }
        let middle = left + parseInt((right - left) / 2);
        mergeSort(arr, left, middle);
        mergeSort(arr, middle + 1, right);
        merge(arr, left, middle, right);
        
        // This is where we capture the state of the array after each merge
        steps.push([...arr]);
    };

    mergeSort(arr, 0, arr.length - 1);
    return steps; // Return all the steps recorded for visualization
};
