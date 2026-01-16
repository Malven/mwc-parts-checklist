import { useState } from 'react';
import { SectionGroup as SectionGroupType } from '../../types/sections';
import { BuildStep } from './BuildStep';

interface SectionGroupProps {
  group: SectionGroupType;
}

export function SectionGroup({ group }: SectionGroupProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="accordion" style={{ marginBottom: 16 }}>
      <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
        <button
          className="accordion-header"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          type="button"
        >
          <h3
            className="heading-3"
            style={{ margin: 0, color: 'var(--color-primary)' }}
          >
            {group.header}
          </h3>
          <span className="accordion-icon" aria-hidden="true">
            ▼
          </span>
        </button>
        <div className="accordion-content">
          <div className="accordion-body">
            {group.steps.map((step, index) => (
              <BuildStep key={index} step={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
