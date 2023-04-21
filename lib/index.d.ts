/// <reference types="react" />
import { AtlasType, ObjectSize } from "./types";
declare type ImageSpriteProps = {
    imageSrc: string;
    atlasConfig: AtlasType;
    frameName: string;
    center?: boolean;
    responsive?: boolean;
    blockAtMaxSize?: boolean;
    blockAtMinSize?: boolean;
    minSize?: ObjectSize;
};
export declare type ImageSpriteComponentProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & ImageSpriteProps;
declare const ImageSpriteComponent: React.FC<ImageSpriteComponentProps>;
export default ImageSpriteComponent;
export { ImageSpriteProps, AtlasType };
