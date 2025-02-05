import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@/theme/theme-provider';
import ProductLaunch from '@/pages/index';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ProductLaunch />
      </Router>
    </ThemeProvider>
  );
}

export default App;