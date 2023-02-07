import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import './App.css';
import './modal-video.scss';
import { routes } from './Routes/Routes.config';
function App() {
  return (
    <div className="">
      <Toaster />
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

export default App;
