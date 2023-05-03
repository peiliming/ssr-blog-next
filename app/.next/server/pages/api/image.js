"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/image";
exports.ids = ["pages/api/image"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("formidable");

/***/ }),

/***/ "(api)/./lib/cloudinary.ts":
/*!***************************!*\
  !*** ./lib/cloudinary.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n// https://cloudinary.com/documentation/node_integration\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUD_NAME,\n    api_key: process.env.CLOUD_API_KEY,\n    api_secret: process.env.CLOUD_API_SECRET,\n    secure: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY2xvdWRpbmFyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3REFBd0Q7QUFDWDtBQUU3Q0MsaURBQWlCLENBQUM7SUFDaEJFLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNsQ0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO0lBQ2xDQyxZQUFZTCxRQUFRQyxHQUFHLENBQUNLLGdCQUFnQjtJQUN4Q0MsUUFBUSxJQUFJO0FBQ2Q7QUFFQSxpRUFBZVYsMENBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3ItYmxvZy1uZXh0Ly4vbGliL2Nsb3VkaW5hcnkudHM/ODQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2Nsb3VkaW5hcnkuY29tL2RvY3VtZW50YXRpb24vbm9kZV9pbnRlZ3JhdGlvblxuaW1wb3J0IHsgdjIgYXMgY2xvdWRpbmFyeSB9IGZyb20gJ2Nsb3VkaW5hcnknXG5cbmNsb3VkaW5hcnkuY29uZmlnKHtcbiAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURfTkFNRSxcbiAgYXBpX2tleTogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX0tFWSxcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURfQVBJX1NFQ1JFVCxcbiAgc2VjdXJlOiB0cnVlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjbG91ZGluYXJ5Il0sIm5hbWVzIjpbInYyIiwiY2xvdWRpbmFyeSIsImNvbmZpZyIsImNsb3VkX25hbWUiLCJwcm9jZXNzIiwiZW52IiwiQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRF9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VEX0FQSV9TRUNSRVQiLCJzZWN1cmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/cloudinary.ts\n");

/***/ }),

/***/ "(api)/./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFile\": () => (/* binding */ readFile)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst readFile = (req)=>{\n    const form = formidable__WEBPACK_IMPORTED_MODULE_0___default()();\n    return new Promise((resolve, reject)=>{\n        form.parse(req, (err, fields, files)=>{\n            if (err) reject(err);\n            resolve({\n                files,\n                body: fields\n            });\n        });\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdXRpbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ21DO0FBTzVCLE1BQU1DLFdBQVcsQ0FBQ0MsTUFBb0Q7SUFDM0UsTUFBTUMsT0FBT0gsaURBQVVBO0lBQ3ZCLE9BQU8sSUFBSUksUUFBUSxDQUFDQyxTQUFTQyxTQUFXO1FBQ3RDSCxLQUFLSSxLQUFLLENBQUNMLEtBQUssQ0FBQ00sS0FBS0MsUUFBUUMsUUFBVTtZQUN0QyxJQUFJRixLQUFLRixPQUFPRTtZQUVoQkgsUUFBUTtnQkFDTks7Z0JBQ0FDLE1BQU1GO1lBQ1I7UUFDRjtJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nzci1ibG9nLW5leHQvLi9saWIvdXRpbHMudHM/Zjc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciwgTmV4dEFwaVJlcXVlc3QgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgZm9ybWlkYWJsZSBmcm9tICdmb3JtaWRhYmxlJ1xuXG5pbnRlcmZhY2UgRm9ybWlkYWJsZVByb21pc2Uge1xuICBmaWxlczogZm9ybWlkYWJsZS5GaWxlc1xuICBib2R5OiBmb3JtaWRhYmxlLkZpZWxkc1xufVxuXG5leHBvcnQgY29uc3QgcmVhZEZpbGUgPSAocmVxOiBOZXh0QXBpUmVxdWVzdCk6IFByb21pc2U8Rm9ybWlkYWJsZVByb21pc2U+ID0+IHtcbiAgY29uc3QgZm9ybSA9IGZvcm1pZGFibGUoKVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGZvcm0ucGFyc2UocmVxLCAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuXG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgZmlsZXMsXG4gICAgICAgIGJvZHk6IGZpZWxkc1xuICAgICAgfSlcbiAgICB9KVxuICB9KVxufSJdLCJuYW1lcyI6WyJmb3JtaWRhYmxlIiwicmVhZEZpbGUiLCJyZXEiLCJmb3JtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwYXJzZSIsImVyciIsImZpZWxkcyIsImZpbGVzIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/utils.ts\n");

