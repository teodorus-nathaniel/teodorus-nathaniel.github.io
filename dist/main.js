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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initCanvasParticles)\n/* harmony export */ });\n/* harmony import */ var _utility_modules_particle_chasing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utility-modules/particle-chasing.js */ \"./src/utility-modules/particle-chasing.js\");\n/* harmony import */ var _utility_modules_particle_fleeing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utility-modules/particle-fleeing.js */ \"./src/utility-modules/particle-fleeing.js\");\n\n\n\nconst canvas = document.getElementById('canvas-particle');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\n\nconst ctx = canvas.getContext('2d');\nconst GRAVITY = 2;\nconst MAX_VELOCITY = 3.5;\nconst MAX_RADIUS = 150;\nconst FPS = 30;\nconst PARTICLES_AMOUNT = 30;\nlet isPaused = false;\n\nlet particles;\n\nlet animationReqId;\nlet animationStopped;\n\nfunction createParticles (){\n\tparticles = Array.from({ length: PARTICLES_AMOUNT }).map(\n\t\t() =>\n\t\t\tMath.random() > 0.5\n\t\t\t\t? new _utility_modules_particle_fleeing_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n\t\t\t\t\t\tctx,\n\t\t\t\t\t\tGRAVITY,\n\t\t\t\t\t\tMAX_VELOCITY,\n\t\t\t\t\t\tFPS,\n\t\t\t\t\t\tMath.random() * 20,\n\t\t\t\t\t\tMAX_RADIUS\n\t\t\t\t\t)\n\t\t\t\t: new _utility_modules_particle_chasing_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n\t\t\t\t\t\tctx,\n\t\t\t\t\t\tGRAVITY,\n\t\t\t\t\t\tMAX_VELOCITY,\n\t\t\t\t\t\tFPS,\n\t\t\t\t\t\tMath.random() * 20\n\t\t\t\t\t)\n\t);\n}\n\nfunction render (){\n\tctx.clearRect(0, 0, canvas.width, canvas.height);\n\tparticles.forEach((particle) => {\n\t\tparticle.update();\n\t\tparticle.render();\n\t});\n\tanimationReqId = window.requestAnimationFrame(render);\n}\n\nfunction toggleAnimation (e){\n\tif (e.key !== 't') return;\n\tif (animationStopped) {\n\t\tanimationReqId = window.requestAnimationFrame(render);\n\t} else {\n\t\twindow.cancelAnimationFrame(animationReqId);\n\t}\n\tanimationStopped = !animationStopped;\n\tisPaused = !isPaused;\n}\n\nconst observer = new IntersectionObserver((entries) =>\n\tentries.forEach((entry) => {\n\t\tif (entry.isIntersecting) {\n\t\t\twindow.addEventListener('click', createParticles);\n\t\t\twindow.addEventListener('keypress', toggleAnimation);\n\n\t\t\tif (isPaused) return;\n\t\t\tanimationReqId = window.requestAnimationFrame(render);\n\t\t\tanimationStopped = false;\n\t\t} else {\n\t\t\twindow.cancelAnimationFrame(animationReqId);\n\t\t\twindow.removeEventListener('dblclick', createParticles);\n\t\t\twindow.removeEventListener('keypress', toggleAnimation);\n\t\t\tanimationStopped = true;\n\t\t}\n\t})\n);\n\nfunction initCanvasParticles (){\n\tcreateParticles();\n\tobserver.observe(canvas);\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/canvas-particle.js?");

/***/ }),

