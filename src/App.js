import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Course from './page/Course/Course';
import CourseInfo from './page/CourseInfo/CourseInfo';
import CoursePage from './page/CoursePage/CoursePage';
import Home from './page/Home/Home';
import Main from './page/layout/Main';
import Login from './page/Login/Login';
import Register from './page/Register/Register';

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
        path: 'login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/coursepage/:id',
        element: <CourseInfo></CourseInfo>,
        loader: ({ params }) => fetch(`http://localhost:5001/coursepage/${params.id}`)
      },
      {
        path: '/coursepage',
        element: <CoursePage></CoursePage>,
        loader: ({ params }) => fetch(`http://localhost:5001/coursepage/${params.id}`)
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
