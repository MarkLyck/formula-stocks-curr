module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/constants.js":
/*!*****************************!*\
  !*** ./common/constants.js ***!
  \*****************************/
/*! exports provided: planIds, marketIds, statisticsId, geoAccessKey, graphCoolEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "planIds", function() { return planIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "marketIds", function() { return marketIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticsId", function() { return statisticsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geoAccessKey", function() { return geoAccessKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphCoolEndpoint", function() { return graphCoolEndpoint; });
var planIds = {
  ENTRY: "cj5p4ssvu2b3d0187t68k526j",
  PREMIUM: "cj5wy9kgl29nq0108o0snly89",
  BUSINESS: "cj5wyqss42f4v0108a90zs0k2",
  FUND: "cj5wyr04d2f950108jvqy8xf0"
};
var marketIds = {
  SP500: "cj60pwi9v6rh201942t6fq6h7",
  DJIA: "cj6ezmj8711fk0137hkj0rcy0"
};
var statisticsId = "cj85zcxpn06bj0185bwegkd82";
var geoAccessKey = "fd6a920ff332b6059c50f08a0481751f";
var graphCoolEndpoint = "https://api.graph.cool/simple/v1/cj5p24f2bblwp0122hin6ek1u";

/***/ }),

/***/ "./common/utils/featureTests.js":
/*!**************************************!*\
  !*** ./common/utils/featureTests.js ***!
  \**************************************/
/*! exports provided: hasStorage, usingMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasStorage", function() { return hasStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usingMocks", function() { return usingMocks; });
var hasStorage = function () {
  try {
    localStorage.setItem('mod', 'mod');
    localStorage.removeItem('mod');
    return true;
  } catch (exception) {
    return false;
  }
}();
var usingMocks = function () {
  return hasStorage && !!window.sessionStorage.getItem('useMocks');
}();

/***/ }),

/***/ "./common/utils/helpers.js":
/*!*********************************!*\
  !*** ./common/utils/helpers.js ***!
  \*********************************/
/*! exports provided: formatPrice, adjustBrightness, getDeviceType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return formatPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustBrightness", function() { return adjustBrightness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceType", function() { return getDeviceType; });
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! platform */ "platform");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_0__);

var formatPrice = function formatPrice(value) {
  var plusMinus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var percent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  value = String(value);

  while (/(\d+)(\d{3})/.test(value.toString())) {
    //eslint-disable-next-line
    value = value.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
  }

  var price = value;

  if (percent) {
    price = "".concat(price, "%");
  }

  if (plusMinus && Number(value.replace(',', '')) > 0) {
    price = "+".concat(price);
  }

  if (unit) {
    price = "".concat(unit).concat(price);
  }

  return price;
};
var adjustBrightness = function adjustBrightness(col, amt) {
  var usePound = true;

  if (col[0] === '#') {
    col = col.slice(1);
  }

  var R = parseInt(col.substring(0, 2), 16);
  var G = parseInt(col.substring(2, 4), 16);
  var B = parseInt(col.substring(4, 6), 16);
  R += amt;
  G += amt;
  B += amt;
  if (R > 255) R = 255;else if (R < 0) R = 0;
  if (G > 255) G = 255;else if (G < 0) G = 0;
  if (B > 255) B = 255;else if (B < 0) B = 0;
  var RR = R.toString(16).length === 1 ? "0".concat(R.toString(16)) : R.toString(16);
  var GG = G.toString(16).length === 1 ? "0".concat(G.toString(16)) : G.toString(16);
  var BB = B.toString(16).length === 1 ? "0".concat(B.toString(16)) : B.toString(16);
  return (usePound ? '#' : '') + RR + GG + BB;
};
var getDeviceType = function getDeviceType() {
  if (platform__WEBPACK_IMPORTED_MODULE_0___default.a.product === 'iPad') return 'tablet';
  var isMobile = false;
  /* eslint-disable */

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
    /* eslint-enable */
    isMobile = true;
  return isMobile ? 'mobile' : 'desktop';
};

