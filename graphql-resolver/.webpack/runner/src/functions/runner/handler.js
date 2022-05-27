/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/runner/handler.ts":
/*!*****************************************!*\
  !*** ./src/functions/runner/handler.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var _libs_api_gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/api-gateway */ \"./src/libs/api-gateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _libs_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/vm */ \"./src/libs/vm.ts\");\n\n\n\nconst hello = async (event) => {\n    let result;\n    try {\n        const codeStringToRun = decodeURIComponent(event.body.function);\n        const input = event.body.input;\n        result = await (0,_libs_vm__WEBPACK_IMPORTED_MODULE_2__.runVM)({\n            codeStringToRun,\n            input,\n        });\n    }\n    catch (e) {\n        console.log(e);\n    }\n    return (0,_libs_api_gateway__WEBPACK_IMPORTED_MODULE_0__.formatJSONResponse)({\n        result,\n    });\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_1__.middyfy)(hello);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3J1bm5lci9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJjbGlwLWNvZGUtcnVubmVyLy4vc3JjL2Z1bmN0aW9ucy9ydW5uZXIvaGFuZGxlci50cz9iMjU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudCB9IGZyb20gJ0BsaWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJ0BsaWJzL2FwaS1nYXRld2F5JztcbmltcG9ydCB7IG1pZGR5ZnkgfSBmcm9tICdAbGlicy9sYW1iZGEnO1xuaW1wb3J0IHsgcnVuVk0gfSBmcm9tICdAbGlicy92bSc7XG5cbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuXG5jb25zdCBoZWxsbzogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2Ygc2NoZW1hPiA9IGFzeW5jIChcbiAgZXZlbnRcbikgPT4ge1xuICBsZXQgcmVzdWx0OiB1bmtub3duO1xuICB0cnkge1xuICAgIGNvbnN0IGNvZGVTdHJpbmdUb1J1biA9IGRlY29kZVVSSUNvbXBvbmVudChldmVudC5ib2R5LmZ1bmN0aW9uKTtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmJvZHkuaW5wdXQ7XG4gICAgcmVzdWx0ID0gYXdhaXQgcnVuVk0oe1xuICAgICAgY29kZVN0cmluZ1RvUnVuLFxuICAgICAgaW5wdXQsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRKU09OUmVzcG9uc2Uoe1xuICAgIHJlc3VsdCxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbWFpbiA9IG1pZGR5ZnkoaGVsbG8pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/runner/handler.ts\n");

/***/ }),

/***/ "./src/libs/api-gateway.ts":
/*!*********************************!*\
  !*** ./src/libs/api-gateway.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (response) => {\n    return {\n        statusCode: 200,\n        body: JSON.stringify(response),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGktZ2F0ZXdheS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyY2xpcC1jb2RlLXJ1bm5lci8uL3NyYy9saWJzL2FwaS1nYXRld2F5LnRzPzUzMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuICBBUElHYXRld2F5UHJveHlFdmVudCxcbiAgQVBJR2F0ZXdheVByb3h5UmVzdWx0LFxuICBIYW5kbGVyLFxufSBmcm9tICdhd3MtbGFtYmRhJztcbmltcG9ydCB0eXBlIHsgRnJvbVNjaGVtYSB9IGZyb20gJ2pzb24tc2NoZW1hLXRvLXRzJztcblxudHlwZSBWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IE9taXQ8QVBJR2F0ZXdheVByb3h5RXZlbnQsICdib2R5Jz4gJiB7XG4gIGJvZHk6IEZyb21TY2hlbWE8Uz47XG59O1xuZXhwb3J0IHR5cGUgVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDxTPiA9IEhhbmRsZXI8XG4gIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+LFxuICBBUElHYXRld2F5UHJveHlSZXN1bHRcbj47XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRKU09OUmVzcG9uc2UgPSAocmVzcG9uc2U6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcbiAgfTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/api-gateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyY2xpcC1jb2RlLXJ1bm5lci8uL3NyYy9saWJzL2xhbWJkYS50cz82YjI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSc7XG5pbXBvcnQgbWlkZHlKc29uQm9keVBhcnNlciBmcm9tICdAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyJztcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hcmd1bWVudCAqL1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/libs/vm.ts":
/*!************************!*\
  !*** ./src/libs/vm.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"runVM\": () => (/* binding */ runVM)\n/* harmony export */ });\n/* harmony import */ var vm2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vm2 */ \"vm2\");\n/* harmony import */ var vm2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vm2__WEBPACK_IMPORTED_MODULE_0__);\n\nconst runVM = async ({ codeStringToRun, input }) => {\n    const output = {};\n    const vm = new vm2__WEBPACK_IMPORTED_MODULE_0__.NodeVM({\n        console: 'inherit',\n        sandbox: { output },\n        require: {\n            external: true,\n            builtin: ['*'],\n            root: './',\n            mock: {\n                fs: {\n                    readFileSync: () => 'not available',\n                },\n            },\n        },\n    });\n    const testScript = `\n  module.exports = async (input) => {\n    ${codeStringToRun}\n  };\n  `;\n    const functionInSandbox = vm.run(testScript);\n    await functionInSandbox(input);\n    return output;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy92bS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7O0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmNsaXAtY29kZS1ydW5uZXIvLi9zcmMvbGlicy92bS50cz9hYWJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGVWTSB9IGZyb20gJ3ZtMic7XG5cbnR5cGUgVk1BcmdzID0ge1xuICBjb2RlU3RyaW5nVG9SdW46IHN0cmluZztcbiAgaW5wdXQ6IGFueTtcbn07XG5cbmV4cG9ydCBjb25zdCBydW5WTSA9IGFzeW5jICh7IGNvZGVTdHJpbmdUb1J1biwgaW5wdXQgfTogVk1BcmdzKSA9PiB7XG4gIGNvbnN0IG91dHB1dCA9IHt9O1xuXG4gIGNvbnN0IHZtID0gbmV3IE5vZGVWTSh7XG4gICAgY29uc29sZTogJ2luaGVyaXQnLFxuICAgIHNhbmRib3g6IHsgb3V0cHV0IH0sXG4gICAgcmVxdWlyZToge1xuICAgICAgZXh0ZXJuYWw6IHRydWUsXG4gICAgICBidWlsdGluOiBbJyonXSxcbiAgICAgIHJvb3Q6ICcuLycsXG4gICAgICBtb2NrOiB7XG4gICAgICAgIGZzOiB7XG4gICAgICAgICAgcmVhZEZpbGVTeW5jOiAoKSA9PiAnbm90IGF2YWlsYWJsZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHRlc3RTY3JpcHQgPSBgXG4gIG1vZHVsZS5leHBvcnRzID0gYXN5bmMgKGlucHV0KSA9PiB7XG4gICAgJHtjb2RlU3RyaW5nVG9SdW59XG4gIH07XG4gIGA7XG5cbiAgLy8gU3luY1xuICAvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWNhbGwsIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudCAqL1xuICBjb25zdCBmdW5jdGlvbkluU2FuZGJveCA9IHZtLnJ1bih0ZXN0U2NyaXB0KTtcbiAgYXdhaXQgZnVuY3Rpb25JblNhbmRib3goaW5wdXQpO1xuXG4gIC8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnQgKi9cbiAgcmV0dXJuIG91dHB1dDtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/vm.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "vm2":
/*!**********************!*\
  !*** external "vm2" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("vm2");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/runner/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;