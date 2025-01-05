import { FC, lazy, useEffect, useState } from 'react'
import { createBrowserRouter, RouteObject, RouterProvider, Navigate } from 'react-router-dom'
import { Common, Auth, Default } from './../components/layouts'
import { useMeQuery } from './../graphql'

const Login = lazy<FC>(() => import('./login'))
const SignUp = lazy<FC>(() => import('./sign-up'))
const Settings = lazy<FC>(() => import('./settings'))
const Setting = lazy<FC>(() => import('./setting'))
const Lists = lazy<FC>(() => import('./lists'))
const List = lazy<FC>(() => import('./list'))
const Word = lazy<FC>(() => import('./word'))
const CreateList = lazy<FC>(() => import('./create-list'))
const Sentences = lazy<FC>(() => import('./sentences'))
const Story = lazy<FC>(() => import('./story'))
const Verbs = lazy<FC>(() => import('./verbs'))
const Verb = lazy<FC>(() => import('./verb'))
const CreateVerb = lazy<FC>(() => import('./create-verb'))

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
        // element: <Navigate to={'setting/1'} replace />,
        element: <Navigate to={'verbs'} replace />,
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
            path: 'setting/:id',
            element: <Setting />,
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
          {
            path: 'story/:id',
            element: <Story />,
          },

          {
            path: 'verbs',
            element: <Verbs />,
          },
          {
            path: 'verb/:id',
            element: <Verb />,
          },
          {
            path: 'create-verb',
            element: <CreateVerb />,
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