/***/ "./src/functionality-modules/canvas.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/canvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHomeCanvas)\n/* harmony export */ });\n/* harmony import */ var _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility-modules/point.js */ \"./src/utility-modules/point.js\");\n/* harmony import */ var _utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility-modules/mouse.js */ \"./src/utility-modules/mouse.js\");\n/* harmony import */ var _utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility-modules/color.js */ \"./src/utility-modules/color.js\");\n/* harmony import */ var _utility_modules_window_resize_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-modules/window-resize-controller.js */ \"./src/utility-modules/window-resize-controller.js\");\n\n\n\n\n\nfunction isInRadius(ctx, point) {\n\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\n\n\tconst radius = 100;\n\treturn (\n\t\tpoint.x < x + radius &&\n\t\tpoint.x > x - radius &&\n\t\tpoint.y < y + radius &&\n\t\tpoint.y > y - radius\n\t);\n}\n\nfunction getDistancePercentage(ctx, point) {\n\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\n\treturn Math.sqrt(Math.pow(point.x - x, 2) + Math.pow(point.y - y, 2));\n}\n\nconst canvas = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\n\nconst pointSize = 1.5;\nconst pointCount = 50;\n\nlet points = Array.from({ length: pointCount }).map(() => new _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n\nlet reqId;\n\nfunction animate() {\n\tctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n\tconst removedParticles = [];\n\tpoints.forEach((point) => {\n\t\tctx.fillStyle = (0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getColor)((0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentTextColor)(), point.opacity);\n\t\tctx.beginPath();\n\t\tctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);\n\t\tctx.fill();\n\t\tif (isInRadius(ctx, point)) {\n\t\t\tctx.strokeStyle = (0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getColor)(\n\t\t\t\t(0,_utility_modules_color_js__WEBPACK_IMPORTED_MODULE_2__.getCurrentTextColor)(),\n\t\t\t\tMath.abs(100 - getDistancePercentage(ctx, point)) / 100\n\t\t\t);\n\t\t\tctx.moveTo(point.x, point.y);\n\n\t\t\tconst { x, y } = (0,_utility_modules_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(ctx.canvas);\n\t\t\tctx.lineTo(x, y);\n\t\t\tctx.stroke();\n\t\t}\n\n\t\tpoint.move();\n\t\tif (point.opacity < 0) removedParticles.push(point);\n\t});\n\n\tpoints = points.filter((point) => !removedParticles.includes(point));\n\tpoints.push(\n\t\t...Array.from({ length: removedParticles.length }).map(() => new _utility_modules_point_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]())\n\t);\n\n\treqId = window.requestAnimationFrame(animate);\n}\n\nconst observer = new IntersectionObserver((entries) => {\n\tentries.forEach((entry) => {\n\t\tif (entry.isIntersecting) {\n\t\t\treqId = window.requestAnimationFrame(animate);\n\t\t} else {\n\t\t\twindow.cancelAnimationFrame(reqId);\n\t\t}\n\t});\n});\n\nfunction initHomeCanvas() {\n\tobserver.observe(canvas);\n\t(0,_utility_modules_window_resize_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(ctx.canvas);\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/canvas.js?");

/***/ }),

/***/ "./src/functionality-modules/color-mode.js":
/*!*************************************************!*\
  !*** ./src/functionality-modules/color-mode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initColorSwitch)\n/* harmony export */ });\nconst colorSwitch = document.getElementById('color-switch');\nlet isDarkMode = true;\n\nconst darkModeOptions = {\n  primaryColor: '#0b080c',\n  primaryColorGradient: '#141116',\n  primaryColorDarken: '#0c0c0c',\n  primaryColorDarkenGradient: '#0c0c11',\n  textColor: '#ffffff',\n  boxShadowLight: 'rgba(200, 200, 200, .1)',\n  boxShadowMed: 'rgba(200, 200, 200, .4)',\n  boxShadowHard: 'rgba(200, 200, 200, .7)',\n  textBackground:\n    'radial-gradient(farthest-side at center, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7), rgba(0, 0, 0, .1))',\n  textTransparent: 'rgba(255, 255, 255, .7)',\n};\n\nconst lightModeOptions = {\n  primaryColor: '#D9DBD2',\n  primaryColorGradient: '#ffffff',\n  primaryColorDarken: '#C9C4B2',\n  primaryColorDarkenGradient: '#CDCEC3',\n  textColor: '#323232',\n  boxShadowLight: 'rgba(50, 50, 50, .1)',\n  boxShadowMed: 'rgba(50, 50, 50, .4)',\n  boxShadowHard: 'rgba(50, 50, 50, .7)',\n  textBackground:\n    'radial-gradient(farthest-side at center, rgba(200, 200, 200, 1), rgba(200, 200, 200, .7) 80%, rgba(200, 200, 200, .1))',\n  textTransparent: 'rgba(50, 50, 50, .7)',\n  primaryRgb: '217, 219, 210',\n};\n\nfunction changeMode(colorOptions) {\n  const rootStyle = document.documentElement.style;\n  rootStyle.setProperty('--primary-color', colorOptions.primaryColor);\n  rootStyle.setProperty(\n    '--primary-color-gradient',\n    colorOptions.primaryColorGradient\n  );\n  rootStyle.setProperty(\n    '--primary-color-darken',\n    colorOptions.primaryColorDarken\n  );\n  rootStyle.setProperty(\n    '--primary-color-darken-gradient',\n    colorOptions.primaryColorDarkenGradient\n  );\n  rootStyle.setProperty('--text-color', colorOptions.textColor);\n  rootStyle.setProperty('--box-shadow-light', colorOptions.boxShadowLight);\n  rootStyle.setProperty('--box-shadow-med', colorOptions.boxShadowMed);\n  rootStyle.setProperty('--box-shadow-hard', colorOptions.boxShadowHard);\n  rootStyle.setProperty('--text-background', colorOptions.textBackground);\n  rootStyle.setProperty('--text-transparent', colorOptions.textTransparent);\n  rootStyle.setProperty('--primary-color-rgb', colorOptions.primaryRgb);\n}\n\nfunction initColorSwitch() {\n  colorSwitch.addEventListener('click', () => {\n    if (isDarkMode) {\n      document.body.classList.add('light-mode');\n      colorSwitch.classList.remove('dark');\n      colorSwitch.classList.add('light');\n      changeMode(lightModeOptions);\n    } else {\n      document.body.classList.remove('light-mode');\n      colorSwitch.classList.remove('light');\n      colorSwitch.classList.add('dark');\n      changeMode(darkModeOptions);\n    }\n    isDarkMode = !isDarkMode;\n  });\n\n  colorSwitch.addEventListener('keypress', function (e) {\n    if (e.key === 'Enter') this.click();\n  });\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/color-mode.js?");

/***/ }),

