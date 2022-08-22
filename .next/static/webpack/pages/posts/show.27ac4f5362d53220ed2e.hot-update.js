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
                  _context.next = 14;
                  break;
                }

                console.log(_this.props.commentCount);
                console.log(_this.state.commentIndex);
                _context.next = 12;
                return _this.props.post.methods.createComment(_this.state.commentIndex, _this.state.comment, accounts[0], time).send({
                  from: accounts[0]
                });

              case 12:
                _context.next = 17;
                break;

              case 14:
                _this.setState({
                  commentIndex: _this.props.commentCount
                });

                _context.next = 17;
                return _this.props.post.methods.createComment(_this.state.commentIndex, _this.state.comment, accounts[0], time).send({
                  from: accounts[0]
                });

              case 17:
                _routes__WEBPACK_IMPORTED_MODULE_16__.Router.replaceRoute("/posts/".concat(_this.props.address));
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](6);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 23:
                _this.setState({
                  loading: false,
                  comment: ''
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 20]]);
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
          lineNumber: 66,
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
          lineNumber: 76,
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
                lineNumber: 87,
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
                lineNumber: 88,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.Button, {
              loading: this.state.loading,
              content: "Add Comment",
              labelPosition: "left",
              icon: "edit",
              primary: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 11
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvc2hvdy5qcyJdLCJuYW1lcyI6WyJQb3N0U2hvdyIsImNvbW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiY29tbWVudEluZGV4IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndlYjMiLCJhY2NvdW50cyIsInRpbWUiLCJtb21lbnQiLCJmb3JtYXQiLCJzZXRTdGF0ZSIsInByb3BzIiwiY29tbWVudENvdW50IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwicG9zdCIsIm1ldGhvZHMiLCJjcmVhdGVDb21tZW50Iiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJhZGRyZXNzIiwibWVzc2FnZSIsIl9wb3N0IiwiY29tbWVudHMiLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiY29udGVudCIsInVwVm90ZSIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwicmVuZGVyQ29tbWVudHMiLCJvblN1Ym1pdCIsInRhcmdldCIsInZhbHVlIiwiUG9zdCIsInF1ZXJ5IiwiZ2V0Q29tbWVudHNDb3VudCIsImNhbGwiLCJnZXRUaXRsZSIsImdldENvbnRlbnQiLCJnZXRVcFZvdGVzIiwidXBWb3RlcyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs0V0FFUTtBQUNSQyxhQUFPLEVBQUUsRUFERDtBQUVSQyxrQkFBWSxFQUFFLEVBRk47QUFHUkMsYUFBTyxFQUFFLEtBSEQ7QUFJUkMsa0JBQVksRUFBRTtBQUpOLEs7OztxV0EwQkQsaUJBQU9DLEtBQVA7QUFBQTtBQUFB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SSxDQUFDQyxPQUFMLENBQWF1QixnQkFBYixHQUFnQ0MsSUFBaEMsRTs7O0FBQXJCOUIsNEI7O3VCQUdjSyxJQUFJLENBQUNDLE9BQUwsQ0FBYXlCLFFBQWIsR0FBd0JELElBQXhCLEU7OztBQUFkYixxQjs7dUJBQ2dCWixJQUFJLENBQUNDLE9BQUwsQ0FBYTBCLFVBQWIsR0FBMEJGLElBQTFCLEU7OztBQUFoQlosdUI7O3VCQUNnQmIsSUFBSSxDQUFDQyxPQUFMLENBQWEyQixVQUFiLEdBQTBCSCxJQUExQixFOzs7QUFBaEJJLHVCOzt1QkFFaUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUNyQkMsS0FBSyxDQUFDQyxRQUFRLENBQUN0QyxZQUFELENBQVQsQ0FBTCxDQUE4QnVDLElBQTlCLEdBQXFDeEIsR0FBckMsQ0FBeUMsVUFBQ3lCLE9BQUQsRUFBVXhCLEtBQVYsRUFBb0I7QUFDM0QseUJBQU9YLElBQUksQ0FBQ0MsT0FBTCxDQUFhUSxRQUFiLENBQXNCRSxLQUF0QixFQUE2QmMsSUFBN0IsRUFBUDtBQUNELGlCQUZELENBRHFCLEM7OztBQUFqQmhCLHdCOztBQU1HVCxzQkFBSSxFQUFKQSxJO0FBQU1ZLHVCQUFLLEVBQUxBLEs7QUFBT0MseUJBQU8sRUFBUEEsTztBQUFTZ0IseUJBQU8sRUFBUEEsTztBQUFTdkIseUJBQU8sRUFBUEEsTztBQUFTRywwQkFBUSxFQUFSQSxRO0FBQVVkLDhCQUFZLEVBQVpBOzhCQUF1QkQsS0FBSyxDQUFDNkIsS0FBTixDQUFZakIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpCM0U4Qiw2Qzs7QUEwRnZCLCtEQUFldkQsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0cy9zaG93LjI3YWM0ZjUzNjJkNTMyMjBlZDJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9wb3N0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBQb3N0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdEJveCc7XHJcbmltcG9ydCBDb21tZW50RGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnREZXRhaWxzJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgSWNvbiwgQ29udGFpbmVyLCBIZWFkZXIsIERpdmlkZXIsIEdyaWQsIENvbW1lbnQsIEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuY2xhc3MgUG9zdFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgIGNvbW1lbnQ6ICcnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgY29tbWVudEluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHBvc3QgPSBQb3N0KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XHJcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBhd2FpdCBwb3N0Lm1ldGhvZHMuZ2V0Q29tbWVudHNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAvL0RvIGEgc2luZ2xlIGNhbGwgdG8gZ2V0IHRoZSBkYXRhLiBMaWtlIGdldFN1bW1hcnkgZnJvbSBjYW1wYWlnbnNcclxuICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgcG9zdC5tZXRob2RzLmdldFRpdGxlKCkuY2FsbCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRDb250ZW50KCkuY2FsbCgpO1xyXG4gICAgY29uc3QgdXBWb3RlcyA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRVcFZvdGVzKCkuY2FsbCgpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5KHBhcnNlSW50KGNvbW1lbnRDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBvc3QubWV0aG9kcy5jb21tZW50cyhpbmRleCkuY2FsbCgpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7IHBvc3QsIHRpdGxlLCBjb250ZW50LCB1cFZvdGVzLCBhZGRyZXNzLCBjb21tZW50cywgY29tbWVudENvdW50LCBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzIH07XHJcbiAgICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gIGxldCB0aW1lID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xyXG5cclxuICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcclxuICB0cnkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29tbWVudENvdW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNvbW1lbnRDb3VudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudEluZGV4KTtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5wb3N0Lm1ldGhvZHMuY3JlYXRlQ29tbWVudCh0aGlzLnN0YXRlLmNvbW1lbnRJbmRleCwgdGhpcy5zdGF0ZS5jb21tZW50LCBhY2NvdW50c1swXSwgdGltZSkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWVudEluZGV4OiB0aGlzLnByb3BzLmNvbW1lbnRDb3VudH0pXHJcbiAgICAgIGF3YWl0IHRoaXMucHJvcHMucG9zdC5tZXRob2RzLmNyZWF0ZUNvbW1lbnQodGhpcy5zdGF0ZS5jb21tZW50SW5kZXgsIHRoaXMuc3RhdGUuY29tbWVudCwgYWNjb3VudHNbMF0sIHRpbWUpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXX0pO1xyXG4gICAgfVxyXG4gIFJvdXRlci5yZXBsYWNlUm91dGUoYC9wb3N0cy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKTtcclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XHJcbn1cclxudGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBjb21tZW50OiAnJyB9KVxyXG59O1xyXG5cclxuICAgIHJlbmRlckNvbW1lbnRzKCkge1xyXG4gICAgICBjb25zdCBfcG9zdCA9IHRoaXMucHJvcHMucG9zdDtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gPENvbW1lbnREZXRhaWxzIGNvbW1lbnQ9e2NvbW1lbnR9IHBvc3Q9e19wb3N0fSAvPjtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgPFBvc3RCb3hcclxuICAgICAgcG9zdD17dGhpcy5wcm9wcy5hZGRyZXNzfVxyXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy50aXRsZX1cclxuICAgICAgY29udGVudD17dGhpcy5wcm9wcy5jb250ZW50fVxyXG4gICAgICB1cFZvdGVzPXt0aGlzLnByb3BzLnVwVm90ZX1cclxuICAgICAgLz5cclxuICAgICAgPENvbW1lbnQuR3JvdXAgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnd2hpdGUnLCBib3JkZXJSYWRpdXM6ICcxMHB4JywgcGFkZGluZzogJzEwcHgnfX0+XHJcbiAgICAgICAge3RoaXMucmVuZGVyQ29tbWVudHMoKX1cclxuXHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSByZXBseT5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPlNheSBTb21ldGhpbmcuLi48L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29tbWVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBjb21tZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBjb250ZW50PSdBZGQgQ29tbWVudCcgbGFiZWxQb3NpdGlvbj0nbGVmdCcgaWNvbj0nZWRpdCcgcHJpbWFyeSAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDwvQ29tbWVudC5Hcm91cD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTaG93O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9