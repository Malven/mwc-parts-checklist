import { Col, Row } from 'antd';
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
    <div style={{ width: '100%', maxWidth: '1270px', margin: '0 auto' }}>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <Header />
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={12}>
              <PartsInventory
                partStates={partState}
                onQuantityChange={setPartQuantity}
                onResetClick={handleResetClick}
              />
            </Col>
            <Col xs={24} lg={12}>
              <Summary partStates={partState} />
            </Col>
          </Row>
        </Col>
      </Row>
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleResetConfirm}
      />
    </div>
  );
}

export default App;
