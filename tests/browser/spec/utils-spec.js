import { expect } from "expect";
import * as me from "./../public/lib/melonjs.module.js";

describe("utils", function () {
    /*
    describe("TMX Parsing", function () {

        it("correctly decodes single-line csv", function () {
            var decodedString = me.TMXUtils.decodeCSV("1, 2");
            expect(decodedString).toEqual([1, 2]);

            decodedString = me.TMXUtils.decodeCSV("1,2");
            expect(decodedString).toEqual([1, 2]);

            decodedString = me.TMXUtils.decodeCSV("1,          2");
            expect(decodedString).toEqual([1, 2]);
        });

        it("only processes numbers", function () {
            var decodedString = me.TMXUtils.decodeCSV("1, value, 3");
            expect(decodedString).toEqual([1, NaN, 3]);
        });

        //ToDo I think this is a bug, next line should be treated as a comma, not as a space, since csv line doesn't end
        // with a comma by itself
        xit("correctly decodes multiple-line csv", function () {
            var decodedString = me.TMXUtils.decodeCSV("1, 2\n3, 4");
            expect(decodedString).toEqual([1, 2, 3, 4]);
        });

    });
    */

    describe("Array", function () {
        var arr = ["foo", "bar", "baz"];

        it("base", function () {
            expect(me.utils.array.remove(arr, "foo").includes("foo")).toEqual(
                false
            );
        });
    });

    describe("File", function () {
        var filename = "/src/bar/foo.bar-test.bar.baz";

        it("file basename", function () {
            expect(me.utils.file.getBasename(filename)).toEqual("foo.bar-test.bar");
        });

        it("file extension", function () {
            expect(me.utils.file.getExtension(filename)).toEqual("baz");
        });

        it("file path", function () {
            expect(me.utils.file.getPath(filename)).toEqual("/src/bar/");
        });
        
    });

    describe("String", function () {
        var untrimmed_str = " start and end with white space ";

        it("trim left side", function () {
            expect(untrimmed_str.trimLeft()).toEqual(
                "start and end with white space "
            );
        });

        it("trim right side", function () {
            expect(untrimmed_str.trimRight()).toEqual(
                " start and end with white space"
            );
        });

        it("capitalize", function () {
            expect(me.utils.string.capitalize("capitalize")).toEqual(
                "Capitalize"
            );
        });

        it("isNumeric", function () {
            expect(me.utils.string.isNumeric("123")).toEqual(true);
            expect(me.utils.string.isNumeric(" 123")).toEqual(true);
            expect(me.utils.string.isNumeric("123 ")).toEqual(true);
            expect(me.utils.string.isNumeric("")).toEqual(false);
            expect(me.utils.string.isNumeric(null)).toEqual(false);
            expect(me.utils.string.isNumeric(undefined)).toEqual(false);
            expect(me.utils.string.isNumeric("12 3")).toEqual(false);
            expect(me.utils.string.isNumeric("ab2c")).toEqual(false);
            expect(me.utils.string.isNumeric("12-3")).toEqual(false);
            expect(me.utils.string.isNumeric("12.3")).toEqual(true);
            expect(me.utils.string.isNumeric(".3")).toEqual(true);
            expect(me.utils.string.isNumeric("12,3")).toEqual(false);
            expect(me.utils.string.isNumeric("-123")).toEqual(true);
            expect(me.utils.string.isNumeric("+123")).toEqual(true);
        });

        it("isDataUrl", function () {
            // valid urls
            expect(
                me.utils.string.isDataUrl(
                    "data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAByYABAAAAAAixgAAB"
                )
            ).toEqual(true);

            expect(
                me.utils.string.isDataUrl(
                    "data:audio/mpeg;base64,//PAxAAAAAAAAAAAAEluZm8AAAAPAAAAEwAAIKYADQ0ND"
                )
            ).toEqual(true);

            expect(
                me.utils.string.isDataUrl(
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAA8FBMVEUgICBrqDHRZVtqp"
                )
            ).toEqual(true);

            expect(
                me.utils.string.isDataUrl(
                    "data:video/mpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAA8FBMVEUgICBrqDHRZVtqp"
                )
            ).toEqual(true);

            // invalid urls
            expect(
                me.utils.string.isDataUrl(
                    "data:image/png;iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAA8FBMVEUgICBrqDHRZVtqp"
                )
            ).toEqual(false);
            expect(
                me.utils.string.isDataUrl(
                    "data:iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAA8FBMVEUgICBrqDHRZVtqp"
                )
            ).toEqual(false);
            expect(
                me.utils.string.isDataUrl(
                    "iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAA8FBMVEUgICBrqDHRZVtqp"
                )
            ).toEqual(false);
        });
    });

    describe("UriFragment", function () {
        var url1 = "http://www.example.com/index.html";
        var url2 =
            "http://www.example.com/index.html#debug&hitbox=true&mytag=value";

        it("empty arguments", function () {
            var params = me.utils.getUriFragment(url1);
            expect(Object.entries(params).length).toEqual(0);
        });

        it("extract arguments", function () {
            var params = me.utils.getUriFragment(url2);
            expect(params.debug).toEqual(true);
            expect(params.hitbox).toEqual("true");
            expect(params.mytag).toEqual("value");
        });
    });

    describe("checkVersion", function () {
        it("version match", function () {
            // > 0 if the first string is greater, 
            // < 0 if the second string is greater 
            // === 0 if the strings are equal
            expect(me.utils.checkVersion("15.13.0", "15.12.0") > 0).toEqual(true);
            expect(me.utils.checkVersion("7.0.0", "15.5.0") < 0).toEqual(true);
            expect(me.utils.checkVersion("15.12.0", "15.12.0") === 0).toEqual(true);
            
        });
    });
});
