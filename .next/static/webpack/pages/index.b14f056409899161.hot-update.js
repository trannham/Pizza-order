"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Featured.jsx":
/*!*********************************!*\
  !*** ./components/Featured.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Featured.module.css */ \"./styles/Featured.module.css\");\n/* harmony import */ var _styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Featured = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), index = ref[0], setIndex = ref[1];\n    var images = [\n        \"/img/featured.png\",\n        \"/img/featured2.png\",\n        \"/img/featured3.png\", \n    ];\n    var handleArrow = function(direction) {\n        if (direction === \"l\") {\n            setIndex(index !== 0 ? index - 1 : 2);\n        }\n        if (direction === \"r\") {\n            setIndex(index !== 2 ? index + 1 : 0);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        __source: {\n            fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n            lineNumber: 23,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    left: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"l\");\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowl.png\",\n                    alt: \"\",\n                    layout: \"fill\",\n                    objectFit: \"contain\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),\n                style: {\n                    transform: \"translateX(\".concat(-100 * index, \"vw)\")\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: images.map(function(img, i) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().imgContainer),\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: img,\n                            alt: \"\",\n                            layout: \"fill\",\n                            objectFit: \"contain\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        })\n                    }, i);\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_Featured_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrowContainer),\n                style: {\n                    right: 0\n                },\n                onClick: function() {\n                    return handleArrow(\"r\");\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/img/arrowr.png\",\n                    layout: \"fill\",\n                    alt: \"\",\n                    objectFit: \"contain\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\SNAART\\\\Desktop\\\\ReactNative\\\\Pizza-order\\\\components\\\\Featured.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            })\n        ]\n    }));\n};\n_s(Featured, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = Featured;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Featured);\nvar _c;\n$RefreshReg$(_c, \"Featured\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrRDtBQUNwQjtBQUNFOzs7QUFFaEMsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUN0QixHQUFLLENBQXFCRCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3QkUsS0FBSyxHQUFjRixHQUFXLEtBQXZCRyxRQUFRLEdBQUlILEdBQVc7SUFDckMsR0FBSyxDQUFDSSxNQUFNLEdBQUcsQ0FBQztRQUNkLENBQW1CO1FBQ25CLENBQW9CO1FBQ3BCLENBQW9CO0lBQ3RCLENBQUM7SUFFRCxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLFNBQVMsRUFBSSxDQUFDO1FBQy9CLEVBQUUsRUFBQ0EsU0FBUyxLQUFHLENBQUcsSUFBQyxDQUFDO1lBQ2hCSCxRQUFRLENBQUNELEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsRUFBRSxFQUFDSSxTQUFTLEtBQUcsQ0FBRyxJQUFDLENBQUM7WUFDaEJILFFBQVEsQ0FBQ0QsS0FBSyxLQUFLLENBQUMsR0FBR0EsS0FBSyxHQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSx1RUFDSEssQ0FBRztRQUFDQyxTQUFTLEVBQUVWLDhFQUFnQjs7Ozs7Ozs7aUZBQzdCUyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVWLG1GQUFxQjtnQkFBRWEsS0FBSyxFQUFFLENBQUM7b0JBQUNDLElBQUksRUFBRSxDQUFDO2dCQUFDLENBQUM7Z0JBQUVDLE9BQU8sRUFBRSxRQUFRO29CQUFKUixNQUFNLENBQU5BLFdBQVcsQ0FBQyxDQUFHOzs7Ozs7OzsrRkFDcEZOLG1EQUFLO29CQUFDZSxHQUFHLEVBQUMsQ0FBaUI7b0JBQUNDLEdBQUcsRUFBQyxDQUFFO29CQUFDQyxNQUFNLEVBQUMsQ0FBTTtvQkFBQ0MsU0FBUyxFQUFDLENBQVM7Ozs7Ozs7OztpRkFFdEVWLENBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsNEVBQWM7Z0JBQUVhLEtBQUssRUFBRSxDQUFDUTtvQkFBQUEsU0FBUyxFQUFFLENBQVcsYUFBYSxNQUFHLEVBQWIsR0FBRyxHQUFDakIsS0FBSyxFQUFDLENBQUc7Z0JBQUMsQ0FBQzs7Ozs7OzswQkFDN0VFLE1BQU0sQ0FBQ2dCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEdBQUcsRUFBRUMsQ0FBQztrQ0FDakIsTUFBTSx3REFBTGYsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFVixpRkFBbUI7Ozs7Ozs7dUdBQ2hDQyxtREFBSzs0QkFBQ2UsR0FBRyxFQUFFTyxHQUFHOzRCQUFFTixHQUFHLEVBQUMsQ0FBRTs0QkFBQ0MsTUFBTSxFQUFDLENBQU07NEJBQUNDLFNBQVMsRUFBQyxDQUFTOzs7Ozs7Ozt1QkFEakJLLENBQUM7OztpRkFLOUNmLENBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsbUZBQXFCO2dCQUFFYSxLQUFLLEVBQUUsQ0FBQztvQkFBQ2EsS0FBSyxFQUFFLENBQUM7Z0JBQUMsQ0FBQztnQkFBRVgsT0FBTyxFQUFFLFFBQVE7b0JBQUpSLE1BQU0sQ0FBTkEsV0FBVyxDQUFDLENBQUc7Ozs7Ozs7OytGQUNyRk4sbURBQUs7b0JBQUNlLEdBQUcsRUFBQyxDQUFpQjtvQkFBQ0UsTUFBTSxFQUFDLENBQU07b0JBQUNELEdBQUcsRUFBQyxDQUFFO29CQUFDRSxTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7Ozs7QUFJN0UsQ0FBQztHQWxDS2hCLFFBQVE7S0FBUkEsUUFBUTtBQW9DZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVhdHVyZWQuanN4PzU2OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0ZlYXR1cmVkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcclxuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGltYWdlcyA9IFtcclxuICAgIFwiL2ltZy9mZWF0dXJlZC5wbmdcIixcclxuICAgIFwiL2ltZy9mZWF0dXJlZDIucG5nXCIsXHJcbiAgICBcIi9pbWcvZmVhdHVyZWQzLnBuZ1wiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFycm93ID0gKGRpcmVjdGlvbikgPT57XHJcbiAgICAgIGlmKGRpcmVjdGlvbj09PVwibFwiKXtcclxuICAgICAgICAgIHNldEluZGV4KGluZGV4ICE9PSAwID8gaW5kZXgtMSA6IDIpXHJcbiAgICAgIH1cclxuICAgICAgaWYoZGlyZWN0aW9uPT09XCJyXCIpe1xyXG4gICAgICAgICAgc2V0SW5kZXgoaW5kZXggIT09IDIgPyBpbmRleCsxIDogMClcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd0NvbnRhaW5lcn0gc3R5bGU9e3sgbGVmdDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJsXCIpfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd2wucG5nXCIgYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9IHN0eWxlPXt7dHJhbnNmb3JtOmB0cmFuc2xhdGVYKCR7LTEwMCppbmRleH12dylgfX0+XHJcbiAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdDb250YWluZXJ9IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFycm93Q29udGFpbmVyfSBzdHlsZT17eyByaWdodDogMCB9fSBvbkNsaWNrPXsoKT0+aGFuZGxlQXJyb3coXCJyXCIpfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9hcnJvd3IucG5nXCIgbGF5b3V0PVwiZmlsbFwiIGFsdD1cIlwiIG9iamVjdEZpdD1cImNvbnRhaW5cIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIkZlYXR1cmVkIiwiaW5kZXgiLCJzZXRJbmRleCIsImltYWdlcyIsImhhbmRsZUFycm93IiwiZGlyZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiYXJyb3dDb250YWluZXIiLCJzdHlsZSIsImxlZnQiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Iiwid3JhcHBlciIsInRyYW5zZm9ybSIsIm1hcCIsImltZyIsImkiLCJpbWdDb250YWluZXIiLCJyaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Featured.jsx\n");

/***/ })

});