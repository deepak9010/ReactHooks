import './App.css';
import ConstructorState from './component/constructor_state';
import Counter from './component/useStateHook';
import ParamsHook from './component/useParamHook'
import WithoutUseMemo from './component/useMemoHook';
import ParentUseCallback from './component/useCallbackHook'
import CounterReducer from './component/useReducerHok'


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
    </div>
  );
}

export default App;