/***/ "./src/functionality-modules/intersection.js":
/*!***************************************************!*\
  !*** ./src/functionality-modules/intersection.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initIntersection)\n/* harmony export */ });\nconst observer = new IntersectionObserver(componentScrolled);\n\nconst components = document.getElementsByClassName('scroll-to-view');\n\nfunction loadImage (image, src){\n  const imageTemp = new Image();\n  imageTemp.src = src;\n  imageTemp.onload = function (){\n    image.src = imageTemp.src;\n    image.classList.remove('placeholder');\n    image.classList.add('loaded');\n  };\n}\n\nfunction componentScrolled (entries){\n  entries.forEach((element) => {\n    if (element.isIntersecting) {\n      const { src } = element.target.dataset;\n      if (src && element.target.tagName === 'IMG') {\n        loadImage(element.target, src);\n      }\n      element.target.classList.add('is-visible');\n    } else {\n      element.target.classList.remove('is-visible');\n    }\n  });\n}\n\nfunction initIntersection (){\n  Array.from(components).forEach((component) => observer.observe(component));\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/intersection.js?");

/***/ }),

/***/ "./src/functionality-modules/nav.js":
/*!******************************************!*\
  !*** ./src/functionality-modules/nav.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNav)\n/* harmony export */ });\nfunction initNav (){\n  document.getElementById('nav-icon').addEventListener('click', function (){\n    this.classList.toggle('open');\n  });\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/nav.js?");

/***/ }),

