/**
 * parse/preload a Video file
 * @param {loader.Asset} data - asset data
 * @param {Function} [onload] - function to be called when the asset is loaded
 * @param {Function} [onerror] - function to be called in case of error
 * @returns {number} the amount of corresponding resource parsed/preloaded
 * @ignore
 */
export function preloadVideo(data: loader.Asset, onload?: Function | undefined, onerror?: Function | undefined): number;