/***/ }),

/***/ "./common/utils/mq.js":
/*!****************************!*\
  !*** ./common/utils/mq.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_0__);

var breakpoints = {
  // Numerical values will result in a min-width query
  small: 'max-width: 576px',
  medium: 'max-width: 768px',
  large: 'max-width: 992px',
  xLarge: 'max-width: 1200px',
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)'
};
var mq = Object.keys(breakpoints).reduce(function (accumulator, label) {
  var prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:';
  var suffix = typeof breakpoints[label] === 'string' ? '' : 'px';

  accumulator[label] = function (cls) {
    return (
      /*#__PURE__*/
      Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("@media (", prefix + breakpoints[label] + suffix, "){", cls, ";}")
    );
  };

  return accumulator;
}, {});
/* harmony default export */ __webpack_exports__["default"] = (mq);

/***/ }),

/***/ "./common/utils/newVisitor.js":
/*!************************************!*\
  !*** ./common/utils/newVisitor.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! platform */ "platform");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fetch_jsonp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fetch-jsonp */ "fetch-jsonp");
/* harmony import */ var fetch_jsonp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fetch_jsonp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./common/utils/helpers.js");
/* harmony import */ var _featureTests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./featureTests */ "./common/utils/featureTests.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./common/constants.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation createVisitor($device: Json!, $location: Json!, $referrer: String!) {\n    createVisitor(device: $device, location: $location, referrer: $referrer) {\n      id\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var CREATE_VISITOR = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

