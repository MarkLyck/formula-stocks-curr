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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./common/theme.js":
/*!*************************!*\
  !*** ./common/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme = {
  colors: {
    primary: '#27A5F9',
    secondary: '#12D99E',
    error: '#ec1b5f',
    warning: '#ec791b',
    white: '#FFFFFF',
    polar: '#F3F7FB',
    offWhite: '#F5F6F5',
    lightGray: '#ececec',
    gray: '#95989e',
    dbGray: '#2D333C',
    darkGray: '#232730',
    black: '#49494A'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./common/utils/fontAwesomeLibrary.js":
/*!********************************************!*\
  !*** ./common/utils/fontAwesomeLibrary.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_icons_faIcons_faChartLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/icons/faIcons/faChartLine */ "./static/icons/faIcons/faChartLine.js");
/* harmony import */ var _static_icons_faIcons_faChartLine__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faChartLine__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_icons_faIcons_faBars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/icons/faIcons/faBars */ "./static/icons/faIcons/faBars.js");
/* harmony import */ var _static_icons_faIcons_faBars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faBars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_icons_faIcons_faAngleDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/icons/faIcons/faAngleDown */ "./static/icons/faIcons/faAngleDown.js");
/* harmony import */ var _static_icons_faIcons_faAngleDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faAngleDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_icons_faIcons_faCalendarTimes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/icons/faIcons/faCalendarTimes */ "./static/icons/faIcons/faCalendarTimes.js");
/* harmony import */ var _static_icons_faIcons_faCalendarTimes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faCalendarTimes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_icons_faIcons_faChartPie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/icons/faIcons/faChartPie */ "./static/icons/faIcons/faChartPie.js");
/* harmony import */ var _static_icons_faIcons_faChartPie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faChartPie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_icons_faIcons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/icons/faIcons/faCheckCircle */ "./static/icons/faIcons/faCheckCircle.js");
/* harmony import */ var _static_icons_faIcons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_icons_faIcons_faCity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/icons/faIcons/faCity */ "./static/icons/faIcons/faCity.js");
/* harmony import */ var _static_icons_faIcons_faCity__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faCity__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_icons_faIcons_faCreditCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/icons/faIcons/faCreditCard */ "./static/icons/faIcons/faCreditCard.js");
/* harmony import */ var _static_icons_faIcons_faCreditCard__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faCreditCard__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_icons_faIcons_faDatabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/icons/faIcons/faDatabase */ "./static/icons/faIcons/faDatabase.js");
/* harmony import */ var _static_icons_faIcons_faDatabase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faDatabase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _static_icons_faIcons_faDesktop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/icons/faIcons/faDesktop */ "./static/icons/faIcons/faDesktop.js");
/* harmony import */ var _static_icons_faIcons_faDesktop__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faDesktop__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_icons_faIcons_faDollarSign__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/icons/faIcons/faDollarSign */ "./static/icons/faIcons/faDollarSign.js");
/* harmony import */ var _static_icons_faIcons_faDollarSign__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faDollarSign__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_icons_faIcons_faEnvelope__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/icons/faIcons/faEnvelope */ "./static/icons/faIcons/faEnvelope.js");
/* harmony import */ var _static_icons_faIcons_faEnvelope__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faEnvelope__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_icons_faIcons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/icons/faIcons/faExclamationCircle */ "./static/icons/faIcons/faExclamationCircle.js");
/* harmony import */ var _static_icons_faIcons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_icons_faIcons_faFlask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../static/icons/faIcons/faFlask */ "./static/icons/faIcons/faFlask.js");
/* harmony import */ var _static_icons_faIcons_faFlask__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faFlask__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_icons_faIcons_faGift__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/icons/faIcons/faGift */ "./static/icons/faIcons/faGift.js");
/* harmony import */ var _static_icons_faIcons_faGift__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faGift__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_icons_faIcons_faGlobeAmericas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/icons/faIcons/faGlobeAmericas */ "./static/icons/faIcons/faGlobeAmericas.js");
/* harmony import */ var _static_icons_faIcons_faGlobeAmericas__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faGlobeAmericas__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_icons_faIcons_faHome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../static/icons/faIcons/faHome */ "./static/icons/faIcons/faHome.js");
/* harmony import */ var _static_icons_faIcons_faHome__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faHome__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_icons_faIcons_faHourglassHalf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../static/icons/faIcons/faHourglassHalf */ "./static/icons/faIcons/faHourglassHalf.js");
/* harmony import */ var _static_icons_faIcons_faHourglassHalf__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faHourglassHalf__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_icons_faIcons_faHourglassEnd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../static/icons/faIcons/faHourglassEnd */ "./static/icons/faIcons/faHourglassEnd.js");
/* harmony import */ var _static_icons_faIcons_faHourglassEnd__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faHourglassEnd__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_icons_faIcons_faImage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../static/icons/faIcons/faImage */ "./static/icons/faIcons/faImage.js");
/* harmony import */ var _static_icons_faIcons_faImage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faImage__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_icons_faIcons_faListUl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../static/icons/faIcons/faListUl */ "./static/icons/faIcons/faListUl.js");
/* harmony import */ var _static_icons_faIcons_faListUl__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faListUl__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_icons_faIcons_faLockAlt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../static/icons/faIcons/faLockAlt */ "./static/icons/faIcons/faLockAlt.js");
/* harmony import */ var _static_icons_faIcons_faLockAlt__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faLockAlt__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_icons_faIcons_faMap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../static/icons/faIcons/faMap */ "./static/icons/faIcons/faMap.js");
/* harmony import */ var _static_icons_faIcons_faMap__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faMap__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_icons_faIcons_faMobile__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../static/icons/faIcons/faMobile */ "./static/icons/faIcons/faMobile.js");
/* harmony import */ var _static_icons_faIcons_faMobile__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faMobile__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_icons_faIcons_faNewspaper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../static/icons/faIcons/faNewspaper */ "./static/icons/faIcons/faNewspaper.js");
/* harmony import */ var _static_icons_faIcons_faNewspaper__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faNewspaper__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_icons_faIcons_faPencil__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../static/icons/faIcons/faPencil */ "./static/icons/faIcons/faPencil.js");
/* harmony import */ var _static_icons_faIcons_faPencil__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faPencil__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _static_icons_faIcons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../static/icons/faIcons/faQuestionCircle */ "./static/icons/faIcons/faQuestionCircle.js");
/* harmony import */ var _static_icons_faIcons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _static_icons_faIcons_faSignInAlt__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../static/icons/faIcons/faSignInAlt */ "./static/icons/faIcons/faSignInAlt.js");
/* harmony import */ var _static_icons_faIcons_faSignInAlt__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faSignInAlt__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _static_icons_faIcons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../static/icons/faIcons/faSignOutAlt */ "./static/icons/faIcons/faSignOutAlt.js");
/* harmony import */ var _static_icons_faIcons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _static_icons_faIcons_faSpinnerThird__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../static/icons/faIcons/faSpinnerThird */ "./static/icons/faIcons/faSpinnerThird.js");
/* harmony import */ var _static_icons_faIcons_faSpinnerThird__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faSpinnerThird__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _static_icons_faIcons_faTablet__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../static/icons/faIcons/faTablet */ "./static/icons/faIcons/faTablet.js");
/* harmony import */ var _static_icons_faIcons_faTablet__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faTablet__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _static_icons_faIcons_faTachometer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../static/icons/faIcons/faTachometer */ "./static/icons/faIcons/faTachometer.js");
/* harmony import */ var _static_icons_faIcons_faTachometer__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faTachometer__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _static_icons_faIcons_faTasks__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../static/icons/faIcons/faTasks */ "./static/icons/faIcons/faTasks.js");
/* harmony import */ var _static_icons_faIcons_faTasks__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faTasks__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _static_icons_faIcons_faTimes__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../static/icons/faIcons/faTimes */ "./static/icons/faIcons/faTimes.js");
/* harmony import */ var _static_icons_faIcons_faTimes__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faTimes__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _static_icons_faIcons_faUser__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../static/icons/faIcons/faUser */ "./static/icons/faIcons/faUser.js");
/* harmony import */ var _static_icons_faIcons_faUser__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faUser__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _static_icons_faIcons_faUsers__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../static/icons/faIcons/faUsers */ "./static/icons/faIcons/faUsers.js");
/* harmony import */ var _static_icons_faIcons_faUsers__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_static_icons_faIcons_faUsers__WEBPACK_IMPORTED_MODULE_36__);





































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_static_icons_faIcons_faAngleDown__WEBPACK_IMPORTED_MODULE_3__["faAngleDown"], _static_icons_faIcons_faBars__WEBPACK_IMPORTED_MODULE_2__["faBars"], _static_icons_faIcons_faCalendarTimes__WEBPACK_IMPORTED_MODULE_4__["faCalendarTimes"], _static_icons_faIcons_faChartLine__WEBPACK_IMPORTED_MODULE_1__["faChartLine"], _static_icons_faIcons_faChartPie__WEBPACK_IMPORTED_MODULE_5__["faChartPie"], _static_icons_faIcons_faCheckCircle__WEBPACK_IMPORTED_MODULE_6__["faCheckCircle"], _static_icons_faIcons_faCity__WEBPACK_IMPORTED_MODULE_7__["faCity"], _static_icons_faIcons_faCreditCard__WEBPACK_IMPORTED_MODULE_8__["faCreditCard"], _static_icons_faIcons_faDatabase__WEBPACK_IMPORTED_MODULE_9__["faDatabase"], _static_icons_faIcons_faDesktop__WEBPACK_IMPORTED_MODULE_10__["faDesktop"], _static_icons_faIcons_faDollarSign__WEBPACK_IMPORTED_MODULE_11__["faDollarSign"], _static_icons_faIcons_faEnvelope__WEBPACK_IMPORTED_MODULE_12__["faEnvelope"], _static_icons_faIcons_faFlask__WEBPACK_IMPORTED_MODULE_14__["faFlask"], _static_icons_faIcons_faGlobeAmericas__WEBPACK_IMPORTED_MODULE_16__["faGlobeAmericas"], _static_icons_faIcons_faGift__WEBPACK_IMPORTED_MODULE_15__["faGift"], _static_icons_faIcons_faHome__WEBPACK_IMPORTED_MODULE_17__["faHome"], _static_icons_faIcons_faHourglassHalf__WEBPACK_IMPORTED_MODULE_18__["faHourglassHalf"], _static_icons_faIcons_faHourglassEnd__WEBPACK_IMPORTED_MODULE_19__["faHourglassEnd"], _static_icons_faIcons_faImage__WEBPACK_IMPORTED_MODULE_20__["faImage"], _static_icons_faIcons_faListUl__WEBPACK_IMPORTED_MODULE_21__["faListUl"], _static_icons_faIcons_faLockAlt__WEBPACK_IMPORTED_MODULE_22__["faLockAlt"], _static_icons_faIcons_faMap__WEBPACK_IMPORTED_MODULE_23__["faMap"], _static_icons_faIcons_faMobile__WEBPACK_IMPORTED_MODULE_24__["faMobile"], _static_icons_faIcons_faNewspaper__WEBPACK_IMPORTED_MODULE_25__["faNewspaper"], _static_icons_faIcons_faPencil__WEBPACK_IMPORTED_MODULE_26__["faPencil"], _static_icons_faIcons_faQuestionCircle__WEBPACK_IMPORTED_MODULE_27__["faQuestionCircle"], _static_icons_faIcons_faExclamationCircle__WEBPACK_IMPORTED_MODULE_13__["faExclamationCircle"], _static_icons_faIcons_faSignInAlt__WEBPACK_IMPORTED_MODULE_28__["faSignInAlt"], _static_icons_faIcons_faSignOutAlt__WEBPACK_IMPORTED_MODULE_29__["faSignOutAlt"], _static_icons_faIcons_faSpinnerThird__WEBPACK_IMPORTED_MODULE_30__["faSpinnerThird"], _static_icons_faIcons_faTablet__WEBPACK_IMPORTED_MODULE_31__["faTablet"], _static_icons_faIcons_faTachometer__WEBPACK_IMPORTED_MODULE_32__["faTachometer"], _static_icons_faIcons_faTasks__WEBPACK_IMPORTED_MODULE_33__["faTasks"], _static_icons_faIcons_faTimes__WEBPACK_IMPORTED_MODULE_34__["faTimes"], _static_icons_faIcons_faUser__WEBPACK_IMPORTED_MODULE_35__["faUser"], _static_icons_faIcons_faUsers__WEBPACK_IMPORTED_MODULE_36__["faUsers"]);

