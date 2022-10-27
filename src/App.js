import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CheckOut from './CheckOut/CheckOut';
import Course from './page/Course/Course';
import CourseInfo from './page/CourseInfo/CourseInfo';
import CoursePage from './page/CoursePage/CoursePage';
import Error from './page/Error/Error';
import FAQ from './page/FAQ/FAQ';
import Home from './page/Home/Home';
import Main from './page/layout/Main';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import PrivateRouter from './PrivateRouter/PrivateRouter';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
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
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'checkout/:id',
        element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>,
        loader: ({ params }) => fetch(`https://assignment-10-server-peach.vercel.app/coursepage/${params.id}`)
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/coursepage/:id',
        element: <CourseInfo></CourseInfo>,
        loader: ({ params }) => fetch(`https://assignment-10-server-peach.vercel.app/coursepage/${params.id}`)
      },
      {
        path: '/coursepage',
        element: <CoursePage></CoursePage>,
        loader: ({ params }) => fetch(`https://assignment-10-server-peach.vercel.app/coursepage`)
      },
      {
        path: '/course/:id',
        element: <Course></Course>,
        loader: ({ params }) => fetch(`https://assignment-10-server-peach.vercel.app/course/${params.id}`)
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