var createNewVisit =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(geoApiResponse, apolloClient) {
    var city, zip, country_code, country_name, latitude, longitude, ip, location, country_flag_emoji, response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            city = geoApiResponse.city, zip = geoApiResponse.zip, country_code = geoApiResponse.country_code, country_name = geoApiResponse.country_name, latitude = geoApiResponse.latitude, longitude = geoApiResponse.longitude, ip = geoApiResponse.ip, location = geoApiResponse.location;
            country_flag_emoji = location ? location.country_flag_emoji : undefined;
            _context.next = 4;
            return apolloClient.mutate({
              mutation: CREATE_VISITOR,
              variables: {
                referrer: document.referrer,
                device: {
                  os: platform__WEBPACK_IMPORTED_MODULE_2___default.a.os.family,
                  product: platform__WEBPACK_IMPORTED_MODULE_2___default.a.product,
                  browser: platform__WEBPACK_IMPORTED_MODULE_2___default.a.name,
                  type: Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getDeviceType"])()
                },
                location: {
                  city: city,
                  zip: zip,
                  country_code: country_code,
                  country_name: country_name,
                  country_flag_emoji: country_flag_emoji,
                  latitude: latitude,
                  longitude: longitude,
                  ip: ip
                }
              }
            }).catch(function (err) {
              return console.error(err);
            });

          case 4:
            response = _context.sent;

            if (_featureTests__WEBPACK_IMPORTED_MODULE_5__["hasStorage"] && response.data) {
              localStorage.setItem("visitorID", response.data.createVisitor.id);
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function createNewVisit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var newVisitor = function newVisitor(apolloClient) {
  if (_featureTests__WEBPACK_IMPORTED_MODULE_5__["hasStorage"] && localStorage.getItem("visitorID")) return null;
  return fetch_jsonp__WEBPACK_IMPORTED_MODULE_3___default()("https://api.ipapi.com/check?access_key=".concat(_constants__WEBPACK_IMPORTED_MODULE_6__["geoAccessKey"])).then(function (response) {
    return response.json();
  }).then(function (geoData) {
    return createNewVisit(geoData, apolloClient);
  }).catch(function (err) {
    console.error(err);
    createNewVisit({}, apolloClient);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (newVisitor);

/***/ }),

/***/ "./components/Retail/01_Hero/index.js":
/*!********************************************!*\
  !*** ./components/Retail/01_Hero/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Retail/01_Hero/styles.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/mlyck/web/fs-next/components/Retail/01_Hero/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Hero);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Hero)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "preStringTyped", function (arrPos) {
      return _this.slider.slickGoTo(arrPos);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "slickSettings", {
      focusOnSelect: false,
      infinite: true,
      fade: true,
      speed: 1500,
      autoplay: false,
      swipe: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    return _this;
  }

  _createClass(Hero, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          portfolioReturn = _this$props.portfolioReturn,
          winRatio = _this$props.winRatio;
      var strings = ["^1+".concat(Math.floor(portfolioReturn), "% capital growth since 2009"), "^1+".concat(Math.floor(winRatio), "% win ratio"), "^1Less risk", "^1Easy to use", "^1Lower costs", "^1Achieve your goals"];
      var options = {
        strings: strings,
        typeSpeed: 35,
        backSpeed: 25,
        backDelay: 5000,
        loop: true,
        preStringTyped: this.preStringTyped
      };
      this.typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.el, options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.typed.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["HeroContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Element"], {
        name: "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Content"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
        type: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "A ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Bold"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "better"), " way to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Bold"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "invest")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "subtitles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "type-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        ref: function ref(el) {
          return _this2.el = el;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Overlay"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
        ref: function ref(slider) {
          return _this2.slider = slider;
        }
      }, this.slickSettings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/speedster/speedster.jpg);background-image:image-set( url(/static/images/slides/speedster/speedster.jpg) 1x,url(/static/images/slides/speedster/speedster@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/target/target.jpg);background-image:image-set( url(/static/images/slides/target/target.jpg) 1x,url(/static/images/slides/target/target@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/net/net.jpg);background-image:image-set( url(/static/images/slides/net/net.jpg) 1x,url(/static/images/slides/net/net@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/boat/boat.jpg);background-image:image-set( url(/static/images/slides/boat/boat.jpg) 1x,url(/static/images/slides/boat/boat@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/family/family.jpg);background-image:image-set( url(/static/images/slides/family/family.jpg) 1x,url(/static/images/slides/family/family@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["SliderImage"], {
        className:
        /*#__PURE__*/

        /*#__PURE__*/
        Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])("background-image:url(/static/images/slides/achieveGoals/achieveGoals.jpg);background-image:image-set( url(/static/images/slides/achieveGoals/achieveGoals.jpg) 1x,url(/static/images/slides/achieveGoals/achieveGoals@2x.jpg) 2x );"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })));
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Hero.defaultProps = {
  winRatio: 90,
  portfolioReturn: 700
};
Hero.propTypes = {
  portfolioReturn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  winRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./components/Retail/01_Hero/styles.js":
/*!*********************************************!*\
  !*** ./components/Retail/01_Hero/styles.js ***!
  \*********************************************/
/*! exports provided: Title, HeroContainer, Bold, Overlay, Content, SliderImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContainer", function() { return HeroContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bold", function() { return Bold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderImage", function() { return SliderImage; });
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);

 // This returns a animation

var typedjsBlink =
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["keyframes"])("0%{opacity:1;}50%{opacity:0.0;}100%{opacity:1;}");
var Title =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("h1", {
  target: "emmyyl0"
})("margin-bottom:16px;");

var slickStyles = function slickStyles() {
  return (
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(".slick-slide{height:650px;max-height:650px;}@media (max-width:800px){.slick-slide{height:400px;max-height:400px;}}")
  );
};

var HeroContainer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "emmyyl1"
})("margin-top:64px;position:relative;", slickStyles, ";");
var Bold =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("span", {
  target: "emmyyl2"
})("font-weight:bold;");
/* eslint-disable */

var Overlay =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "emmyyl3"
})("position:absolute;height:100%;width:100%;z-index:4;background:-moz-linear-gradient(top,rgba(0,4,56,0.2) 30%,rgba(125,185,232,0) 100%);background:-webkit-linear-gradient( top,rgba(0,4,56,0.2) 30%,rgba(125,185,232,0) 100% );background:linear-gradient( to bottom,rgba(0,4,56,0.2) 30%,rgba(125,185,232,0) 100% );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000438',endColorstr='#007db9e8',GradientType=0 );");
/* eslint-enable */