/***/ }),

/***/ "./lib/init-apollo.js":
/*!****************************!*\
  !*** ./lib/init-apollo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./common/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (true) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a;
}

var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  // get the authentication token from local storage if it exists
  var token = localStorage.getItem('graphcoolToken'); // return the headers to the context so httpLink can read them

  return {
    headers: _objectSpread({}, headers, {
      authorization: token ? "Bearer ".concat(token) : ''
    })
  };
});
var httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
  uri: _common_constants__WEBPACK_IMPORTED_MODULE_3__["graphCoolEndpoint"],
  credentials: 'same-origin'
});

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: false,
    ssrMode: !false,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/layout.js":
/*!***********************!*\
  !*** ./lib/layout.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/theme */ "./common/theme.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/lib/layout.js";



 // Add global styles

Object(emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])("a[href=\"http://www.amcharts.com\"]{display:none !important;}html{font-family:'Rubik',sans-serif;box-sizing:border-box;}body{overflow-x:hidden;}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0;}table{border-collapse:collapse;border-spacing:0;}fieldset,img{border:0;}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal;}ol,ul{list-style:none;}caption,th{text-align:left;}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}q:before,q:after{content:'';}abbr,acronym{border:0;font-variant:normal;}sup{vertical-align:text-top;}sub{vertical-align:text-bottom;}input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;}input,textarea,select{*font-size:100%;}legend{color:#000;}a{text-decoration:none;color:#27A5F9;&:hover{cursor:pointer;text-decoration:underline;}}b{font-weight:500;}p{line-height:1.5;}button{outline:none;&:hover{cursor:pointer;}}.modal-overlay{left:0;position:fixed;top:0;background:rgba(0,0,0,0.5);width:100%;height:100%;z-index:100;}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0;}.slick-list:focus{outline:none;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto;}.slick-track:before,.slick-track:after{display:table;content:'';}.slick-track:after{clear:both;}.slick-loading .slick-track{visibility:hidden;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}[dir='rtl'] .slick-slide{float:right;}.slick-slide img{display:block;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-loading .slick-slide{visibility:hidden;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-loading .slick-list{background:#fff url('./ajax-loader.gif') center center no-repeat;}@font-face{font-family:'slick';font-weight:normal;font-style:normal;src:url('./fonts/slick.eot');src:url('./fonts/slick.eot?#iefix') format('embedded-opentype'),url('./fonts/slick.woff') format('woff'),url('./fonts/slick.ttf') format('truetype'),url('./fonts/slick.svg#slick') format('svg');}.slick-prev,.slick-next{font-size:0;line-height:0;position:absolute;top:50%;display:block;width:20px;height:20px;padding:0;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;color:transparent;border:none;outline:none;background:transparent;}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{color:transparent;outline:none;background:transparent;}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1;}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:.25;}.slick-prev:before,.slick-next:before{font-family:'slick';font-size:20px;line-height:1;opacity:.75;color:white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-prev{left:-25px;}[dir='rtl'] .slick-prev{right:-25px;left:auto;}.slick-prev:before{content:'\u2190';}[dir='rtl'] .slick-prev:before{content:'\u2192';}.slick-next{right:-25px;}[dir='rtl'] .slick-next{right:auto;left:-25px;}.slick-next:before{content:'\u2192';}[dir='rtl'] .slick-next:before{content:'\u2190';}.slick-dotted.slick-slider{margin-bottom:30px;}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center;}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer;}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent;}.slick-dots li button:hover,.slick-dots li button:focus{outline:none;}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1;}.slick-dots li button:before{font-family:'slick';font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'\u2022';text-align:center;opacity:.25;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-dots li.slick-active button:before{opacity:.75;color:black;}");
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(emotion_theming__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _common_theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./lib/with-apollo-client.js":
/*!***********************************!*\
  !*** ./lib/with-apollo-client.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _init_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-apollo */ "./lib/init-apollo.js");

