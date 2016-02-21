export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export function increment()
{
    return {
        type:INCREMENT_COUNTER
    }
}

export function decrement()
{
    return {
        type:DECREMENT_COUNTER
    }
}

export function incrementIfOdd()
{
    return (dispatch,getState)=>{
        if(getState().counter%2==0)
        {
            dispatch(increment());
        }
        else
        {
            return ;
        }
    }
}

export function incrementAsync()
{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(increment());
        },2000)
    }
}
