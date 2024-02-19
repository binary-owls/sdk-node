export interface IndexedNameOptions {
    existing: string[];
    name: string;
}
export declare const randomizeIndexedName: ({ existing, name }: IndexedNameOptions) => string;
