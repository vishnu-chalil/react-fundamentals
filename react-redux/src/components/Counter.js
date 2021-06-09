
//import { Component } from 'react';
import { useSelector,useDispatch, connect } from 'react-redux';
import { counterActions } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch =  useDispatch();
   
  const counter = useSelector((state) =>state.counter.counter);
  const showConstant = useSelector(state=>state.counter.showCounter);


  const incrementHandler =()=>{
    // without react redux
    //dispatch({type:'INCREMENT'});

    dispatch(counterActions.increment());

  };
  const decrementHandler =()=>{
    //dispatch({type:'DECREMENT'});
    dispatch(counterActions.decrement());

  };


  const toggleCounterHandler = () => {

    //dispatch({type:'TOGGLE'});
    dispatch(counterActions.toggleCounter());


  };


  const increaseHandler = ()=>{

    dispatch(counterActions.increase(10));


    //dispatch({type: 'INCREASE', amount:5});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showConstant && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};



// class Counter extends Component{

//   incrementHandler(){

//     this.props.increment();


//   }
//   decrementHandler(){

//     this.props.decrement();

//   }
//   toggleCounterHandler(){

//   }
//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   };

//   }

//   const mapStateToProps = state=>{

//     return{
//         counter: state.counter

//     };
//   };

//   const mapDispatchToProps = dispatch =>{

//     return{
//       increment: ()=> dispatch({type:'INCREMENT'}),
//       decrement: ()=> dispatch({type:'DECREMENT'}),
//     };

//   };

export default (Counter);

//export default connect(mapStateToProps,mapDispatchToProps)(Counter);
