import { useState } from 'react';
import { PartsInventory } from '../components/PartsInventory/PartsInventory';
import { ResetModal } from '../components/ResetModal';
import { Summary } from '../components/Summary/Summary';
import { usePartsState } from '../hooks/usePartsState';

export function HomePage() {
  const { partState, setPartQuantity, resetAllParts } = usePartsState();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  const handleResetClick = () => {
    setIsResetModalOpen(true);
  };

  const handleResetConfirm = () => {
    resetAllParts();
  };

  return (
    <>
      <div className="grid-responsive">
        <PartsInventory
          partStates={partState}
          onQuantityChange={setPartQuantity}
          onResetClick={handleResetClick}
        />
        <Summary partStates={partState} />
      </div>
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </>
  );
}