/***/ "./src/functionality-modules/projects.js":
/*!***********************************************!*\
  !*** ./src/functionality-modules/projects.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initProjects)\n/* harmony export */ });\nconst projects = [\n  {\n    name: 'Tanka Watches',\n    imgPath: './../img/tanka.png',\n    description: 'A platform to learn programming',\n    link: 'https://tankawatches.com',\n    altLink: 'https://tanka.vercel.app',\n  },\n  {\n    name: 'Kode Kampus',\n    imgPath: './../img/kodekampus.png',\n    description: 'A platform to learn programming',\n    link: 'https://kodekampus.vercel.app',\n  },\n  {\n    name: 'Subsocial StackExchange',\n    imgPath: './../img/substrate-stackexchange.png',\n    description:\n      'StackExchange for Substrate devs made with Subsocial Blockchain Network.<br />2nd place winner of Polkadot NA Hackaton 2022 in Interfaces and Experiences Category',\n    link: 'https://substrate-stackexchange.vercel.app',\n    linkCode: 'https://github.com/teodorus-nathaniel/substrate-stackexchange',\n  },\n  {\n    name: 'Subsocial StackExchange Reputation Indexer',\n    imgPath: './../img/subquery.png',\n    description:\n      \"Indexing service for Subsocial Substrate StackExchange to calculate each wallet's reputation from their on-chain activity.<br />Made with Subquery Network\",\n    linkCode: 'https://github.com/teodorus-nathaniel/subsocial-subql',\n  },\n  {\n    name: 'Athea',\n    imgPath: './../img/athea.png',\n    description: 'Frontend Landing Pages for Athea Creative Business',\n    altLink: 'https://athea.vercel.app',\n    linkCode: 'https://github.com/teodorus-nathaniel/athea',\n  },\n  {\n    name: 'SOM Visualizer',\n    imgPath: './../img/som-visualizer.png',\n    description: 'Visualization of Self Organizing Map AI using svelte',\n    link: '/projects/som-visualizer',\n    linkCode: 'https://github.com/teodorus-nathaniel/som-visualizer',\n  },\n  {\n    name: 'BPNN Visualizer',\n    imgPath: './../img/bpnn-visualizer.png',\n    description:\n      'Visualization of Back Propagation Neural Network using PIXI.js and GSAP',\n    link: '/projects/bpnn-visualizer',\n    linkCode: 'https://github.com/teodorus-nathaniel/bpnn-visualizer',\n  },\n  {\n    name: 'Watuku',\n    imgPath: './../img/watuku.PNG',\n    description: 'Frontend Webapp for Multi-Level Marketing (MLM) Business',\n  },\n  {\n    name: 'UIGram',\n    imgPath: './../img/uigram.png',\n    description:\n      'A web application to create social media community for UI design',\n    linkCode: 'https://github.com/teodorus-nathaniel/uigram',\n  },\n  {\n    name: 'UIGram API',\n    imgPath: './../img/uigram-api.jpg',\n    description: 'API made for UIGram',\n    linkCode: 'https://github.com/teodorus-nathaniel/uigram-api',\n  },\n  {\n    name: 'FootbalLeague',\n    imgPath: './../img/pwa.png',\n    description:\n      'Football match information using third-party api with progressive web app (PWA)',\n    link: '/projects/footballeague',\n    linkCode: 'https://github.com/teodorus-nathaniel/DicodingSubmission3PWA',\n  },\n  {\n    name: 'Othello',\n    imgPath: './../img/othello.jpg',\n    description: 'Simple othello game',\n    link: '/projects/othello',\n    linkCode: 'https://github.com/teodorus-nathaniel/Othello',\n  },\n  {\n    name: 'RHackeTS',\n    imgPath: './../img/RHackets.png',\n    description: 'A mobile app to keep track of badminton matches',\n    link: 'https://play.google.com/store/apps/details?id=edu.bluejack19_1.rhackets',\n    linkCode: 'https://github.com/reidoja/RHackets',\n  },\n]\n\nconst container = document.getElementById('projects-container')\n\nfunction initProjects() {\n  projects.forEach(\n    (project) =>\n      (container.innerHTML += `\n\t\t\t\t<div>\n          <img class=\"project-image-bg placeholder scroll-to-view\" src=\"${\n            project.imgPath\n          }\" alt=\"\">\n          <img class=\"project-image placeholder scroll-to-view\" src=\"./img/placeholder.png\" data-src=\"${\n            project.imgPath\n          }\" alt=\"${project.name}\">\n\t\t\t\t\t<div class=\"project-info\">\n\t\t\t\t\t\t<span class=\"title\">${project.name}</span>\n\t\t\t\t\t\t<p>${project.description}</p>\n            ${\n              project.link\n                ? `\n              <a target=\"_blank\" rel=\"noreferrer\" class=\"click-label\" href=\"${\n                project.link\n              }\">Click to visit</a>\n              ${\n                project.altLink\n                  ? `\n                <a target=\"_blank\" rel=\"noreferrer\" class=\"click-label\" href=\"${project.altLink}\">Alt Link</a>\n              `\n                  : ''\n              }`\n                : ''\n            }\n            ${\n              project.linkCode\n                ? `<a\n                target=\"_blank\"\n                rel=\"noreferrer\"\n                class=\"click-label\"\n                href=\"${project.linkCode}\">\n                Click to see code\n              </a>`\n                : ''\n            }\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t`)\n  )\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/projects.js?");

/***/ }),

