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
import UseContextHook from './component/useContextHook';
import ContextApi from './component/ContextApi'
import UserListWithLoadingDemo from './component/HOC/UserListWithLoadingDemo';
import ContextApiDemo from './component/ContextAPI/ContextApiDemo';
import CustomComponent from './component/CustomHook/customComponent'
import ParentComp from './component/LiftingStateUp/Parentcomp';
import LifecycleExample from './component/Lifecycle/compLifecycle'

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

      <UseContextHook/>
      <br></br>
      <br></br>
      <br></br>
      <ContextApi/>

      {/* HOC */}
      <UserListWithLoadingDemo/>

      <br></br>
      <br></br>
      {/* Context API and useContext Hook */}
      <ContextApiDemo />

      <br></br>
      <br></br>
        {/* custom Hook */}
      <CustomComponent/>
      <br></br>
      <br></br>
        {/* lifting state up */}
      <ParentComp />
      <br></br>
      <br></br>

      <LifecycleExample />
    </div>
  );
}

export default App;
