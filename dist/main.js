/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functionality-modules/canvas-particle.js":
/*!******************************************************!*\
  !*** ./src/functionality-modules/canvas-particle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCanvasParticles)\n/* harmony export */ });\n/* harmony import */ var _utility_modules_particle_chasing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utility-modules/particle-chasing.js */ \"./src/utility-modules/particle-chasing.js\");\n/* harmony import */ var _utility_modules_particle_fleeing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility-modules/particle-fleeing.js */ \"./src/utility-modules/particle-fleeing.js\");\n\r\n\r\n\r\nconst canvas = document.getElementById('canvas-particle');\r\ncanvas.width = window.innerWidth;\r\ncanvas.height = window.innerHeight;\r\n\r\nconst ctx = canvas.getContext('2d');\r\nconst GRAVITY = 2;\r\nconst MAX_VELOCITY = 3.5;\r\nconst MAX_RADIUS = 150;\r\nconst FPS = 30;\r\nconst PARTICLES_AMOUNT = 30;\r\nlet isPaused = false;\r\n\r\nlet particles;\r\n\r\nlet animationReqId;\r\nlet animationStopped;\r\n\r\nfunction createParticles (){\r\n\tparticles = Array.from({ length: PARTICLES_AMOUNT }).map(\r\n\t\t() =>\r\n\t\t\tMath.random() > 0.5\r\n\t\t\t\t? new _utility_modules_particle_fleeing_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n\t\t\t\t\t\tctx,\r\n\t\t\t\t\t\tGRAVITY,\r\n\t\t\t\t\t\tMAX_VELOCITY,\r\n\t\t\t\t\t\tFPS,\r\n\t\t\t\t\t\tMath.random() * 20,\r\n\t\t\t\t\t\tMAX_RADIUS\r\n\t\t\t\t\t)\r\n\t\t\t\t: new _utility_modules_particle_chasing_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n\t\t\t\t\t\tctx,\r\n\t\t\t\t\t\tGRAVITY,\r\n\t\t\t\t\t\tMAX_VELOCITY,\r\n\t\t\t\t\t\tFPS,\r\n\t\t\t\t\t\tMath.random() * 20\r\n\t\t\t\t\t)\r\n\t);\r\n}\r\n\r\nfunction render (){\r\n\tctx.clearRect(0, 0, canvas.width, canvas.height);\r\n\tparticles.forEach((particle) => {\r\n\t\tparticle.update();\r\n\t\tparticle.render();\r\n\t});\r\n\tanimationReqId = window.requestAnimationFrame(render);\r\n}\r\n\r\nfunction toggleAnimation (e){\r\n\tif (e.key !== 't') return;\r\n\tif (animationStopped) {\r\n\t\tanimationReqId = window.requestAnimationFrame(render);\r\n\t} else {\r\n\t\twindow.cancelAnimationFrame(animationReqId);\r\n\t}\r\n\tanimationStopped = !animationStopped;\r\n\tisPaused = !isPaused;\r\n}\r\n\r\nconst observer = new IntersectionObserver((entries) =>\r\n\tentries.forEach((entry) => {\r\n\t\tif (entry.isIntersecting) {\r\n\t\t\twindow.addEventListener('click', createParticles);\r\n\t\t\twindow.addEventListener('keypress', toggleAnimation);\r\n\r\n\t\t\tif (isPaused) return;\r\n\t\t\tanimationReqId = window.requestAnimationFrame(render);\r\n\t\t\tanimationStopped = false;\r\n\t\t} else {\r\n\t\t\twindow.cancelAnimationFrame(animationReqId);\r\n\t\t\twindow.removeEventListener('dblclick', createParticles);\r\n\t\t\twindow.removeEventListener('keypress', toggleAnimation);\r\n\t\t\tanimationStopped = true;\r\n\t\t}\r\n\t})\r\n);\r\n\r\nfunction initCanvasParticles (){\r\n\tcreateParticles();\r\n\tobserver.observe(canvas);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/canvas-particle.js?");

/***/ }),

