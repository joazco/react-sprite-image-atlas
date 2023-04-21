/// <reference types="node" />
import { ObjectPosition, ObjectSize } from "./types";
export declare type SpriteReducerState = {
    loaded: boolean;
    imgLoaded: boolean;
    objectSize: ObjectSize;
    objectPosition: ObjectPosition;
    parentSize: ObjectSize;
};
export declare const spriteDefaultState: SpriteReducerState;
export interface SpriteReducerActionData {
    x: number;
    y: number;
}
export interface SpriteReducerActionData {
    h: number;
    w: number;
}
export interface SpriteReducerActionData {
    timer: NodeJS.Timeout;
}
export declare type SpriteReducerActionType = keyof SpriteReducerState;
export declare type SpriteReducerAction = {
    type: SpriteReducerActionType;
    data?: SpriteReducerActionData;
};
declare const spriteReducer: (state: SpriteReducerState, action: SpriteReducerAction) => SpriteReducerState;
export default spriteReducer;
