import './App.css';
import { useState, useEffect, useRef } from 'react';
import AllBars from './Bar';
import { InsertionSort } from './algos/insertionSort';
import { SelectionSort } from './algos/selectionSort';
import { BubbleSort } from './algos/bubbleSort';
import { QuickSort } from './algos/quickSort';
import { MergeSort } from './algos/mergeSort';
import { ShellSort } from './algos/shellSort';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';




function App() {
  const animationSpeedRef = useRef(100);
  const [animationSpeed, setAnimationSpeed] = useState(100);
  const [max, setMax] = useState(90);
  const [numbers, setNumbers] = useState([]);
  const [update, setUpdate] = useState(0);

  const generateNumbers = () => {
    const newNumbers = [];
    for (let i = 0; i < 50; i++) {
      newNumbers.push(Math.floor(Math.random() * max) + 1);
    }
    setNumbers(newNumbers);
  };

  const sleep = () => {
      return new Promise(resolve => setTimeout(resolve, animationSpeedRef.current));
  }

  const handleInsertionSort = async() => {
    toast.success("Insetion Sort Initialized!");
    const steps = await InsertionSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleSelectionSort = async() => {
    toast.success("Selection Sort Initialized!");
    const steps = await SelectionSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleBubbleSort = async () => {
    toast.success("Bubble Sort Initialized!");
    const steps = await BubbleSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleQuickSort = async () => {
    toast.success("Quick Sort Initialized!");
    const steps = await QuickSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleMergeSort = async () => {
    toast.success("Merge Sort Initialized!");
    const steps = await MergeSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleShellSort = async () => {
    toast.success("Shell Sort Initialized!");
    const steps = await ShellSort(numbers); // Get the sorting steps
    for (let step of steps) {
        await sleep(); // Delay for visualization
        setNumbers(step); // Update state to reflect the current step
    }
    toast.success("Numbers Sorted!");
  };

  const handleGenerateNumbers = () => {
    toast.success("Random Numbers Generated!");
    generateNumbers();
  }


  //Generate numbers on component mount
  useEffect(() => {
    generateNumbers();
  }, []);

  useEffect(() => {
    console.log("state changes", numbers);
  }, [numbers]);


  const handleSpeedDecrease = () => {
    if(animationSpeedRef.current > 0) {
      animationSpeedRef.current -= 50;
      setAnimationSpeed( animationSpeed => animationSpeed - 50);
    }
  }

  const handleSpeedIncrease = () => {
    if (animationSpeedRef.current < 1500) {
      animationSpeedRef.current += 50;
      setAnimationSpeed( animationSpeed => animationSpeed + 50);
    }
  }

  const handleSizeIncrease = () => {
    if ( max < 99 ) {
      setMax(max => max + 1);
      const newNums = numbers.map(element => element + 1);
      setNumbers(newNums);
      setUpdate(update => update+1);
    }
  }

  const handleSizeDecrease = () => {
    if ( max > 0 && Math.min(...numbers) > 0) {
      setMax(max => max - 1);
      const newNums = numbers.map(element => element - 1);
      setNumbers(newNums);
      setUpdate(update => update+1);
    }
  }


  return (
    <div className="App">
      <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      <div className="upper-btn"> 

        <button onClick={handleGenerateNumbers}>Randomise Array</button>
        <button onClick={handleInsertionSort}>Insertion Sort</button>
        <button onClick={handleSelectionSort}>Selection Sort</button>
        <button onClick={handleBubbleSort}>Bubble Sort</button>
        <button onClick={handleQuickSort}>Quick Sort</button>
        <button onClick={handleMergeSort}>Merge Sort</button>
        <button onClick={handleShellSort}>Shell Sort</button>

      </div>

      <AllBars numbers={numbers} update={update}/>

      <div style={{display: "flex", justifyContent: "space-between"}}>

        <span className='animation-btns'>
          Animation Speed:&nbsp;
          <button onClick={handleSpeedDecrease}>-</button>
          &nbsp;
          {animationSpeed}ms
          &nbsp;
          <button onClick={handleSpeedIncrease}>+</button>
        </span>

        <div className='size-btns'>
          Max Array element size:&nbsp;&nbsp;
         <button onClick={handleSizeDecrease}>-</button>
          &nbsp;
          {max}
          &nbsp;
          <button onClick={handleSizeIncrease}>+</button>

        </div>

      </div>

    </div>
  );
}

export default App;
