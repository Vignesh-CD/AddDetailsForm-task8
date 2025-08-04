import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddForm from './components/Addform';
import ViewDetails from './components/ViewDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddForm />} />
        <Route path='/details' element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
