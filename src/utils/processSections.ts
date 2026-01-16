import { BuildSection, SectionGroup } from '../types/sections';

export function processSections(sections: BuildSection[]): SectionGroup[] {
  const groups: SectionGroup[] = [];
  let currentGroup: SectionGroup | null = null;

  for (const section of sections) {
    // Check if this is a header section (starts with "----")
    if (section.title.startsWith('----') && section.title.endsWith('----')) {
      // Save previous group if it exists
      if (currentGroup) {
        groups.push(currentGroup);
      }
      // Create new group
      const headerName = section.title.replace(/----/g, '').trim();
      currentGroup = {
        header: headerName || 'General',
        steps: [],
      };
    } else {
      // This is a regular step
      if (!currentGroup) {
        // If no group exists yet, create a default one
        currentGroup = {
          header: 'Engine',
          steps: [],
        };
      }
      currentGroup.steps.push(section);
    }
  }

  // Don't forget to add the last group
  if (currentGroup) {
    groups.push(currentGroup);
  }

  return groups;
}
