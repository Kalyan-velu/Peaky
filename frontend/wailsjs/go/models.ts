export namespace editor {
	
	export class FolderContent {
	    name: string;
	    file_path: string;
	    is_dir: boolean;
	    // Go type: time
	    last_mod_time: any;
	    content?: string;
	    children: FolderContent[];
	
	    static createFrom(source: any = {}) {
	        return new FolderContent(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.file_path = source["file_path"];
	        this.is_dir = source["is_dir"];
	        this.last_mod_time = this.convertValues(source["last_mod_time"], null);
	        this.content = source["content"];
	        this.children = this.convertValues(source["children"], FolderContent);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