var Content =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "emmyyl4"
})("position:absolute;top:100px;z-index:5;margin:0 32px;.text-content{color:#fff;margin:0 32px;}.type-wrap{font-weight:700;font-size:2.5em;text-shadow:0 2px 2px rgba(0,0,0,0.3);display:flex;align-items:flex-end;p{line-height:1;}}h1{font-size:2em;font-weight:100;text-shadow:0 2px 2px rgba(0,0,0,0.3);}.typed-cursor{opacity:1;animation:", typedjsBlink, " 0.7s infinite;-webkit-animation:", typedjsBlink, " 0.7s infinite;animation:", typedjsBlink, " 0.7s infinite;}.bold{font-weight:bold;}@media (max-width:742px){h1{font-size:1.8rem;}.type-wrap{font-size:1.5rem;}}@media (max-width:506px){margin:0;h1{font-size:1.4rem;}.type-wrap{font-size:1.4rem;}.typed-cursor{display:none;}}");
var SliderImage =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "emmyyl5"
})("position:absolute;top:0;height:650px;max-height:650px;background-repeat:no-repeat;background-position:center center;background-size:cover;width:100%;@media (max-width:800px){height:400px;max-height:400px;}");

/***/ }),

/***/ "./components/Retail/02_Introduction/index.jsx":
/*!*****************************************************!*\
  !*** ./components/Retail/02_Introduction/index.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_mq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/utils/mq */ "./common/utils/mq.js");
/* harmony import */ var _ui_components_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui-components/Section */ "./ui-components/Section/index.js");
/* harmony import */ var _ui_components_Section_SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui-components/Section/SectionTitle */ "./ui-components/Section/SectionTitle/index.js");
/* harmony import */ var _ui_components_Section_Beside__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui-components/Section/Beside */ "./ui-components/Section/Beside/index.js");
/* harmony import */ var _ui_components_Legal_Disclaimer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui-components/Legal/Disclaimer */ "./ui-components/Legal/Disclaimer/index.js");
/* harmony import */ var _ui_components_Charts_DualBarChart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui-components/Charts/DualBarChart */ "./ui-components/Charts/DualBarChart/index.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/components/Retail/02_Introduction/index.jsx";










var SectionContainer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_3___default()('div', {
  target: "e1aeyff70"
})(_ui_components_Section__WEBPACK_IMPORTED_MODULE_5__["Section"], "{", _common_utils_mq__WEBPACK_IMPORTED_MODULE_4__["default"].small(
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(".chart-container{display:none;}.text-container{margin-right:0;}")), ";}");

var Introduction = function Introduction(_ref) {
  var winRatio = _ref.winRatio,
      portfolioReturn = _ref.portfolioReturn,
      portfolioYields = _ref.portfolioYields,
      planName = _ref.planName;
  var returns2016, returns2017;

  if (portfolioYields && portfolioYields.length) {
    var janBalance2016, decBalance2016, janBalance2017, decBalance2017;
    portfolioYields.forEach(function (point) {
      if (point.date.year === '2016') {
        if (point.date.month === '1') {
          janBalance2016 = point.balance;
        } else if (point.date.month === '12') {
          decBalance2016 = point.balance;
        }
      } else if (point.date.year === '2017') {
        if (point.date.month === '1') {
          janBalance2017 = point.balance;
        } else if (point.date.month === '12') {
          decBalance2017 = point.balance;
        }
      }
    });
    returns2016 = (decBalance2016 - janBalance2016) / janBalance2016 * 100;
    returns2017 = (decBalance2017 - janBalance2017) / janBalance2017 * 100;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_Section_SectionTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Invest intelligently"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_Section_Beside__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Formula Stocks offers a better way to invest. We forecast which stocks will go up, before they go up.", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "+", Math.floor(winRatio), "%"), " of the time we have made such an estimate, it has proved a successful long term investment. You simply buy these stocks in your own account.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "Investing using these estimates, cumulative returns since 2009 have been", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "+", Math.floor(portfolioReturn), "%"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "*"), " vs. the S&P500's 225%. Our Entry portfolio returned ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "+", returns2017.toFixed(2), "%"), " in 2017 and", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, " +", returns2016.toFixed(2), "%"), " in 2016. Powered by Artificial Intelligence forecasting, this performance strongly exceeds the 6-7% average returns typically expected from the stock market.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Join us to better your returns, save on fees, and moderate your risk. Sign up for a 30-day free trial without any obligations."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_Legal_Disclaimer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("sup", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "*"), "Past performance is not neccesarily indicative of future results.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ui_components_Charts_DualBarChart__WEBPACK_IMPORTED_MODULE_9__["default"], {
    primaryStatistic: Math.floor(winRatio),
    secondaryStatistic: 59,
    primaryName: planName,
    secondaryName: "Market",
    primaryHeight: Math.floor(winRatio),
    secondaryHeight: 59,
    description: "Winners in %",
    unit: "%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }))));
};

