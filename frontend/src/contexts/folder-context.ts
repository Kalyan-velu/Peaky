import { createContext } from '@lit/context';
import { editor } from '@/go-runtime/models';

export interface ProjectContext {
  currentProject: string | null;
  content: editor.FolderContent | null;
}

export const projectContext = createContext<ProjectContext>('project-context');
