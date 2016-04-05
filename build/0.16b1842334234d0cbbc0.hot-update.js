webpackHotUpdate(0,{

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(184);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _d3plus = __webpack_require__(337);
	
	var _d3plus2 = _interopRequireDefault(_d3plus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var sample_data = [{ "value": 100, "name": "alpha" }, { "value": 70, "name": "beta" }, { "value": 40, "name": "gamma" }, { "value": 15, "name": "delta" }, { "value": 5, "name": "epsilon" }, { "value": 1, "name": "zeta" }];
	
	// Sample data array with 2 variables
	var sample_data2 = [{ "year": 1991, "name": "alpha", "value": 15 }, { "year": 1991, "name": "beta", "value": 10 }, { "year": 1991, "name": "gamma", "value": 5 }, { "year": 1991, "name": "delta", "value": 50 }, { "year": 1992, "name": "alpha", "value": 20 }, { "year": 1992, "name": "beta", "value": 10 }, { "year": 1992, "name": "gamma", "value": 10 }, { "year": 1992, "name": "delta", "value": 43 }, { "year": 1993, "name": "alpha", "value": 30 }, { "year": 1993, "name": "beta", "value": 40 }, { "year": 1993, "name": "gamma", "value": 20 }, { "year": 1993, "name": "delta", "value": 17 }, { "year": 1994, "name": "alpha", "value": 60 }, { "year": 1994, "name": "beta", "value": 60 }, { "year": 1994, "name": "gamma", "value": 25 }, { "year": 1994, "name": "delta", "value": 32 }];
	
	var VizPage = function (_React$Component) {
	  _inherits(VizPage, _React$Component);
	
	  function VizPage(props) {
	    _classCallCheck(this, VizPage);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VizPage).call(this, props));
	  }
	
	  _createClass(VizPage, [{
	    key: 'drawViz',
	    value: function drawViz() {
	      var visualization = _d3plus2.default.viz().container(".viz").type("bar").data(sample_data2).id("name").x("year").y("value").draw();
	
	      visualization.x({ value: "year", stacked: true });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'viz' },
	        ' '
	      );
	    }
	  }]);
	
	  return VizPage;
	}(_react2.default.Component);
	
	exports.default = VizPage;

/***/ }

})
//# sourceMappingURL=0.16b1842334234d0cbbc0.hot-update.js.map