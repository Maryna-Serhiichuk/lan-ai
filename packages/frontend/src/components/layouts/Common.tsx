import { FC, Suspense, useLayoutEffect } from "react"
import { useLocation } from "react-router"
import { Outlet } from "react-router-dom"

export const Common: FC = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return <Suspense>
        <Outlet/>
    </Suspense>
}