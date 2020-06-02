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

/**
 * Consolidate list of metrics to string, identified by its unique identifier
 */
var consolidateMetricShape = function consolidateMetricShape(metric) {
  if (typeof metric === 'string') return metric; // even thought `metric.optionName` is more unique, it's not used
  // anywhere else in `queryData` and cannot be used to access `data.records`.
  // The records are still keyed by `metric.label`.

  return metric.label;
};

export default function transformProps(chartProps) {
  var height = chartProps.height,
      datasource = chartProps.datasource,
      formData = chartProps.formData,
      queryData = chartProps.queryData;
  var alignPn = formData.alignPn,
      colorPn = formData.colorPn,
      includeSearch = formData.includeSearch,
      orderDesc = formData.orderDesc,
      pageLength = formData.pageLength,
      metrics_ = formData.metrics,
      percentMetrics_ = formData.percentMetrics,
      tableTimestampFormat = formData.tableTimestampFormat;
  var columnFormats = datasource.columnFormats,
      verboseMap = datasource.verboseMap;
  var _queryData$data = queryData.data,
      records = _queryData$data.records,
      columns_ = _queryData$data.columns;
  var metrics = (metrics_ != null ? metrics_ : []).map(consolidateMetricShape); // percent metrics always starts with a '%' sign.

  var percentMetrics = (percentMetrics_ != null ? percentMetrics_ : []).map(consolidateMetricShape).map(function (x) {
    return "%" + x;
  });
  var columns = columns_.map(function (key) {
    var label = verboseMap[key] || key; // make sure there is a " " after "%" for percent metrics

    if (label[0] === '%' && label[1] !== ' ') {
      label = "% " + label.slice(1);
    }

    return {
      key: key,
      label: label,
      format: columnFormats == null ? void 0 : columnFormats[key]
    };
  });
  return {
    height: height,
    data: records,
    columns: columns,
    metrics: metrics,
    percentMetrics: percentMetrics,
    alignPositiveNegative: alignPn,
    colorPositiveNegative: colorPn,
    includeSearch: includeSearch,
    orderDesc: orderDesc,
    pageLength: pageLength && parseInt(pageLength, 10),
    tableTimestampFormat: tableTimestampFormat
  };
}