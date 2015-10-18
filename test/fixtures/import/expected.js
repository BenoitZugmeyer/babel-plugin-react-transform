"use strict";

var _myCustomModuleWrap2 = require("my-custom-module/wrap");

var _myCustomModuleWrap3 = _interopRequireDefault(_myCustomModuleWrap2);

var _react = require("react");

var _myOtherCustomModuleWrap2 = require("my-other-custom-module/wrap");

var _myOtherCustomModuleWrap3 = _interopRequireDefault(_myOtherCustomModuleWrap2);

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _search = require("./search");

var _search2 = _interopRequireDefault(_search);

var _components = {
  _$Search: {
    displayName: "Search"
  }
};

var _reactComponentWrapper = (0, _myCustomModuleWrap3["default"])({
  filename: "%FIXTURE_PATH%",
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _myOtherCustomModuleWrap3["default"])({
  filename: "%FIXTURE_PATH%",
  components: _components,
  locals: [],
  imports: []
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Search = (function () {
  function Search() {
    _classCallCheck(this, _Search);
  }

  _createClass(Search, [{
    key: "search",
    value: function search(query) {
      (0, _search2["default"])(query);
    }
  }, {
    key: "render",
    value: function render() {}
  }]);

  var _Search = Search;
  Search = _wrapComponent("_$Search")(Search) || Search;
  return Search;
})();

