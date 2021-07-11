export interface IndexedNameOptions {
    existing: string[];
    name: string;
}
export declare const generateIndexedName: ({ existing, name }: IndexedNameOptions) => string;
