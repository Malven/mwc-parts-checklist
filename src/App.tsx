import { useState } from 'react';
import { Header } from './components/Header';
import { PartsInventory } from './components/PartsInventory/PartsInventory';
import { ResetModal } from './components/ResetModal';
import { Summary } from './components/Summary/Summary';
import { usePartsState } from './hooks/usePartsState';

function App() {
  const { partState, setPartQuantity, resetAllParts } = usePartsState();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleResetClick = () => {
    setIsResetModalOpen(true);
  };

  const handleResetConfirm = () => {
    resetAllParts();
  };

  return (
    <div className="w-full max-w-317.5 flex flex-col gap-6">
      <Header />
      <main className="grid grid-cols-[minmax(0,2fr)_minmax(0,2.2fr)] gap-5 items-start max-[1050px]:grid-cols-1">
        <PartsInventory
          partStates={partState}
          onQuantityChange={setPartQuantity}
          onResetClick={handleResetClick}
        />
        <Summary partStates={partState} />
      </main>
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </div>
  );
}

export default App;
