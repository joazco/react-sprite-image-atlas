"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var spriteReducer_1 = require("./spriteReducer");
var useSize_1 = require("./useSize");
var useSpriteComponent = function (props) {
    /**  */
    var imageSrc = props.imageSrc, atlas = props.atlasConfig, frameName = props.frameName, center = props.center, responsive = props.responsive, blockAtMaxSize = props.blockAtMaxSize, blockAtMinSize = props.blockAtMinSize, minSize = props.minSize;
    var getSize = (0, useSize_1.default)();
    /**  */
    var canvasRef = (0, react_1.useRef)(null);
    var parentRef = (0, react_1.useRef)(null);
    /**  */
    var _a = (0, react_1.useReducer)(spriteReducer_1.default, spriteReducer_1.spriteDefaultState), state = _a[0], dispatch = _a[1];
    var loaded = state.loaded, parentSize = state.parentSize, imgLoaded = state.imgLoaded;
    /** */
    var image = (0, react_1.useMemo)(function () {
        var img = new Image();
        img.src = imageSrc;
        return img;
    }, []);
    var frameObject = (0, react_1.useMemo)(function () {
        var frameFind = atlas.frames.find(function (f) { return f.filename === frameName; });
        if (typeof frameFind !== "undefined")
            return frameFind.frame;
        return null;
    }, [frameName]);
    var updateParentSize = (0, react_1.useCallback)(function () {
        if (parentRef.current) {
            var _a = parentRef.current, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
            dispatch({
                type: "parentSize",
                data: {
                    w: clientWidth,
                    h: clientHeight,
                },
            });
        }
    }, [parentRef]);
    // draw image
    (0, react_1.useEffect)(function () {
        if (canvasRef.current && loaded && frameObject) {
            var ctx = canvasRef.current.getContext("2d");
            ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, parentSize.w, parentSize.h);
            var _a = getSize(parentSize, frameObject, !!responsive, !!blockAtMaxSize, !!blockAtMinSize, minSize), pw = _a[0], ph = _a[1];
            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(image, frameObject.x, frameObject.y, frameObject.w, frameObject.h, center ? (parentSize.w - pw) / 2 : 0, center ? (parentSize.h - ph) / 2 : 0, pw, ph);
        }
    }, [canvasRef, loaded, parentSize, frameObject, props]);
    // update parent size if ref is charged
    (0, react_1.useEffect)(function () {
        updateParentSize();
    }, [parentRef]);
    // update parent size on resize window
    (0, react_1.useEffect)(function () {
        window.addEventListener("resize", updateParentSize);
        return function () {
            window.addEventListener("resize", updateParentSize);
        };
    }, []);
    // check img loaded
    (0, react_1.useEffect)(function () {
        var dispatchImgLoaded = function () {
            dispatch({ type: "imgLoaded" });
        };
        if (image.complete) {
            dispatchImgLoaded();
        }
        else {
            image.addEventListener("load", dispatchImgLoaded);
            return function () {
                image.removeEventListener("load", dispatchImgLoaded);
            };
        }
    }, []);
    // if all is charged
    (0, react_1.useEffect)(function () {
        if (imgLoaded && parentSize) {
            dispatch({ type: "loaded" });
        }
    }, [imgLoaded, parentSize]);
    return {
        loaded: loaded,
        parentSize: parentSize,
        canvasRef: canvasRef,
        parentRef: parentRef,
    };
};
exports.default = useSpriteComponent;
