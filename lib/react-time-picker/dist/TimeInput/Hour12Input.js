"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hour12Input;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _dateUtils = require("@wojtekmaj/date-utils");
var _Input = _interopRequireDefault(require("./Input"));
var _dates = require("../shared/dates");
var _propTypes2 = require("../shared/propTypes");
var _utils = require("../shared/utils");
var _excluded = ["amPm", "hour", "maxTime", "minTime", "value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Hour12Input(_ref) {
  var amPm = _ref.amPm,
    hour = _ref.hour,
    maxTime = _ref.maxTime,
    minTime = _ref.minTime,
    value = _ref.value,
    otherProps = _objectWithoutProperties(_ref, _excluded);
  var maxHour = (0, _utils.safeMin)(12, maxTime && function () {
    var _convert24to = (0, _dates.convert24to12)((0, _dateUtils.getHours)(maxTime)),
      _convert24to2 = _slicedToArray(_convert24to, 2),
      maxHourResult = _convert24to2[0],
      maxAmPm = _convert24to2[1];
    if (maxAmPm !== amPm) {
      // pm is always after am, so we should ignore validation
      return null;
    }
    return maxHourResult;
  }());
  var minHour = (0, _utils.safeMax)(1, minTime && function () {
    var _convert24to3 = (0, _dates.convert24to12)((0, _dateUtils.getHours)(minTime)),
      _convert24to4 = _slicedToArray(_convert24to3, 2),
      minHourResult = _convert24to4[0],
      minAmPm = _convert24to4[1];
    if (
    // pm is always after am, so we should ignore validation
    minAmPm !== amPm ||
    // If minHour is 12 am/pm, user should be able to enter 12, 1, ..., 11.
    minHourResult === 12) {
      return null;
    }
    return minHourResult;
  }());
  var value12 = value ? (0, _dates.convert24to12)(value)[0].toString() : '';
  return /*#__PURE__*/_react["default"].createElement(_Input["default"], _extends({
    max: maxHour,
    min: minHour,
    name: "hour12",
    nameForClass: "hour",
    value: value12
  }, otherProps));
}
Hour12Input.propTypes = {
  amPm: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  className: _propTypes["default"].string.isRequired,
  disabled: _propTypes["default"].bool,
  hour: _propTypes["default"].string,
  inputRef: _propTypes2.isRef,
  maxTime: _propTypes2.isTime,
  minTime: _propTypes2.isTime,
  onChange: _propTypes["default"].func,
  onKeyDown: _propTypes["default"].func,
  onKeyUp: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  showLeadingZeros: _propTypes["default"].bool,
  value: _propTypes["default"].string
};