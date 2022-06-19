// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import {ExpProvider} from './pages/ExpContext'

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ExpProvider>
        <ThemeProvider>
        <ScrollToTop />
        <BaseOptionChartStyle />
        <Router />
      </ThemeProvider>
    </ExpProvider>
    
  );
}
