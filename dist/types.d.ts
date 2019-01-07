export interface Blockmap {
    x: number;
    y: number;
    columns: number;
    rows: number;
    blocks: Int16Array[];
}
export interface Flat {
    width: 64;
    height: 64;
    data: Uint8Array;
}
export interface LinedefFlags {
    impassable: boolean;
    blockMonster: boolean;
    doubleSided: boolean;
    upperUnpegged: boolean;
    lowerUnpegged: boolean;
    secret: boolean;
    blockSound: boolean;
    hidden: boolean;
    shown: boolean;
}
export interface Linedef {
    startVertex: number;
    endVertex: number;
    flags: LinedefFlags;
    specialType: number;
    sectorTag: number;
    rightSidedef: number;
    leftSidedef: number;
}
export interface BBox {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
export interface Node {
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
    leftBBox: BBox;
    rightBBox: BBox;
    rightChild: number;
    leftChild: number;
}
export interface Picture {
    width: number;
    height: number;
    left: number;
    top: number;
    columns: Uint8Array[];
}
export declare type Rgb = [number, number, number];
export interface Sector {
    floorHeight: number;
    ceilingHeight: number;
    floor: string;
    ceiling: string;
    light: number;
    type: number;
    tag: number;
}
export interface Seg {
    startVertex: number;
    endVertex: number;
    angle: number;
    linedef: number;
    direction: number;
    offset: number;
}
export interface Sidedef {
    x: number;
    y: number;
    upper: string;
    lower: string;
    middle: string;
    sector: number;
}
export interface Ssector {
    count: number;
    startSeg: number;
}
export interface Patch {
    x: number;
    y: number;
    patch: number;
    stepDir: number;
    colormap: number;
}
export interface Texture {
    name: string;
    masked: boolean;
    width: number;
    height: number;
    patches: Patch[];
}
export interface ThingFlags {
    easy: boolean;
    medium: boolean;
    hard: boolean;
    deaf: boolean;
    multiplayer: boolean;
}
export interface Thing {
    x: number;
    y: number;
    angle: number;
    type: number;
    flags: ThingFlags;
}
export interface Vertex {
    x: number;
    y: number;
}
export declare type Reader = (view: DataView) => any;
export declare type ReaderMap = {
    [name: string]: Reader;
};
