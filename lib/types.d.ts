export declare type ObjectPosition = {
    x: number;
    y: number;
};
export declare type ObjectSize = {
    w: number;
    h: number;
};
export declare type AtlasTypeFrameFrame = {
    w: number;
    h: number;
    x: number;
    y: number;
};
export declare type AtlasTypeFrame = {
    filename: string;
    frame: AtlasTypeFrameFrame;
    anchor?: {
        x: number;
        y: number;
    };
};
export declare type AtlasType = {
    frames: AtlasTypeFrame[];
};
