import { Provider } from 'react-redux';
import Contador from './components/Contador';
import store from './store';

function App() {
   return (
      <Provider store={store}>
         <div>
            <h1>REDUX</h1>
            <hr />
            <Contador />
            <hr />
         </div>
      </Provider>
   );
}

export default App;
