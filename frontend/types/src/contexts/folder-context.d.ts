import { editor } from '@/go-runtime/models';
export interface ProjectContext {
    currentProject: string | null;
    content: editor.FolderContent | null;
}
export declare const projectContext: {
    __context__: ProjectContext;
};
