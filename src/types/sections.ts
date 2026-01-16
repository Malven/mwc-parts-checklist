export interface BuildSection {
  title: string;
  description: string;
  images: string[];
}

export interface SectionGroup {
  header: string;
  steps: BuildSection[];
}
