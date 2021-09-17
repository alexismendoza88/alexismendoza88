function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companysol-companysol-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companysol/companysol.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesCompanysolCompanysolPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button >\n          <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n      <ion-button (click)=\"cancel()\" *ngIf=\"selecctedItems.length > 0\">\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">PEDIDOS</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"selecctedItems.length == 0\" style=\"display: none;\">\n        <ion-icon slot=\"icon-only\" style=\"font-size:18px !important\" src=\"assets/icon/filter.svg\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"delete()\" *ngIf=\"selecctedItems.length > 0\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n        <ion-badge color=\"secondary\">{{selecctedItems.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-tab-bar class=\"backgeneral\">\n  <ion-tab-button (click)=\"filter('f1')\" #tab1>\n    <ion-label [style.color]=\"color\" >HOY</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"filter('f2')\" #tab2>\n    <ion-label [style.color]=\"color2\" >AYER</ion-label>\n  </ion-tab-button>\n  <ion-tab-button (click)=\"filter('f3')\" #tab3>\n    <ion-label [style.color]=\"color3\" >ANTIGUAS</ion-label>\n  </ion-tab-button>\n</ion-tab-bar>\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"  ></ion-progress-bar>\n  <ion-item *ngFor=\"let item of items\" (click)=\"detail(item.c.id)\">\n    <ion-label>\n      <ion-text> <h3 style=\"font-weight: bold; text-transform: capitalize;color:white\">{{item.c.creationDate | timeAgo}}</h3></ion-text>\n      <p  style=\"color: yellow;\"><ion-icon *ngIf=\"item.c.fileUrl!=null && item.c.fileUrl!=''\" style=\"color:yellow\" name=\"document-attach-outline\"></ion-icon><span *ngIf=\"item.c.note!='null' && item.c.note!=''\">&nbsp;{{item.c.note}}</span></p>\n      <p style=\"font-weight: bold;color: #0ae70a\" *ngIf=\"item.responses.length==0\"></p> <p  style=\"color: #50c8ff\" *ngIf=\"item.responses.length>0\"><ion-icon style=\"color:#d310d3\" *ngIf=\"item.responses[0].status=='I'\" name=\"star\"></ion-icon>{{item.responses[0].finalAmount | currency:'USD':'symbol':'1.0-0'}}</p>\n    </ion-label>\n    <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward-outline\"></ion-icon>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/companysol/companysol-routing.module.ts": function srcAppPagesCompanysolCompanysolRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanysolPageRoutingModule", function () {
      return CompanysolPageRoutingModule;
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


    var _companysol_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./companysol.page */
    "./src/app/pages/companysol/companysol.page.ts");

    var routes = [{
      path: '',
      component: _companysol_page__WEBPACK_IMPORTED_MODULE_3__["CompanysolPage"]
    }];

    var CompanysolPageRoutingModule = function CompanysolPageRoutingModule() {
      _classCallCheck(this, CompanysolPageRoutingModule);
    };

    CompanysolPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompanysolPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/companysol/companysol.module.ts": function srcAppPagesCompanysolCompanysolModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanysolPageModule", function () {
      return CompanysolPageModule;
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


    var _companysol_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./companysol-routing.module */
    "./src/app/pages/companysol/companysol-routing.module.ts");
    /* harmony import */


    var _companysol_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./companysol.page */
    "./src/app/pages/companysol/companysol.page.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../time-ago.pipe */
    "./src/app/time-ago.pipe.ts");
    /* harmony import */


    var ionic_long_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-long-press */
    "./node_modules/ionic-long-press/__ivy_ngcc__/fesm2015/ionic-long-press.js");

    var CompanysolPageModule = function CompanysolPageModule() {
      _classCallCheck(this, CompanysolPageModule);
    };

    CompanysolPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _companysol_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanysolPageRoutingModule"], ionic_long_press__WEBPACK_IMPORTED_MODULE_8__["LongPressModule"]],
      declarations: [_companysol_page__WEBPACK_IMPORTED_MODULE_6__["CompanysolPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })], CompanysolPageModule);
    /***/
  },

  /***/
  "./src/app/pages/companysol/companysol.page.scss": function srcAppPagesCompanysolCompanysolPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnlzb2wvY29tcGFueXNvbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/companysol/companysol.page.ts": function srcAppPagesCompanysolCompanysolPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanysolPage", function () {
      return CompanysolPage;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CompanysolPage = /*#__PURE__*/function () {
      function CompanysolPage(menuController, apiService, router, busyService) {
        _classCallCheck(this, CompanysolPage);

        this.menuController = menuController;
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.items = [];
        this.working = false;
        this.selecctedItems = [];
        this.color = 'white';
        this.color2 = 'white';
        this.color3 = 'white';
      }

      _createClass(CompanysolPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuController.enable(true);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.solicitudes();
        }
      }, {
        key: "detail",
        value: function detail(id) {
          window.localStorage.removeItem("solicitudeId");
          window.localStorage.setItem("solicitudeId", id);
          this.router.navigate(['/solicitude-detail']);
        }
      }, {
        key: "response",
        value: function response(item) {
          if (item.responses.length > 0) {
            window.localStorage.removeItem('responseId');
            window.localStorage.setItem('responseId', item.responses.reverse()[0].id);
            this.router.navigate(['/response-detail']);
          } else {
            window.localStorage.removeItem('solicitudeId');
            window.localStorage.setItem('solicitudeId', item.id);
            this.router.navigate(['/response']);
          }
        }
      }, {
        key: "filter",
        value: function filter(e) {
          localStorage.removeItem("filter");
          localStorage.setItem("filter", e);
          this.solicitudes();
        }
      }, {
        key: "solicitudes",
        value: function solicitudes() {
          var _this = this;

          var filter = "f1";

          if (window.localStorage.getItem("filter") != null) {
            filter = window.localStorage.getItem("filter");
          }

          this.color = 'white';
          this.color2 = 'white';
          this.color3 = 'white';

          if (filter == "f1") {
            this.color = 'yellow';
          } else if (filter == "f2") {
            this.color2 = 'yellow';
          } else {
            this.color3 = 'yellow';
          }

          this.items = [];
          this.working = true;
          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.apiService.Get("Solicitudes/CompanySolicitude/" + userinfo.id + "/" + userinfo.provinceId + "/" + filter).then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.working = false;
                      this.items = res;

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }, function (err) {
            _this.working = false;
          });
        }
      }]);

      return CompanysolPage;
    }();

    CompanysolPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"]
      }];
    };

    CompanysolPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companysol',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./companysol.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companysol/companysol.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./companysol.page.scss */
      "./src/app/pages/companysol/companysol.page.scss"))["default"]]
    })], CompanysolPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-companysol-companysol-module-es5.js.map