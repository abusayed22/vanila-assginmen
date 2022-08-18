// dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const addCounterEl = document.getElementById("addCounter");
const resetEl = document.getElementById("reset");




// create idetnify
const INCREMENT = "increment"
const DECREMENT = "decrement"
const ADDCOMPONENT = "addcomponent"
const RESET = "reset"


// let intioastate

const intialState = {
    value: 0
}

// create reducer 
const counterReducer = (state = intialState, action) => {
    switch (action.type) {

        case INCREMENT: return {
            ...state,
            value: state.value + action.payload
        }

            break;

        case DECREMENT: return {
            ...state,
            value: state.value - action.payload
        }
            break;

        case ADDCOMPONENT: return {
            ...state,
            comStatus: true
        }
            break;

        case RESET: return {
            ...state,
            value: action.payload
        }
            break;

        default:
            return state
            break;
    }
}

// create store 
const store = Redux.createStore(counterReducer)

// test

// action triger 
const incrementHandler = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrementHandler = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}
const resetFunc = (value) => {
    return {
        type: RESET,
        payload: value,

    }
}


const render = () => {
    const state = store.getState()
    counterEl.innerText = state.value
}

// subscribe
store.subscribe(render)

render()




// event listiner 
incrementEl.addEventListener('click', () => {
    store.dispatch(incrementHandler(2))
})

decrementEl.addEventListener('click', () =>
    store.dispatch(decrementHandler(2)))

resetEl.addEventListener('click', () =>
    store.dispatch(resetFunc(0))
)

let count = 0;

addCounterEl.addEventListener('click', () => {
   ++count
   const fakearr = [1,2,3]

    const mainEl = document.getElementById("main");
    const readingEl = document.getElementById("pushing");
    

    readingEl.innerHTML = `
    ${fakearr.map(d => `<div id="main" class="mx-auto max-w-md mt-10 space-y-5">
    <div
        class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
    >
        <div id="counter" class="text-2xl font-semibold"></div>
        <div class="flex space-x-3">
            <button
                id="increment"
                class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            >
                Increment
            </button>
            <button
                id="decrement"
                class="bg-red-400 text-white px-3 py-2 rounded shadow"
            >
                Decrement
            </button>
        </div>
    </div>
</div>`)}
    
    `
    // readingEl.appendChild(testArr[0]);
    // readingEl.appendChild(testArr[1]);

    // readingEl.appendChild(mainEl)
    // console.log(mainEl);
    console.log('testing',count)
  
})
console.log(count)