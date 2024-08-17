import { useUpdateWordsPointsMutation } from "./../../graphql"
import { FC, Suspense, useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router"
import { Outlet } from "react-router-dom"

export const Common: FC = () => {
    const { pathname } = useLocation()

    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    const [initUpdate] = useUpdateWordsPointsMutation()

    useEffect(() => {
      initUpdate()
    }, [])

    return <Suspense>
        <Outlet/>
    </Suspense>
}