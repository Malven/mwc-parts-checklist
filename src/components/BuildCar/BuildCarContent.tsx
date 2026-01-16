import { useMemo } from 'react';
import sectionsData from '../../data/sections.json';
import { BuildSection } from '../../types/sections';
import { processSections } from '../../utils/processSections';
import { SectionGroup } from './SectionGroup';

export function BuildCarContent() {
  const groups = useMemo(() => {
    return processSections(sectionsData as BuildSection[]);
  }, []);

  if (!groups.length) {
    return (
      <div className="text-center" style={{ padding: 40 }}>
        <div className="spinner spinner-large" />
      </div>
    );
  }

  return (
    <div>
      {groups.map((group, index) => (
        <SectionGroup key={index} group={group} />
      ))}
    </div>
  );
}
