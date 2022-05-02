import Router from 'router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'Styles/globalStyle';
import { theme } from 'Styles/theme';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
