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

eval("var title = document.querySelector('.detailTitle');\nvar example = document.querySelector('.exampleSet');\n\nif (title) {\n  var titleWord = title.innerText;\n  var firstLetter = titleWord[0];\n  var secondLetter = titleWord[1];\n  var lastSecondLetter = titleWord[titleWord.length - 2];\n  var lastLetter = titleWord[titleWord.length - 1];\n  var wordLength = titleWord.length;\n  var regexp;\n  var regexpAnother;\n  var selectedWord;\n  var changeWord;\n\n  for (i = 1; i < example.childNodes[1].childNodes.length; i++) {\n    var targetWord = example.childNodes[1].childNodes[i].innerHTML;\n\n    if (wordLength === 1) {\n      // 한 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter), 'gi');\n      selectedWord = targetWord.match(regexp);\n      changeWord = targetWord.replace(regexp, \"<p style=\\\"color:red; display:inline-block\\\">\".concat(selectedWord, \"</p>\"));\n    }\n\n    if (wordLength === 2) {\n      // 두 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter).concat(lastLetter, \"?(\\u3063\\u3066)?(\\u3044\\u305F)?(\\u308A)?(\\u3063\\u305F)?(\\u3057)?(\\u3057\\u3066)?(\\u3093\\u3060)?(\\u3093\\u3067)?\"), 'gi');\n      selectedWord = targetWord.match(regexp);\n      changeWord = targetWord.replace(regexp, \"<p style=\\\"color:red; display:inline-block\\\">\".concat(selectedWord, \"</p>\"));\n    }\n\n    if (wordLength >= 3) {\n      // 세 글자 일 때\n      regexp = new RegExp(\"\".concat(firstLetter, \".*\").concat(lastSecondLetter).concat(lastLetter, \"?(\\u3063\\u3066)?(\\u3044\\u305F)?(\\u308A)?(\\u3063\\u305F)?(\\u3057)?(\\u3057\\u3066)?(\\u3093\\u3060)?(\\u3093\\u3067)?\"), 'gi');\n      regexpAnother = new RegExp(\"\".concat(firstLetter).concat(secondLetter, \"(\\u3063\\u3066)?(\\u3044\\u305F)?(\\u308A)?(\\u3063\\u305F)?(\\u3057)?(\\u3057\\u3066)?(\\u3093\\u3060)?(\\u3093\\u3067)?\"), 'gi');\n      var shortMatch = targetWord.match(regexpAnother); // 짧게 일치하는 문장\n\n      var longMatch = targetWord.match(regexp); // 길게 일치하는 문장\n\n      if (shortMatch[0].length === 2) {\n        // 만약 첫 두글자만 일치한다면 별도의 처리가 필요하지 않기 때문에\n        shortMatch[0] = 'ustfd96gs9df786s9dfgs9df7g69sdfgt87s9dfvgsdh0'; // random한 긴 문자로 교체\n      }\n\n      selectedWord = shortMatch[0].length < longMatch[0].length ? shortMatch : longMatch; // 더 짧은 쪽의 단어로 교체\n\n      if (selectedWord === shortMatch) {\n        changeWord = targetWord.replace(regexpAnother, \"<p style=\\\"color:red; display:inline-block\\\">\".concat(selectedWord, \"</p>\"));\n      } else {\n        changeWord = targetWord.replace(regexp, \"<p style=\\\"color:red; display:inline-block\\\">\".concat(selectedWord, \"</p>\"));\n      }\n    }\n\n    example.childNodes[1].childNodes[i].innerHTML = changeWord;\n  }\n}\n\n//# sourceURL=webpack://dailyword/./src/client/js/detectWord.js?");

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