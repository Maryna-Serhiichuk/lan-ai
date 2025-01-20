import { FC, Fragment, Suspense, useLayoutEffect } from "react"
import { useLocation } from "react-router"
import { Outlet } from "react-router-dom"
import { Header } from './components/Header'
import { Footer } from "./components/Footer"
import { Comparison } from "./components/Comparison"

export const Common: FC = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return <Fragment>
      <Header/>
      <Comparison/>
      <Suspense>
        <Outlet/>
      </Suspense>
      <Footer/>
    </Fragment>
}