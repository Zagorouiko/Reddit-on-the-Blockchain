(function() {
var exports = {};
exports.id = "pages/posts/new";
exports.ids = ["pages/posts/new"];
exports.modules = {

/***/ "./pages/posts/new.js":
/*!****************************!*\
  !*** ./pages/posts/new.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/factory */ "./ethereum/factory.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\pages\\posts\\new.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PostNew extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      title: '',
      content: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      this.setState({
        loading: true
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__.default.eth.getAccounts();
        await _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__.default.methods.createPost(this.state.title, this.state.content).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_6__.Router.pushRoute('/');
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        style: {
          textAlign: "center"
        },
        children: "Create a Post"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
        onSubmit: this.onSubmit,
        error: !!this.state.errorMessage,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Title"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
            value: this.state.title,
            onChange: event => this.setState({
              title: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Field, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
            children: "Content"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
            value: this.state.content,
            onChange: event => this.setState({
              content: event.target.value
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
          error: true,
          header: "Oops",
          content: this.state.errorMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
          loading: this.state.loading,
          primary: true,
          children: "Create"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostNew);

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-ethereum_factory_js"], function() { return __webpack_exec__("./pages/posts/new.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vLi9wYWdlcy9wb3N0cy9uZXcuanMiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIlBvc3ROZXciLCJDb21wb25lbnQiLCJ0aXRsZSIsImNvbnRlbnQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiYWNjb3VudHMiLCJ3ZWIzIiwiZmFjdG9yeSIsInN0YXRlIiwic2VuZCIsImZyb20iLCJSb3V0ZXIiLCJlcnIiLCJtZXNzYWdlIiwicmVuZGVyIiwidGV4dEFsaWduIiwib25TdWJtaXQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU4sU0FBc0JDLDRDQUF0QixDQUFnQztBQUFBO0FBQUE7O0FBQUEsbUNBQ3RCO0FBQ1JDLFdBQUssRUFBRSxFQURDO0FBRVJDLGFBQU8sRUFBRSxFQUZEO0FBR1JDLGtCQUFZLEVBQUUsRUFITjtBQUlSQyxhQUFPLEVBQUU7QUFKRCxLQURzQjs7QUFBQSxzQ0FRbkIsTUFBT0MsS0FBUCxJQUFpQjtBQUM1QkEsV0FBSyxDQUFDQyxjQUFOO0FBRUEsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRTtBQUFYLE9BQWQ7O0FBRUEsVUFBSTtBQUNKLGNBQU1JLFFBQVEsR0FBRyxNQUFNQyxtRUFBQSxFQUF2QjtBQUNBLGNBQU1DLHlFQUFBLENBQ00sS0FBS0MsS0FBTCxDQUFXVixLQURqQixFQUN3QixLQUFLVSxLQUFMLENBQVdULE9BRG5DLEVBRUxVLElBRkssQ0FFQTtBQUNKQyxjQUFJLEVBQUVMLFFBQVEsQ0FBQyxDQUFEO0FBRFYsU0FGQSxDQUFOO0FBTUFNLDZEQUFBLENBQWlCLEdBQWpCO0FBQ0QsT0FUQyxDQVNBLE9BQU9DLEdBQVAsRUFBWTtBQUNaLGFBQUtSLFFBQUwsQ0FBYztBQUFFSixzQkFBWSxFQUFFWSxHQUFHLENBQUNDO0FBQXBCLFNBQWQ7QUFDRDs7QUFFRCxXQUFLVCxRQUFMLENBQWM7QUFBRUgsZUFBTyxFQUFFO0FBQVgsT0FBZDtBQUNDLEtBM0IrQjtBQUFBOztBQTZCOUJhLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0E7QUFBSSxhQUFLLEVBQUU7QUFBQ0MsbUJBQVMsRUFBRTtBQUFaLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVFLDhEQUFDLG1EQUFEO0FBQU0sZ0JBQVEsRUFBRSxLQUFLQyxRQUFyQjtBQUErQixhQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUtSLEtBQUwsQ0FBV1IsWUFBbkQ7QUFBQSxnQ0FFRSw4REFBQyx5REFBRDtBQUFBLGtDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGVBRUUsOERBQUMsb0RBQUQ7QUFDQSxpQkFBSyxFQUFFLEtBQUtRLEtBQUwsQ0FBV1YsS0FEbEI7QUFFQSxvQkFBUSxFQUFFSSxLQUFLLElBQUksS0FBS0UsUUFBTCxDQUFjO0FBQUVOLG1CQUFLLEVBQUVJLEtBQUssQ0FBQ2UsTUFBTixDQUFhQztBQUF0QixhQUFkO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBVUUsOERBQUMseURBQUQ7QUFBQSxrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUVFLDhEQUFDLG9EQUFEO0FBQ0EsaUJBQUssRUFBRSxLQUFLVixLQUFMLENBQVdULE9BRGxCO0FBRUEsb0JBQVEsRUFBRUcsS0FBSyxJQUFJLEtBQUtFLFFBQUwsQ0FBYztBQUFFTCxxQkFBTyxFQUFFRyxLQUFLLENBQUNlLE1BQU4sQ0FBYUM7QUFBeEIsYUFBZDtBQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWtCRSw4REFBQyxzREFBRDtBQUFTLGVBQUssTUFBZDtBQUFlLGdCQUFNLEVBQUMsTUFBdEI7QUFBNkIsaUJBQU8sRUFBRSxLQUFLVixLQUFMLENBQVdSO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJGLGVBbUJFLDhEQUFDLHFEQUFEO0FBQVEsaUJBQU8sRUFBRSxLQUFLUSxLQUFMLENBQVdQLE9BQTVCO0FBQXFDLGlCQUFPLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTBCRDs7QUF4RDZCOztBQTJEaEMsK0RBQWVMLE9BQWYsRTs7Ozs7Ozs7Ozs7QUNsRUEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcG9zdHMvbmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UsIFRleHRBcmVhIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcblxyXG5jbGFzcyBQb3N0TmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICB0aXRsZTogJycsXHJcbiAgY29udGVudDogJycsXHJcbiAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICBsb2FkaW5nOiBmYWxzZVxyXG59O1xyXG5cclxuICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICB0cnkge1xyXG4gIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcclxuICAuY3JlYXRlUG9zdCh0aGlzLnN0YXRlLnRpdGxlLCB0aGlzLnN0YXRlLmNvbnRlbnQpXHJcbiAgLnNlbmQoe1xyXG4gICAgZnJvbTogYWNjb3VudHNbMF1cclxuICB9KTtcclxuXHJcbiAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG59IGNhdGNoIChlcnIpIHtcclxuICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxyXG59XHJcblxyXG50aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxufTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgPGgzIHN0eWxlPXt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+Q3JlYXRlIGEgUG9zdDwvaDM+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB0aXRsZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBjb250ZW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcblxyXG4gICAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wc1wiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+Q3JlYXRlPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3ROZXc7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcm91dGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3ZWIzXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9