import { Switch, Route} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './Header';
import TodoList from './TodoList.js';
import TodoView from './TodoView.js';
import Home from './Home.js';




function App() {


  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Switch>
          <Route path="/list">
            <TodoList />
          </Route>
          <Route path="/task/:id">
            <TodoView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
      </Container>
    </>
  );
}

export default App;
