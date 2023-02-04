import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard/DashBoard';
import Exchange from './scenes/dashboard/ExchangePage.jsx/Exchange';
import FAQpage from './scenes/dashboard/FAQ/FAQpage';
import Profiles from './scenes/dashboard/Profile/Profiles';
import Sidebar from './scenes/global/Sidebar';
import TopBar from './scenes/global/Topbar';
import { ColorModeContext, useMode } from './theme';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/exchange" element={<Exchange />} />
              <Route path="/faq" element={<FAQpage />} />
              <Route path="/form" element={<Profiles />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
