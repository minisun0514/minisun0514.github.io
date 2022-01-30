"use strict";
(self["webpackChunklifetime"] = self["webpackChunklifetime"] || []).push([["app"],{

/***/ "./src/Pages/index.jsx":
/*!*****************************!*\
  !*** ./src/Pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var routes = [{
  to: '/',
  content: 'Home'
}, {
  to: '/about',
  content: 'About'
}, {
  to: '/users',
  content: 'Users'
}];
var lis = routes.map(function (item, index) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("li", {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: item.to
  }, item.content));
});

var Home = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _PureComponent);

  var _super = _createSuper(Home);

  function Home() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h2", null, "Home");
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

var About = /*#__PURE__*/function (_PureComponent2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _PureComponent2);

  var _super2 = _createSuper(About);

  function About() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, About);

    return _super2.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(About, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h2", null, "About");
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

var Users = /*#__PURE__*/function (_PureComponent3) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Users, _PureComponent3);

  var _super3 = _createSuper(Users);

  function Users() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Users);

    return _super3.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Users, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("h2", null, "Users");
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_8__.PureComponent);

var App = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  var _super4 = _createSuper(App);

  function App() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, App);

    return _super4.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement("ul", null, lis)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/about",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(About, null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/users",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(Users, null)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/",
        element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8__.createElement(Home, null)
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__.Component);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BLElBQU1PLE1BQU0sR0FBRyxDQUNYO0FBQ0lDLEVBQUFBLEVBQUUsRUFBRSxHQURSO0FBRUlDLEVBQUFBLE9BQU8sRUFBRTtBQUZiLENBRFcsRUFLWDtBQUNJRCxFQUFBQSxFQUFFLEVBQUUsUUFEUjtBQUVJQyxFQUFBQSxPQUFPLEVBQUU7QUFGYixDQUxXLEVBU1g7QUFDSUQsRUFBQUEsRUFBRSxFQUFFLFFBRFI7QUFFSUMsRUFBQUEsT0FBTyxFQUFFO0FBRmIsQ0FUVyxDQUFmO0FBZUEsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDcEMsc0JBQ0k7QUFBSSxPQUFHLEVBQUVBO0FBQVQsa0JBQ0ksaURBQUMsa0RBQUQ7QUFBTSxNQUFFLEVBQUVELElBQUksQ0FBQ0o7QUFBZixLQUNLSSxJQUFJLENBQUNILE9BRFYsQ0FESixDQURKO0FBT0gsQ0FSVyxDQUFaOztJQVVNSzs7Ozs7Ozs7Ozs7OztXQUNGLGtCQUFTO0FBQ0wsMEJBQU8sb0VBQVA7QUFDSDs7OztFQUhjYjs7SUFNYmM7Ozs7Ozs7Ozs7Ozs7V0FDRixrQkFBUztBQUNMLDBCQUFPLHFFQUFQO0FBQ0g7Ozs7RUFIZWQ7O0lBTWRlOzs7Ozs7Ozs7Ozs7O1dBQ0Ysa0JBQVM7QUFDTCwwQkFBTyxxRUFBUDtBQUNIOzs7O0VBSGVmOztJQU1DZ0I7Ozs7Ozs7Ozs7Ozs7V0FDakIsa0JBQVM7QUFDTCwwQkFDSSxpREFBQywyREFBRCxxQkFDSSwyRUFDSSwyRUFDSSw2REFDS1AsR0FETCxDQURKLENBREosZUFPSSxpREFBQyxxREFBRCxxQkFDSSxpREFBQyxvREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGVBQU8sZUFBRSxpREFBQyxLQUFEO0FBQTlCLFFBREosZUFFSSxpREFBQyxvREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGVBQU8sZUFBRSxpREFBQyxLQUFEO0FBQTlCLFFBRkosZUFHSSxpREFBQyxvREFBRDtBQUFPLFlBQUksRUFBQyxHQUFaO0FBQWdCLGVBQU8sZUFBRSxpREFBQyxJQUFEO0FBQXpCLFFBSEosQ0FQSixDQURKLENBREo7QUFpQkg7Ozs7RUFuQjRCViIsInNvdXJjZXMiOlsid2VicGFjazovL2xpZmV0aW1lLy4vc3JjL1BhZ2VzL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsXG4gICAgUm91dGVzLFxuICAgIFJvdXRlLFxuICAgIExpbmtcbn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3Qgcm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgdG86ICcvJyxcbiAgICAgICAgY29udGVudDogJ0hvbWUnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRvOiAnL2Fib3V0JyxcbiAgICAgICAgY29udGVudDogJ0Fib3V0J1xuICAgIH0sXG4gICAge1xuICAgICAgICB0bzogJy91c2VycycsXG4gICAgICAgIGNvbnRlbnQ6ICdVc2VycydcbiAgICB9XG5dXG5cbmNvbnN0IGxpcyA9IHJvdXRlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPExpbmsgdG89e2l0ZW0udG99PlxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnR9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufSlcblxuY2xhc3MgSG9tZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxoMj5Ib21lPC9oMj47XG4gICAgfVxufVxuXG5jbGFzcyBBYm91dCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxoMj5BYm91dDwvaDI+O1xuICAgIH1cbn1cblxuY2xhc3MgVXNlcnMgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8aDI+VXNlcnM8L2gyPjtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgICAgICA8Um91dGVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXQgLz59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi91c2Vyc1wiIGVsZW1lbnQ9ezxVc2VycyAvPn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJMaW5rIiwicm91dGVzIiwidG8iLCJjb250ZW50IiwibGlzIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSG9tZSIsIkFib3V0IiwiVXNlcnMiLCJBcHAiLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9