var _jsxFileName = "/Users/mlyck/web/fs-next/lib/with-apollo-client.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Apollo, _React$Component);

    _createClass(Apollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
          var Component, router, appProps, apollo, apolloState;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = ctx.Component, router = ctx.router;
                  appProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return App.getInitialProps(ctx);

                case 5:
                  appProps = _context.sent;

                case 6:
                  // Run all GraphQL queries in the component tree
                  // and extract the resulting data
                  apollo = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_4__["default"])();

                  if (false) {}

                  _context.prev = 8;
                  _context.next = 11;
                  return Object(react_apollo__WEBPACK_IMPORTED_MODULE_2__["getDataFromTree"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloClient: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 24
                    },
                    __self: this
                  })));

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                  console.error("Error while running `getDataFromTree`", _context.t0);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  next_head__WEBPACK_IMPORTED_MODULE_3___default.a.rewind();

                case 17:
                  // Extract query data from the Apollo store
                  apolloState = apollo.cache.extract();
                  return _context.abrupt("return", _objectSpread({}, appProps, {
                    apolloState: apolloState
                  }));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function Apollo(props) {
      var _this;

      _classCallCheck(this, Apollo);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Apollo).call(this, props));
      _this.apolloClient = Object(_init_apollo__WEBPACK_IMPORTED_MODULE_4__["default"])(props.apolloState);
      return _this;
    }

    _createClass(Apollo, [{
      key: "render",
      value: function render() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.apolloClient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }));
      }
    }]);

    return Apollo;
  }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component), _defineProperty(_class, "displayName", "withApollo(App)"), _temp;
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/with-apollo-client */ "./lib/with-apollo-client.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion-theming */ "emotion-theming");
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion_theming__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/layout */ "./lib/layout.js");
/* harmony import */ var _common_utils_fontAwesomeLibrary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utils/fontAwesomeLibrary */ "./common/utils/fontAwesomeLibrary.js");
var _jsxFileName = "/Users/mlyck/web/fs-next/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyApp).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, pageProps, {
        apolloClient: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_with_apollo_client__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