Introduction.defaultProps = {
  winRatio: 90,
  portfolioReturn: 500,
  planName: 'entry'
};
Introduction.propTypes = {
  winRatio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  portfolioReturn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  planName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Introduction);

/***/ }),

/***/ "./components/Retail/Error.jsx":
/*!*************************************!*\
  !*** ./components/Retail/Error.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mlyck/web/fs-next/components/Retail/Error.jsx";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "loading...");
});

/***/ }),

/***/ "./components/Retail/Loading.jsx":
/*!***************************************!*\
  !*** ./components/Retail/Loading.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/mlyck/web/fs-next/components/Retail/Loading.jsx";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "loading...");
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-load-script */ "react-load-script");
/* harmony import */ var react_load_script__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_load_script__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./common/constants.js");
/* harmony import */ var _common_utils_featureTests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/featureTests */ "./common/utils/featureTests.js");
/* harmony import */ var _common_utils_newVisitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/utils/newVisitor */ "./common/utils/newVisitor.js");
/* harmony import */ var _components_Retail_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Retail/Loading */ "./components/Retail/Loading.jsx");
/* harmony import */ var _components_Retail_Error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Retail/Error */ "./components/Retail/Error.jsx");
/* harmony import */ var _components_Retail_01_Hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Retail/01_Hero */ "./components/Retail/01_Hero/index.js");
/* harmony import */ var _components_Retail_02_Introduction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Retail/02_Introduction */ "./components/Retail/02_Introduction/index.jsx");
var _jsxFileName = "/Users/mlyck/web/fs-next/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query {\n    Plan(id: \"", "\") {\n      name\n      info\n      price\n      portfolioYields\n      launchStatistics\n      latestSells\n      statistics\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










 // import Navbar from 'components/Navbar/Retail'
// import Signup from 'components/Dialogs/Signup'
// import Login from 'components/Dialogs/Login'
// import FAQ from 'components/Dialogs/FAQ'


 // import WhatIsIt from './03_WhatIsIt'
// import Performance from './04_Performance'
// import PercentMatters from './05_PercentMatters'
// import FirstMonthOnUs from './06_FirstMonthOnUs'
// import WhatToExpect from './07_WhatToExpect'
// import PilotProgram from './08_PilotProgram'
// import LongTermPerformance from './09_LongTermPerformance'
// import Statistics from './10_Statistics'
// import HowWeBeatTheMarket from './11_HowWeBeatTheMarket'
// import RiskManagement from './12_RiskManagement'
// import CorporateProfile from './13_CorporateProfile'
// import ScrolledToBottom from './15_ScrolledToBottom'
// import Footer from './16_Footer'

var GET_ENTRY_AND_MARKET_DATA = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject(), _common_constants__WEBPACK_IMPORTED_MODULE_5__["planIds"].ENTRY);

