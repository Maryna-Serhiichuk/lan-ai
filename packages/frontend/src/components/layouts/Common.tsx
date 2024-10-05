import { FC, Fragment, Suspense, useLayoutEffect } from "react"
import { useLocation } from "react-router"
import { Outlet } from "react-router-dom"
import { Header } from './components/Header'

export const Common: FC = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return <Fragment>
      <Header />
      <Suspense>
        <Outlet/>
      </Suspense>
    </Fragment>
}