/***/ "./src/functionality-modules/canvas.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHomeCanvas)\n/* harmony export */ });\n/* harmony import */ var _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility-modules/point.js */ \"./src/utility-modules/point.js\");\n/* harmony import */ var _utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility-modules/mouse.js */ \"./src/utility-modules/mouse.js\");\n/* harmony import */ var _utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-modules/color.js */ \"./src/utility-modules/color.js\");\n/* harmony import */ var _utility_modules_window_resize_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-modules/window-resize-controller.js */ \"./src/utility-modules/window-resize-controller.js\");\n\r\n\r\n\r\n\r\n\r\nfunction isInRadius(ctx, point) {\r\n\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\r\n\r\n\tconst radius = 100;\r\n\treturn (\r\n\t\tpoint.x < x + radius &&\r\n\t\tpoint.x > x - radius &&\r\n\t\tpoint.y < y + radius &&\r\n\t\tpoint.y > y - radius\r\n\t);\r\n}\r\n\r\nfunction getDistancePercentage(ctx, point) {\r\n\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\r\n\treturn Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));\r\n}\r\n\r\nconst canvas = document.getElementById('canvas');\r\nconst ctx = canvas.getContext('2d');\r\n\r\nconst pointSize = 1.5;\r\nconst pointCount = 50;\r\n\r\nlet points = Array.from({ length: pointCount }).map(() => new _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\r\n\r\nlet reqId;\r\n\r\nfunction animate() {\r\n\tctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\r\n\tconst removedParticles = [];\r\n\tpoints.forEach((point) => {\r\n\t\tctx.fillStyle = (0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getColor)((0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentTextColor)(), point.opacity);\r\n\t\tctx.beginPath();\r\n\t\tctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);\r\n\t\tctx.fill();\r\n\t\tif (isInRadius(ctx, point)) {\r\n\t\t\tctx.strokeStyle = (0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getColor)(\r\n\t\t\t\t(0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentTextColor)(),\r\n\t\t\t\tMath.abs(100 - getDistancePercentage(ctx, point)) / 100\r\n\t\t\t);\r\n\t\t\tctx.moveTo(point.x, point.y);\r\n\r\n\t\t\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\r\n\t\t\tctx.lineTo(x, y);\r\n\t\t\tctx.stroke();\r\n\t\t}\r\n\r\n\t\tpoint.move();\r\n\t\tif (point.opacity < 0) removedParticles.push(point);\r\n\t});\r\n\r\n\tpoints = points.filter((point) => !removedParticles.includes(point));\r\n\tpoints.push(\r\n\t\t...Array.from({ length: removedParticles.length }).map(() => new _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]())\r\n\t);\r\n\r\n\treqId = window.requestAnimationFrame(animate);\r\n}\r\n\r\nconst observer = new IntersectionObserver((entries) => {\r\n\tentries.forEach((entry) => {\r\n\t\tif (entry.isIntersecting) {\r\n\t\t\treqId = window.requestAnimationFrame(animate);\r\n\t\t} else {\r\n\t\t\twindow.cancelAnimationFrame(reqId);\r\n\t\t}\r\n\t});\r\n});\r\n\r\nfunction initHomeCanvas() {\r\n\tobserver.observe(canvas);\r\n\t(0,_utility_modules_window_resize_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctx.canvas);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/canvas.js?");

/***/ }),

