function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-postdetail-postdetail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postdetail/postdetail.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesPostdetailPostdetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Detalle Publicación</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-item class=\"itemcolor1\" *ngIf=\"note!=null\">\r\n    <ion-text style=\"color:yellow\">\r\n      <p >{{note}}</p>\r\n     </ion-text>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\"  button (click)=\"call(phone)\">\r\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \r\n    <p >{{phone}}</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" button href=\"https://api.whatsapp.com/send?phone=+57{{phone}}\">\r\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \r\n    <p >{{phone}}</p>\r\n  </ion-item> \r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col *ngFor=\"let item of images\"> \r\n          <ion-thumbnail button (click)=\"photoview(item)\">\r\n            <img [src]=\"item\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/postdetail/postdetail-routing.module.ts": function srcAppPagesPostdetailPostdetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailPageRoutingModule", function () {
      return PostdetailPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _postdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./postdetail.page */
    "./src/app/pages/postdetail/postdetail.page.ts");

    var routes = [{
      path: '',
      component: _postdetail_page__WEBPACK_IMPORTED_MODULE_3__["PostdetailPage"]
    }];

    var PostdetailPageRoutingModule = function PostdetailPageRoutingModule() {
      _classCallCheck(this, PostdetailPageRoutingModule);
    };

    PostdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PostdetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/postdetail/postdetail.module.ts": function srcAppPagesPostdetailPostdetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailPageModule", function () {
      return PostdetailPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./postdetail-routing.module */
    "./src/app/pages/postdetail/postdetail-routing.module.ts");
    /* harmony import */


    var _postdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./postdetail.page */
    "./src/app/pages/postdetail/postdetail.page.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../time-ago.pipe */
    "./src/app/time-ago.pipe.ts");

    var PostdetailPageModule = function PostdetailPageModule() {
      _classCallCheck(this, PostdetailPageModule);
    };

    PostdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostdetailPageRoutingModule"]],
      declarations: [_postdetail_page__WEBPACK_IMPORTED_MODULE_6__["PostdetailPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })], PostdetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/postdetail/postdetail.page.scss": function srcAppPagesPostdetailPostdetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RkZXRhaWwvcG9zdGRldGFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/postdetail/postdetail.page.ts": function srcAppPagesPostdetailPostdetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostdetailPage", function () {
      return PostdetailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var PostdetailPage = /*#__PURE__*/function () {
      function PostdetailPage(callNumber, photoViewer, apiService) {
        _classCallCheck(this, PostdetailPage);

        this.callNumber = callNumber;
        this.photoViewer = photoViewer;
        this.apiService = apiService;
        this.working = false;
        this.id = 0;
        this.date = null;
        this.phone = null;
        this.note = null;
        this.currency = null;
        this.amount = null;
        this.creationDate = null;
        this.images = [];
      }

      _createClass(PostdetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.working = false;
          this.getdata();
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this = this;

          this.images = [];
          this.id = 0;
          this.phone = null;
          this.note = null;
          this.date = null;
          this.amount = null;
          var idexist = localStorage.getItem("postid");

          if (idexist != null) {
            localStorage.removeItem("postid");
            this.working = true;
            this.apiService.Get("Posts/" + idexist).then(function (res) {
              _this.working = false;
              _this.id = res.id;
              _this.phone = res.phone;
              _this.note = res.description;
              _this.date = res.activityDate;
              _this.amount = res.price;
              _this.creationDate = res.creationDate;

              if (res.price != null) {
                _this.currency = _this.amount;
              }

              if (res.img1 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img1);
              }

              if (res.img2 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img2);
              }

              if (res.img3 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img3);
              }

              if (res.img4 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img4);
              }

              if (res.img5 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img5);
              }

              if (res.img6 != null) {
                _this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img6);
              }
            }, function (err) {
              _this.working = false;
            });
          }
        }
      }, {
        key: "call",
        value: function call(number) {
          this.callNumber.callNumber(number, true).then(function (res) {})["catch"](function (err) {});
        }
      }, {
        key: "photoview",
        value: function photoview(url) {
          this.photoViewer.show(url);
        }
      }]);

      return PostdetailPage;
    }();

    PostdetailPage.ctorParameters = function () {
      return [{
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoViewer"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    PostdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-postdetail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./postdetail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postdetail/postdetail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./postdetail.page.scss */
      "./src/app/pages/postdetail/postdetail.page.scss"))["default"]]
    })], PostdetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-postdetail-postdetail-module-es5.js.map