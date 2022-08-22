self["webpackHotUpdate_N_E"]("pages/posts/show",{

/***/ "./pages/posts/show.js":
/*!*****************************!*\
  !*** ./pages/posts/show.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ethereum_post__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ethereum/post */ "./ethereum/post.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PostBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/PostBox */ "./components/PostBox.js");
/* harmony import */ var _components_CommentDetails__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/CommentDetails */ "./components/CommentDetails.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_17__);
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\pages\\posts\\show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var PostShow = /*#__PURE__*/function (_Component) {
  (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(PostShow, _Component);

  var _super = _createSuper(PostShow);

  function PostShow() {
    var _this;

    (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, PostShow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "state", {
      comment: '',
      errorMessage: '',
      loading: false,
      commentIndex: 0
    });

    (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "onSubmit", /*#__PURE__*/function () {
      var _ref = (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {
        var accounts, time;
        return C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _ethereum_web3__WEBPACK_IMPORTED_MODULE_15__.default.eth.getAccounts();

              case 3:
                accounts = _context.sent;
                time = moment__WEBPACK_IMPORTED_MODULE_17___default()().format('MMMM Do YYYY, h:mm:ss a');

                _this.setState({
                  loading: true,
                  errorMessage: ''
                });

                _context.prev = 6;

                if (!(_this.props.commentCount == undefined)) {
                  _context.next = 12;
                  break;
                }

                _context.next = 10;
                return _this.props.post.methods.createComment(_this.state.commentIndex, _this.state.comment, accounts[0], time).send({
                  from: accounts[0]
                });

              case 10:
                _context.next = 15;
                break;

              case 12:
                _this.setState({
                  commentIndex: _this.props.commentCount
                });

                _context.next = 15;
                return _this.props.post.methods.createComment(_this.state.commentIndex, _this.state.comment, accounts[0], time).send({
                  from: accounts[0]
                });

              case 15:
                _routes__WEBPACK_IMPORTED_MODULE_16__.Router.replaceRoute("/posts/".concat(_this.props.address));
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](6);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 21:
                _this.setState({
                  loading: false,
                  comment: ''
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 18]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(PostShow, [{
    key: "renderComments",
    value: function renderComments() {
      var _this2 = this;

      var _post = this.props.post;
      return this.props.comments.map(function (comment, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentDetails__WEBPACK_IMPORTED_MODULE_14__.default, {
          comment: comment,
          post: _post
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 14
        }, _this2);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_12__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostBox__WEBPACK_IMPORTED_MODULE_13__.default, {
          post: this.props.address,
          title: this.props.title,
          content: this.props.content,
          upVotes: this.props.upVote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Comment.Group, {
          style: {
            background: 'white',
            borderRadius: '10px',
            padding: '10px'
          },
          children: [this.renderComments(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Form, {
            onSubmit: this.onSubmit,
            error: !!this.state.errorMessage,
            reply: true,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Form.Field, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                children: "Say Something..."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 11
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Input, {
                labelPosition: "right",
                value: this.state.comment,
                onChange: function onChange(event) {
                  return _this3.setState({
                    comment: event.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
              loading: this.state.loading,
              content: "Add Comment",
              labelPosition: "left",
              icon: "edit",
              primary: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(props) {
        var post, address, commentCount, title, content, upVotes, comments;
        return C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                post = (0,_ethereum_post__WEBPACK_IMPORTED_MODULE_11__.default)(props.query.address);
                address = props.query.address;
                _context2.next = 4;
                return post.methods.getCommentsCount().call();

              case 4:
                commentCount = _context2.sent;
                _context2.next = 7;
                return post.methods.getTitle().call();

              case 7:
                title = _context2.sent;
                _context2.next = 10;
                return post.methods.getContent().call();

              case 10:
                content = _context2.sent;
                _context2.next = 13;
                return post.methods.getUpVotes().call();

              case 13:
                upVotes = _context2.sent;
                _context2.next = 16;
                return Promise.all(Array(parseInt(commentCount)).fill().map(function (element, index) {
                  return post.methods.comments(index).call();
                }));

              case 16:
                comments = _context2.sent;
                return _context2.abrupt("return", (0,C_Users_Dr_Z_Downloads_Developer_RedditOnTheBlockchain_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)({
                  post: post,
                  title: title,
                  content: content,
                  upVotes: upVotes,
                  address: address,
                  comments: comments,
                  commentCount: commentCount
                }, "address", props.query.address));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return PostShow;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvc2hvdy5qcyJdLCJuYW1lcyI6WyJQb3N0U2hvdyIsImNvbW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiY29tbWVudEluZGV4IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndlYjMiLCJhY2NvdW50cyIsInRpbWUiLCJtb21lbnQiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsInByb3BzIiwiY29tbWVudENvdW50IiwidW5kZWZpbmVkIiwicG9zdCIsIm1ldGhvZHMiLCJjcmVhdGVDb21tZW50Iiwic3RhdGUiLCJzZW5kIiwiZnJvbSIsIlJvdXRlciIsImFkZHJlc3MiLCJtZXNzYWdlIiwiX3Bvc3QiLCJjb21tZW50cyIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJjb250ZW50IiwidXBWb3RlIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJyZW5kZXJDb21tZW50cyIsIm9uU3VibWl0IiwidGFyZ2V0IiwidmFsdWUiLCJQb3N0IiwicXVlcnkiLCJnZXRDb21tZW50c0NvdW50IiwiY2FsbCIsImdldFRpdGxlIiwiZ2V0Q29udGVudCIsImdldFVwVm90ZXMiLCJ1cFZvdGVzIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUdNQSxROzs7Ozs7Ozs7Ozs7Ozs7OzRXQUVRO0FBQ1JDLGFBQU8sRUFBRSxFQUREO0FBRVJDLGtCQUFZLEVBQUUsRUFGTjtBQUdSQyxhQUFPLEVBQUUsS0FIRDtBQUlSQyxrQkFBWSxFQUFFO0FBSk4sSzs7O3FXQTBCRCxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QkFDZ0JiLElBQUksQ0FBQ0MsT0FBTCxDQUFhMkIsVUFBYixHQUEwQkYsSUFBMUIsRTs7O0FBQWhCWix1Qjs7dUJBQ2dCZCxJQUFJLENBQUNDLE9BQUwsQ0FBYTRCLFVBQWIsR0FBMEJILElBQTFCLEU7OztBQUFoQkksdUI7O3VCQUVpQkMsT0FBTyxDQUFDQyxHQUFSLENBQ3JCQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ3BDLFlBQUQsQ0FBVCxDQUFMLENBQThCcUMsSUFBOUIsR0FBcUN4QixHQUFyQyxDQUF5QyxVQUFDeUIsT0FBRCxFQUFVeEIsS0FBVixFQUFvQjtBQUMzRCx5QkFBT1osSUFBSSxDQUFDQyxPQUFMLENBQWFTLFFBQWIsQ0FBc0JFLEtBQXRCLEVBQTZCYyxJQUE3QixFQUFQO0FBQ0QsaUJBRkQsQ0FEcUIsQzs7O0FBQWpCaEIsd0I7O0FBTUdWLHNCQUFJLEVBQUpBLEk7QUFBTWEsdUJBQUssRUFBTEEsSztBQUFPQyx5QkFBTyxFQUFQQSxPO0FBQVNnQix5QkFBTyxFQUFQQSxPO0FBQVN2Qix5QkFBTyxFQUFQQSxPO0FBQVNHLDBCQUFRLEVBQVJBLFE7QUFBVVosOEJBQVksRUFBWkE7OEJBQXVCRCxLQUFLLENBQUMyQixLQUFOLENBQVlqQixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekIzRThCLDZDOztBQTZGdkIsK0RBQWVyRCxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL3Nob3cuYTZjNTQyODllZmZjNTYwZTM0ODMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2V0aGVyZXVtL3Bvc3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFBvc3RCb3ggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0Qm94JztcclxuaW1wb3J0IENvbW1lbnREZXRhaWxzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbWVudERldGFpbHMnO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBJY29uLCBDb250YWluZXIsIEhlYWRlciwgRGl2aWRlciwgR3JpZCwgQ29tbWVudCwgRm9ybSwgSW5wdXQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcblxyXG5jbGFzcyBQb3N0U2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgICBzdGF0ZSA9IHtcclxuICAgICAgY29tbWVudDogJycsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJycsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBjb21tZW50SW5kZXg6IDBcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xyXG4gICAgY29uc3QgcG9zdCA9IFBvc3QocHJvcHMucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcclxuICAgIGNvbnN0IGNvbW1lbnRDb3VudCA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRDb21tZW50c0NvdW50KCkuY2FsbCgpO1xyXG5cclxuICAgIC8vRG8gYSBzaW5nbGUgY2FsbCB0byBnZXQgdGhlIGRhdGEuIExpa2UgZ2V0U3VtbWFyeSBmcm9tIGNhbXBhaWduc1xyXG4gICAgY29uc3QgdGl0bGUgPSBhd2FpdCBwb3N0Lm1ldGhvZHMuZ2V0VGl0bGUoKS5jYWxsKCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcG9zdC5tZXRob2RzLmdldENvbnRlbnQoKS5jYWxsKCk7XHJcbiAgICBjb25zdCB1cFZvdGVzID0gYXdhaXQgcG9zdC5tZXRob2RzLmdldFVwVm90ZXMoKS5jYWxsKCk7XHJcblxyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgQXJyYXkocGFyc2VJbnQoY29tbWVudENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gcG9zdC5tZXRob2RzLmNvbW1lbnRzKGluZGV4KS5jYWxsKClcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHsgcG9zdCwgdGl0bGUsIGNvbnRlbnQsIHVwVm90ZXMsIGFkZHJlc3MsIGNvbW1lbnRzLCBjb21tZW50Q291bnQsIGFkZHJlc3M6IHByb3BzLnF1ZXJ5LmFkZHJlc3MgfTtcclxuICAgIH1cclxuXHJcbiAgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgbGV0IHRpbWUgPSBtb21lbnQoKS5mb3JtYXQoJ01NTU0gRG8gWVlZWSwgaDptbTpzcyBhJyk7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xyXG4gIHRyeSB7XHJcblxyXG4gICAgaWYgKHRoaXMucHJvcHMuY29tbWVudENvdW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLnBvc3QubWV0aG9kcy5jcmVhdGVDb21tZW50KHRoaXMuc3RhdGUuY29tbWVudEluZGV4LCB0aGlzLnN0YXRlLmNvbW1lbnQsIGFjY291bnRzWzBdLCB0aW1lKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF19KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb21tZW50SW5kZXg6IHRoaXMucHJvcHMuY29tbWVudENvdW50fSlcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5wb3N0Lm1ldGhvZHMuY3JlYXRlQ29tbWVudCh0aGlzLnN0YXRlLmNvbW1lbnRJbmRleCwgdGhpcy5zdGF0ZS5jb21tZW50LCBhY2NvdW50c1swXSwgdGltZSkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIFxyXG5cclxuICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvcG9zdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG59XHJcbnRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgY29tbWVudDogJycgfSlcclxufTtcclxuXHJcbiAgICByZW5kZXJDb21tZW50cygpIHtcclxuICAgICAgY29uc3QgX3Bvc3QgPSB0aGlzLnByb3BzLnBvc3Q7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxDb21tZW50RGV0YWlscyBjb21tZW50PXtjb21tZW50fSBwb3N0PXtfcG9zdH0gLz47XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxQb3N0Qm94XHJcbiAgICAgIHBvc3Q9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuY29udGVudH1cclxuICAgICAgdXBWb3Rlcz17dGhpcy5wcm9wcy51cFZvdGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwIHN0eWxlPXt7YmFja2dyb3VuZDogJ3doaXRlJywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIHBhZGRpbmc6ICcxMHB4J319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNvbW1lbnRzKCl9XHJcblxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gcmVwbHk+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5TYXkgU29tZXRoaW5nLi4uPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgY29tbWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gY29udGVudD0nQWRkIENvbW1lbnQnIGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2VkaXQnIHByaW1hcnkgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8L0NvbW1lbnQuR3JvdXA+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0U2hvdztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==