/***/ "./src/functionality-modules/shapes-generator.js":
/*!*******************************************************!*\
  !*** ./src/functionality-modules/shapes-generator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initShapes)\n/* harmony export */ });\nconst shapesBackground = document.getElementsByClassName('shapes-background');\nconst SHAPES_COUNT = 3;\nconst SHAPE_SOURCES = [\n  './img/circle.svg',\n  './img/rectangle.svg',\n  './img/triangle.svg',\n];\n\nfunction generateShape (src, left, top, rotate){\n  const image = new Image();\n  image.src = src;\n  image.style = `top: ${top}px; left: ${left}px; transform: rotate(${rotate}deg)`;\n  return image;\n}\n\nfunction random (start, end){\n  return Math.floor(Math.random() * (end - start)) + start;\n}\n\nfunction initShapes (){\n  Array.from(shapesBackground).forEach((container) => {\n    const { width, height } = container.getBoundingClientRect();\n    Array.from({ length: SHAPES_COUNT }).forEach(() =>\n      container.appendChild(\n        generateShape(\n          SHAPE_SOURCES[random(0, SHAPE_SOURCES.length)],\n          random(0, width),\n          random(0, height),\n          random(0, 360)\n        )\n      )\n    );\n  });\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/shapes-generator.js?");

/***/ }),

/***/ "./src/functionality-modules/skills.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/skills.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSkills)\n/* harmony export */ });\nconst data = [\n  {\n    name: 'Javascript / HTML / CSS',\n    rating: 5,\n  },\n  {\n    name: 'React JS',\n    rating: 4.5,\n  },\n  {\n    name: 'Typescript',\n    rating: 4.5,\n  },\n  {\n    name: 'Node JS',\n    rating: 4,\n  },\n  {\n    name: 'Python',\n    rating: 4,\n  },\n  {\n    name: 'Laravel',\n    rating: 4,\n  },\n];\n\nconst skillContainer = document.getElementById('skill-container');\n\nfunction initSkills() {\n  data.forEach((skill) => {\n    let stars = Array.from({ length: skill.rating }).reduce(\n      (prev) => prev + '<i class=\"fa fa-star\"></i>',\n      ''\n    );\n    if (skill.rating % 1 !== 0) stars += '<i class=\"fa fa-star-half\"></i>';\n\n    skillContainer.insertAdjacentHTML(\n      'beforeend',\n      `                                                       \n\t\t\t\t\t<li class=\"scroll-to-view\">\n\t\t\t\t\t\t\t<span>${skill.name}</span>\n\t\t\t\t\t\t\t<div class=\"rating-bar\">\n\t\t\t\t\t\t\t\t\t${stars}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t`\n    );\n  });\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/skills.js?");

/***/ }),

/***/ "./src/functionality-modules/slider.js":
/*!*********************************************!*\
  !*** ./src/functionality-modules/slider.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initSlider)\n/* harmony export */ });\nconst slider = document.getElementById('slider');\n\nconst convertScrollToWidth = (scroll) =>\n  scroll / document.body.offsetHeight * window.innerWidth;\n\nfunction initSlider (){\n  let timeout = null;\n\n  window.addEventListener('scroll', () => {\n    if (!timeout) {\n      timeout = setTimeout(() => {\n        slider.style.width = `${convertScrollToWidth(\n          window.scrollY +\n            window.scrollY /\n              (document.body.offsetHeight - window.innerHeight) *\n              window.innerHeight\n        )}px`;\n        timeout = null;\n      }, 15);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/functionality-modules/slider.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functionality_modules_canvas_particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionality-modules/canvas-particle.js */ \"./src/functionality-modules/canvas-particle.js\");\n/* harmony import */ var _functionality_modules_shapes_generator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionality-modules/shapes-generator.js */ \"./src/functionality-modules/shapes-generator.js\");\n/* harmony import */ var _functionality_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionality-modules/projects.js */ \"./src/functionality-modules/projects.js\");\n/* harmony import */ var _functionality_modules_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionality-modules/nav.js */ \"./src/functionality-modules/nav.js\");\n/* harmony import */ var _functionality_modules_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionality-modules/canvas.js */ \"./src/functionality-modules/canvas.js\");\n/* harmony import */ var _functionality_modules_color_mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functionality-modules/color-mode.js */ \"./src/functionality-modules/color-mode.js\");\n/* harmony import */ var _functionality_modules_intersection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functionality-modules/intersection.js */ \"./src/functionality-modules/intersection.js\");\n/* harmony import */ var _functionality_modules_skills_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functionality-modules/skills.js */ \"./src/functionality-modules/skills.js\");\n/* harmony import */ var _functionality_modules_slider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functionality-modules/slider.js */ \"./src/functionality-modules/slider.js\");\n\n\n\n\n\n\n\n\n\n\nfunction initAge (){\n\tconst age = Math.floor(\n\t\t(new Date() - new Date(2000, 11, 9)) / (3600 * 24 * 365 * 1000)\n\t);\n\tdocument.getElementById('age-label').textContent = age + ' years old';\n}\n\nfunction init (){\n\tinitAge();\n\t(0,_functionality_modules_canvas_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\t(0,_functionality_modules_canvas_particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t(0,_functionality_modules_shapes_generator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t(0,_functionality_modules_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t(0,_functionality_modules_skills_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\t(0,_functionality_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t(0,_functionality_modules_color_mode_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\t(0,_functionality_modules_slider_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\t(0,_functionality_modules_intersection_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}\n\nwindow.addEventListener('DOMContentLoaded', () => init());\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/index.js?");

/***/ }),

/***/ "./src/utility-modules/color.js":
/*!**************************************!*\
  !*** ./src/utility-modules/color.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getColor\": () => (/* binding */ getColor),\n/* harmony export */   \"getCurrentTextColor\": () => (/* binding */ getCurrentTextColor)\n/* harmony export */ });\nfunction getCurrentTextColor (){\n  return getComputedStyle(document.documentElement).getPropertyValue(\n    '--text-color'\n  );\n}\n\nfunction getColor (baseColor, opacity){\n  opacity = Math.round(new Number(opacity * 255)).toString(16);\n  if (opacity.length === 1) opacity = '0' + opacity;\n  return baseColor + opacity;\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/color.js?");