/***/ "./src/functionality-modules/color-mode.js":
/*!*************************************************!*\
  !*** ./src/functionality-modules/color-mode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initColorSwitch)\n/* harmony export */ });\nconst colorSwitch = document.getElementById('color-switch');\r\nlet isDarkMode = true;\r\n\r\nconst darkModeOptions = {\r\n  primaryColor: '#0b080c',\r\n  primaryColorGradient: '#141116',\r\n  primaryColorDarken: '#0c0c0c',\r\n  primaryColorDarkenGradient: '#0c0c11',\r\n  textColor: '#ffffff',\r\n  boxShadowLight: 'rgba(200, 200, 200, .1)',\r\n  boxShadowMed: 'rgba(200, 200, 200, .4)',\r\n  boxShadowHard: 'rgba(200, 200, 200, .7)',\r\n  textBackground:\r\n    'radial-gradient(farthest-side at center, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .1))',\r\n  textTransparent: 'rgba(255, 255, 255, .7)',\r\n};\r\n\r\nconst lightModeOptions = {\r\n  primaryColor: '#D9DBD2',\r\n  primaryColorGradient: '#ffffff',\r\n  primaryColorDarken: '#C9C4B2',\r\n  primaryColorDarkenGradient: '#CDCEC3',\r\n  textColor: '#323232',\r\n  boxShadowLight: 'rgba(50, 50, 50, .1)',\r\n  boxShadowMed: 'rgba(50, 50, 50, .4)',\r\n  boxShadowHard: 'rgba(50, 50, 50, .7)',\r\n  textBackground:\r\n    'radial-gradient(farthest-side at center, rgba(200, 200, 200, 1), rgba(200, 200, 200, .7) 80%, rgba(200, 200, 200, .1))',\r\n  textTransparent: 'rgba(50, 50, 50, .7)',\r\n  primaryRgb: '217, 219, 210',\r\n};\r\n\r\nfunction changeMode(colorOptions) {\r\n  const rootStyle = document.documentElement.style;\r\n  rootStyle.setProperty('--primary-color', colorOptions.primaryColor);\r\n  rootStyle.setProperty(\r\n    '--primary-color-gradient',\r\n    colorOptions.primaryColorGradient\r\n  );\r\n  rootStyle.setProperty(\r\n    '--primary-color-darken',\r\n    colorOptions.primaryColorDarken\r\n  );\r\n  rootStyle.setProperty(\r\n    '--primary-color-darken-gradient',\r\n    colorOptions.primaryColorDarkenGradient\r\n  );\r\n  rootStyle.setProperty('--text-color', colorOptions.textColor);\r\n  rootStyle.setProperty('--box-shadow-light', colorOptions.boxShadowLight);\r\n  rootStyle.setProperty('--box-shadow-med', colorOptions.boxShadowMed);\r\n  rootStyle.setProperty('--box-shadow-hard', colorOptions.boxShadowHard);\r\n  rootStyle.setProperty('--text-background', colorOptions.textBackground);\r\n  rootStyle.setProperty('--text-transparent', colorOptions.textTransparent);\r\n  rootStyle.setProperty('--primary-color-rgb', colorOptions.primaryRgb);\r\n}\r\n\r\nfunction initColorSwitch() {\r\n  colorSwitch.addEventListener('click', () => {\r\n    if (isDarkMode) {\r\n      document.body.classList.add('light-mode');\r\n      colorSwitch.classList.remove('dark');\r\n      colorSwitch.classList.add('light');\r\n      changeMode(lightModeOptions);\r\n    } else {\r\n      document.body.classList.remove('light-mode');\r\n      colorSwitch.classList.remove('light');\r\n      colorSwitch.classList.add('dark');\r\n      changeMode(darkModeOptions);\r\n    }\r\n    isDarkMode = !isDarkMode;\r\n  });\r\n\r\n  colorSwitch.addEventListener('keypress', function (e) {\r\n    if (e.key === 'Enter') this.click();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/color-mode.js?");

/***/ }),

/***/ "./src/functionality-modules/intersection.js":
/*!***************************************************!*\
  !*** ./src/functionality-modules/intersection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initIntersection)\n/* harmony export */ });\nconst observer = new IntersectionObserver(componentScrolled);\r\n\r\nconst components = document.getElementsByClassName('scroll-to-view');\r\n\r\nfunction loadImage (image, src){\r\n  const imageTemp = new Image();\r\n  imageTemp.src = src;\r\n  imageTemp.onload = function (){\r\n    image.src = imageTemp.src;\r\n    image.classList.remove('placeholder');\r\n    image.classList.add('loaded');\r\n  };\r\n}\r\n\r\nfunction componentScrolled (entries){\r\n  entries.forEach((element) => {\r\n    if (element.isIntersecting) {\r\n      const { src } = element.target.dataset;\r\n      if (src && element.target.tagName === 'IMG') {\r\n        loadImage(element.target, src);\r\n      }\r\n      element.target.classList.add('is-visible');\r\n    } else {\r\n      element.target.classList.remove('is-visible');\r\n    }\r\n  });\r\n}\r\n\r\nfunction initIntersection (){\r\n  Array.from(components).forEach((component) => observer.observe(component));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/intersection.js?");

/***/ }),

