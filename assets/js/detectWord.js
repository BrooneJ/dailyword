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

/***/ "./src/client/js/detectWord.js":
/*!*************************************!*\
  !*** ./src/client/js/detectWord.js ***!
  \*************************************/
/***/ (() => {

eval("var title = document.querySelector('.detailTitle');\nvar example = document.querySelector('.exampleSet');\n\nif (title) {\n  var titleWord = title.innerText;\n  var firstLetter = titleWord[0];\n  var lastSecondLetter = titleWord[titleWord.length - 2];\n  var lastLetter = titleWord[titleWord.length - 1];\n  var wordLength = titleWord.length;\n  var regexp;\n  var selectedWord;\n  var changeWord;\n\n  for (i = 1; i < example.childNodes[1].childNodes.length; i++) {\n    var targetWord = example.childNodes[1].childNodes[i].innerHTML;\n\n    if (wordLength === 1) {\n      // 한 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter), 'gi');\n    }\n\n    if (wordLength === 2) {\n      // 두 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter).concat(lastLetter, \"?(\\u3044\\u305F)?(\\u308A)?(\\u3063\\u305F)?\"), 'gi');\n    }\n\n    if (wordLength >= 3) {\n      // 세 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter, \".*\").concat(lastSecondLetter).concat(lastLetter, \"?(\\u3044\\u305F)?(\\u308A)?(\\u3063\\u305F)?\"), 'gi');\n    }\n\n    var _selectedWord = targetWord.match(regexp);\n\n    var _changeWord = targetWord.replace(regexp, \"<p style=\\\"color:red; display:inline-block\\\">\".concat(_selectedWord, \"</p>\"));\n\n    example.childNodes[1].childNodes[i].innerHTML = _changeWord;\n  }\n}\n\n//# sourceURL=webpack://dailyword/./src/client/js/detectWord.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/detectWord.js"]();
/******/ 	
/******/ })()
;