import { FC, lazy, useEffect, useState } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider, Navigate } from 'react-router-dom'
import { Common, Auth, Default } from './../components/layouts'
import { useMeQuery } from './../graphql'

const Login = lazy<FC>(() => import('./login'))
const SignUp = lazy<FC>(() => import('./sign-up'))
const Settings = lazy<FC>(() => import('./settings'))
const Lists = lazy<FC>(() => import('./lists'))
const List = lazy<FC>(() => import('./list'))
const Word = lazy<FC>(() => import('./word'))
const CreateList = lazy<FC>(() => import('./create-list'))
const Sentences = lazy<FC>(() => import('./sentences'))

const guestRoutes: RouteObject[] = [
  {
    path: '',
    element: <Common />,
    children: [
      {
        element: <Navigate to={'login'} replace />,
        children: [{path: ''},{path: '*'}]
      },
      {
        path: '',
        element: <Auth />,
        children: [
          {
            element: <Login />,
            path: 'login',
          },
          {
            element: <SignUp />,
            path: 'sign-up',
          },
        ]
      },
    
    ],
  },
]

const authRoutes: RouteObject[] = [
  {
    path: '',
    element: <Common />,
    children: [
      {
        element: <Navigate to={'list'} replace />,
        children: [{path: ''},{path: '*'}]
      },
      {
        path: '',
        element: <Default />,
        children: [
          {
            path: 'settings',
            element: <Settings />,
          },
          {
            path: 'list',
            element: <Lists />,
          },
          {
            path: 'list/:id',
            element: <List />,
          },
          {
            path: 'list/:id/:mode',
            element: <Word />,
          },
          {
            path: 'create-list',
            element: <CreateList />,
          },
          {
            path: 'sentences/:id',
            element: <Sentences />,
          },
        ]
      },
    ],
  },
]

const Router: FC = () => {
  const { data } = useMeQuery()
  const [routes, setRoutes] = useState<RouteObject[]>(guestRoutes)

  useEffect(() => {
    if (data?.me?.email) {
      setRoutes(authRoutes)
    } else {
      setRoutes(guestRoutes)
    }
  }, [data])

  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} fallbackElement={null} future={{ v7_startTransition: true }} />
}

export default Router;