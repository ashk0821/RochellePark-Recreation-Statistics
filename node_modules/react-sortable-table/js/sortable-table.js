'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _sortableTableHeader = require('./sortable-table-header');

var _sortableTableHeader2 = _interopRequireDefault(_sortableTableHeader);

var _sortableTableBody = require('./sortable-table-body');

var _sortableTableBody2 = _interopRequireDefault(_sortableTableBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableTable = function (_Component) {
  _inherits(SortableTable, _Component);

  function SortableTable(props) {
    _classCallCheck(this, SortableTable);

    var _this = _possibleConstructorReturn(this, (SortableTable.__proto__ || Object.getPrototypeOf(SortableTable)).call(this, props));

    _this.state = {
      sortings: _this.getDefaultSortings(props)
    };
    return _this;
  }

  _createClass(SortableTable, [{
    key: 'getDefaultSortings',
    value: function getDefaultSortings(props) {
      return props.columns.map(function (column) {
        var sorting = "both";
        if (column.defaultSorting) {
          var defaultSorting = column.defaultSorting.toLowerCase();

          if (defaultSorting == "desc") {
            sorting = "desc";
          } else if (defaultSorting == "asc") {
            sorting = "asc";
          }
        }
        return sorting;
      });
    }
  }, {
    key: 'sortData',
    value: function sortData(data, sortings) {
      var sortedData = this.props.data;
      for (var i in sortings) {
        var sorting = sortings[i];
        var column = this.props.columns[i];
        var key = this.props.columns[i].key;
        switch (sorting) {
          case "desc":
            if (column.descSortFunction && typeof column.descSortFunction == "function") {
              sortedData = column.descSortFunction(sortedData, key);
            } else {
              sortedData = this.descSortData(sortedData, key);
            }
            break;
          case "asc":
            if (column.ascSortFunction && typeof column.ascSortFunction == "function") {
              sortedData = column.ascSortFunction(sortedData, key);
            } else {
              sortedData = this.ascSortData(sortedData, key);
            }
            break;
        }
      }
      return sortedData;
    }
  }, {
    key: 'ascSortData',
    value: function ascSortData(data, key) {
      var _this2 = this;

      return this.sortDataByKey(data, key, function (a, b) {
        if (_this2.parseFloatable(a) && _this2.parseFloatable(b)) {
          a = _this2.parseIfFloat(a);
          b = _this2.parseIfFloat(b);
        }
        if (a >= b) {
          return 1;
        } else if (a < b) {
          return -1;
        }
      }.bind(this));
    }
  }, {
    key: 'descSortData',
    value: function descSortData(data, key) {
      var _this3 = this;

      return this.sortDataByKey(data, key, function (a, b) {
        if (_this3.parseFloatable(a) && _this3.parseFloatable(b)) {
          a = _this3.parseIfFloat(a);
          b = _this3.parseIfFloat(b);
        }
        if (a <= b) {
          return 1;
        } else if (a > b) {
          return -1;
        }
      }.bind(this));
    }
  }, {
    key: 'parseFloatable',
    value: function parseFloatable(value) {
      return typeof value === "string" && (/^\d+$/.test(value) || /^\d+$/.test(value.replace(/[,.%$]/g, ""))) ? true : false;
    }
  }, {
    key: 'parseIfFloat',
    value: function parseIfFloat(value) {
      return parseFloat(value.replace(/,/g, ""));
    }
  }, {
    key: 'sortDataByKey',
    value: function sortDataByKey(data, key, fn) {
      var clone = Array.apply(null, data);

      return clone.sort(function (a, b) {
        return fn(a[key], b[key]);
      });
    }
  }, {
    key: 'onStateChange',
    value: function onStateChange(index) {
      var _this4 = this;

      var sortings = this.state.sortings.map(function (sorting, i) {
        if (i == index) sorting = _this4.nextSortingState(sorting);

        return sorting;
      }.bind(this));

      this.setState({
        sortings: sortings
      });
    }
  }, {
    key: 'nextSortingState',
    value: function nextSortingState(state) {
      var next = void 0;
      switch (state) {
        case "both":
          next = "desc";
          break;
        case "desc":
          next = "asc";
          break;
        case "asc":
          next = "both";
          break;
      }
      return next;
    }
  }, {
    key: 'render',
    value: function render() {
      var sortedData = this.sortData(this.props.data, this.state.sortings);

      return React.createElement(
        'table',
        {
          className: 'table',
          style: this.props.style },
        React.createElement(_sortableTableHeader2.default, {
          columns: this.props.columns,
          sortings: this.state.sortings,
          onStateChange: this.onStateChange.bind(this),
          iconStyle: this.props.iconStyle,
          iconDesc: this.props.iconDesc,
          iconAsc: this.props.iconAsc,
          iconBoth: this.props.iconBoth }),
        React.createElement(_sortableTableBody2.default, {
          columns: this.props.columns,
          data: sortedData,
          sortings: this.state.sortings })
      );
    }
  }]);

  return SortableTable;
}(_react.Component);

SortableTable.propTypes = {
  data: _react.PropTypes.array.isRequired,
  columns: _react.PropTypes.array.isRequired,
  style: _react.PropTypes.object,
  iconStyle: _react.PropTypes.object,
  iconDesc: _react.PropTypes.node,
  iconAsc: _react.PropTypes.node,
  iconBoth: _react.PropTypes.node
};
exports.default = SortableTable;