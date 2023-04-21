import useSpriteComponent from "./useSpriteComponent";
import { AtlasType, ObjectSize } from "./types";

type ImageSpriteProps = {
  imageSrc: string;
  atlasConfig: AtlasType;
  frameName: string;
  center?: boolean;
  responsive?: boolean;
  blockAtMaxSize?: boolean;
  blockAtMinSize?: boolean;
  minSize?: ObjectSize;
};

export type ImageSpriteComponentProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ImageSpriteProps;

const ImageSpriteComponent: React.FC<ImageSpriteComponentProps> = (props) => {
  const {
    imageSrc,
    atlasConfig,
    frameName,
    center = false,
    responsive = false,
    blockAtMaxSize = false,
    blockAtMinSize = false,
    minSize,
    ...rest
  } = props;
  const { loaded, parentSize, canvasRef, parentRef } = useSpriteComponent({
    imageSrc,
    atlasConfig,
    frameName,
    center,
    responsive,
    blockAtMaxSize,
    blockAtMinSize,
    minSize,
  });

  return (
    <div {...rest} style={{ width: "100%", height: "100%" }} ref={parentRef}>
      {loaded && (
        <canvas width={parentSize.w} height={parentSize.h} ref={canvasRef} />
      )}
    </div>
  );
};

export default ImageSpriteComponent;
export { ImageSpriteProps, AtlasType };
