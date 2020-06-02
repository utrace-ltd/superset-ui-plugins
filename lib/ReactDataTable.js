"use strict";

exports.__esModule = true;
exports["default"] = ReactDataTable;

var _translation = require("@superset-ui/translation");

var _react = _interopRequireWildcard(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _numberFormat = require("@superset-ui/number-format");

var _timeFormat = require("@superset-ui/time-format");

var _jquery = _interopRequireDefault(require("jquery"));

var _dataTables = _interopRequireDefault(require("datatables.net-bs/js/dataTables.bootstrap"));

require("datatables.net-bs/css/dataTables.bootstrap.css");

require("./Table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//import { filterXSS } from 'xss';
// initialize datatables.net
// Depending on how the modules are imported, `dt` may be a CommonJS init function,
// or the DataTable class itself. In case it is the former, we'd need to tell it
// where is jQuery.
if (!_dataTables["default"].$) {
  (0, _dataTables["default"])(window, _jquery["default"]);
}

var PERCENT_3_POINT = _numberFormat.NumberFormats.PERCENT_3_POINT; //const isProbablyHTML = (text: string) => /<[^>]+>/.test(text);

function ReactDataTable(props) {
  var data = props.data,
      height = props.height,
      _props$alignPositiveN = props.alignPositiveNegative,
      alignPositiveNegative = _props$alignPositiveN === void 0 ? false : _props$alignPositiveN,
      _props$colorPositiveN = props.colorPositiveNegative,
      colorPositiveNegative = _props$colorPositiveN === void 0 ? false : _props$colorPositiveN,
      columns = props.columns,
      _props$includeSearch = props.includeSearch,
      includeSearch = _props$includeSearch === void 0 ? false : _props$includeSearch,
      aggMetrics = props.metrics,
      pageLength = props.pageLength,
      percentMetrics = props.percentMetrics,
      tableTimestampFormat = props.tableTimestampFormat;
  var formatTimestamp = (0, _timeFormat.getTimeFormatter)(tableTimestampFormat);
  var metrics = (aggMetrics || []).concat(percentMetrics || []) // actual records must be of numeric types as well
  .filter(function (m) {
    return data[0] && typeof data[0][m] === 'number';
  }); // check whethere a key is a metric

  var metricsSet = new Set(aggMetrics);
  var percentMetricsSet = new Set(percentMetrics); // collect min/max for rendering bars

  var maxes = {};
  var mins = {};
  columns.forEach(function (_ref) {
    var key = _ref.key;
    var vals = data.map(function (row) {
      return row[key];
    });

    if (metrics.includes(key)) {
      var nums = vals;

      if (alignPositiveNegative) {
        maxes[key] = Math.max.apply(Math, nums.map(Math.abs));
      } else {
        maxes[key] = Math.max.apply(Math, nums);
        mins[key] = Math.min.apply(Math, nums);
      }
    }
  });
  var viewportHeight = Math.min(height, window.innerHeight);
  var pageLengthChoices = [10, 25, 40, 50, 75, 100, 150, 200];
  var hasPagination = pageLength > 0;
  var rootElem = /*#__PURE__*/(0, _react.createRef)();
  /**
   * Adjust styles after rendering the table
   */

  function drawCallback() {
    var root = rootElem.current; // force smaller pagination, because datatables-bs hard-corded pagination styles

    (0, _jquery["default"])('.pagination', root).addClass('pagination-sm'); // display tr rows on current page

    (0, _jquery["default"])('tr', root).css('display', '');
  }

  function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }
  /**
   * Format text for cell value
   */


  function cellText(key, format, val) {
    if (key === '__timestamp') {
      return formatTimestamp(val);
    }

    if (endsWith(key, '_date')) {
      return new Date(val).toLocaleDateString();
    }

    if (typeof val === 'string') {
      return val; //return filterXSS(val, { stripIgnoreTag: true });
    }

    if (percentMetricsSet.has(key)) {
      // in case percent metric can specify percent format in the future
      return (0, _numberFormat.formatNumber)(format || PERCENT_3_POINT, val);
    }

    if (metricsSet.has(key)) {
      // default format '' will return human readable numbers (e.g. 50M, 33k)
      return (0, _numberFormat.formatNumber)(format, val);
    }

    return val;
  }
  /**
   * Cell background to render columns as horizontal bar chart
   */


  function cellBar(key, val) {
    var r = colorPositiveNegative && val < 0 ? 150 : 0;

    if (alignPositiveNegative) {
      var perc = Math.abs(Math.round(val / maxes[key] * 100)); // The 0.01 to 0.001 is a workaround for what appears to be a
      // CSS rendering bug on flat, transparent colors

      return "linear-gradient(to right, rgba(" + r + ",0,0,0.2), rgba(" + r + ",0,0,0.2) " + perc + "%, " + ("rgba(0,0,0,0.01) " + perc + "%, rgba(0,0,0,0.001) 100%)");
    }

    var posExtent = Math.abs(Math.max(maxes[key], 0));
    var negExtent = Math.abs(Math.min(mins[key], 0));
    var tot = posExtent + negExtent;
    var perc1 = Math.round(Math.min(negExtent + val, negExtent) / tot * 100);
    var perc2 = Math.round(Math.abs(val) / tot * 100); // The 0.01 to 0.001 is a workaround for what appears to be a
    // CSS rendering bug on flat, transparent colors

    return "linear-gradient(to right, rgba(0,0,0,0.01), rgba(0,0,0,0.001) " + perc1 + "%, " + ("rgba(" + r + ",0,0,0.2) " + perc1 + "%, rgba(" + r + ",0,0,0.2) " + (perc1 + perc2) + "%, ") + ("rgba(0,0,0,0.01) " + (perc1 + perc2) + "%, rgba(0,0,0,0.001) 100%)");
  }

  var options = {
    aaSorting: [],
    // initial sorting order, reset to [] to use backend ordering
    autoWidth: false,
    paging: hasPagination,
    pagingType: 'first_last_numbers',
    pageLength: pageLength,
    lengthMenu: [[].concat(pageLengthChoices, [-1]), [].concat(pageLengthChoices, [(0, _translation.t)('All')])],
    searching: includeSearch,
    language: {
      paginate: {
        first: (0, _translation.t)('First'),
        last: (0, _translation.t)('Last'),
        previous: (0, _translation.t)('Previous'),
        next: (0, _translation.t)('Next')
      }
    },
    bInfo: false,
    scrollY: viewportHeight + "px",
    scrollCollapse: true,
    scrollX: true,
    drawCallback: drawCallback
  };
  (0, _react.useEffect)(function () {
    var $root = (0, _jquery["default"])(rootElem.current);
    var dataTable = $root.find('table').DataTable(options); // adjust table height

    var scrollHeadHeight = $root.find('.dataTables_scrollHead').height() || 0;
    var paginationHeight = $root.find('.dataTables_paginate').height() || 0;
    var searchBarHeight = $root.find('.dataTables_length,.dataTables_filter').closest('.row').height() || 0;
    var scrollBodyHeight = viewportHeight - scrollHeadHeight - paginationHeight - searchBarHeight;
    $root.find('.dataTables_scrollBody').css('max-height', scrollBodyHeight);
    return function () {
      // there may be weird lifecycle issues, so put destroy in try/catch
      try {
        dataTable.destroy(); // reset height

        $root.find('.dataTables_scrollBody').css('max-height', '');
      } catch (error) {// pass
      }
    };
  });

  var tableElement = /*#__PURE__*/_react["default"].createElement("table", {
    className: "table table-striped table-condensed table-hover"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (col) {
    return (
      /*#__PURE__*/
      // by default all columns will have sorting
      _react["default"].createElement("th", {
        key: col.key,
        className: "sorting",
        title: col.label
      }, col.label)
    );
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (record, i) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      // eslint-disable-next-line react/no-array-index-key
      key: i // hide rows after first page makes the initial render faster (less layout computation)
      ,
      style: {
        display: pageLength > 0 && i >= pageLength ? 'none' : undefined
      }
    }, columns.map(function (_ref2) {
      var key = _ref2.key,
          format = _ref2.format;
      var val = record[key];
      var keyIsMetric = metricsSet.has(key);
      var text = cellText(key, format, val);
      var isHtml = !keyIsMetric && false; //isProbablyHTML(text);

      return /*#__PURE__*/_react["default"].createElement("td", {
        key: key // only set innerHTML for actual html content, this saves time
        ,
        dangerouslySetInnerHTML: isHtml ? {
          __html: text
        } : undefined,
        "data-sort": val,
        className: keyIsMetric ? 'text-right' : '',
        style: {
          backgroundImage: keyIsMetric ? cellBar(key, val) : undefined
        },
        title: keyIsMetric || percentMetricsSet.has(key) ? String(val) : ''
      }, isHtml ? null : text);
    }));
  })));

  return /*#__PURE__*/_react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: _server["default"].renderToStaticMarkup(tableElement)
    },
    ref: rootElem,
    className: "superset-legacy-chart-table"
  });
}