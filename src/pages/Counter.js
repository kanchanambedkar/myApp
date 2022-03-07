import React , {useState} from 'react';
let initalState = 0;

const Counter = () => {
    const [state, setValue] = useState(initalState);

    const increament = () => {
        setValue((state + 1));
    }
   
    const decreament = () => {
        if(state>0){
            setValue((state - 1));
        }
        
    }

    const reset = () => {
        setValue(initalState)
    }

    return(
        <>
        <br />
        <div>
         value = {state}
        </div>
        <br />
        <br />

        <button className='' style={{backgroundColor: 'Blue', fontSize: '18px', color: 'white', border: '1px solid white', padding: '10px 20px', cursor: 'pointer'}} onClick={increament}>
            Increament value
        </button>

        <button className='' style={{backgroundColor: 'red', fontSize: '18px', color: 'white', border: '1px solid white', padding: '10px 20px', cursor: 'pointer'}} onClick={decreament}>
            Decreament value
        </button>

        <button className='' style={{backgroundColor: 'green', fontSize: '18px', color: 'white', border: '1px solid white', padding: '10px 20px', cursor: 'pointer'}} onClick = {reset}>
            Reset value
        </button>
       
        </>
    );
}

export default Counter;