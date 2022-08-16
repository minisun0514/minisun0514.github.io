/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
      /*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\n  background: linear-gradient(\\n    90deg,\\n    rgba(206, 72, 56, 0.15) 0%,\\n    rgba(242, 193, 71, 0.15) 100%\\n  );\\n  color: rgb(75, 85, 99, 0.8);\\n}\\n#app {\\n  text-align: center;\\n}\\n\\nsection {\\n  margin-bottom: 40px;\\n}\\n\\np {\\n  margin: 5px 0;\\n}\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://encyclopedia-joanna/./src/index.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
      \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./node_modules/js-confetti/dist/es/index.js":
      /*!***************************************************!*\
      !*** ./node_modules/js-confetti/dist/es/index.js ***!
      \***************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction normalizeComputedStyleValue(string) {\n  // \"250px\" --> 250\n  return +string.replace(/px/, '');\n}\n\nfunction fixDPR(canvas) {\n  var dpr = window.devicePixelRatio;\n  var computedStyles = getComputedStyle(canvas);\n  var width = normalizeComputedStyleValue(computedStyles.getPropertyValue('width'));\n  var height = normalizeComputedStyleValue(computedStyles.getPropertyValue('height'));\n  canvas.setAttribute('width', (width * dpr).toString());\n  canvas.setAttribute('height', (height * dpr).toString());\n}\n\nfunction generateRandomNumber(min, max) {\n  var fractionDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var randomNumber = Math.random() * (max - min) + min;\n  return Math.floor(randomNumber * Math.pow(10, fractionDigits)) / Math.pow(10, fractionDigits);\n}\n\nfunction generateRandomArrayElement(arr) {\n  return arr[generateRandomNumber(0, arr.length)];\n}\n\nvar FREE_FALLING_OBJECT_ACCELERATION = 0.00125;\nvar MIN_DRAG_FORCE_COEFFICIENT = 0.0005;\nvar MAX_DRAG_FORCE_COEFFICIENT = 0.0009;\nvar ROTATION_SLOWDOWN_ACCELERATION = 0.00001;\nvar INITIAL_SHAPE_RADIUS = 6;\nvar INITIAL_EMOJI_SIZE = 80;\nvar MIN_INITIAL_CONFETTI_SPEED = 0.9;\nvar MAX_INITIAL_CONFETTI_SPEED = 1.7;\nvar MIN_FINAL_X_CONFETTI_SPEED = 0.2;\nvar MAX_FINAL_X_CONFETTI_SPEED = 0.6;\nvar MIN_INITIAL_ROTATION_SPEED = 0.03;\nvar MAX_INITIAL_ROTATION_SPEED = 0.07;\nvar MIN_CONFETTI_ANGLE = 15;\nvar MAX_CONFETTI_ANGLE = 82;\nvar MAX_CONFETTI_POSITION_SHIFT = 150;\nvar SHAPE_VISIBILITY_TRESHOLD = 100;\nvar DEFAULT_CONFETTI_NUMBER = 250;\nvar DEFAULT_EMOJIS_NUMBER = 40;\nvar DEFAULT_CONFETTI_COLORS = ['#fcf403', '#62fc03', '#f4fc03', '#03e7fc', '#03fca5', '#a503fc', '#fc03ad', '#fc03c2'];\n\nfunction getWindowWidthCoefficient(canvasWidth) {\n  var HD_SCREEN_WIDTH = 1920;\n  return Math.log(canvasWidth) / Math.log(HD_SCREEN_WIDTH);\n}\n\nvar ConfettiShape = /*#__PURE__*/function () {\n  function ConfettiShape(args) {\n    _classCallCheck(this, ConfettiShape);\n\n    var initialPosition = args.initialPosition,\n        direction = args.direction,\n        confettiRadius = args.confettiRadius,\n        confettiColors = args.confettiColors,\n        emojis = args.emojis,\n        emojiSize = args.emojiSize,\n        canvasWidth = args.canvasWidth;\n    var randomConfettiSpeed = generateRandomNumber(MIN_INITIAL_CONFETTI_SPEED, MAX_INITIAL_CONFETTI_SPEED, 3);\n    var initialSpeed = randomConfettiSpeed * getWindowWidthCoefficient(canvasWidth);\n    this.confettiSpeed = {\n      x: initialSpeed,\n      y: initialSpeed\n    };\n    this.finalConfettiSpeedX = generateRandomNumber(MIN_FINAL_X_CONFETTI_SPEED, MAX_FINAL_X_CONFETTI_SPEED, 3);\n    this.rotationSpeed = emojis.length ? 0.01 : generateRandomNumber(MIN_INITIAL_ROTATION_SPEED, MAX_INITIAL_ROTATION_SPEED, 3) * getWindowWidthCoefficient(canvasWidth);\n    this.dragForceCoefficient = generateRandomNumber(MIN_DRAG_FORCE_COEFFICIENT, MAX_DRAG_FORCE_COEFFICIENT, 6);\n    this.radius = {\n      x: confettiRadius,\n      y: confettiRadius\n    };\n    this.initialRadius = confettiRadius;\n    this.rotationAngle = direction === 'left' ? generateRandomNumber(0, 0.2, 3) : generateRandomNumber(-0.2, 0, 3);\n    this.emojiSize = emojiSize;\n    this.emojiRotationAngle = generateRandomNumber(0, 2 * Math.PI);\n    this.radiusYUpdateDirection = 'down';\n    var angle = direction === 'left' ? generateRandomNumber(MAX_CONFETTI_ANGLE, MIN_CONFETTI_ANGLE) * Math.PI / 180 : generateRandomNumber(-MIN_CONFETTI_ANGLE, -MAX_CONFETTI_ANGLE) * Math.PI / 180;\n    this.absCos = Math.abs(Math.cos(angle));\n    this.absSin = Math.abs(Math.sin(angle));\n    var positionShift = generateRandomNumber(-MAX_CONFETTI_POSITION_SHIFT, 0);\n    var shiftedInitialPosition = {\n      x: initialPosition.x + (direction === 'left' ? -positionShift : positionShift) * this.absCos,\n      y: initialPosition.y - positionShift * this.absSin\n    };\n    this.currentPosition = Object.assign({}, shiftedInitialPosition);\n    this.initialPosition = Object.assign({}, shiftedInitialPosition);\n    this.color = emojis.length ? null : generateRandomArrayElement(confettiColors);\n    this.emoji = emojis.length ? generateRandomArrayElement(emojis) : null;\n    this.createdAt = new Date().getTime();\n    this.direction = direction;\n  }\n\n  _createClass(ConfettiShape, [{\n    key: \"draw\",\n    value: function draw(canvasContext) {\n      var currentPosition = this.currentPosition,\n          radius = this.radius,\n          color = this.color,\n          emoji = this.emoji,\n          rotationAngle = this.rotationAngle,\n          emojiRotationAngle = this.emojiRotationAngle,\n          emojiSize = this.emojiSize;\n      var dpr = window.devicePixelRatio;\n\n      if (color) {\n        canvasContext.fillStyle = color;\n        canvasContext.beginPath();\n        canvasContext.ellipse(currentPosition.x * dpr, currentPosition.y * dpr, radius.x * dpr, radius.y * dpr, rotationAngle, 0, 2 * Math.PI);\n        canvasContext.fill();\n      } else if (emoji) {\n        canvasContext.font = \"\".concat(emojiSize, \"px serif\");\n        canvasContext.save();\n        canvasContext.translate(dpr * currentPosition.x, dpr * currentPosition.y);\n        canvasContext.rotate(emojiRotationAngle);\n        canvasContext.textAlign = 'center';\n        canvasContext.fillText(emoji, 0, 0);\n        canvasContext.restore();\n      }\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(iterationTimeDelta, currentTime) {\n      var confettiSpeed = this.confettiSpeed,\n          dragForceCoefficient = this.dragForceCoefficient,\n          finalConfettiSpeedX = this.finalConfettiSpeedX,\n          radiusYUpdateDirection = this.radiusYUpdateDirection,\n          rotationSpeed = this.rotationSpeed,\n          createdAt = this.createdAt,\n          direction = this.direction;\n      var timeDeltaSinceCreation = currentTime - createdAt;\n      if (confettiSpeed.x > finalConfettiSpeedX) this.confettiSpeed.x -= dragForceCoefficient * iterationTimeDelta;\n      this.currentPosition.x += confettiSpeed.x * (direction === 'left' ? -this.absCos : this.absCos) * iterationTimeDelta;\n      this.currentPosition.y = this.initialPosition.y - confettiSpeed.y * this.absSin * timeDeltaSinceCreation + FREE_FALLING_OBJECT_ACCELERATION * Math.pow(timeDeltaSinceCreation, 2) / 2;\n      this.rotationSpeed -= this.emoji ? 0.0001 : ROTATION_SLOWDOWN_ACCELERATION * iterationTimeDelta;\n      if (this.rotationSpeed < 0) this.rotationSpeed = 0; // no need to update rotation radius for emoji\n\n      if (this.emoji) {\n        this.emojiRotationAngle += this.rotationSpeed * iterationTimeDelta % (2 * Math.PI);\n        return;\n      }\n\n      if (radiusYUpdateDirection === 'down') {\n        this.radius.y -= iterationTimeDelta * rotationSpeed;\n\n        if (this.radius.y <= 0) {\n          this.radius.y = 0;\n          this.radiusYUpdateDirection = 'up';\n        }\n      } else {\n        this.radius.y += iterationTimeDelta * rotationSpeed;\n\n        if (this.radius.y >= this.initialRadius) {\n          this.radius.y = this.initialRadius;\n          this.radiusYUpdateDirection = 'down';\n        }\n      }\n    }\n  }, {\n    key: \"getIsVisibleOnCanvas\",\n    value: function getIsVisibleOnCanvas(canvasHeight) {\n      return this.currentPosition.y < canvasHeight + SHAPE_VISIBILITY_TRESHOLD;\n    }\n  }]);\n\n  return ConfettiShape;\n}();\n\nfunction createCanvas() {\n  var canvas = document.createElement('canvas');\n  canvas.style.position = 'fixed';\n  canvas.style.width = '100%';\n  canvas.style.height = '100%';\n  canvas.style.top = '0';\n  canvas.style.left = '0';\n  canvas.style.zIndex = '1000';\n  canvas.style.pointerEvents = 'none';\n  document.body.appendChild(canvas);\n  return canvas;\n}\n\nfunction normalizeConfettiConfig(confettiConfig) {\n  var _confettiConfig$confe = confettiConfig.confettiRadius,\n      confettiRadius = _confettiConfig$confe === void 0 ? INITIAL_SHAPE_RADIUS : _confettiConfig$confe,\n      _confettiConfig$confe2 = confettiConfig.confettiNumber,\n      confettiNumber = _confettiConfig$confe2 === void 0 ? confettiConfig.confettiesNumber || (confettiConfig.emojis ? DEFAULT_EMOJIS_NUMBER : DEFAULT_CONFETTI_NUMBER) : _confettiConfig$confe2,\n      _confettiConfig$confe3 = confettiConfig.confettiColors,\n      confettiColors = _confettiConfig$confe3 === void 0 ? DEFAULT_CONFETTI_COLORS : _confettiConfig$confe3,\n      _confettiConfig$emoji = confettiConfig.emojis,\n      emojis = _confettiConfig$emoji === void 0 ? confettiConfig.emojies || [] : _confettiConfig$emoji,\n      _confettiConfig$emoji2 = confettiConfig.emojiSize,\n      emojiSize = _confettiConfig$emoji2 === void 0 ? INITIAL_EMOJI_SIZE : _confettiConfig$emoji2; // deprecate wrong plural forms, used in early releases\n\n  if (confettiConfig.emojies) console.error(\"emojies argument is deprecated, please use emojis instead\");\n  if (confettiConfig.confettiesNumber) console.error(\"confettiesNumber argument is deprecated, please use confettiNumber instead\");\n  return {\n    confettiRadius: confettiRadius,\n    confettiNumber: confettiNumber,\n    confettiColors: confettiColors,\n    emojis: emojis,\n    emojiSize: emojiSize\n  };\n}\n\nvar ConfettiBatch = /*#__PURE__*/function () {\n  function ConfettiBatch(canvasContext) {\n    var _this = this;\n\n    _classCallCheck(this, ConfettiBatch);\n\n    this.canvasContext = canvasContext;\n    this.shapes = [];\n    this.promise = new Promise(function (completionCallback) {\n      return _this.resolvePromise = completionCallback;\n    });\n  }\n\n  _createClass(ConfettiBatch, [{\n    key: \"getBatchCompletePromise\",\n    value: function getBatchCompletePromise() {\n      return this.promise;\n    }\n  }, {\n    key: \"addShapes\",\n    value: function addShapes() {\n      var _this$shapes;\n\n      (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);\n    }\n  }, {\n    key: \"complete\",\n    value: function complete() {\n      var _a;\n\n      if (this.shapes.length) {\n        return false;\n      }\n\n      (_a = this.resolvePromise) === null || _a === void 0 ? void 0 : _a.call(this);\n      return true;\n    }\n  }, {\n    key: \"processShapes\",\n    value: function processShapes(time, canvasHeight, cleanupInvisibleShapes) {\n      var _this2 = this;\n\n      var timeDelta = time.timeDelta,\n          currentTime = time.currentTime;\n      this.shapes = this.shapes.filter(function (shape) {\n        // Render the shapes in this batch\n        shape.updatePosition(timeDelta, currentTime);\n        shape.draw(_this2.canvasContext); // Only cleanup the shapes if we're being asked to\n\n        if (!cleanupInvisibleShapes) {\n          return true;\n        }\n\n        return shape.getIsVisibleOnCanvas(canvasHeight);\n      });\n    }\n  }]);\n\n  return ConfettiBatch;\n}();\n\nvar JSConfetti = /*#__PURE__*/function () {\n  function JSConfetti() {\n    var jsConfettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, JSConfetti);\n\n    this.activeConfettiBatches = [];\n    this.canvas = jsConfettiConfig.canvas || createCanvas();\n    this.canvasContext = this.canvas.getContext('2d');\n    this.requestAnimationFrameRequested = false;\n    this.lastUpdated = new Date().getTime();\n    this.iterationIndex = 0;\n    this.loop = this.loop.bind(this);\n    requestAnimationFrame(this.loop);\n  }\n\n  _createClass(JSConfetti, [{\n    key: \"loop\",\n    value: function loop() {\n      this.requestAnimationFrameRequested = false;\n      fixDPR(this.canvas);\n      var currentTime = new Date().getTime();\n      var timeDelta = currentTime - this.lastUpdated;\n      var canvasHeight = this.canvas.offsetHeight;\n      var cleanupInvisibleShapes = this.iterationIndex % 10 === 0;\n      this.activeConfettiBatches = this.activeConfettiBatches.filter(function (batch) {\n        batch.processShapes({\n          timeDelta: timeDelta,\n          currentTime: currentTime\n        }, canvasHeight, cleanupInvisibleShapes); // Do not remove invisible shapes on every iteration\n\n        if (!cleanupInvisibleShapes) {\n          return true;\n        }\n\n        return !batch.complete();\n      });\n      this.iterationIndex++;\n      this.queueAnimationFrameIfNeeded(currentTime);\n    }\n  }, {\n    key: \"queueAnimationFrameIfNeeded\",\n    value: function queueAnimationFrameIfNeeded(currentTime) {\n      if (this.requestAnimationFrameRequested) {\n        // We already have a pended animation frame, so there is no more work\n        return;\n      }\n\n      if (this.activeConfettiBatches.length < 1) {\n        // No shapes to animate, so don't queue another frame\n        return;\n      }\n\n      this.requestAnimationFrameRequested = true; // Capture the last updated time for animation\n\n      this.lastUpdated = currentTime || new Date().getTime();\n      requestAnimationFrame(this.loop);\n    }\n  }, {\n    key: \"addConfetti\",\n    value: function addConfetti() {\n      var confettiConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      var _normalizeConfettiCon = normalizeConfettiConfig(confettiConfig),\n          confettiRadius = _normalizeConfettiCon.confettiRadius,\n          confettiNumber = _normalizeConfettiCon.confettiNumber,\n          confettiColors = _normalizeConfettiCon.confettiColors,\n          emojis = _normalizeConfettiCon.emojis,\n          emojiSize = _normalizeConfettiCon.emojiSize; // Use the bounding rect rather tahn the canvas width / height, because\n      // .width / .height are unset until a layout pass has been completed. Upon\n      // confetti being immediately queued on a page load, this hasn't happened so\n      // the default of 300x150 will be returned, causing an improper source point\n      // for the confetti animation.\n\n\n      var canvasRect = this.canvas.getBoundingClientRect();\n      var canvasWidth = canvasRect.width;\n      var canvasHeight = canvasRect.height;\n      var yPosition = canvasHeight * 5 / 7;\n      var leftConfettiPosition = {\n        x: 0,\n        y: yPosition\n      };\n      var rightConfettiPosition = {\n        x: canvasWidth,\n        y: yPosition\n      };\n      var confettiGroup = new ConfettiBatch(this.canvasContext);\n\n      for (var i = 0; i < confettiNumber / 2; i++) {\n        var confettiOnTheRight = new ConfettiShape({\n          initialPosition: leftConfettiPosition,\n          direction: 'right',\n          confettiRadius: confettiRadius,\n          confettiColors: confettiColors,\n          confettiNumber: confettiNumber,\n          emojis: emojis,\n          emojiSize: emojiSize,\n          canvasWidth: canvasWidth\n        });\n        var confettiOnTheLeft = new ConfettiShape({\n          initialPosition: rightConfettiPosition,\n          direction: 'left',\n          confettiRadius: confettiRadius,\n          confettiColors: confettiColors,\n          confettiNumber: confettiNumber,\n          emojis: emojis,\n          emojiSize: emojiSize,\n          canvasWidth: canvasWidth\n        });\n        confettiGroup.addShapes(confettiOnTheRight, confettiOnTheLeft);\n      }\n\n      this.activeConfettiBatches.push(confettiGroup);\n      this.queueAnimationFrameIfNeeded();\n      return confettiGroup.getBatchCompletePromise();\n    }\n  }]);\n\n  return JSConfetti;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSConfetti);\n\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/js-confetti/dist/es/index.js?"
        );

        /***/
      },

    /***/ "./src/index.css":
      /*!***********************!*\
      !*** ./src/index.css ***!
      \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://encyclopedia-joanna/./src/index.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
      \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
      \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
      \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
      \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
      \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://encyclopedia-joanna/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");\n/* harmony import */ var js_confetti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-confetti */ "./node_modules/js-confetti/dist/es/index.js");\n\n\n\nconst jsConfetti = new js_confetti__WEBPACK_IMPORTED_MODULE_1__["default"]();\n\nconst app = document.getElementById("app");\nlet newDiv = document.createElement("h1");\nlet newContent = document.createTextNode(\n  "Do Not Go Gentle Into That Good Night"\n);\nnewDiv.appendChild(newContent);\nconst section = document.getElementById("para1");\napp.insertBefore(newDiv, section);\n\ndocument.body.addEventListener("click", () => {\n  jsConfetti.addConfetti();\n});\n\n\n//# sourceURL=webpack://encyclopedia-joanna/./src/index.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
