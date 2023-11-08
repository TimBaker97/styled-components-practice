import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';

const theme = {
  color: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container className="container">
          <h1>Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
