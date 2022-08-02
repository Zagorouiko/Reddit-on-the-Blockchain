(function() {
var exports = {};
exports.id = "pages/posts/show";
exports.ids = ["pages/posts/show"];
exports.modules = {

/***/ "./components/CommentDetails.js":
/*!**************************************!*\
  !*** ./components/CommentDetails.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\components\\CommentDetails.js";

 //Anything inside Link gets a click event added

class CommentsDetails extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    const {
      comment
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
          as: "a",
          children: comment.owner
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Today at 5:42PM"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
          children: comment.comment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CommentDetails);

/***/ }),

/***/ "./pages/posts/show.js":
/*!*****************************!*\
  !*** ./pages/posts/show.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ethereum/post */ "./ethereum/post.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_PostBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostBox */ "./components/PostBox.js");
/* harmony import */ var _components_CommentDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/CommentDetails */ "./components/CommentDetails.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\pages\\posts\\show.js";







class PostShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(props) {
    const post = (0,_ethereum_post__WEBPACK_IMPORTED_MODULE_2__.default)(props.query.address);
    const address = props.query.address;
    const commentCount = await post.methods.getCommentsCount().call(); //Do a single call to get the data. Like getSummary from campaigns

    const title = await post.methods.getTitle().call();
    const content = await post.methods.getContent().call();
    const upVotes = await post.methods.getUpVotes().call();
    const comments = await Promise.all(Array(parseInt(commentCount)).fill().map((element, index) => {
      return post.methods.comments(index).call();
    }));
    return {
      post,
      title,
      content,
      upVotes,
      address,
      comments
    };
  }

  renderComments() {
    return this.props.comments.map((comment, index) => {
      return;

      /*#__PURE__*/
      (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentDetails__WEBPACK_IMPORTED_MODULE_5__.default, {
        comment: comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this);
    });
  }

  render() {
    console.log(this.props.comments);
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        post: this.props.address,
        title: this.props.title,
        content: this.props.content,
        upVotes: this.props.upVote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Comment.Group, {
        children: this.renderComments()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostShow);

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
var __webpack_exports__ = __webpack_require__.X(0, ["components_Layout_js-components_PostBox_js"], function() { return __webpack_exec__("./pages/posts/show.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vLi9jb21wb25lbnRzL0NvbW1lbnREZXRhaWxzLmpzIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi8uL3BhZ2VzL3Bvc3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkNvbW1lbnRzRGV0YWlscyIsIkNvbXBvbmVudCIsInJlbmRlciIsImNvbW1lbnQiLCJwcm9wcyIsIm93bmVyIiwiQ29tbWVudERldGFpbHMiLCJQb3N0U2hvdyIsImdldEluaXRpYWxQcm9wcyIsInBvc3QiLCJQb3N0IiwicXVlcnkiLCJhZGRyZXNzIiwiY29tbWVudENvdW50IiwibWV0aG9kcyIsImdldENvbW1lbnRzQ291bnQiLCJjYWxsIiwidGl0bGUiLCJnZXRUaXRsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidXBWb3RlcyIsImdldFVwVm90ZXMiLCJjb21tZW50cyIsIlByb21pc2UiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlbmRlckNvbW1lbnRzIiwiY29uc29sZSIsImxvZyIsInVwVm90ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0EsTUFBTUEsZUFBTixTQUE4QkMsNENBQTlCLENBQXdDO0FBRXRDQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVDO0FBQUYsUUFBYyxLQUFLQyxLQUF6QjtBQUNBLHdCQUNFLDhEQUFDLHNEQUFEO0FBQUEsNkJBQ0EsOERBQUMsOERBQUQ7QUFBQSxnQ0FDRSw4REFBQyw2REFBRDtBQUFnQixZQUFFLEVBQUMsR0FBbkI7QUFBQSxvQkFBd0JELE9BQU8sQ0FBQ0U7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLCtEQUFEO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBS0UsOERBQUMsMkRBQUQ7QUFBQSxvQkFBZUYsT0FBTyxDQUFDQTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVdEOztBQWZxQzs7QUFrQnhDLCtEQUFlRyxjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUMsUUFBTixTQUF1Qk4sNENBQXZCLENBQWlDO0FBQzdCLGVBQWFPLGVBQWIsQ0FBNkJKLEtBQTdCLEVBQW9DO0FBQ3BDLFVBQU1LLElBQUksR0FBR0MsdURBQUksQ0FBQ04sS0FBSyxDQUFDTyxLQUFOLENBQVlDLE9BQWIsQ0FBakI7QUFDQSxVQUFNQSxPQUFPLEdBQUdSLEtBQUssQ0FBQ08sS0FBTixDQUFZQyxPQUE1QjtBQUNBLFVBQU1DLFlBQVksR0FBRyxNQUFNSixJQUFJLENBQUNLLE9BQUwsQ0FBYUMsZ0JBQWIsR0FBZ0NDLElBQWhDLEVBQTNCLENBSG9DLENBS3BDOztBQUNBLFVBQU1DLEtBQUssR0FBRyxNQUFNUixJQUFJLENBQUNLLE9BQUwsQ0FBYUksUUFBYixHQUF3QkYsSUFBeEIsRUFBcEI7QUFDQSxVQUFNRyxPQUFPLEdBQUcsTUFBTVYsSUFBSSxDQUFDSyxPQUFMLENBQWFNLFVBQWIsR0FBMEJKLElBQTFCLEVBQXRCO0FBQ0EsVUFBTUssT0FBTyxHQUFHLE1BQU1aLElBQUksQ0FBQ0ssT0FBTCxDQUFhUSxVQUFiLEdBQTBCTixJQUExQixFQUF0QjtBQUVBLFVBQU1PLFFBQVEsR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FDckJDLEtBQUssQ0FBQ0MsUUFBUSxDQUFDZCxZQUFELENBQVQsQ0FBTCxDQUE4QmUsSUFBOUIsR0FBcUNDLEdBQXJDLENBQXlDLENBQUNDLE9BQUQsRUFBVUMsS0FBVixLQUFvQjtBQUMzRCxhQUFPdEIsSUFBSSxDQUFDSyxPQUFMLENBQWFTLFFBQWIsQ0FBc0JRLEtBQXRCLEVBQTZCZixJQUE3QixFQUFQO0FBQ0QsS0FGRCxDQURxQixDQUF2QjtBQU1BLFdBQU87QUFBRVAsVUFBRjtBQUFRUSxXQUFSO0FBQWVFLGFBQWY7QUFBd0JFLGFBQXhCO0FBQWlDVCxhQUFqQztBQUEwQ1c7QUFBMUMsS0FBUDtBQUNDOztBQUVEUyxnQkFBYyxHQUFHO0FBQ2YsV0FBTyxLQUFLNUIsS0FBTCxDQUFXbUIsUUFBWCxDQUFvQk0sR0FBcEIsQ0FBd0IsQ0FBQzFCLE9BQUQsRUFBVTRCLEtBQVYsS0FBb0I7QUFDbkQ7O0FBQ0U7QUFBQSxvRUFBQywrREFBRDtBQUNBLGVBQU8sRUFBRTVCO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdELEtBTE0sQ0FBUDtBQU1EOztBQUdIRCxRQUFNLEdBQUc7QUFDUCtCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUs5QixLQUFMLENBQVdtQixRQUF2QjtBQUNBLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0EsOERBQUMsd0RBQUQ7QUFDQSxZQUFJLEVBQUUsS0FBS25CLEtBQUwsQ0FBV1EsT0FEakI7QUFFQSxhQUFLLEVBQUUsS0FBS1IsS0FBTCxDQUFXYSxLQUZsQjtBQUdBLGVBQU8sRUFBRSxLQUFLYixLQUFMLENBQVdlLE9BSHBCO0FBSUEsZUFBTyxFQUFFLEtBQUtmLEtBQUwsQ0FBVytCO0FBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQU9BLDhEQUFDLDREQUFEO0FBQUEsa0JBQ0csS0FBS0gsY0FBTDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWFEOztBQTdDOEI7O0FBZ0RqQywrREFBZXpCLFFBQWYsRTs7Ozs7Ozs7Ozs7QUN4REEseUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcG9zdHMvc2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5cclxuLy9Bbnl0aGluZyBpbnNpZGUgTGluayBnZXRzIGEgY2xpY2sgZXZlbnQgYWRkZWRcclxuY2xhc3MgQ29tbWVudHNEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb21tZW50IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbW1lbnQ+XHJcbiAgICAgIDxDb21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPSdhJz57Y29tbWVudC5vd25lcn08L0NvbW1lbnQuQXV0aG9yPlxyXG4gICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPlxyXG4gICAgICAgICAgPGRpdj5Ub2RheSBhdCA1OjQyUE08L2Rpdj5cclxuICAgICAgICA8L0NvbW1lbnQuTWV0YWRhdGE+XHJcbiAgICAgICAgPENvbW1lbnQuVGV4dD57Y29tbWVudC5jb21tZW50fTwvQ29tbWVudC5UZXh0PlxyXG4gICAgICA8L0NvbW1lbnQuQ29udGVudD5cclxuICAgICAgPC9Db21tZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnREZXRhaWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9wb3N0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBQb3N0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdEJveCc7XHJcbmltcG9ydCBDb21tZW50RGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnREZXRhaWxzJztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBJY29uLCBDb250YWluZXIsIEhlYWRlciwgRGl2aWRlciwgR3JpZCwgQ29tbWVudCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcblxyXG5jbGFzcyBQb3N0U2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKSB7XHJcbiAgICBjb25zdCBwb3N0ID0gUG9zdChwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gICAgY29uc3QgY29tbWVudENvdW50ID0gYXdhaXQgcG9zdC5tZXRob2RzLmdldENvbW1lbnRzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gICAgLy9EbyBhIHNpbmdsZSBjYWxsIHRvIGdldCB0aGUgZGF0YS4gTGlrZSBnZXRTdW1tYXJ5IGZyb20gY2FtcGFpZ25zXHJcbiAgICBjb25zdCB0aXRsZSA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRUaXRsZSgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBwb3N0Lm1ldGhvZHMuZ2V0Q29udGVudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IHVwVm90ZXMgPSBhd2FpdCBwb3N0Lm1ldGhvZHMuZ2V0VXBWb3RlcygpLmNhbGwoKTtcclxuXHJcbiAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICBBcnJheShwYXJzZUludChjb21tZW50Q291bnQpKS5maWxsKCkubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwb3N0Lm1ldGhvZHMuY29tbWVudHMoaW5kZXgpLmNhbGwoKVxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4geyBwb3N0LCB0aXRsZSwgY29udGVudCwgdXBWb3RlcywgYWRkcmVzcywgY29tbWVudHMgfTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb21tZW50cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm5cclxuICAgICAgICA8Q29tbWVudERldGFpbHNcclxuICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNvbW1lbnRzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxQb3N0Qm94XHJcbiAgICAgIHBvc3Q9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuY29udGVudH1cclxuICAgICAgdXBWb3Rlcz17dGhpcy5wcm9wcy51cFZvdGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwPlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNvbW1lbnRzKCl9XHJcbiAgICAgIDwvQ29tbWVudC5Hcm91cD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RTaG93O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==