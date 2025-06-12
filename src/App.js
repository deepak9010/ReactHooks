import './App.css';
import ConstructorState from './component/constructor_state';
import Counter from './component/useStateHook';
import ParamsHook from './component/useParamHook'
import WithoutUseMemo from './component/useMemoHook';
import ParentUseCallback from './component/useCallbackHook'
import CounterReducer from './component/useReducerHok'
import FruitList from './component/List'
import ControlledInput from './component/ControlledComp'
import UncontrolledInput from './component/UncontrolledComp'


function App() {
  return (
    <div className="App">
      <h1> hello</h1>
      <ConstructorState />
      <Counter />

      <ParamsHook/>
      <WithoutUseMemo/>
      <ParentUseCallback />

      <CounterReducer/>
      <FruitList/>
      <ControlledInput/>

      <UncontrolledInput/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default App;