/***/ }),

/***/ "./src/utility-modules/mouse.js":
/*!**************************************!*\
  !*** ./src/utility-modules/mouse.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMousePosition\": () => (/* binding */ getMousePosition),\n/* harmony export */   \"getMousePositionRelativeTo\": () => (/* binding */ getMousePositionRelativeTo)\n/* harmony export */ });\nfunction updateMouse ({ clientX, clientY }){\n\tmousePos.x = clientX;\n\tmousePos.y = clientY;\n}\n\nconst mousePos = {\n\tx: 0,\n\ty: 0,\n};\n\nwindow.addEventListener('mousemove', updateMouse);\n\nfunction getMousePosition (){\n\treturn mousePos;\n}\n\nfunction getMousePositionRelativeTo (object){\n\tconst { x, y } = mousePos;\n\treturn {\n\t\tx,\n\t\ty: y - object.getBoundingClientRect().top,\n\t};\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/mouse.js?");

/***/ }),

/***/ "./src/utility-modules/particle-chasing.js":
/*!*************************************************!*\
  !*** ./src/utility-modules/particle-chasing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticleChasing)\n/* harmony export */ });\n/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ \"./src/utility-modules/particle.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./src/utility-modules/color.js\");\n\n\n\nclass ParticleChasing extends _particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (ctx, gravity, maxVelocity, fps, width) {\n\t\tsuper(ctx, gravity, maxVelocity, fps, width);\n\t}\n\n\tupdateVelocity (axis, gravity) {\n\t\tif (\n\t\t\t(this.velocity[axis] > this.maxVelocity && gravity > 0) ||\n\t\t\t(this.velocity[axis] < -this.maxVelocity && gravity < 0)\n\t\t)\n\t\t\treturn;\n\t\tthis.velocity[axis] += gravity / this.fps;\n\t}\n\n\trender () {\n\t\tthis.ctx.strokeStyle = (0,_color_js__WEBPACK_IMPORTED_MODULE_1__.getColor)((0,_color_js__WEBPACK_IMPORTED_MODULE_1__.getCurrentTextColor)(), this.getOpacity());\n\n\t\tsuper.render();\n\t}\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/particle-chasing.js?");

/***/ }),

