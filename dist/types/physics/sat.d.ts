/**
 * Checks whether polygons collide.
 * @ignore
 * @param {Renderable} a - a reference to the object A.
 * @param {Polygon} polyA - a reference to the object A Polygon to be tested
 * @param {Renderable} b - a reference to the object B.
 * @param {Polygon} polyB - a reference to the object B Polygon to be tested
 * @param {Response=} response - Response object (optional) that will be populated if they intersect.
 * @returns {boolean} true if they intersect, false if they don't.
 */
export function testPolygonPolygon(a: Renderable, polyA: Polygon, b: Renderable, polyB: Polygon, response?: Response | undefined): boolean;
/**
 * Check if two Ellipse collide.
 * @ignore
 * @param {Renderable} a - a reference to the object A.
 * @param {Ellipse} ellipseA - a reference to the object A Ellipse to be tested
 * @param {Renderable} b - a reference to the object B.
 * @param {Ellipse} ellipseB - a reference to the object B Ellipse to be tested
 * @param {Response=} response - Response object (optional) that will be populated if
 *   the circles intersect.
 * @returns {boolean} true if the circles intersect, false if they don't.
 */
export function testEllipseEllipse(a: Renderable, ellipseA: Ellipse, b: Renderable, ellipseB: Ellipse, response?: Response | undefined): boolean;
/**
 * Check if a polygon and an ellipse collide.
 * @ignore
 * @param {Renderable} a - a reference to the object A.
 * @param {Polygon} polyA - a reference to the object A Polygon to be tested
 * @param {Renderable} b - a reference to the object B.
 * @param {Ellipse} ellipseB - a reference to the object B Ellipse to be tested
 * @param {Response=} response - Response object (optional) that will be populated if they intersect.
 * @returns {boolean} true if they intersect, false if they don't.
 */
export function testPolygonEllipse(a: Renderable, polyA: Polygon, b: Renderable, ellipseB: Ellipse, response?: Response | undefined): boolean;
/**
 * Check if an ellipse and a polygon collide. <br>
 * **NOTE:** This is slightly less efficient than testPolygonEllipse as it just
 * runs testPolygonEllipse and reverses the response at the end.
 * @ignore
 * @param {Renderable} a - a reference to the object A.
 * @param {Ellipse} ellipseA - a reference to the object A Ellipse to be tested
 * @param {Renderable} b - a reference to the object B.
 * @param {Polygon} polyB - a reference to the object B Polygon to be tested
 * @param {Response=} response - Response object (optional) that will be populated if
 *   they intersect.
 * @returns {boolean} true if they intersect, false if they don't.
 */
export function testEllipsePolygon(a: Renderable, ellipseA: Ellipse, b: Renderable, polyB: Polygon, response?: Response | undefined): boolean;