/***/ "./src/functionality-modules/nav.js":
/*!******************************************!*\
  !*** ./src/functionality-modules/nav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNav)\n/* harmony export */ });\nfunction initNav (){\r\n  document.getElementById('nav-icon').addEventListener('click', function (){\r\n    this.classList.toggle('open');\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/nav.js?");

/***/ }),

/***/ "./src/functionality-modules/projects.js":
/*!***********************************************!*\
  !*** ./src/functionality-modules/projects.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initProjects)\n/* harmony export */ });\nconst projects = [\r\n  {\r\n    name: 'Athea',\r\n    imgPath: './../img/athea.png',\r\n    description: 'Frontend Landing Pages for Athea Creative Business',\r\n    link: 'https://atheavisuals.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/athea',\r\n  },\r\n  {\r\n    name: 'BPNN Visualizer',\r\n    imgPath: './../img/bpnn-visualizer.png',\r\n    description:\r\n      'Visualization of Back Propagation Neural Network using PIXI.js and GSAP',\r\n    link: 'https://bpnn-visualizer.herokuapp.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/bpnn-visualizer',\r\n  },\r\n  {\r\n    name: 'Watuku',\r\n    imgPath: './../img/watuku.PNG',\r\n    description: 'Frontend Webapp for Multi-Level Marketing (MLM) Business',\r\n    link: 'https://www.watuku.net/',\r\n  },\r\n  {\r\n    name: 'UIGram',\r\n    imgPath: './../img/uigram.png',\r\n    description:\r\n      'A web application to create social media community for UI design',\r\n    link: 'https://uigram.herokuapp.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/uigram',\r\n  },\r\n  {\r\n    name: 'UIGram API',\r\n    imgPath: './../img/uigram-api.jpg',\r\n    description: 'API made for UIGram',\r\n    link: 'https://uigram-api.herokuapp.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/uigram-api',\r\n  },\r\n  {\r\n    name: 'FootbalLeague',\r\n    imgPath: './../img/pwa.png',\r\n    description:\r\n      'Football match information using third-party api with progressive web app (PWA)',\r\n    link: 'https://footballeague.herokuapp.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/DicodingSubmission3PWA',\r\n  },\r\n  {\r\n    name: 'Othello',\r\n    imgPath: './../img/othello.jpg',\r\n    description: 'Simple othello game',\r\n    link: 'https://othelloo.herokuapp.com',\r\n    linkCode: 'https://github.com/teodorus-nathaniel/Othello',\r\n  },\r\n  {\r\n    name: 'RHackeTS',\r\n    imgPath: './../img/RHackets.png',\r\n    description: 'A mobile app to keep track of badminton matches',\r\n    link:\r\n      'https://play.google.com/store/apps/details?id=edu.bluejack19_1.rhackets',\r\n    linkCode: 'https://github.com/reidoja/RHackets',\r\n  },\r\n];\r\n\r\nconst container = document.getElementById('projects-container');\r\n\r\nfunction initProjects() {\r\n  projects.forEach(\r\n    (project) =>\r\n      (container.innerHTML += `\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<img class=\"project-image placeholder scroll-to-view\" src=\"./img/placeholder.png\" data-src=\"${\r\n            project.imgPath\r\n          }\" alt=\"${project.name}\">\r\n\t\t\t\t\t<div class=\"project-info\">\r\n\t\t\t\t\t\t<span class=\"title\">${project.name}</span>\r\n\t\t\t\t\t\t<p>${project.description}</p>\r\n\t\t\t\t\t\t<a target=\"_blank\" rel=\"noreferrer\" class=\"click-label\" href=\"${\r\n              project.link\r\n            }\">Click to visit</a>\r\n            ${\r\n              project.linkCode\r\n                ? `<a\r\n                target=\"_blank\"\r\n                rel=\"noreferrer\"\r\n                class=\"click-label\"\r\n                href=\"${project.linkCode}\">\r\n                Click to see code\r\n              </a>`\r\n                : ''\r\n            }\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t`)\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/projects.js?");

/***/ }),

