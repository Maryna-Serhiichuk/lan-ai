import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './pages';
import ThemeConfigProvider from './components/theme/index'
import { AuthProvider } from 'Auth';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
  headers: localStorage.getItem("jwt") ? { Authorization: `Bearer ${localStorage.getItem("jwt")}` } : {},
})

function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ThemeConfigProvider>
          <Router />
        </ThemeConfigProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
