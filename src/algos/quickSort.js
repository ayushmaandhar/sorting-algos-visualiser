export const QuickSort = async (numbers) => {
    let steps = [];
    let arr = [...numbers];

    const partition = async (arr, low, high) => {
        let pivot = arr[high];
        let i = (low - 1);

        for (let j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                [arr[i], arr[j]] = [arr[j], arr[i]];
                steps.push([...arr]);
            }
        }
        // Swap arr[i+1] and arr[high] (or pivot)
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        steps.push([...arr]);
        return i + 1;
    };

    const quickSort = async (arr, low, high) => {
        if (low < high) {
            let pi = await partition(arr, low, high);

            // Recursively sort elements before partition and after partition
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    };

    await quickSort(arr, 0, arr.length - 1);
    return steps;
};