/***/ "./src/functionality-modules/shapes-generator.js":
/*!*******************************************************!*\
  !*** ./src/functionality-modules/shapes-generator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initShapes)\n/* harmony export */ });\nconst shapesBackground = document.getElementsByClassName('shapes-background');\r\nconst SHAPES_COUNT = 3;\r\nconst SHAPE_SOURCES = [\r\n  './img/circle.svg',\r\n  './img/rectangle.svg',\r\n  './img/triangle.svg',\r\n];\r\n\r\nfunction generateShape (src, left, top, rotate){\r\n  const image = new Image();\r\n  image.src = src;\r\n  image.style = `top: ${top}px; left: ${left}px; transform: rotate(${rotate}deg)`;\r\n  return image;\r\n}\r\n\r\nfunction random (start, end){\r\n  return Math.floor(Math.random() * (end - start)) + start;\r\n}\r\n\r\nfunction initShapes (){\r\n  Array.from(shapesBackground).forEach((container) => {\r\n    const { width, height } = container.getBoundingClientRect();\r\n    Array.from({ length: SHAPES_COUNT }).forEach(() =>\r\n      container.appendChild(\r\n        generateShape(\r\n          SHAPE_SOURCES[random(0, SHAPE_SOURCES.length)],\r\n          random(0, width),\r\n          random(0, height),\r\n          random(0, 360)\r\n        )\r\n      )\r\n    );\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/shapes-generator.js?");

/***/ }),

/***/ "./src/functionality-modules/skills.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/skills.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSkills)\n/* harmony export */ });\nconst data = [\r\n  {\r\n    name: 'Javascript / HTML / CSS',\r\n    rating: 5,\r\n  },\r\n  {\r\n    name: 'React JS',\r\n    rating: 4.5,\r\n  },\r\n  {\r\n    name: 'Typescript',\r\n    rating: 4.5,\r\n  },\r\n  {\r\n    name: 'Node JS',\r\n    rating: 4,\r\n  },\r\n  {\r\n    name: 'Python',\r\n    rating: 4,\r\n  },\r\n  {\r\n    name: 'Laravel',\r\n    rating: 4,\r\n  },\r\n];\r\n\r\nconst skillContainer = document.getElementById('skill-container');\r\n\r\nfunction initSkills() {\r\n  data.forEach((skill) => {\r\n    let stars = Array.from({ length: skill.rating }).reduce(\r\n      (prev) => prev + '<i class=\"fa fa-star\"></i>',\r\n      ''\r\n    );\r\n    if (skill.rating % 1 !== 0) stars += '<i class=\"fa fa-star-half\"></i>';\r\n\r\n    skillContainer.insertAdjacentHTML(\r\n      'beforeend',\r\n      `                                                       \r\n\t\t\t\t\t<li class=\"scroll-to-view\">\r\n\t\t\t\t\t\t\t<span>${skill.name}</span>\r\n\t\t\t\t\t\t\t<div class=\"rating-bar\">\r\n\t\t\t\t\t\t\t\t\t${stars}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t`\r\n    );\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/skills.js?");

/***/ }),

/***/ "./src/functionality-modules/slider.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlider)\n/* harmony export */ });\nconst slider = document.getElementById('slider');\r\n\r\nconst convertScrollToWidth = (scroll) =>\r\n  scroll / document.body.offsetHeight * window.innerWidth;\r\n\r\nfunction initSlider (){\r\n  let timeout = null;\r\n\r\n  window.addEventListener('scroll', () => {\r\n    if (!timeout) {\r\n      timeout = setTimeout(() => {\r\n        slider.style.width = `${convertScrollToWidth(\r\n          window.scrollY +\r\n            window.scrollY /\r\n              (document.body.offsetHeight - window.innerHeight) *\r\n              window.innerHeight\r\n        )}px`;\r\n        timeout = null;\r\n      }, 15);\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/functionality-modules/slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functionality_modules_canvas_particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality-modules/canvas-particle.js */ \"./src/functionality-modules/canvas-particle.js\");\n/* harmony import */ var _functionality_modules_shapes_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionality-modules/shapes-generator.js */ \"./src/functionality-modules/shapes-generator.js\");\n/* harmony import */ var _functionality_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality-modules/projects.js */ \"./src/functionality-modules/projects.js\");\n/* harmony import */ var _functionality_modules_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality-modules/nav.js */ \"./src/functionality-modules/nav.js\");\n/* harmony import */ var _functionality_modules_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionality-modules/canvas.js */ \"./src/functionality-modules/canvas.js\");\n/* harmony import */ var _functionality_modules_color_mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionality-modules/color-mode.js */ \"./src/functionality-modules/color-mode.js\");\n/* harmony import */ var _functionality_modules_intersection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functionality-modules/intersection.js */ \"./src/functionality-modules/intersection.js\");\n/* harmony import */ var _functionality_modules_skills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionality-modules/skills.js */ \"./src/functionality-modules/skills.js\");\n/* harmony import */ var _functionality_modules_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality-modules/slider.js */ \"./src/functionality-modules/slider.js\");\n\n\n\n\n\n\n\n\n\n\nfunction initAge (){\n\tconst age = Math.floor(\n\t\t(new Date() - new Date(2000, 11, 9)) / (3600 * 24 * 365 * 1000)\n\t);\n\tdocument.getElementById('age-label').textContent = age + ' years old';\n}\n\nfunction init (){\n\tinitAge();\n\t(0,_functionality_modules_canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t(0,_functionality_modules_canvas_particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t(0,_functionality_modules_shapes_generator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t(0,_functionality_modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t(0,_functionality_modules_skills_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\t(0,_functionality_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t(0,_functionality_modules_color_mode_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\t(0,_functionality_modules_slider_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\t(0,_functionality_modules_intersection_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}\n\nwindow.addEventListener('DOMContentLoaded', () => init());\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utility-modules/color.js":
/*!**************************************!*\
  !*** ./src/utility-modules/color.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getColor\": () => (/* binding */ getColor),\n/* harmony export */   \"getCurrentTextColor\": () => (/* binding */ getCurrentTextColor)\n/* harmony export */ });\nfunction getCurrentTextColor (){\r\n  return getComputedStyle(document.documentElement).getPropertyValue(\r\n    '--text-color'\r\n  );\r\n}\r\n\r\nfunction getColor (baseColor, opacity){\r\n  opacity = Math.round(new Number(opacity * 255)).toString(16);\r\n  if (opacity.length === 1) opacity = '0' + opacity;\r\n  return baseColor + opacity;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/color.js?");

