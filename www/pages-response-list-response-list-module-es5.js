function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-list-response-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-list/response-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesResponseListResponseListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >RESULTADOS</p>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"detailsol()\">\n        <ion-icon slot=\"icon-only\" name=\"alert-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-item button   *ngFor=\"let item of items\" (click)=\"detail(item.id)\" >\n    <ion-label>\n      <h3 style=\"font-weight: bold; text-transform: capitalize;color: white;\">{{item.company.name}}&nbsp;&nbsp;<ion-icon *ngIf=\"item.company.hasDelivery==true\" slot=\"icon-only\"  src=\"assets/icon/envio.svg\"></ion-icon></h3>\n      <p style=\"font-weight: bold;color: #50c8ff\"><ion-icon style=\"color:#d310d3\" *ngIf=\"item.status=='I'\" name=\"star\"></ion-icon>{{item.finalAmount | currency:'USD':'symbol':'1.0-0'}}</p>\n      <p style=\"color: yellow;text-transform: capitalize;\">{{item.creationDate | timeAgo}}</p>\n    </ion-label>\n    <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/response-list/response-list-routing.module.ts": function srcAppPagesResponseListResponseListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseListPageRoutingModule", function () {
      return ResponseListPageRoutingModule;
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


    var _response_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./response-list.page */
    "./src/app/pages/response-list/response-list.page.ts");

    var routes = [{
      path: '',
      component: _response_list_page__WEBPACK_IMPORTED_MODULE_3__["ResponseListPage"]
    }];

    var ResponseListPageRoutingModule = function ResponseListPageRoutingModule() {
      _classCallCheck(this, ResponseListPageRoutingModule);
    };

    ResponseListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResponseListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/response-list/response-list.module.ts": function srcAppPagesResponseListResponseListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseListPageModule", function () {
      return ResponseListPageModule;
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


    var _response_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./response-list-routing.module */
    "./src/app/pages/response-list/response-list-routing.module.ts");
    /* harmony import */


    var _response_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./response-list.page */
    "./src/app/pages/response-list/response-list.page.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../time-ago.pipe */
    "./src/app/time-ago.pipe.ts");
    /* harmony import */


    var ionic_long_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-long-press */
    "./node_modules/ionic-long-press/__ivy_ngcc__/fesm2015/ionic-long-press.js");

    var ResponseListPageModule = function ResponseListPageModule() {
      _classCallCheck(this, ResponseListPageModule);
    };

    ResponseListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _response_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponseListPageRoutingModule"], ionic_long_press__WEBPACK_IMPORTED_MODULE_8__["LongPressModule"]],
      declarations: [_response_list_page__WEBPACK_IMPORTED_MODULE_6__["ResponseListPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })], ResponseListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/response-list/response-list.page.scss": function srcAppPagesResponseListResponseListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlLWxpc3QvcmVzcG9uc2UtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/response-list/response-list.page.ts": function srcAppPagesResponseListResponseListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseListPage", function () {
      return ResponseListPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");

    var ResponseListPage = /*#__PURE__*/function () {
      function ResponseListPage(apiService, router, busyService) {
        _classCallCheck(this, ResponseListPage);

        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.items = [];
        this.working = false;
        this.selecctedItems = [];
      }

      _createClass(ResponseListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.solicitudes();
        }
      }, {
        key: "detail",
        value: function detail(id) {
          window.localStorage.removeItem("responseId");
          window.localStorage.setItem("responseId", id);
          this.router.navigate(['/response-detail']);
        }
      }, {
        key: "pressed",
        value: function pressed(item) {
          var exits = this.selecctedItems.filter(function (s) {
            return s.id == item.id;
          });

          if (exits.length == 0) {
            this.selecctedItems.push(item);
            var myDiv = document.getElementById(item.id);
            myDiv.classList.add("item-background-color");
          }
        }
      }, {
        key: "click",
        value: function click(item) {
          var exits = this.selecctedItems.filter(function (s) {
            return s.id == item.id;
          });

          if (exits.length > 0) {
            this.selecctedItems = this.selecctedItems.filter(function (s) {
              return s.id != item.id;
            });
            var myDiv = document.getElementById(item.id);
            myDiv.classList.remove("item-background-color");
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.selecctedItems.forEach(function (obj) {
            var myDiv = document.getElementById(obj.id);
            myDiv.classList.remove("item-background-color");
          });
          this.selecctedItems = [];
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var yes;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar los ítems seleccionados?");

                  case 2:
                    yes = _context.sent;

                    if (yes) {
                      this.working = true;
                      this.apiService.Post(this.selecctedItems, "Responses/DeleteList").then(function (res) {
                        _this.working = true;
                        _this.selecctedItems = [];

                        _this.solicitudes();
                      }, function (err) {
                        _this.working = false;

                        _this.busyService.presentAlert("¡Información!", "Algo salió mal, intente de nuevo");
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "detailsol",
        value: function detailsol() {
          this.router.navigate(['/solicitude-detail']);
        }
      }, {
        key: "solicitudes",
        value: function solicitudes() {
          var _this2 = this;

          this.items = [];
          this.working = true;
          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.apiService.Get("Responses/ResponsesCustomer/" + userinfo.id + "/" + window.localStorage.getItem("solicitudeId")).then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.working = false;
                      this.items = res;

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            _this2.working = false;
          });
        }
      }]);

      return ResponseListPage;
    }();

    ResponseListPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"]
      }];
    };

    ResponseListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-response-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./response-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-list/response-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./response-list.page.scss */
      "./src/app/pages/response-list/response-list.page.scss"))["default"]]
    })], ResponseListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-response-list-response-list-module-es5.js.map