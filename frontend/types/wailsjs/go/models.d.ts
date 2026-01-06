export declare namespace editor {
    class FolderContent {
        name: string;
        file_path: string;
        is_dir: boolean;
        last_mod_time: any;
        content?: string;
        children: FolderContent[];
        static createFrom(source?: any): FolderContent;
        constructor(source?: any);
        convertValues(a: any, classs: any, asMap?: boolean): any;
    }
}