var Retail =
/*#__PURE__*/
function (_Component) {
  _inherits(Retail, _Component);

  function Retail() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Retail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Retail)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      amChartsCoreStatus: false,
      amChartsLoaded: false,
      amChartsLoadingError: false,
      signUpVisible: false,
      loginVisible: false,
      FAQVisible: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "amChartsSerialStatus", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "amChartsThemeStatus", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "areAllChartDependenciesLoaded", function () {
      if (_this.state.amChartsCoreStatus && _this.amChartsSerialStatus && _this.amChartsThemeStatus) {
        _this.setState({
          amChartsLoaded: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadAmChartsCore", function () {
      _this.setState({
        amChartsCoreStatus: true
      });

      _this.areAllChartDependenciesLoaded();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadAmChartsSerial", function () {
      _this.amChartsSerialStatus = true;

      _this.areAllChartDependenciesLoaded();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoadAmChartsTheme", function () {
      _this.amChartsThemeStatus = true;

      _this.areAllChartDependenciesLoaded();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSignUpModal", function () {
      return _this.setState(function (state) {
        return {
          signUpVisible: !state.signUpVisible
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleLoginModal", function () {
      return _this.setState(function (state) {
        return {
          loginVisible: !state.loginVisible
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleFAQModal", function () {
      return _this.setState(function (state) {
        return {
          FAQVisible: !state.FAQVisible
        };
      });
    });

    return _this;
  }

  _createClass(Retail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window.Intercom) {
        window.Intercom("boot", {
          app_id: "i194mpvo"
        });
      }

      console.log(this.props);
      _common_utils_featureTests__WEBPACK_IMPORTED_MODULE_6__["hasStorage"] && localStorage.setItem("selectedPlan", "ENTRY");
      Object(_common_utils_newVisitor__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.apolloClient);
    }
  }, {
    key: "render",
    value: function render() {
      var history = this.props.history;
      var _this$state = this.state,
          amChartsLoaded = _this$state.amChartsLoaded,
          amChartsCoreStatus = _this$state.amChartsCoreStatus,
          signUpVisible = _this$state.signUpVisible,
          loginVisible = _this$state.loginVisible,
          FAQVisible = _this$state.FAQVisible;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: GET_ENTRY_AND_MARKET_DATA,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, function (_ref) {
        var loading = _ref.loading,
            error = _ref.error,
            data = _ref.data;
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Retail_Loading__WEBPACK_IMPORTED_MODULE_8__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        });
        if (!data || !data.Plan || error && !_common_utils_featureTests__WEBPACK_IMPORTED_MODULE_6__["usingMocks"]) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Retail_Error__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        });
        var Plan = data.Plan;
        var planName = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "name");
        var portfolioYields = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "portfolioYields");
        var latestSells = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "latestSells");
        var winRatio = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "statistics.winRatio");
        var CAGR = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "statistics.CAGR");
        var avgGain = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "info.avgGainPerPosition");
        var avgLoss = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "info.avgLossPerPosition");
        var sortinoRatio = lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(Plan, "info.sortinoRatio");
        var firstBalance = portfolioYields[0].balance;
        var lastBalance = portfolioYields[portfolioYields.length - 1].balance;
        var increase = lastBalance - firstBalance;
        var portfolioReturn = increase / firstBalance * 100;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "retail-page",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Retail_01_Hero__WEBPACK_IMPORTED_MODULE_10__["default"], {
          portfolioReturn: portfolioReturn,
          winRatio: winRatio,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Retail_02_Introduction__WEBPACK_IMPORTED_MODULE_11__["default"], {
          portfolioReturn: portfolioReturn,
          portfolioYields: portfolioYields,
          winRatio: winRatio,
          planName: planName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }));
      });
    }
  }]);

  return Retail;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Retail);

/***/ }),

/***/ "./ui-components/Box/index.js":
/*!************************************!*\
  !*** ./ui-components/Box/index.js ***!
  \************************************/
/*! exports provided: boxStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxStyle", function() { return boxStyle; });
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);


var boxStyle =
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("display:flex;background-color:#fff;border-radius:6px;box-shadow:0 4px 14px 0 rgba(111,120,156,0.08);box-sizing:border-box;");
var Box =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e16lpuas0"
})(boxStyle, ";");
/* harmony default export */ __webpack_exports__["default"] = (Box);

