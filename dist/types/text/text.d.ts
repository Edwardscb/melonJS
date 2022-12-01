/**
 * @classdesc
 * a generic system font object.
 * @augments Renderable
 */
export default class Text extends Renderable {
    /**
     * @param {number} x - position of the text object
     * @param {number} y - position of the text object
     * @param {object} settings - the text configuration
     * @param {string} settings.font - a CSS family font name
     * @param {number|string} settings.size - size, or size + suffix (px, em, pt)
     * @param {Color|string} [settings.fillStyle="#000000"] - a CSS color value
     * @param {Color|string} [settings.strokeStyle="#000000"] - a CSS color value
     * @param {number} [settings.lineWidth=1] - line width, in pixels, when drawing stroke
     * @param {string} [settings.textAlign="left"] - horizontal text alignment
     * @param {string} [settings.textBaseline="top"] - the text baseline
     * @param {number} [settings.lineHeight=1.0] - line spacing height
     * @param {Vector2d} [settings.anchorPoint={x:0.0, y:0.0}] - anchor point to draw the text at
     * @param {boolean} [settings.offScreenCanvas=false] - whether to draw the font to an individual "cache" texture first
     * @param {number} [settings.wordWrapWidth] - the maximum length in CSS pixel for a single segment of text
     * @param {(string|string[])} [settings.text=""] - a string, or an array of strings
     * @example
     * var font = new me.Text(0, 0, {font: "Arial", size: 8, fillStyle: this.color});
     */
    constructor(x: number, y: number, settings: {
        font: string;
        size: number | string;
        fillStyle?: Color | string;
        strokeStyle?: Color | string;
        lineWidth?: number;
        textAlign?: string;
        textBaseline?: string;
        lineHeight?: number;
        anchorPoint?: Vector2d;
        offScreenCanvas?: boolean;
        wordWrapWidth?: number;
        text?: (string | string[]);
    });
    /** @ignore */
    onResetEvent(x: any, y: any, settings: any): void;
    fillStyle: any;
    strokeStyle: any;
    /**
     * sets the current line width, in pixels, when drawing stroke
     * @public
     * @type {number}
     * @default 1
     */
    public lineWidth: number;
    /**
     * Set the default text alignment (or justification),<br>
     * possible values are "left", "right", and "center".<br>
     * @public
     * @type {string}
     * @default "left"
     */
    public textAlign: string;
    /**
     * Set the text baseline (e.g. the Y-coordinate for the draw operation), <br>
     * possible values are "top", "hanging, "middle, "alphabetic, "ideographic, "bottom"<br>
     * @public
     * @type {string}
     * @default "top"
     */
    public textBaseline: string;
    /**
     * Set the line spacing height (when displaying multi-line strings). <br>
     * Current font height will be multiplied with this value to set the line height.
     * @public
     * @type {number}
     * @default 1.0
     */
    public lineHeight: number;
    /**
     * whether to draw the font to a indidividual offscreen canvas texture first <br>
     * Note: this will improve performances when using WebGL, but will impact
     * memory consumption as every text element will have its own canvas texture
     * @public
     * @type {boolean}
     * @default false
     */
    public offScreenCanvas: boolean;
    /**
     * the maximum length in CSS pixel for a single segment of text.
     * (use -1 to disable word wrapping)
     * @public
     * @type {number}
     * @default -1
     */
    public wordWrapWidth: number;
    /**
     * the text to be displayed
     * @private
     */
    private _text;
    /**
     * the font size (in px)
     * @public
     * @type {number}
     * @default 10
     */
    public fontSize: number;
    canvasTexture: any;
    metrics: TextMetrics;
    /**
     * make the font bold
     * @returns {Text} this object for chaining
     */
    bold(): Text;
    font: any;
    /**
     * make the font italic
     * @returns {Text} this object for chaining
     */
    italic(): Text;
    /**
     * set the font family and size
     * @param {string} font - a CSS font name
     * @param {number|string} [size=10] - size in px, or size + suffix (px, em, pt)
     * @returns {Text} this object for chaining
     * @example
     * font.setFont("Arial", 20);
     * font.setFont("Arial", "1.5em");
     */
    setFont(font: string, size?: number | string): Text;
    /**
     * change the text to be displayed
     * @param {number|string|string[]} value - a string, or an array of strings
     * @returns {Text} this object for chaining
     */
    setText(value?: number | string | string[]): Text;
    glTextureUnit: any;
    /**
     * measure the given text size in pixels
     * @param {CanvasRenderer|WebGLRenderer} renderer - reference to the active renderer
     * @param {string} [text] - the text to be measured
     * @returns {TextMetrics} a TextMetrics object defining the dimensions of the given piece of text
     */
    measureText(renderer: CanvasRenderer | WebGLRenderer, text?: string): TextMetrics;
    /**
     * draw a text at the specified coord
     * @param {CanvasRenderer|WebGLRenderer} renderer - Reference to the destination renderer instance
     * @param {string} [text]
     * @param {number} [x]
     * @param {number} [y]
     * @param {boolean} [stroke=false] - draw stroke the the text if true
     */
    draw(renderer: CanvasRenderer | WebGLRenderer, text?: string, x?: number, y?: number, stroke?: boolean): void;
    /**
     * draw a stroke text at the specified coord, as defined <br>
     * by the `lineWidth` and `fillStroke` properties. <br>
     * Note : using drawStroke is not recommended for performance reasons
     * @param {CanvasRenderer|WebGLRenderer} renderer - Reference to the destination renderer instance
     * @param {string} text
     * @param {number} x
     * @param {number} y
     */
    drawStroke(renderer: CanvasRenderer | WebGLRenderer, text: string, x: number, y: number): void;
    /**
     * @ignore
     */
    _drawFont(context: any, text: any, x: any, y: any, stroke?: boolean): TextMetrics;
    /**
     * Destroy function
     * @ignore
     */
    destroy(): void;
}
import Renderable from "./../renderable/renderable.js";
import TextMetrics from "./textmetrics.js";
import WebGLRenderer from "./../video/webgl/webgl_renderer.js";
import Color from "./../math/color.js";
