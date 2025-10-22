import React, { Suspense } from 'react';

const WelcomeScreen = React.lazy(() => import('./components/WelcomeScreen'));
const JourneySection = React.lazy(() => import('./components/JourneySection'));
const BlessingsSection = React.lazy(() => import('./components/BlessingsSection'));
const MapSection = React.lazy(() => import('./components/MapSection'));
const MessageSection = React.lazy(() => import('./components/MessageSection'));
const ClosingSection = React.lazy(() => import('./components/ClosingSection'));

const LoadingSpinner = () => (
    <div className="h-screen w-full flex items-center justify-center bg-dark-bg">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-deep-saffron"></div>
    </div>
);

function App() {
  return (
    <main className="bg-dark-bg font-laila text-pure-white">
      <Suspense fallback={<LoadingSpinner />}>
        <WelcomeScreen />
        <JourneySection />
        <BlessingsSection />
        <MapSection />
        <MessageSection />
        <ClosingSection />
      </Suspense>
    </main>
  );
}

export default App;