/***/ }),

/***/ "./src/utility-modules/mouse.js":
/*!**************************************!*\
  !*** ./src/utility-modules/mouse.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMousePosition\": () => (/* binding */ getMousePosition),\n/* harmony export */   \"getMousePositionRelativeTo\": () => (/* binding */ getMousePositionRelativeTo)\n/* harmony export */ });\nfunction updateMouse ({ clientX, clientY }){\r\n\tmousePos.x = clientX;\r\n\tmousePos.y = clientY;\r\n}\r\n\r\nconst mousePos = {\r\n\tx: 0,\r\n\ty: 0,\r\n};\r\n\r\nwindow.addEventListener('mousemove', updateMouse);\r\n\r\nfunction getMousePosition (){\r\n\treturn mousePos;\r\n}\r\n\r\nfunction getMousePositionRelativeTo (object){\r\n\tconst { x, y } = mousePos;\r\n\treturn {\r\n\t\tx,\r\n\t\ty: y - object.getBoundingClientRect().top,\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/mouse.js?");

/***/ }),

/***/ "./src/utility-modules/particle-chasing.js":
/*!*************************************************!*\
  !*** ./src/utility-modules/particle-chasing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticleChasing)\n/* harmony export */ });\n/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ \"./src/utility-modules/particle.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./src/utility-modules/color.js\");\n\r\n\r\n\r\nclass ParticleChasing extends _particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor (ctx, gravity, maxVelocity, fps, width) {\r\n\t\tsuper(ctx, gravity, maxVelocity, fps, width);\r\n\t}\r\n\r\n\tupdateVelocity (axis, gravity) {\r\n\t\tif (\r\n\t\t\t(this.velocity[axis] > this.maxVelocity && gravity > 0) ||\r\n\t\t\t(this.velocity[axis] < -this.maxVelocity && gravity < 0)\r\n\t\t)\r\n\t\t\treturn;\r\n\t\tthis.velocity[axis] += gravity / this.fps;\r\n\t}\r\n\r\n\trender () {\r\n\t\tthis.ctx.strokeStyle = (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.getColor)((0,_color_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentTextColor)(), this.getOpacity());\r\n\r\n\t\tsuper.render();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/particle-chasing.js?");

/***/ }),