/***/ "./src/utility-modules/particle-fleeing.js":
/*!*************************************************!*\
  !*** ./src/utility-modules/particle-fleeing.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ParticleFleeing)\n/* harmony export */ });\n/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ \"./src/utility-modules/particle.js\");\n/* harmony import */ var _utility_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-functions.js */ \"./src/utility-modules/utility-functions.js\");\n/* harmony import */ var _mouse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse.js */ \"./src/utility-modules/mouse.js\");\n\n\n\n\nclass ParticleFleeing extends _particle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor (ctx, gravity, maxVelocity, fps, width, maxRadius) {\n\t\tsuper(ctx, gravity, maxVelocity, fps, width);\n\t\tthis.maxRadius = maxRadius;\n\t\tthis.isChangingPosition = {\n\t\t\tx: false,\n\t\t\ty: false,\n\t\t};\n\t}\n\n\tupdateVelocity (axis, gravity) {\n\t\tconst mousePos = (0,_mouse_js__WEBPACK_IMPORTED_MODULE_2__.getMousePositionRelativeTo)(this.ctx.canvas);\n\n\t\tconst diffX = mousePos.x - this.position.x;\n\t\tconst diffY = mousePos.y - this.position.y;\n\n\t\tconst hypotenuse = (0,_utility_functions_js__WEBPACK_IMPORTED_MODULE_1__.getHypotenuse)(diffX, diffY);\n\n\t\tif (hypotenuse > this.maxRadius) {\n\t\t\tif (this.isChangingPosition[axis]) {\n\t\t\t\tif (\n\t\t\t\t\t(this.position[axis] > mousePos[axis] && this.velocity[axis] >= 0) ||\n\t\t\t\t\t(this.position[axis] < mousePos[axis] && this.velocity[axis] <= 0)\n\t\t\t\t) {\n\t\t\t\t\tthis.velocity[axis] = 0;\n\t\t\t\t\tthis.isChangingPosition.x = false;\n\t\t\t\t\tthis.isChangingPosition.y = false;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tthis.velocity[axis] -= gravity / this.fps;\n\t\t\t} else {\n\t\t\t\tif (\n\t\t\t\t\t(this.position[axis] > mousePos[axis] && this.velocity[axis] <= 0) ||\n\t\t\t\t\t(this.position[axis] < mousePos[axis] && this.velocity[axis] >= 0)\n\t\t\t\t) {\n\t\t\t\t\tthis.velocity[axis] = 0;\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tthis.velocity[axis] += gravity / this.fps;\n\t\t\t}\n\t\t} else {\n\t\t\tif (Math.abs(this.velocity[axis]) < this.maxVelocity)\n\t\t\t\tthis.velocity[axis] -= gravity / this.fps;\n\t\t}\n\t}\n\n\tupdatePosition () {\n\t\tsuper.updatePosition();\n\t\tif (this.position.x < 0) {\n\t\t\tthis.position.x = window.innerWidth + this.position.x;\n\t\t\tthis.isChangingPosition.x = true;\n\t\t} else if (this.position.x > window.innerWidth) {\n\t\t\tthis.position.x -= window.innerWidth;\n\t\t\tthis.isChangingPosition.x = true;\n\t\t}\n\n\t\tif (this.position.y < 0) {\n\t\t\tthis.position.y = window.innerHeight + this.position.y;\n\t\t\tthis.isChangingPosition.y = true;\n\t\t} else if (this.position.y > window.innerHeight) {\n\t\t\tthis.position.y -= window.innerHeight;\n\t\t\tthis.isChangingPosition.y = true;\n\t\t}\n\t}\n\n\trender () {\n\t\tthis.ctx.strokeStyle = `rgba(150,150,255,${this.getOpacity()})`;\n\t\tsuper.render();\n\t}\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/particle-fleeing.js?");

/***/ }),

