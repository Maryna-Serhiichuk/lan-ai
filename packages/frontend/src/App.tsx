import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme'
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
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
