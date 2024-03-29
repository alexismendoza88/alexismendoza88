function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activities-activities-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activities/activities.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesActivitiesActivitiesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\" >\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle menu=\"pages\">\r\n        <ion-button >\r\n          <ion-icon name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Actividades y Comidas\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-button [routerLink]=\"['/activityadd']\">\r\n        <ion-icon  name=\"add-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n    <!-- <ion-list>\r\n      <ion-item button *ngFor=\"let item of items\" (click)=\"details(item)\">\r\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 != null\">\r\n          <img  [src]=\"item.img1\"  >\r\n        </ion-thumbnail>\r\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 == null\">\r\n          <img  [src]=\"'/assets/images/empty.png'\"  >\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <ion-text> <h3 style=\"font-weight: bold; text-transform: capitalize;color:white\">{{item.creationDate | timeAgo}}</h3></ion-text>\r\n          <p  style=\"color: yellow;\">{{item.description}}</p>\r\n          <p *ngIf=\"item.price!=null\" style=\"font-weight: bold;color: #0ae70a\" >{{item.price | currency:'USD':'symbol':'1.0-0'}}</p> \r\n        </ion-label>\r\n        <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list> -->\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/activities/activities-routing.module.ts": function srcAppPagesActivitiesActivitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesPageRoutingModule", function () {
      return ActivitiesPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _activities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activities.page */
    "./src/app/pages/activities/activities.page.ts");

    var routes = [{
      path: '',
      component: _activities_page__WEBPACK_IMPORTED_MODULE_3__["ActivitiesPage"]
    }];

    var ActivitiesPageRoutingModule = function ActivitiesPageRoutingModule() {
      _classCallCheck(this, ActivitiesPageRoutingModule);
    };

    ActivitiesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActivitiesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/activities/activities.module.ts": function srcAppPagesActivitiesActivitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesPageModule", function () {
      return ActivitiesPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./activities-routing.module */
    "./src/app/pages/activities/activities-routing.module.ts");
    /* harmony import */


    var _activities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activities.page */
    "./src/app/pages/activities/activities.page.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../time-ago.pipe */
    "./src/app/time-ago.pipe.ts");

    var ActivitiesPageModule = function ActivitiesPageModule() {
      _classCallCheck(this, ActivitiesPageModule);
    };

    ActivitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activities_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivitiesPageRoutingModule"]],
      declarations: [_activities_page__WEBPACK_IMPORTED_MODULE_6__["ActivitiesPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })], ActivitiesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/activities/activities.page.scss": function srcAppPagesActivitiesActivitiesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/activities/activities.page.ts": function srcAppPagesActivitiesActivitiesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivitiesPage", function () {
      return ActivitiesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ActivitiesPage = /*#__PURE__*/function () {
      function ActivitiesPage(apiService, router, busyService) {
        _classCallCheck(this, ActivitiesPage);

        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.working = false;
        this.items = [];
      }

      _createClass(ActivitiesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.activities();
        }
      }, {
        key: "activities",
        value: function activities() {
          var _this = this;

          this.working = true;
          var provinceId = localStorage.getItem("province") == null ? -1 : JSON.parse(localStorage.getItem("province")).id;
          this.apiService.Get("Posts/PostsByType/A/" + provinceId).then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.working = false;
                      this.items = res;
                      this.items.forEach(function (element) {
                        if (element.img1 != null) {
                          element.img1 = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + element.img1;
                        }
                      });

                    case 3:
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
      }, {
        key: "details",
        value: function details(item) {
          localStorage.removeItem("postid");
          localStorage.setItem("postid", item.id);
          this.router.navigate(['/postdetail']);
        }
      }]);

      return ActivitiesPage;
    }();

    ActivitiesPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"]
      }];
    };

    ActivitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activities',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./activities.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activities/activities.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./activities.page.scss */
      "./src/app/pages/activities/activities.page.scss"))["default"]]
    })], ActivitiesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-activities-activities-module-es5.js.map