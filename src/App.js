import ClassCompWithProps from './materi/1_basic_component/ClassCompWithProps';
import ClassCompWithState from './materi/1_basic_component/ClassCompWithState';

function App() {
  return (
    <div className="App">
      <ClassCompWithProps message="Congratulations, you've learned props"/>
      <ClassCompWithState />
    </div>
  );
}

export default App;
