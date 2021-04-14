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

/***/ "./startScreen.js":
/*!************************!*\
  !*** ./startScreen.js ***!
  \************************/
/***/ (() => {

eval("\r\nconst startBtn=document.querySelector(\".startBtn\");\r\nconst userName=document.querySelector(\".userName\");\r\nconst container=document.querySelector(\".container\");\r\nconst errorMessage=document.querySelector(\".errorMessage\");\r\n\r\n\r\n\r\n\r\n\r\nstartBtn.addEventListener(\"click\",()=>{\r\n    let nameUser=userName.value;\r\n   if(nameUser.length >2){ localStorage.setItem(\"playerName\",JSON.stringify(nameUser));\r\n     window.location.href = \"./categories.html\";\r\n               }\r\n    else{\r\n        errorMessage.innerHTML=\"You need to enter your name\";\r\n    }\r\n})\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://3.triviaapp/./startScreen.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./startScreen.js"]();
/******/ 	
/******/ })()
;