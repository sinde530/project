/**
 * [Create] Action Type
 * [Create] as const 'After' not defined and action.type value same.
 * [Creeate] action.types not string'' 'countrt/Increment' and actuarry string value
 */

// tyoe const value = counter/Increment
const INCREASE = "counter/Increment" as const;
const DECREASE = "counter/Decrement" as const;

const INCREASE_BY = "counter/INCREASE_BY" as const;

// action function Add.
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

// InitialState Actions Actually most Values, modern `payload` nothink smae names.
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    // FLUX 규칙 설명
    // https://github.com/redux-utilities/flux-standard-action
    payload:diff
});

// action renderers type request.
type CounterAction = 
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>

// redux Modules props state type actions.
type CounterState = {
    count : number
}

// InitialState Funtion

const InitialState: CounterState = {
    count: 0
}

// Get by Write toBe Reducer.
// Reducer more state and functions setState Values Same Writing.
// Actions We other maked CounterAction Type Settings.
function counter(
    state: CounterState = InitialState,
    action: CounterAction
)

export defualt {}