export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github?: string;
  figma?: string;
  category: 'ui/ux' | 'web' | 'app';
}