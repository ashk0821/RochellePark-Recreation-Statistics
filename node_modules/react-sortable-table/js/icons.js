"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortIconDesc = exports.SortIconAsc = exports.SortIconBoth = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaIcon = function (_Component) {
  _inherits(FaIcon, _Component);

  function FaIcon() {
    _classCallCheck(this, FaIcon);

    return _possibleConstructorReturn(this, (FaIcon.__proto__ || Object.getPrototypeOf(FaIcon)).apply(this, arguments));
  }

  _createClass(FaIcon, [{
    key: "render",
    value: function render() {
      var className = "fa fa-lg " + this.props.icon;
      return React.createElement("i", {
        className: className,
        style: this.props.style,
        align: "right" });
    }
  }]);

  return FaIcon;
}(_react.Component);

FaIcon.propTypes = {
  icon: _react.PropTypes.string.isRequired
};

var SortIconBoth = exports.SortIconBoth = function (_Component2) {
  _inherits(SortIconBoth, _Component2);

  function SortIconBoth() {
    _classCallCheck(this, SortIconBoth);

    return _possibleConstructorReturn(this, (SortIconBoth.__proto__ || Object.getPrototypeOf(SortIconBoth)).apply(this, arguments));
  }

  _createClass(SortIconBoth, [{
    key: "render",
    value: function render() {
      return React.createElement(FaIcon, { icon: "fa-sort", style: this.props.style });
    }
  }]);

  return SortIconBoth;
}(_react.Component);

var SortIconAsc = exports.SortIconAsc = function (_Component3) {
  _inherits(SortIconAsc, _Component3);

  function SortIconAsc() {
    _classCallCheck(this, SortIconAsc);

    return _possibleConstructorReturn(this, (SortIconAsc.__proto__ || Object.getPrototypeOf(SortIconAsc)).apply(this, arguments));
  }

  _createClass(SortIconAsc, [{
    key: "render",
    value: function render() {
      return React.createElement(FaIcon, { icon: "fa-sort-asc", style: this.props.style });
    }
  }]);

  return SortIconAsc;
}(_react.Component);

var SortIconDesc = exports.SortIconDesc = function (_Component4) {
  _inherits(SortIconDesc, _Component4);

  function SortIconDesc() {
    _classCallCheck(this, SortIconDesc);

    return _possibleConstructorReturn(this, (SortIconDesc.__proto__ || Object.getPrototypeOf(SortIconDesc)).apply(this, arguments));
  }

  _createClass(SortIconDesc, [{
    key: "render",
    value: function render() {
      return React.createElement(FaIcon, { icon: "fa-sort-desc", style: this.props.style });
    }
  }]);

  return SortIconDesc;
}(_react.Component);