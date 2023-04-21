/// <reference types="react" />
import { ImageSpriteProps } from ".";
declare const useSpriteComponent: (props: ImageSpriteProps) => {
    loaded: boolean;
    parentSize: import("./types").ObjectSize;
    canvasRef: import("react").RefObject<HTMLCanvasElement>;
    parentRef: import("react").RefObject<HTMLDivElement>;
};
export default useSpriteComponent;
