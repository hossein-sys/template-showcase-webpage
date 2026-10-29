import React, { Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import LandingPage from './pages/LandingPage';

const TemplateShowcase = lazy(() => import('./components/TemplateShowcase'));

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main>
        {currentPath === '/templates' ? (
          <Suspense
            fallback={
              <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-3 text-slate-400 font-mono text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
                <span>LOADING_ARCHETYPE_CATALOG...</span>
              </div>
            }
          >
            <TemplateShowcase />
          </Suspense>
        ) : (
          <LandingPage />
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </NavigationProvider>
  );
};

export default App;
