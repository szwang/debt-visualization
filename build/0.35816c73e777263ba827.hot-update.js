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
	
	var _country_debt = __webpack_require__(508);
	
	var _country_debt2 = _interopRequireDefault(_country_debt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// Sample data array
	var sample_data = [{ "name": "alpha", "size": 10 }, { "name": "beta", "size": 12 }, { "name": "gamma", "size": 30 }, { "name": "delta", "size": 26 }, { "name": "epsilon", "size": 12 }, { "name": "zeta", "size": 26 }, { "name": "theta", "size": 11 }, { "name": "eta", "size": 24 }];
	
	// Sample array of node positions
	var positions = [{ "name": "alpha", "x": 10, "y": 15 }, { "name": "beta", "x": 12, "y": 24 }, { "name": "gamma", "x": 16, "y": 18 }, { "name": "delta", "x": 26, "y": 21 }, { "name": "epsilon", "x": 13, "y": 4 }, { "name": "zeta", "x": 31, "y": 13 }, { "name": "theta", "x": 19, "y": 8 }, { "name": "eta", "x": 24, "y": 11 }];
	
	// Sample array of node connections
	var connections = [{ "source": "alpha", "target": "beta" }, { "source": "alpha", "target": "gamma" }, { "source": "beta", "target": "delta" }, { "source": "beta", "target": "epsilon" }, { "source": "zeta", "target": "gamma" }, { "source": "theta", "target": "gamma" }, { "source": "eta", "target": "gamma" }];
	
	var VizPage = function (_React$Component) {
	  _inherits(VizPage, _React$Component);
	
	  function VizPage(props) {
	    _classCallCheck(this, VizPage);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(VizPage).call(this, props));
	  }
	
	  _createClass(VizPage, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.drawViz();
	    }
	  }, {
	    key: 'drawViz',
	    value: function drawViz() {
	      var visualization = _d3plus2.default.viz().container(".viz").type("network").edges(connections).id("name").draw();
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
//# sourceMappingURL=0.35816c73e777263ba827.hot-update.js.map