/***/ "./src/utility-modules/particle.js":
/*!*****************************************!*\
  !*** ./src/utility-modules/particle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Particle)\n/* harmony export */ });\n/* harmony import */ var _utility_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-functions.js */ \"./src/utility-modules/utility-functions.js\");\n/* harmony import */ var _mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mouse.js */ \"./src/utility-modules/mouse.js\");\n\n\n\nclass Particle {\n\tconstructor (ctx, gravity, maxVelocity, fps, width) {\n\t\tthis.ctx = ctx;\n\t\tthis.gravity = gravity;\n\t\tthis.maxVelocity = maxVelocity;\n\t\tthis.fps = fps;\n\t\tthis.width = width;\n\n\t\tthis.position = {\n\t\t\tx: Math.random() * ctx.canvas.width,\n\t\t\ty: Math.random() * ctx.canvas.height,\n\t\t};\n\t\tthis.velocity = {\n\t\t\tx: 0,\n\t\t\ty: 0,\n\t\t};\n\t}\n\n\tgetOpacity () {\n\t\tconst distance = this.getNearestEdgeDistance();\n\t\tconst maxDistance = 100;\n\t\tlet opacity = 1;\n\t\tif (distance < maxDistance) {\n\t\t\topacity = distance / maxDistance;\n\t\t}\n\t\treturn opacity;\n\t}\n\n\tgetNearestEdgeDistance () {\n\t\tconst { x, y } = this.position;\n\t\tconst distanceTop = Math.abs(y);\n\t\tconst distanceBottom = Math.abs(y - this.ctx.canvas.height);\n\t\tconst distanceLeft = Math.abs(x);\n\t\tconst distanceRight = Math.abs(x - this.ctx.canvas.width);\n\n\t\treturn Math.min(distanceTop, distanceBottom, distanceLeft, distanceRight);\n\t}\n\n\tgetGravity () {\n\t\tconst mousePos = (0,_mouse_js__WEBPACK_IMPORTED_MODULE_1__.getMousePositionRelativeTo)(this.ctx.canvas);\n\n\t\tconst diffX = mousePos.x - this.position.x;\n\t\tconst diffY = mousePos.y - this.position.y;\n\n\t\tconst hypotenuse = (0,_utility_functions_js__WEBPACK_IMPORTED_MODULE_0__.getHypotenuse)(diffX, diffY);\n\n\t\tconst ratio = this.gravity / hypotenuse;\n\n\t\treturn {\n\t\t\tx: diffX * ratio,\n\t\t\ty: diffY * ratio,\n\t\t};\n\t}\n\n\tupdatePosition () {\n\t\tthis.position.x += this.velocity.x;\n\t\tthis.position.y += this.velocity.y;\n\t}\n\n\tupdate () {\n\t\tconst { x, y } = this.getGravity();\n\n\t\tthis.updateVelocity('x', x);\n\t\tthis.updateVelocity('y', y);\n\n\t\tthis.updatePosition();\n\t}\n\n\trender () {\n\t\tconst { x, y } = this.position;\n\n\t\tthis.ctx.beginPath();\n\t\tthis.ctx.arc(x, y, this.width, 0, 2 * Math.PI);\n\t\tthis.ctx.stroke();\n\t}\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/particle.js?");

/***/ }),

/***/ "./src/utility-modules/point.js":
/*!**************************************!*\
  !*** ./src/utility-modules/point.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Point)\n/* harmony export */ });\nclass Point {\n\tconstructor () {\n\t\tthis.x = Math.random() * window.innerWidth;\n\t\tthis.y = Math.random() * window.innerHeight;\n\t\tthis.veloX = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);\n\t\tthis.veloY = Math.random() * 0.5 * (Math.random() < 0.5 ? -1 : 1);\n\t\tthis.opacity = 0;\n\t}\n\n\tmove () {\n\t\tconst boundary = 50;\n\t\tthis.x += this.veloX;\n\t\tthis.y += this.veloY;\n\t\tif (\n\t\t\t(this.x < boundary && this.veloX < 0) ||\n\t\t\t(this.x > window.innerWidth - boundary && this.veloX > 0) ||\n\t\t\t(this.y < boundary && this.veloY < 0) ||\n\t\t\t(this.y > window.innerHeight - boundary && this.veloY > 0)\n\t\t) {\n\t\t\tthis.fadeOut();\n\t\t} else if (this.opacity < 1) {\n\t\t\tthis.fadeIn();\n\t\t}\n\t}\n\n\tfadeOut () {\n\t\tthis.opacity -= 0.01;\n\t}\n\n\tfadeIn () {\n\t\tthis.opacity += 0.01;\n\t}\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/point.js?");

/***/ }),

/***/ "./src/utility-modules/utility-functions.js":
/*!**************************************************!*\
  !*** ./src/utility-modules/utility-functions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHypotenuse\": () => (/* binding */ getHypotenuse)\n/* harmony export */ });\nfunction getHypotenuse (x, y){\n\treturn Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/utility-functions.js?");

/***/ }),

/***/ "./src/utility-modules/window-resize-controller.js":
/*!*********************************************************!*\
  !*** ./src/utility-modules/window-resize-controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ autoRescaleComponent)\n/* harmony export */ });\nconst componentsToRescale = [];\n\nwindow.addEventListener('resize', () => {\n\tcomponentsToRescale.forEach((component) => {\n\t\tcomponent.width = document.documentElement.clientWidth;\n\t\tcomponent.height = document.documentElement.clientHeight;\n\t});\n});\n\nfunction autoRescaleComponent(component) {\n\tcomponent.width = document.documentElement.clientWidth;\n\tcomponent.height = document.documentElement.clientHeight;\n\tcomponentsToRescale.push(component);\n}\n\n\n//# sourceURL=webpack://teodorus-nathaniel.github.io/./src/utility-modules/window-resize-controller.js?");

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