/***/ }),

/***/ "./ui-components/Charts/DualBarChart/index.js":
/*!****************************************************!*\
  !*** ./ui-components/Charts/DualBarChart/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./ui-components/Charts/DualBarChart/styles.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/ui-components/Charts/DualBarChart/index.js";





var DualBarChart = function DualBarChart(_ref) {
  var primaryStatistic = _ref.primaryStatistic,
      secondaryStatistic = _ref.secondaryStatistic,
      primaryHeight = _ref.primaryHeight,
      secondaryHeight = _ref.secondaryHeight,
      primaryName = _ref.primaryName,
      secondaryName = _ref.secondaryName,
      maxHeight = _ref.maxHeight,
      description = _ref.description,
      unit = _ref.unit,
      theme = _ref.theme;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chart-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartBeside"], {
    maxHeight: maxHeight,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
    color: theme.colors.primary,
    height: Math.floor(primaryHeight),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Statistic"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, primaryStatistic, unit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, primaryName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Chart"], {
    color: theme.colors.black,
    height: Math.floor(secondaryHeight),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Statistic"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, secondaryStatistic, unit), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["ChartName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, secondaryName))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, description));
};

DualBarChart.defaultProps = {
  primaryStatistic: 0,
  secondaryStatistic: 0,
  primaryHeight: 0,
  secondaryHeight: 0,
  primaryName: '',
  secondaryName: '',
  description: '',
  unit: ''
};
DualBarChart.propTypes = {
  primaryStatistic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  secondaryStatistic: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  primaryName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  secondaryName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  primaryHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  secondaryHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(emotion_theming__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(DualBarChart));

/***/ }),

/***/ "./ui-components/Charts/DualBarChart/styles.js":
/*!*****************************************************!*\
  !*** ./ui-components/Charts/DualBarChart/styles.js ***!
  \*****************************************************/
/*! exports provided: ChartBeside, Chart, Statistic, ChartName, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartBeside", function() { return ChartBeside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chart", function() { return Chart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistic", function() { return Statistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartName", function() { return ChartName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Box */ "./ui-components/Box/index.js");



var animateUp = function animateUp(height) {
  return (
    /*#__PURE__*/
    Object(react_emotion__WEBPACK_IMPORTED_MODULE_0__["keyframes"])("0%{height:48px;}100%{height:", height, "%;}")
  );
};

var ChartBeside =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "e1qiy7ca0"
})("display:flex;justify-content:flex-end;align-items:flex-end;height:", function (props) {
  return props.maxHeight || '100%';
}, ";");
var Chart =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()(_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
  target: "e1qiy7ca1"
})("height:", function (props) {
  return props.height;
}, "%;background:", function (props) {
  return props.color;
}, ";width:64px;margin:12px;border-top-left-radius:6px;border-top-right-radius:6px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;min-height:48px;transition:height 1s,transform 0.24s ease-in;position:relative;animation:", function (props) {
  return animateUp(props.height);
}, " 1s linear;&:hover{transform:translateY(-8px);}");
var Statistic =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e1qiy7ca2"
})("display:flex;justify-content:center;align-items:center;background:hsla(0,0%,100%,0.75);border-top-left-radius:6px;border-top-right-radius:6px;width:100%;font-weight:100;height:48px;margin:0;");
var ChartName =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "e1qiy7ca3"
})("width:60px;position:absolute;top:-28px;background:none;text-align:center;text-transform:capitalize;");
var Description =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("h3", {
  target: "e1qiy7ca4"
})("text-align:center;font-weight:500;");

/***/ }),

/***/ "./ui-components/Legal/Disclaimer/index.js":
/*!*************************************************!*\
  !*** ./ui-components/Legal/Disclaimer/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);

var Disclaimer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("p", {
  target: "eswvyh00"
})("color:", function (props) {
  return props.theme.colors.black;
}, ";font-weight:100;font-size:0.8rem;line-height:1;margin:8px 0;");
/* harmony default export */ __webpack_exports__["default"] = (Disclaimer);

