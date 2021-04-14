/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./categories.js":
/*!***********************!*\
  !*** ./categories.js ***!
  \***********************/
/***/ (() => {

eval("const categories=document.querySelectorAll('.categories div');\r\n\r\n\r\n\r\n\r\ncategories.forEach(el=>{\r\n    el.style.backgroundColor=el.getAttribute(\"color\");\r\n    el.addEventListener(\"click\",()=>{\r\n        localStorage.setItem(\"category\",el.getAttribute(\"catNumber\"));\r\n        window.location.href = \"game.html\";\r\n\r\n    });\r\n    \r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://3.triviaapp/./categories.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./categories.js"]();
/******/ 	
/******/ })()
;