/***/ }),

/***/ "./static/icons/faIcons/faAngleDown.js":
/*!*********************************************!*\
  !*** ./static/icons/faIcons/faAngleDown.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'angle-down';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f107';
var svgPathData = 'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faAngleDown = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faBars.js":
/*!****************************************!*\
  !*** ./static/icons/faIcons/faBars.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'far';
var iconName = 'bars';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f0c9';
var svgPathData = 'M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faBars = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faCalendarTimes.js":
/*!*************************************************!*\
  !*** ./static/icons/faIcons/faCalendarTimes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'calendar-times';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f273';
var svgPathData = 'M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm257.3 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L224 306.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1 48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L269.3 352z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faCalendarTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faChartLine.js":
/*!*********************************************!*\
  !*** ./static/icons/faIcons/faChartLine.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'chart-line';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f201';
var svgPathData = 'M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faChartLine = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faChartPie.js":
/*!********************************************!*\
  !*** ./static/icons/faIcons/faChartPie.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'chart-pie';
var width = 544;
var height = 512;
var ligatures = [];
var unicode = 'f200';
var svgPathData = 'M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faChartPie = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faCheckCircle.js":
/*!***********************************************!*\
  !*** ./static/icons/faIcons/faCheckCircle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'check-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f058';
var svgPathData = 'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faCheckCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faCity.js":
/*!****************************************!*\
  !*** ./static/icons/faIcons/faCity.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'city';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f64f';
var svgPathData = 'M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faCity = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faCreditCard.js":
/*!**********************************************!*\
  !*** ./static/icons/faIcons/faCreditCard.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'credit-card';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f09d';
var svgPathData = 'M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faCreditCard = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faDatabase.js":
/*!********************************************!*\
  !*** ./static/icons/faIcons/faDatabase.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'database';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f1c0';
var svgPathData = 'M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faDatabase = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faDesktop.js":
/*!*******************************************!*\
  !*** ./static/icons/faIcons/faDesktop.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'desktop';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f108';
var svgPathData = 'M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faDesktop = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faDollarSign.js":
/*!**********************************************!*\
  !*** ./static/icons/faIcons/faDollarSign.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'dollar-sign';
var width = 288;
var height = 512;
var ligatures = [];
var unicode = 'f155';
var svgPathData = 'M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faDollarSign = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faEnvelope.js":
/*!********************************************!*\
  !*** ./static/icons/faIcons/faEnvelope.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'envelope';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f0e0';
var svgPathData = 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faEnvelope = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faExclamationCircle.js":
/*!*****************************************************!*\
  !*** ./static/icons/faIcons/faExclamationCircle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'exclamation-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f06a';
var svgPathData = 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faExclamationCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faFlask.js":
/*!*****************************************!*\
  !*** ./static/icons/faIcons/faFlask.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'flask';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f0c3';
var svgPathData = 'M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faFlask = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faGift.js":
/*!****************************************!*\
  !*** ./static/icons/faIcons/faGift.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'gift';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f06b';
var svgPathData = 'M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faGift = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faGlobeAmericas.js":
/*!*************************************************!*\
  !*** ./static/icons/faIcons/faGlobeAmericas.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'globe-americas';
var width = 496;
var height = 512;
var ligatures = [];
var unicode = 'f57d';
var svgPathData = 'M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faGlobeAmericas = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faHome.js":
/*!****************************************!*\
  !*** ./static/icons/faIcons/faHome.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'home';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f015';
var svgPathData = 'M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faHome = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faHourglassEnd.js":
/*!************************************************!*\
  !*** ./static/icons/faIcons/faHourglassEnd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'hourglass-end';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f253';
var svgPathData = 'M360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64zM192 208c-57.787 0-104-66.518-104-144h208c0 77.945-46.51 144-104 144z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faHourglassEnd = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faHourglassHalf.js":
/*!*************************************************!*\
  !*** ./static/icons/faIcons/faHourglassHalf.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'hourglass-half';
var width = 384;
var height = 512;
var ligatures = [];
var unicode = 'f252';
var svgPathData = 'M360 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24 0 90.965 51.016 167.734 120.842 192C75.016 280.266 24 357.035 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24 0-90.965-51.016-167.734-120.842-192C308.984 231.734 360 154.965 360 64c13.255 0 24-10.745 24-24V24c0-13.255-10.745-24-24-24zm-75.078 384H99.08c17.059-46.797 52.096-80 92.92-80 40.821 0 75.862 33.196 92.922 80zm.019-256H99.078C91.988 108.548 88 86.748 88 64h208c0 22.805-3.987 44.587-11.059 64z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faHourglassHalf = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faImage.js":
/*!*****************************************!*\
  !*** ./static/icons/faIcons/faImage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'image';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f03e';
var svgPathData = 'M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faImage = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faListUl.js":
/*!******************************************!*\
  !*** ./static/icons/faIcons/faListUl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'list-ul';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f0ca';
var svgPathData = 'M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faListUl = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faLockAlt.js":
/*!*******************************************!*\
  !*** ./static/icons/faIcons/faLockAlt.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'far';
var iconName = 'lock-alt';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f30d';
var svgPathData = 'M224 412c-15.5 0-28-12.5-28-28v-64c0-15.5 12.5-28 28-28s28 12.5 28 28v64c0 15.5-12.5 28-28 28zm224-172v224c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V240c0-26.5 21.5-48 48-48h32v-48C80 64.5 144.8-.2 224.4 0 304 .2 368 65.8 368 145.4V192h32c26.5 0 48 21.5 48 48zm-320-48h192v-48c0-52.9-43.1-96-96-96s-96 43.1-96 96v48zm272 48H48v224h352V240z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faLockAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faMap.js":
/*!***************************************!*\
  !*** ./static/icons/faIcons/faMap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'map';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f279';
var svgPathData = 'M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faMap = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faMobile.js":
/*!******************************************!*\
  !*** ./static/icons/faIcons/faMobile.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'mobile';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f10b';
var svgPathData = 'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faMobile = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faNewspaper.js":
/*!*********************************************!*\
  !*** ./static/icons/faIcons/faNewspaper.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'newspaper';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f1ea';
var svgPathData = 'M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faNewspaper = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faPencil.js":
/*!******************************************!*\
  !*** ./static/icons/faIcons/faPencil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'pencil';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f040';
var svgPathData = 'M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faPencil = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faQuestionCircle.js":
/*!**************************************************!*\
  !*** ./static/icons/faIcons/faQuestionCircle.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'question-circle';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f059';
var svgPathData = 'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faQuestionCircle = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faSignInAlt.js":
/*!*********************************************!*\
  !*** ./static/icons/faIcons/faSignInAlt.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'sign-in-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f6';
var svgPathData = 'M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faSignInAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faSignOutAlt.js":
/*!**********************************************!*\
  !*** ./static/icons/faIcons/faSignOutAlt.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'sign-out-alt';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f2f5';
var svgPathData = 'M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faSignOutAlt = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faSpinnerThird.js":
/*!************************************************!*\
  !*** ./static/icons/faIcons/faSpinnerThird.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'spinner-third';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f3f4';
var svgPathData = 'M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faSpinnerThird = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faTablet.js":
/*!******************************************!*\
  !*** ./static/icons/faIcons/faTablet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'tablet';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f10a';
var svgPathData = 'M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faTablet = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faTachometer.js":
/*!**********************************************!*\
  !*** ./static/icons/faIcons/faTachometer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'tachometer';
var width = 576;
var height = 512;
var ligatures = [];
var unicode = 'f0e4';
var svgPathData = 'M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm102.77 119.59l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faTachometer = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faTasks.js":
/*!*****************************************!*\
  !*** ./static/icons/faIcons/faTasks.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'tasks';
var width = 512;
var height = 512;
var ligatures = [];
var unicode = 'f0ae';
var svgPathData = 'M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faTasks = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faTimes.js":
/*!*****************************************!*\
  !*** ./static/icons/faIcons/faTimes.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'far';
var iconName = 'times';
var width = 320;
var height = 512;
var ligatures = [];
var unicode = 'f00d';
var svgPathData = 'M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faTimes = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faUser.js":
/*!****************************************!*\
  !*** ./static/icons/faIcons/faUser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'user';
var width = 448;
var height = 512;
var ligatures = [];
var unicode = 'f007';
var svgPathData = 'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faUser = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ "./static/icons/faIcons/faUsers.js":
/*!*****************************************!*\
  !*** ./static/icons/faIcons/faUsers.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
var prefix = 'fas';
var iconName = 'users';
var width = 640;
var height = 512;
var ligatures = [];
var unicode = 'f0c0';
var svgPathData = 'M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, ligatures, unicode, svgPathData]
};
exports.faUsers = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = ligatures;
exports.unicode = unicode;
exports.svgPathData = svgPathData;

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

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

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map