/***/ }),

/***/ "(api)/./pages/api/image.ts":
/*!****************************!*\
  !*** ./pages/api/image.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/cloudinary */ \"(api)/./lib/cloudinary.ts\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(api)/./lib/utils.ts\");\n\n\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nconst handler = (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"POST\":\n            return uploadNewImage(req, res);\n        case \"GET\":\n            return readAllImages(req, res);\n        default:\n            return res.status(404).send(\"Not found!\");\n    }\n};\nconst uploadNewImage = async (req, res)=>{\n    try {\n        const { files  } = await (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.readFile)(req);\n        const imageFile = files.image;\n        const { secure_url: url  } = await _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].uploader.upload(imageFile.filepath, {\n            folder: \"ssr-blogs\"\n        });\n        res.json({\n            src: url\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n};\nconst readAllImages = async (req, res)=>{\n    // 参考：https://support.cloudinary.com/hc/en-us/community/posts/360010637199-Upload-image-to-specified-folder-node-js-with-cloudinary-v2\n    try {\n        const { resources  } = await _lib_cloudinary__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api.resources({\n            resorce_type: \"image\",\n            type: \"upload\",\n            prefix: \"ssr-blogs\"\n        });\n        const images = resources.map(({ secure_url  })=>({\n                src: secure_url\n            }));\n        res.json({\n            images\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaW1hZ2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUN5QztBQUVMO0FBRTdCLE1BQU1FLFNBQVM7SUFDcEJDLEtBQUs7UUFBRUMsWUFBWSxLQUFLO0lBQUM7QUFDM0IsRUFBQztBQUVELE1BQU1DLFVBQTBCLENBQUNDLEtBQUtDLE1BQVE7SUFDNUMsTUFBTSxFQUFDQyxPQUFNLEVBQUMsR0FBR0Y7SUFFakIsT0FBT0U7UUFDTCxLQUFLO1lBQVEsT0FBT0MsZUFBZUgsS0FBS0M7UUFDeEMsS0FBSztZQUFPLE9BQU9HLGNBQWNKLEtBQUtDO1FBQ3RDO1lBQVMsT0FBT0EsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN2QztBQUNGO0FBRUEsTUFBTUgsaUJBQWlDLE9BQU9ILEtBQUtDLE1BQVE7SUFDekQsSUFBSTtRQUNGLE1BQU0sRUFBRU0sTUFBSyxFQUFFLEdBQUcsTUFBTVosb0RBQVFBLENBQUNLO1FBQ2pDLE1BQU1RLFlBQVlELE1BQU1FLEtBQUs7UUFFN0IsTUFBTSxFQUFFQyxZQUFZQyxJQUFHLEVBQUUsR0FBRyxNQUFNakIsdUVBQTBCLENBQzFEYyxVQUFVTSxRQUFRLEVBQ2xCO1lBQ0VDLFFBQVE7UUFDVjtRQUdGZCxJQUFJZSxJQUFJLENBQUM7WUFBRUMsS0FBS047UUFBSTtJQUN0QixFQUFFLE9BQU9PLE9BQVk7UUFDbkJqQixJQUFJSSxNQUFNLENBQUMsS0FBS1csSUFBSSxDQUFDO1lBQUNFLE9BQU9BLE1BQU1DLE9BQU87UUFBQTtJQUM1QztBQUNGO0FBRUEsTUFBTWYsZ0JBQWdDLE9BQU9KLEtBQUtDLE1BQVE7SUFDeEQsc0lBQXNJO0lBQ3RJLElBQUk7UUFDRixNQUFNLEVBQUVtQixVQUFTLEVBQUUsR0FBRyxNQUFNMUIscUVBQXdCLENBQUM7WUFDbkQyQixjQUFjO1lBQ2RDLE1BQU07WUFDTkMsUUFBUTtRQUNWO1FBRUEsTUFBTUMsU0FBU0osVUFBVUssR0FBRyxDQUFDLENBQUMsRUFBQ2YsV0FBVSxFQUFNLEdBQU07Z0JBQ25ETyxLQUFLUDtZQUNQO1FBQ0FULElBQUllLElBQUksQ0FBQztZQUFFUTtRQUFPO0lBQ3BCLEVBQUUsT0FBT04sT0FBWTtRQUNuQmpCLElBQUlJLE1BQU0sQ0FBQyxLQUFLVyxJQUFJLENBQUM7WUFBQ0UsT0FBT0EsTUFBTUMsT0FBTztRQUFBO0lBQzVDO0FBRUY7QUFHQSxpRUFBZXBCLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zc3ItYmxvZy1uZXh0Ly4vcGFnZXMvYXBpL2ltYWdlLnRzP2I0NWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaUhhbmRsZXIgfSBmcm9tICduZXh0J1xuaW1wb3J0IGNsb3VkaW5hcnkgZnJvbSAnQC9saWIvY2xvdWRpbmFyeSdcbmltcG9ydCBmb3JtaWRhYmxlIGZyb20gXCJmb3JtaWRhYmxlXCJcbmltcG9ydCB7cmVhZEZpbGV9IGZyb20gJ0AvbGliL3V0aWxzJ1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBhcGk6IHsgYm9keVBhcnNlcjogZmFsc2UgfSxcbn1cblxuY29uc3QgaGFuZGxlcjogTmV4dEFwaUhhbmRsZXIgPSAocmVxLCByZXMpID0+IHtcbiAgY29uc3Qge21ldGhvZH0gPSByZXFcblxuICBzd2l0Y2gobWV0aG9kKSB7XG4gICAgY2FzZSAnUE9TVCc6IHJldHVybiB1cGxvYWROZXdJbWFnZShyZXEsIHJlcylcbiAgICBjYXNlICdHRVQnOiByZXR1cm4gcmVhZEFsbEltYWdlcyhyZXEsIHJlcylcbiAgICBkZWZhdWx0OiByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJ05vdCBmb3VuZCEnKVxuICB9XG59XG5cbmNvbnN0IHVwbG9hZE5ld0ltYWdlOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZmlsZXMgfSA9IGF3YWl0IHJlYWRGaWxlKHJlcSkgIFxuICAgIGNvbnN0IGltYWdlRmlsZSA9IGZpbGVzLmltYWdlIGFzIGZvcm1pZGFibGUuRmlsZVxuXG4gICAgY29uc3QgeyBzZWN1cmVfdXJsOiB1cmwgfSA9IGF3YWl0IGNsb3VkaW5hcnkudXBsb2FkZXIudXBsb2FkKFxuICAgICAgaW1hZ2VGaWxlLmZpbGVwYXRoLFxuICAgICAge1xuICAgICAgICBmb2xkZXI6ICdzc3ItYmxvZ3MnXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmVzLmpzb24oeyBzcmM6IHVybCB9KVxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOiBlcnJvci5tZXNzYWdlfSlcbiAgfVxufVxuXG5jb25zdCByZWFkQWxsSW1hZ2VzOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvLyDlj4LogIPvvJpodHRwczovL3N1cHBvcnQuY2xvdWRpbmFyeS5jb20vaGMvZW4tdXMvY29tbXVuaXR5L3Bvc3RzLzM2MDAxMDYzNzE5OS1VcGxvYWQtaW1hZ2UtdG8tc3BlY2lmaWVkLWZvbGRlci1ub2RlLWpzLXdpdGgtY2xvdWRpbmFyeS12MlxuICB0cnkge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VzIH0gPSBhd2FpdCBjbG91ZGluYXJ5LmFwaS5yZXNvdXJjZXMoe1xuICAgICAgcmVzb3JjZV90eXBlOiAnaW1hZ2UnLFxuICAgICAgdHlwZTogJ3VwbG9hZCcsXG4gICAgICBwcmVmaXg6ICdzc3ItYmxvZ3MnLFxuICAgIH0pXG4gIFxuICAgIGNvbnN0IGltYWdlcyA9IHJlc291cmNlcy5tYXAoKHtzZWN1cmVfdXJsfTogYW55KSA9PiAoe1xuICAgICAgc3JjOiBzZWN1cmVfdXJsXG4gICAgfSkpXG4gICAgcmVzLmpzb24oeyBpbWFnZXMgfSlcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtlcnJvcjogZXJyb3IubWVzc2FnZX0pXG4gIH1cbiAgXG59XG5cbiAgXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbImNsb3VkaW5hcnkiLCJyZWFkRmlsZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXBsb2FkTmV3SW1hZ2UiLCJyZWFkQWxsSW1hZ2VzIiwic3RhdHVzIiwic2VuZCIsImZpbGVzIiwiaW1hZ2VGaWxlIiwiaW1hZ2UiLCJzZWN1cmVfdXJsIiwidXJsIiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJmaWxlcGF0aCIsImZvbGRlciIsImpzb24iLCJzcmMiLCJlcnJvciIsIm1lc3NhZ2UiLCJyZXNvdXJjZXMiLCJyZXNvcmNlX3R5cGUiLCJ0eXBlIiwicHJlZml4IiwiaW1hZ2VzIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/image.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/image.ts"));
module.exports = __webpack_exports__;

})();