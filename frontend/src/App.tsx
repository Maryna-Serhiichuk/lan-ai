import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Router from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
  headers: localStorage.getItem("jwt") ? { Authorization: `Bearer ${localStorage.getItem("jwt")}` } : {},
})

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
