import { useUpdateWordsPointsMutation } from "./../../graphql"
import { FC, Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom"

export const Default: FC = () => {
    // const [initUpdate] = useUpdateWordsPointsMutation()

    // useEffect(() => {
    //   initUpdate()
    // }, [])

    return <Suspense>
        <Outlet/>
    </Suspense>
}