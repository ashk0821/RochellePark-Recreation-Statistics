'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _icons = require('./icons');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableTableHeaderItem = function (_Component) {
  _inherits(SortableTableHeaderItem, _Component);

  function SortableTableHeaderItem() {
    _classCallCheck(this, SortableTableHeaderItem);

    return _possibleConstructorReturn(this, (SortableTableHeaderItem.__proto__ || Object.getPrototypeOf(SortableTableHeaderItem)).apply(this, arguments));
  }

  _createClass(SortableTableHeaderItem, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.sortable) this.props.onClick(this.props.index);
    }
  }, {
    key: 'render',
    value: function render() {
      var sortIcon = void 0;
      if (this.props.sortable) {
        if (this.props.iconBoth) {
          sortIcon = this.props.iconBoth;
        } else {
          sortIcon = React.createElement(_icons.SortIconBoth, { style: this.props.iconStyle });
        }
        if (this.props.sorting == "desc") {
          if (this.props.iconDesc) {
            sortIcon = this.props.iconDesc;
          } else {
            sortIcon = React.createElement(_icons.SortIconDesc, { style: this.props.iconStyle });
          }
        } else if (this.props.sorting == "asc") {
          if (this.props.iconAsc) {
            sortIcon = this.props.iconAsc;
          } else {
            sortIcon = React.createElement(_icons.SortIconAsc, { style: this.props.iconStyle });
          }
        }
      }

      return React.createElement(
        'th',
        _extends({
          style: this.props.style,
          onClick: this.onClick.bind(this)
        }, this.props.headerProps),
        this.props.header,
        sortIcon
      );
    }
  }]);

  return SortableTableHeaderItem;
}(_react.Component);

SortableTableHeaderItem.propTypes = {
  headerProps: _react.PropTypes.object,
  sortable: _react.PropTypes.bool,
  sorting: _react.PropTypes.oneOf(['desc', 'asc', 'both']),
  iconStyle: _react.PropTypes.object,
  iconDesc: _react.PropTypes.node,
  iconAsc: _react.PropTypes.node,
  iconBoth: _react.PropTypes.node
};
SortableTableHeaderItem.defaultProps = {
  headerProps: {},
  sortable: true
};

var SortableTableHeader = function (_Component2) {
  _inherits(SortableTableHeader, _Component2);

  function SortableTableHeader() {
    _classCallCheck(this, SortableTableHeader);

    return _possibleConstructorReturn(this, (SortableTableHeader.__proto__ || Object.getPrototypeOf(SortableTableHeader)).apply(this, arguments));
  }

  _createClass(SortableTableHeader, [{
    key: 'onClick',
    value: function onClick(index) {
      this.props.onStateChange.bind(this)(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var headers = this.props.columns.map(function (column, index) {
        var sorting = _this3.props.sortings[index];
        return React.createElement(SortableTableHeaderItem, {
          sortable: column.sortable,
          key: index,
          index: index,
          header: column.header,
          sorting: sorting,
          onClick: _this3.onClick.bind(_this3),
          style: column.headerStyle,
          headerProps: column.headerProps,
          iconStyle: _this3.props.iconStyle,
          iconDesc: _this3.props.iconDesc,
          iconAsc: _this3.props.iconAsc,
          iconBoth: _this3.props.iconBoth });
      }.bind(this));

      return React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          headers
        )
      );
    }
  }]);

  return SortableTableHeader;
}(_react.Component);

SortableTableHeader.propTypes = {
  columns: _react.PropTypes.array.isRequired,
  sortings: _react.PropTypes.array.isRequired,
  onStateChange: _react.PropTypes.func,
  iconStyle: _react.PropTypes.object,
  iconDesc: _react.PropTypes.node,
  iconAsc: _react.PropTypes.node,
  iconBoth: _react.PropTypes.node
};
exports.default = SortableTableHeader;