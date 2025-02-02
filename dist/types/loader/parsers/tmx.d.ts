/**
 * parse/preload a TMX file
 * @param {loader.Asset} data - asset data
 * @param {Function} [onload] - function to be called when the asset is loaded
 * @param {Function} [onerror] - function to be called in case of error
 * @param {Function} [fetchData] - function to use instead of default window.fetch, has some error handling and things
 * @returns {number} the amount of corresponding resource parsed/preloaded
 * @ignore
 */
export function preloadTMX(tmxData: any, onload?: Function | undefined, onerror?: Function | undefined): number;