/***/ "./src/utility-modules/particle-fleeing.js":
/*!*************************************************!*\
  !*** ./src/utility-modules/particle-fleeing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticleFleeing)\n/* harmony export */ });\n/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ \"./src/utility-modules/particle.js\");\n/* harmony import */ var _utility_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-functions.js */ \"./src/utility-modules/utility-functions.js\");\n/* harmony import */ var _mouse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse.js */ \"./src/utility-modules/mouse.js\");\n\r\n\r\n\r\n\r\nclass ParticleFleeing extends _particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor (ctx, gravity, maxVelocity, fps, width, maxRadius) {\r\n\t\tsuper(ctx, gravity, maxVelocity, fps, width);\r\n\t\tthis.maxRadius = maxRadius;\r\n\t\tthis.isChangingPosition = {\r\n\t\t\tx: false,\r\n\t\t\ty: false,\r\n\t\t};\r\n\t}\r\n\r\n\tupdateVelocity (axis, gravity) {\r\n\t\tconst mousePos = (0,_mouse_js__WEBPACK_IMPORTED_MODULE_2__.getMousePositionRelativeTo)(this.ctx.canvas);\r\n\r\n\t\tconst diffX = mousePos.x - this.position.x;\r\n\t\tconst diffY = mousePos.y - this.position.y;\r\n\r\n\t\tconst hypotenuse = (0,_utility_functions_js__WEBPACK_IMPORTED_MODULE_1__.getHypotenuse)(diffX, diffY);\r\n\r\n\t\tif (hypotenuse > this.maxRadius) {\r\n\t\t\tif (this.isChangingPosition[axis]) {\r\n\t\t\t\tif (\r\n\t\t\t\t\t(this.position[axis] > mousePos[axis] && this.velocity[axis] >= 0) ||\r\n\t\t\t\t\t(this.position[axis] < mousePos[axis] && this.velocity[axis] <= 0)\r\n\t\t\t\t) {\r\n\t\t\t\t\tthis.velocity[axis] = 0;\r\n\t\t\t\t\tthis.isChangingPosition.x = false;\r\n\t\t\t\t\tthis.isChangingPosition.y = false;\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tthis.velocity[axis] -= gravity / this.fps;\r\n\t\t\t} else {\r\n\t\t\t\tif (\r\n\t\t\t\t\t(this.position[axis] > mousePos[axis] && this.velocity[axis] <= 0) ||\r\n\t\t\t\t\t(this.position[axis] < mousePos[axis] && this.velocity[axis] >= 0)\r\n\t\t\t\t) {\r\n\t\t\t\t\tthis.velocity[axis] = 0;\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\t\t\t\tthis.velocity[axis] += gravity / this.fps;\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tif (Math.abs(this.velocity[axis]) < this.maxVelocity)\r\n\t\t\t\tthis.velocity[axis] -= gravity / this.fps;\r\n\t\t}\r\n\t}\r\n\r\n\tupdatePosition () {\r\n\t\tsuper.updatePosition();\r\n\t\tif (this.position.x < 0) {\r\n\t\t\tthis.position.x = window.innerWidth + this.position.x;\r\n\t\t\tthis.isChangingPosition.x = true;\r\n\t\t} else if (this.position.x > window.innerWidth) {\r\n\t\t\tthis.position.x -= window.innerWidth;\r\n\t\t\tthis.isChangingPosition.x = true;\r\n\t\t}\r\n\r\n\t\tif (this.position.y < 0) {\r\n\t\t\tthis.position.y = window.innerHeight + this.position.y;\r\n\t\t\tthis.isChangingPosition.y = true;\r\n\t\t} else if (this.position.y > window.innerHeight) {\r\n\t\t\tthis.position.y -= window.innerHeight;\r\n\t\t\tthis.isChangingPosition.y = true;\r\n\t\t}\r\n\t}\r\n\r\n\trender () {\r\n\t\tthis.ctx.strokeStyle = `rgba(150,150,255,${this.getOpacity()})`;\r\n\t\tsuper.render();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/particle-fleeing.js?");

/***/ }),

