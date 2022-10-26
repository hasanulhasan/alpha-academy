import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Course from './page/Course/Course';
import CoursePage from './page/CoursePage/CoursePage';
import Home from './page/Home/Home';
import Main from './page/layout/Main';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/coursepage',
        element: <CoursePage></CoursePage>
      },
      {
        path: '/course/:id',
        element: <Course></Course>,
        loader: ({ params }) => fetch(`http://localhost:5001/course/${params.id}`)
      }
    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
