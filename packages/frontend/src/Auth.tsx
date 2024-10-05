import { createContext, FC, PropsWithChildren, useContext } from 'react'

import { MeComponent } from './graphql'

type ContextProps = Maybe<Partial<UsersPermissionsUser>>

const defaultValue: ContextProps = null

const AuthContext = createContext<ContextProps>(defaultValue)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const token = localStorage.getItem("jwt")
  return !token 
  ? <>{children}</> 
  : <MeComponent>{({ data }) => 
    <AuthContext.Provider value={data?.me}>{children}</AuthContext.Provider>
  }</MeComponent>
}

function withAuth(Wrapped: FC): FC {
  return props => (
    <AuthProvider>
      <Wrapped {...props} />
    </AuthProvider>
  )
}

const useAuth = () => useContext<ContextProps>(AuthContext)

export { AuthProvider, useAuth, withAuth }