/***/ "./src/utility-modules/particle.js":
/*!*****************************************!*\
  !*** ./src/utility-modules/particle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Particle)\n/* harmony export */ });\n/* harmony import */ var _utility_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-functions.js */ \"./src/utility-modules/utility-functions.js\");\n/* harmony import */ var _mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.js */ \"./src/utility-modules/mouse.js\");\n\r\n\r\n\r\nclass Particle {\r\n\tconstructor (ctx, gravity, maxVelocity, fps, width) {\r\n\t\tthis.ctx = ctx;\r\n\t\tthis.gravity = gravity;\r\n\t\tthis.maxVelocity = maxVelocity;\r\n\t\tthis.fps = fps;\r\n\t\tthis.width = width;\r\n\r\n\t\tthis.position = {\r\n\t\t\tx: Math.random() * ctx.canvas.width,\r\n\t\t\ty: Math.random() * ctx.canvas.height,\r\n\t\t};\r\n\t\tthis.velocity = {\r\n\t\t\tx: 0,\r\n\t\t\ty: 0,\r\n\t\t};\r\n\t}\r\n\r\n\tgetOpacity () {\r\n\t\tconst distance = this.getNearestEdgeDistance();\r\n\t\tconst maxDistance = 100;\r\n\t\tlet opacity = 1;\r\n\t\tif (distance < maxDistance) {\r\n\t\t\topacity = distance / maxDistance;\r\n\t\t}\r\n\t\treturn opacity;\r\n\t}\r\n\r\n\tgetNearestEdgeDistance () {\r\n\t\tconst { x, y } = this.position;\r\n\t\tconst distanceTop = Math.abs(y);\r\n\t\tconst distanceBottom = Math.abs(y - this.ctx.canvas.height);\r\n\t\tconst distanceLeft = Math.abs(x);\r\n\t\tconst distanceRight = Math.abs(x - this.ctx.canvas.width);\r\n\r\n\t\treturn Math.min(distanceTop, distanceBottom, distanceLeft, distanceRight);\r\n\t}\r\n\r\n\tgetGravity () {\r\n\t\tconst mousePos = (0,_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(this.ctx.canvas);\r\n\r\n\t\tconst diffX = mousePos.x - this.position.x;\r\n\t\tconst diffY = mousePos.y - this.position.y;\r\n\r\n\t\tconst hypotenuse = (0,_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHypotenuse)(diffX, diffY);\r\n\r\n\t\tconst ratio = this.gravity / hypotenuse;\r\n\r\n\t\treturn {\r\n\t\t\tx: diffX * ratio,\r\n\t\t\ty: diffY * ratio,\r\n\t\t};\r\n\t}\r\n\r\n\tupdatePosition () {\r\n\t\tthis.position.x += this.velocity.x;\r\n\t\tthis.position.y += this.velocity.y;\r\n\t}\r\n\r\n\tupdate () {\r\n\t\tconst { x, y } = this.getGravity();\r\n\r\n\t\tthis.updateVelocity('x', x);\r\n\t\tthis.updateVelocity('y', y);\r\n\r\n\t\tthis.updatePosition();\r\n\t}\r\n\r\n\trender () {\r\n\t\tconst { x, y } = this.position;\r\n\r\n\t\tthis.ctx.beginPath();\r\n\t\tthis.ctx.arc(x, y, this.width, 0, 2 * Math.PI);\r\n\t\tthis.ctx.stroke();\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/particle.js?");

/***/ }),

/***/ "./src/utility-modules/point.js":
/*!**************************************!*\
  !*** ./src/utility-modules/point.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Point)\n/* harmony export */ });\nclass Point {\r\n\tconstructor () {\r\n\t\tthis.x = Math.random() * window.innerWidth;\r\n\t\tthis.y = Math.random() * window.innerHeight;\r\n\t\tthis.veloX = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);\r\n\t\tthis.veloY = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);\r\n\t\tthis.opacity = 0;\r\n\t}\r\n\r\n\tmove () {\r\n\t\tconst boundary = 50;\r\n\t\tthis.x += this.veloX;\r\n\t\tthis.y += this.veloY;\r\n\t\tif (\r\n\t\t\t(this.x < boundary && this.veloX < 0) ||\r\n\t\t\t(this.x > window.innerWidth - boundary && this.veloX > 0) ||\r\n\t\t\t(this.y < boundary && this.veloY < 0) ||\r\n\t\t\t(this.y > window.innerHeight - boundary && this.veloY > 0)\r\n\t\t) {\r\n\t\t\tthis.fadeOut();\r\n\t\t} else if (this.opacity < 1) {\r\n\t\t\tthis.fadeIn();\r\n\t\t}\r\n\t}\r\n\r\n\tfadeOut () {\r\n\t\tthis.opacity -= 0.01;\r\n\t}\r\n\r\n\tfadeIn () {\r\n\t\tthis.opacity += 0.01;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/point.js?");

/***/ }),

/***/ "./src/utility-modules/utility-functions.js":
/*!**************************************************!*\
  !*** ./src/utility-modules/utility-functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHypotenuse\": () => (/* binding */ getHypotenuse)\n/* harmony export */ });\nfunction getHypotenuse (x, y){\r\n\treturn Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/utility-functions.js?");

/***/ }),

/***/ "./src/utility-modules/window-resize-controller.js":
/*!*********************************************************!*\
  !*** ./src/utility-modules/window-resize-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ autoRescaleComponent)\n/* harmony export */ });\nconst componentsToRescale = [];\r\n\r\nwindow.addEventListener('resize', () => {\r\n\tcomponentsToRescale.forEach((component) => {\r\n\t\tcomponent.width = document.documentElement.clientWidth;\r\n\t\tcomponent.height = document.documentElement.clientHeight;\r\n\t});\r\n});\r\n\r\nfunction autoRescaleComponent(component) {\r\n\tcomponent.width = document.documentElement.clientWidth;\r\n\tcomponent.height = document.documentElement.clientHeight;\r\n\tcomponentsToRescale.push(component);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utility-modules/window-resize-controller.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;