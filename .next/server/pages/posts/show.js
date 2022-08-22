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
/* harmony import */ var _ethereum_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/post */ "./ethereum/post.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\components\\CommentDetails.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //Anything inside Link gets a click event added

class CommentDetails extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "upVote", async (post, comment) => {
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.eth.getAccounts();
      await post.methods.commentUpVote(comment.index).send({
        from: accounts[0],
        value: _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__.default.utils.toWei('.001', 'ether')
      });
      _routes__WEBPACK_IMPORTED_MODULE_5__.Router.replaceRoute(`/posts/${post.methods.getAddress().call()}`);
    });
  }

  render() {
    const {
      comment,
      post
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Content, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Author, {
          as: "a",
          children: ["u/", comment.owner, " "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, this), comment.index, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Metadata, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: comment.date
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Comment.Text, {
          style: {
            marginLeft: '10px'
          },
          children: comment.comment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, this), comment.upVoteCommentCount, "   ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        class: "thumbs up outline icon",
        style: {
          color: "#ff4500",
          cursor: "pointer"
        },
        onClick: () => this.upVote(post, comment)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 38
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ethereum/web3 */ "./ethereum/web3.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Dr.Z\\Downloads\\Developer\\RedditOnTheBlockchain\\pages\\posts\\show.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class PostShow extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      comment: '',
      errorMessage: '',
      loading: false,
      commentIndex: 0
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_6__.default.eth.getAccounts();
      let time = moment__WEBPACK_IMPORTED_MODULE_9___default()().format('MMMM Do YYYY, h:mm:ss a');
      this.setState({
        loading: true,
        errorMessage: ''
      });

      try {
        if (this.props.commentCount == undefined) {
          console.log(this.props.commentCount);
          console.log(this.state.commentIndex);
          await this.props.post.methods.createComment(this.state.commentIndex, this.state.comment, accounts[0], time).send({
            from: accounts[0]
          });
        } else {
          console.log(this.props.commentCount);
          console.log(this.state.commentIndex);
          this.setState({
            commentIndex: this.props.commentCount
          });
          await this.props.post.methods.createComment(this.state.commentIndex, this.state.comment, accounts[0], time).send({
            from: accounts[0]
          });
        }

        _routes__WEBPACK_IMPORTED_MODULE_7__.Router.replaceRoute(`/posts/${this.props.address}`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false,
        comment: ''
      });
    });
  }

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
      comments,
      commentCount,
      address: props.query.address
    };
  }

  renderComments() {
    const _post = this.props.post;
    return this.props.comments.map((comment, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CommentDetails__WEBPACK_IMPORTED_MODULE_5__.default, {
        comment: comment,
        post: _post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 14
      }, this);
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostBox__WEBPACK_IMPORTED_MODULE_4__.default, {
        post: this.props.address,
        title: this.props.title,
        content: this.props.content,
        upVotes: this.props.upVote
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Comment.Group, {
        style: {
          background: 'white',
          borderRadius: '10px',
          padding: '10px'
        },
        children: [this.renderComments(), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {
          onSubmit: this.onSubmit,
          error: !!this.state.errorMessage,
          reply: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
              children: "Say Something..."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {
              labelPosition: "right",
              value: this.state.comment,
              onChange: event => this.setState({
                comment: event.target.value
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {
            loading: this.state.loading,
            content: "Add Comment",
            labelPosition: "left",
            icon: "edit",
            primary: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PostShow);

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vLi9jb21wb25lbnRzL0NvbW1lbnREZXRhaWxzLmpzIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi8uL3BhZ2VzL3Bvc3RzL3Nob3cuanMiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9SZWRkaXRPblRoZUJsb2NrY2hhaW4vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL1JlZGRpdE9uVGhlQmxvY2tjaGFpbi9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vUmVkZGl0T25UaGVCbG9ja2NoYWluL2V4dGVybmFsIFwid2ViM1wiIl0sIm5hbWVzIjpbIkNvbW1lbnREZXRhaWxzIiwiQ29tcG9uZW50IiwicG9zdCIsImNvbW1lbnQiLCJhY2NvdW50cyIsIndlYjMiLCJtZXRob2RzIiwiY29tbWVudFVwVm90ZSIsImluZGV4Iiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsIlJvdXRlciIsImdldEFkZHJlc3MiLCJjYWxsIiwicmVuZGVyIiwicHJvcHMiLCJvd25lciIsImRhdGUiLCJtYXJnaW5MZWZ0IiwidXBWb3RlQ29tbWVudENvdW50IiwiY29sb3IiLCJjdXJzb3IiLCJ1cFZvdGUiLCJQb3N0U2hvdyIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJjb21tZW50SW5kZXgiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGltZSIsIm1vbWVudCIsImZvcm1hdCIsInNldFN0YXRlIiwiY29tbWVudENvdW50IiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiY3JlYXRlQ29tbWVudCIsImFkZHJlc3MiLCJlcnIiLCJtZXNzYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwiUG9zdCIsInF1ZXJ5IiwiZ2V0Q29tbWVudHNDb3VudCIsInRpdGxlIiwiZ2V0VGl0bGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInVwVm90ZXMiLCJnZXRVcFZvdGVzIiwiY29tbWVudHMiLCJQcm9taXNlIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJtYXAiLCJlbGVtZW50IiwicmVuZGVyQ29tbWVudHMiLCJfcG9zdCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwib25TdWJtaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxNQUFNQSxjQUFOLFNBQTZCQyw0Q0FBN0IsQ0FBdUM7QUFBQTtBQUFBOztBQUFBLG9DQUU1QixPQUFPQyxJQUFQLEVBQWFDLE9BQWIsS0FBeUI7QUFDaEMsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsWUFBTUgsSUFBSSxDQUFDSSxPQUFMLENBQWFDLGFBQWIsQ0FBMkJKLE9BQU8sQ0FBQ0ssS0FBbkMsRUFBMENDLElBQTFDLENBQStDO0FBQ25EQyxZQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFELENBRHFDO0FBRW5ETyxhQUFLLEVBQUVOLCtEQUFBLENBQWlCLE1BQWpCLEVBQXlCLE9BQXpCO0FBRjRDLE9BQS9DLENBQU47QUFJQU8sOERBQUEsQ0FBcUIsVUFBU1YsSUFBSSxDQUFDSSxPQUFMLENBQWFPLFVBQWIsR0FBMEJDLElBQTFCLEVBQWlDLEVBQS9EO0FBQ0QsS0FUb0M7QUFBQTs7QUFXckNDLFFBQU0sR0FBRztBQUNQLFVBQU07QUFBRVosYUFBRjtBQUFXRDtBQUFYLFFBQW9CLEtBQUtjLEtBQS9CO0FBQ0Esd0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSw4QkFDQSw4REFBQyw4REFBRDtBQUFBLGdDQUNFLDhEQUFDLDZEQUFEO0FBQWdCLFlBQUUsRUFBQyxHQUFuQjtBQUFBLDJCQUEwQmIsT0FBTyxDQUFDYyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFDNkRkLE9BQU8sQ0FBQ0ssS0FEckUsZUFFRSw4REFBQywrREFBRDtBQUFBLGlDQUNFO0FBQUEsc0JBQU1MLE9BQU8sQ0FBQ2U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFLDhEQUFDLDJEQUFEO0FBQWMsZUFBSyxFQUFFO0FBQUNDLHNCQUFVLEVBQUU7QUFBYixXQUFyQjtBQUFBLG9CQUE0Q2hCLE9BQU8sQ0FBQ0E7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQVFDQSxPQUFPLENBQUNpQixrQkFSVCxzQkFRK0I7QUFBRyxhQUFLLEVBQUMsd0JBQVQ7QUFBa0MsYUFBSyxFQUFFO0FBQUNDLGVBQUssRUFBQyxTQUFQO0FBQWtCQyxnQkFBTSxFQUFFO0FBQTFCLFNBQXpDO0FBQStFLGVBQU8sRUFBRSxNQUFNLEtBQUtDLE1BQUwsQ0FBWXJCLElBQVosRUFBa0JDLE9BQWxCO0FBQTlGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSL0IsZUFTQSw4REFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFhRDs7QUExQm9DOztBQTZCdkMsK0RBQWVILGNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU13QixRQUFOLFNBQXVCdkIsNENBQXZCLENBQWlDO0FBQUE7QUFBQTs7QUFBQSxtQ0FFbkI7QUFDUkUsYUFBTyxFQUFFLEVBREQ7QUFFUnNCLGtCQUFZLEVBQUUsRUFGTjtBQUdSQyxhQUFPLEVBQUUsS0FIRDtBQUlSQyxrQkFBWSxFQUFFO0FBSk4sS0FGbUI7O0FBQUEsc0NBNEJwQixNQUFPQyxLQUFQLElBQWlCO0FBRTVCQSxXQUFLLENBQUNDLGNBQU47QUFDQSxZQUFNekIsUUFBUSxHQUFHLE1BQU1DLG1FQUFBLEVBQXZCO0FBQ0EsVUFBSXlCLElBQUksR0FBR0MsNkNBQU0sR0FBR0MsTUFBVCxDQUFnQix5QkFBaEIsQ0FBWDtBQUVBLFdBQUtDLFFBQUwsQ0FBYztBQUFFUCxlQUFPLEVBQUUsSUFBWDtBQUFpQkQsb0JBQVksRUFBRTtBQUEvQixPQUFkOztBQUNBLFVBQUk7QUFDRixZQUFJLEtBQUtULEtBQUwsQ0FBV2tCLFlBQVgsSUFBMkJDLFNBQS9CLEVBQTBDO0FBQ3hDQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3JCLEtBQUwsQ0FBV2tCLFlBQXZCO0FBQ0FFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdYLFlBQXZCO0FBQ0EsZ0JBQU0sS0FBS1gsS0FBTCxDQUFXZCxJQUFYLENBQWdCSSxPQUFoQixDQUF3QmlDLGFBQXhCLENBQXNDLEtBQUtELEtBQUwsQ0FBV1gsWUFBakQsRUFBK0QsS0FBS1csS0FBTCxDQUFXbkMsT0FBMUUsRUFBbUZDLFFBQVEsQ0FBQyxDQUFELENBQTNGLEVBQWdHMEIsSUFBaEcsRUFBc0dyQixJQUF0RyxDQUEyRztBQUFFQyxnQkFBSSxFQUFFTixRQUFRLENBQUMsQ0FBRDtBQUFoQixXQUEzRyxDQUFOO0FBQ0QsU0FKRCxNQUlPO0FBQ0xnQyxpQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBS3JCLEtBQUwsQ0FBV2tCLFlBQXZCO0FBQ0FFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdYLFlBQXZCO0FBQ0EsZUFBS00sUUFBTCxDQUFjO0FBQUVOLHdCQUFZLEVBQUUsS0FBS1gsS0FBTCxDQUFXa0I7QUFBM0IsV0FBZDtBQUNBLGdCQUFNLEtBQUtsQixLQUFMLENBQVdkLElBQVgsQ0FBZ0JJLE9BQWhCLENBQXdCaUMsYUFBeEIsQ0FBc0MsS0FBS0QsS0FBTCxDQUFXWCxZQUFqRCxFQUErRCxLQUFLVyxLQUFMLENBQVduQyxPQUExRSxFQUFtRkMsUUFBUSxDQUFDLENBQUQsQ0FBM0YsRUFBZ0cwQixJQUFoRyxFQUFzR3JCLElBQXRHLENBQTJHO0FBQUVDLGdCQUFJLEVBQUVOLFFBQVEsQ0FBQyxDQUFEO0FBQWhCLFdBQTNHLENBQU47QUFDRDs7QUFDSFEsZ0VBQUEsQ0FBcUIsVUFBUyxLQUFLSSxLQUFMLENBQVd3QixPQUFRLEVBQWpEO0FBQ0QsT0FaQyxDQVlBLE9BQU9DLEdBQVAsRUFBWTtBQUNaLGFBQUtSLFFBQUwsQ0FBYztBQUFFUixzQkFBWSxFQUFFZ0IsR0FBRyxDQUFDQztBQUFwQixTQUFkO0FBQ0Q7O0FBQ0QsV0FBS1QsUUFBTCxDQUFjO0FBQUVQLGVBQU8sRUFBRSxLQUFYO0FBQWtCdkIsZUFBTyxFQUFFO0FBQTNCLE9BQWQ7QUFDQyxLQW5EZ0M7QUFBQTs7QUFTN0IsZUFBYXdDLGVBQWIsQ0FBNkIzQixLQUE3QixFQUFvQztBQUNwQyxVQUFNZCxJQUFJLEdBQUcwQyx1REFBSSxDQUFDNUIsS0FBSyxDQUFDNkIsS0FBTixDQUFZTCxPQUFiLENBQWpCO0FBQ0EsVUFBTUEsT0FBTyxHQUFHeEIsS0FBSyxDQUFDNkIsS0FBTixDQUFZTCxPQUE1QjtBQUNBLFVBQU1OLFlBQVksR0FBRyxNQUFNaEMsSUFBSSxDQUFDSSxPQUFMLENBQWF3QyxnQkFBYixHQUFnQ2hDLElBQWhDLEVBQTNCLENBSG9DLENBS3BDOztBQUNBLFVBQU1pQyxLQUFLLEdBQUcsTUFBTTdDLElBQUksQ0FBQ0ksT0FBTCxDQUFhMEMsUUFBYixHQUF3QmxDLElBQXhCLEVBQXBCO0FBQ0EsVUFBTW1DLE9BQU8sR0FBRyxNQUFNL0MsSUFBSSxDQUFDSSxPQUFMLENBQWE0QyxVQUFiLEdBQTBCcEMsSUFBMUIsRUFBdEI7QUFDQSxVQUFNcUMsT0FBTyxHQUFHLE1BQU1qRCxJQUFJLENBQUNJLE9BQUwsQ0FBYThDLFVBQWIsR0FBMEJ0QyxJQUExQixFQUF0QjtBQUVBLFVBQU11QyxRQUFRLEdBQUcsTUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQ3JCQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ3ZCLFlBQUQsQ0FBVCxDQUFMLENBQThCd0IsSUFBOUIsR0FBcUNDLEdBQXJDLENBQXlDLENBQUNDLE9BQUQsRUFBVXBELEtBQVYsS0FBb0I7QUFDM0QsYUFBT04sSUFBSSxDQUFDSSxPQUFMLENBQWErQyxRQUFiLENBQXNCN0MsS0FBdEIsRUFBNkJNLElBQTdCLEVBQVA7QUFDRCxLQUZELENBRHFCLENBQXZCO0FBTUEsV0FBTztBQUFFWixVQUFGO0FBQVE2QyxXQUFSO0FBQWVFLGFBQWY7QUFBd0JFLGFBQXhCO0FBQWlDWCxhQUFqQztBQUEwQ2EsY0FBMUM7QUFBb0RuQixrQkFBcEQ7QUFBa0VNLGFBQU8sRUFBRXhCLEtBQUssQ0FBQzZCLEtBQU4sQ0FBWUw7QUFBdkYsS0FBUDtBQUNDOztBQTJCRHFCLGdCQUFjLEdBQUc7QUFDZixVQUFNQyxLQUFLLEdBQUcsS0FBSzlDLEtBQUwsQ0FBV2QsSUFBekI7QUFDQSxXQUFPLEtBQUtjLEtBQUwsQ0FBV3FDLFFBQVgsQ0FBb0JNLEdBQXBCLENBQXdCLENBQUN4RCxPQUFELEVBQVVLLEtBQVYsS0FBb0I7QUFDbkQsMEJBQU8sOERBQUMsK0RBQUQ7QUFBZ0IsZUFBTyxFQUFFTCxPQUF6QjtBQUFrQyxZQUFJLEVBQUUyRDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVA7QUFDQyxLQUZNLENBQVA7QUFHRDs7QUFLSC9DLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLHVEQUFEO0FBQUEsOEJBQ0EsOERBQUMsd0RBQUQ7QUFDQSxZQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXd0IsT0FEakI7QUFFQSxhQUFLLEVBQUUsS0FBS3hCLEtBQUwsQ0FBVytCLEtBRmxCO0FBR0EsZUFBTyxFQUFFLEtBQUsvQixLQUFMLENBQVdpQyxPQUhwQjtBQUlBLGVBQU8sRUFBRSxLQUFLakMsS0FBTCxDQUFXTztBQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFPQSw4REFBQyw0REFBRDtBQUFlLGFBQUssRUFBRTtBQUFDd0Msb0JBQVUsRUFBRSxPQUFiO0FBQXNCQyxzQkFBWSxFQUFFLE1BQXBDO0FBQTRDQyxpQkFBTyxFQUFFO0FBQXJELFNBQXRCO0FBQUEsbUJBQ0csS0FBS0osY0FBTCxFQURILGVBR0UsOERBQUMsbURBQUQ7QUFBTSxrQkFBUSxFQUFFLEtBQUtLLFFBQXJCO0FBQStCLGVBQUssRUFBRSxDQUFDLENBQUMsS0FBSzVCLEtBQUwsQ0FBV2IsWUFBbkQ7QUFBaUUsZUFBSyxNQUF0RTtBQUFBLGtDQUNFLDhEQUFDLHlEQUFEO0FBQUEsb0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFRSw4REFBQyxvREFBRDtBQUFPLDJCQUFhLEVBQUMsT0FBckI7QUFDQSxtQkFBSyxFQUFFLEtBQUthLEtBQUwsQ0FBV25DLE9BRGxCO0FBRUEsc0JBQVEsRUFBRXlCLEtBQUssSUFBSSxLQUFLSyxRQUFMLENBQWM7QUFBRTlCLHVCQUFPLEVBQUV5QixLQUFLLENBQUN1QyxNQUFOLENBQWF4RDtBQUF4QixlQUFkO0FBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUUsOERBQUMscURBQUQ7QUFBUSxtQkFBTyxFQUFFLEtBQUsyQixLQUFMLENBQVdaLE9BQTVCO0FBQXFDLG1CQUFPLEVBQUMsYUFBN0M7QUFBMkQseUJBQWEsRUFBQyxNQUF6RTtBQUFnRixnQkFBSSxFQUFDLE1BQXJGO0FBQTRGLG1CQUFPO0FBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBeUJEOztBQXpGOEI7O0FBNEZqQywrREFBZUYsUUFBZixFOzs7Ozs7Ozs7OztBQ3ZHQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9wb3N0cy9zaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29tbWVudCwgRGl2aWRlciwgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vZXRoZXJldW0vcG9zdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuLy9Bbnl0aGluZyBpbnNpZGUgTGluayBnZXRzIGEgY2xpY2sgZXZlbnQgYWRkZWRcclxuY2xhc3MgQ29tbWVudERldGFpbHMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICB1cFZvdGUgPSBhc3luYyAocG9zdCwgY29tbWVudCkgPT4ge1xyXG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgYXdhaXQgcG9zdC5tZXRob2RzLmNvbW1lbnRVcFZvdGUoY29tbWVudC5pbmRleCkuc2VuZCh7XHJcbiAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG4gICAgICB2YWx1ZTogd2ViMy51dGlscy50b1dlaSgnLjAwMScsICdldGhlcicpLFxyXG4gICAgfSlcclxuICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9wb3N0cy8ke3Bvc3QubWV0aG9kcy5nZXRBZGRyZXNzKCkuY2FsbCgpfWApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjb21tZW50LCBwb3N0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbW1lbnQ+XHJcbiAgICAgIDxDb21tZW50LkNvbnRlbnQ+XHJcbiAgICAgICAgPENvbW1lbnQuQXV0aG9yIGFzPSdhJz51L3tjb21tZW50Lm93bmVyfSA8L0NvbW1lbnQuQXV0aG9yPntjb21tZW50LmluZGV4fVxyXG4gICAgICAgIDxDb21tZW50Lk1ldGFkYXRhPlxyXG4gICAgICAgICAgPGRpdj57Y29tbWVudC5kYXRlfTwvZGl2PlxyXG4gICAgICAgIDwvQ29tbWVudC5NZXRhZGF0YT5cclxuICAgICAgICA8Q29tbWVudC5UZXh0IHN0eWxlPXt7bWFyZ2luTGVmdDogJzEwcHgnfX0+e2NvbW1lbnQuY29tbWVudH08L0NvbW1lbnQuVGV4dD5cclxuICAgICAgPC9Db21tZW50LkNvbnRlbnQ+XHJcbiAgICAgIHtjb21tZW50LnVwVm90ZUNvbW1lbnRDb3VudH0gICA8aSBjbGFzcz1cInRodW1icyB1cCBvdXRsaW5lIGljb25cIiBzdHlsZT17e2NvbG9yOlwiI2ZmNDUwMFwiLCBjdXJzb3I6IFwicG9pbnRlclwifX0gb25DbGljaz17KCkgPT4gdGhpcy51cFZvdGUocG9zdCwgY29tbWVudCl9PjwvaT5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgPC9Db21tZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnREZXRhaWxzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUG9zdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9wb3N0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBQb3N0Qm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdEJveCc7XHJcbmltcG9ydCBDb21tZW50RGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1lbnREZXRhaWxzJztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiwgSWNvbiwgQ29udGFpbmVyLCBIZWFkZXIsIERpdmlkZXIsIEdyaWQsIENvbW1lbnQsIEZvcm0sIElucHV0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5cclxuY2xhc3MgUG9zdFNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgICAgc3RhdGUgPSB7XHJcbiAgICAgIGNvbW1lbnQ6ICcnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgY29tbWVudEluZGV4OiAwXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuICAgIGNvbnN0IHBvc3QgPSBQb3N0KHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3QgYWRkcmVzcyA9IHByb3BzLnF1ZXJ5LmFkZHJlc3M7XHJcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBhd2FpdCBwb3N0Lm1ldGhvZHMuZ2V0Q29tbWVudHNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAvL0RvIGEgc2luZ2xlIGNhbGwgdG8gZ2V0IHRoZSBkYXRhLiBMaWtlIGdldFN1bW1hcnkgZnJvbSBjYW1wYWlnbnNcclxuICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgcG9zdC5tZXRob2RzLmdldFRpdGxlKCkuY2FsbCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRDb250ZW50KCkuY2FsbCgpO1xyXG4gICAgY29uc3QgdXBWb3RlcyA9IGF3YWl0IHBvc3QubWV0aG9kcy5nZXRVcFZvdGVzKCkuY2FsbCgpO1xyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgIEFycmF5KHBhcnNlSW50KGNvbW1lbnRDb3VudCkpLmZpbGwoKS5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHBvc3QubWV0aG9kcy5jb21tZW50cyhpbmRleCkuY2FsbCgpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7IHBvc3QsIHRpdGxlLCBjb250ZW50LCB1cFZvdGVzLCBhZGRyZXNzLCBjb21tZW50cywgY29tbWVudENvdW50LCBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzIH07XHJcbiAgICB9XHJcblxyXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblxyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gIGxldCB0aW1lID0gbW9tZW50KCkuZm9ybWF0KCdNTU1NIERvIFlZWVksIGg6bW06c3MgYScpO1xyXG5cclxuICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiAnJyB9KTtcclxuICB0cnkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29tbWVudENvdW50ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNvbW1lbnRDb3VudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudEluZGV4KTtcclxuICAgICAgYXdhaXQgdGhpcy5wcm9wcy5wb3N0Lm1ldGhvZHMuY3JlYXRlQ29tbWVudCh0aGlzLnN0YXRlLmNvbW1lbnRJbmRleCwgdGhpcy5zdGF0ZS5jb21tZW50LCBhY2NvdW50c1swXSwgdGltZSkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmNvbW1lbnRDb3VudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29tbWVudEluZGV4KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnRJbmRleDogdGhpcy5wcm9wcy5jb21tZW50Q291bnR9KVxyXG4gICAgICBhd2FpdCB0aGlzLnByb3BzLnBvc3QubWV0aG9kcy5jcmVhdGVDb21tZW50KHRoaXMuc3RhdGUuY29tbWVudEluZGV4LCB0aGlzLnN0YXRlLmNvbW1lbnQsIGFjY291bnRzWzBdLCB0aW1lKS5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF19KTtcclxuICAgIH1cclxuICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvcG9zdHMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG59XHJcbnRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgY29tbWVudDogJycgfSlcclxufTtcclxuXHJcbiAgICByZW5kZXJDb21tZW50cygpIHtcclxuICAgICAgY29uc3QgX3Bvc3QgPSB0aGlzLnByb3BzLnBvc3Q7XHJcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIDxDb21tZW50RGV0YWlscyBjb21tZW50PXtjb21tZW50fSBwb3N0PXtfcG9zdH0gLz47XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxQb3N0Qm94XHJcbiAgICAgIHBvc3Q9e3RoaXMucHJvcHMuYWRkcmVzc31cclxuICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XHJcbiAgICAgIGNvbnRlbnQ9e3RoaXMucHJvcHMuY29udGVudH1cclxuICAgICAgdXBWb3Rlcz17dGhpcy5wcm9wcy51cFZvdGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxDb21tZW50Lkdyb3VwIHN0eWxlPXt7YmFja2dyb3VuZDogJ3doaXRlJywgYm9yZGVyUmFkaXVzOiAnMTBweCcsIHBhZGRpbmc6ICcxMHB4J319PlxyXG4gICAgICAgIHt0aGlzLnJlbmRlckNvbW1lbnRzKCl9XHJcblxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gcmVwbHk+XHJcbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgIDxsYWJlbD5TYXkgU29tZXRoaW5nLi4uPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNvbW1lbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgY29tbWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gY29udGVudD0nQWRkIENvbW1lbnQnIGxhYmVsUG9zaXRpb249J2xlZnQnIGljb249J2VkaXQnIHByaW1hcnkgLz5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICA8L0NvbW1lbnQuR3JvdXA+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0U2hvdztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2ViM1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==