/***/ }),

/***/ "./ui-components/Section/Beside/index.js":
/*!***********************************************!*\
  !*** ./ui-components/Section/Beside/index.js ***!
  \***********************************************/
/*! exports provided: sideStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sideStyles", function() { return sideStyles; });
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);


var Beside =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_1___default()("div", {
  target: "eyh2cop0"
})("display:flex;justify-content:space-between;max-width:1160px;width:100%;> div:first-child{margin-right:24px;}");
var sideStyles = function sideStyles(props) {
  return (
    /*#__PURE__*/
    Object(emotion__WEBPACK_IMPORTED_MODULE_0__["css"])("max-width:calc(50% - 16px);width:100%;display:flex;flex-direction:column;align-items:", props['data-center'] ? 'center' : 'flex-start', ";")
  );
};
/* harmony default export */ __webpack_exports__["default"] = (Beside);

/***/ }),

/***/ "./ui-components/Section/SectionTitle/index.js":
/*!*****************************************************!*\
  !*** ./ui-components/Section/SectionTitle/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./ui-components/Section/SectionTitle/styles.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/ui-components/Section/SectionTitle/index.js";





var SectionTitle = function SectionTitle(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["SectionTitleContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

SectionTitle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(emotion_theming__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(SectionTitle));

/***/ }),

/***/ "./ui-components/Section/SectionTitle/styles.js":
/*!******************************************************!*\
  !*** ./ui-components/Section/SectionTitle/styles.js ***!
  \******************************************************/
/*! exports provided: Title, SectionTitleContainer, Divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitleContainer", function() { return SectionTitleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);

var Title =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("h2", {
  target: "eagr6og0"
})("font-weight:100;color:", function (props) {
  return props.theme.colors.black;
}, ";font-size:1.5rem;text-align:center;margin-bottom:20px;");
var SectionTitleContainer =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eagr6og1"
})("width:100%;display:flex;flex-direction:column;align-items:center;");
var Divider =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_0___default()("div", {
  target: "eagr6og2"
})("width:75px;background:", function (props) {
  return props.theme.colors.primary;
}, ";height:2px;margin-bottom:24px;");

/***/ }),

/***/ "./ui-components/Section/index.js":
/*!****************************************!*\
  !*** ./ui-components/Section/index.js ***!
  \****************************************/
/*! exports provided: Section, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils_mq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils/mq */ "./common/utils/mq.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/ui-components/Section/index.js";





var Section =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_2___default()("div", {
  target: "e1h8ohvz0"
})("background:", function (props) {
  return props['data-offwhite'] ? props.theme.colors.polar : '#fff';
}, ";display:flex;flex-direction:column;align-items:center;margin:0;padding:40px 80px;", _common_utils_mq__WEBPACK_IMPORTED_MODULE_4__["default"].medium(
/*#__PURE__*/
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])("padding:40px 32px;")), ";");
var SectionContent =
/*#__PURE__*/
react_emotion__WEBPACK_IMPORTED_MODULE_2___default()("div", {
  target: "e1h8ohvz1"
})("max-width:1160px;width:100%;display:flex;flex-direction:column;align-items:center;line-height:1.5;");

var Sect = function Sect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    theme: props.theme,
    "data-offwhite": props['data-offwhite'],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.children));
};

Sect.propTypes = {
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,
  'data-offwhite': prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Sect);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "emotion-theming":
/*!**********************************!*\
  !*** external "emotion-theming" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion-theming");

/***/ }),

/***/ "fetch-jsonp":
/*!******************************!*\
  !*** external "fetch-jsonp" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fetch-jsonp");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),

/***/ "platform":
/*!***************************!*\
  !*** external "platform" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("platform");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-emotion":
/*!********************************!*\
  !*** external "react-emotion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ }),

/***/ "react-load-script":
/*!************************************!*\
  !*** external "react-load-script" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-load-script");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "typed.js":
/*!***************************!*\
  !*** external "typed.js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typed.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map