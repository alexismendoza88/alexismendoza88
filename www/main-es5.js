function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-menu side=\"start\" menuId=\"pages\" type=\"overlay\" contentId=\"mainContent\">\n    <ion-content class=\"backgeneral\"> \n      <ion-list class=\"ion-padding\" lines=\"none\">\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages\">\n          <ion-item *ngIf=\"p.available && p.url!=null\" [routerLink]=\"[p.url]\">\n            <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label style=\"color: white;\" >\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"p.available==false\" (click)=\"info()\">\n            <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label style=\"color: white;\" >\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"p.title=='Mi cuenta'\" (click)=\"account()\">\n            <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label style=\"color: white;\" >\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"p.title=='Solicitudes'\" (click)=\"sol()\">\n            <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label style=\"color: white;\" >\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n          <ion-item *ngIf=\"p.title=='Pedidos'\" (click)=\"pedidos()\" id=\"pedidos\">\n            <ion-icon style=\"color: white;\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            <ion-label style=\"color: white;\" >\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n    <!-- Footer -->\n    <ion-footer no-border class=\"backgeneral\">\n      <div class=\"ion-padding\">\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"signout()\">SALIR</ion-button>\n      </div>\n    </ion-footer>\n  </ion-menu>\n  <ion-router-outlet id=\"mainContent\"></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"close()\">\n        <ion-icon style=\"color:white\"  name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-searchbar (ionClear)=\"onClear($event)\"   autofocus=\"true\" placeholder=\"Buscar Dirección\" #googleplaces id=\"googleplaces\" type=\"text\"></ion-searchbar> \n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div #map id=\"map\" ></div>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar class=\"ion-padding\" >\n      <!-- Checkout Button Option -->\n      <ion-button color=\"secondary\" expand=\"block\" (click)=\"addToCordinates()\"  *ngIf=\"lat!=null && lng!=null\">\n          Agregar dirección\n      </ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/route/route.component.html": function node_modulesRawLoaderDistCjsJsSrcAppComponentsRouteRouteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)=\"close()\">\n        <ion-icon style=\"color:white\"  name=\"close-circle-outline\" slot=\"start\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>¿Como LLegar?</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div #map id=\"map\" ></div>\n</ion-content>\n<ion-footer no-border >\n  <ion-toolbar  color=\"secondary\" >\n    <ion-title style=\"font-size: 10px !important;color:white !important\">Distancia: {{distance}} | Duración: {{duration}}</ion-title>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/HammerGestureConfig.ts": function srcAppHammerGestureConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function () {
      return IonicGestureConfig;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @hidden
     * This class overrides the default Angular gesture config.
     */


    var IonicGestureConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(IonicGestureConfig, _angular_platform_bro);

      var _super = _createSuper(IonicGestureConfig);

      function IonicGestureConfig() {
        _classCallCheck(this, IonicGestureConfig);

        return _super.apply(this, arguments);
      }

      _createClass(IonicGestureConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          var mc = new window.Hammer(element);

          for (var eventName in this.overrides) {
            if (eventName) {
              mc.get(eventName).set(this.overrides[eventName]);
            }
          }

          return mc;
        }
      }]);

      return IonicGestureConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"]);

    IonicGestureConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], IonicGestureConfig);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-login-login-module */
        "pages-login-login-module").then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'solicitude',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-solicitude-solicitude-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-solicitude-solicitude-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/solicitude/solicitude.module */
        "./src/app/pages/solicitude/solicitude.module.ts")).then(function (m) {
          return m.SolicitudePageModule;
        });
      }
    }, {
      path: 'solicitudelist',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-solicitudelist-solicitudelist-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("common"), __webpack_require__.e("pages-solicitudelist-solicitudelist-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/solicitudelist/solicitudelist.module */
        "./src/app/pages/solicitudelist/solicitudelist.module.ts")).then(function (m) {
          return m.SolicitudelistPageModule;
        });
      }
    }, {
      path: 'companysol',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-companysol-companysol-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("common"), __webpack_require__.e("pages-companysol-companysol-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/companysol/companysol.module */
        "./src/app/pages/companysol/companysol.module.ts")).then(function (m) {
          return m.CompanysolPageModule;
        });
      }
    }, {
      path: 'solicitude-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-solicitude-detail-solicitude-detail-module */
        "pages-solicitude-detail-solicitude-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/solicitude-detail/solicitude-detail.module */
        "./src/app/pages/solicitude-detail/solicitude-detail.module.ts")).then(function (m) {
          return m.SolicitudeDetailPageModule;
        });
      }
    }, {
      path: 'response',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-response-response-module */
        "pages-response-response-module").then(__webpack_require__.bind(null,
        /*! ./pages/response/response.module */
        "./src/app/pages/response/response.module.ts")).then(function (m) {
          return m.ResponsePageModule;
        });
      }
    }, {
      path: 'response-detail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-response-detail-response-detail-module */
        "pages-response-detail-response-detail-module").then(__webpack_require__.bind(null,
        /*! ./pages/response-detail/response-detail.module */
        "./src/app/pages/response-detail/response-detail.module.ts")).then(function (m) {
          return m.ResponseDetailPageModule;
        });
      }
    }, {
      path: 'response-list',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-response-list-response-list-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("common"), __webpack_require__.e("pages-response-list-response-list-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/response-list/response-list.module */
        "./src/app/pages/response-list/response-list.module.ts")).then(function (m) {
          return m.ResponseListPageModule;
        });
      }
    }, {
      path: 'company',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-company-company-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-company-company-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/company/company.module */
        "./src/app/pages/company/company.module.ts")).then(function (m) {
          return m.CompanyPageModule;
        });
      }
    }, {
      path: 'customer',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-customer-customer-module */
        "pages-customer-customer-module").then(__webpack_require__.bind(null,
        /*! ./pages/customer/customer.module */
        "./src/app/pages/customer/customer.module.ts")).then(function (m) {
          return m.CustomerPageModule;
        });
      }
    }, {
      path: 'resetpass',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-resetpass-resetpass-module */
        "pages-resetpass-resetpass-module").then(__webpack_require__.bind(null,
        /*! ./pages/resetpass/resetpass.module */
        "./src/app/pages/resetpass/resetpass.module.ts")).then(function (m) {
          return m.ResetpassPageModule;
        });
      }
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-about-module */
        "pages-about-about-module").then(__webpack_require__.bind(null,
        /*! ./pages/about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'companyup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-companyup-companyup-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-companyup-companyup-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/companyup/companyup.module */
        "./src/app/pages/companyup/companyup.module.ts")).then(function (m) {
          return m.CompanyupPageModule;
        });
      }
    }, {
      path: 'customerup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-customerup-customerup-module */
        "pages-customerup-customerup-module").then(__webpack_require__.bind(null,
        /*! ./pages/customerup/customerup.module */
        "./src/app/pages/customerup/customerup.module.ts")).then(function (m) {
          return m.CustomerupPageModule;
        });
      }
    }, {
      path: 'posts',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-posts-posts-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("common"), __webpack_require__.e("pages-posts-posts-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/posts/posts.module */
        "./src/app/pages/posts/posts.module.ts")).then(function (m) {
          return m.PostsPageModule;
        });
      }
    }, {
      path: 'activities',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-activities-activities-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("pages-activities-activities-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/activities/activities.module */
        "./src/app/pages/activities/activities.module.ts")).then(function (m) {
          return m.ActivitiesPageModule;
        });
      }
    }, {
      path: 'favors',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-favors-favors-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("pages-favors-favors-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/favors/favors.module */
        "./src/app/pages/favors/favors.module.ts")).then(function (m) {
          return m.FavorsPageModule;
        });
      }
    }, {
      path: 'classified',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-classified-classified-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("pages-classified-classified-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/classified/classified.module */
        "./src/app/pages/classified/classified.module.ts")).then(function (m) {
          return m.ClassifiedPageModule;
        });
      }
    }, {
      path: 'activityadd',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-activityadd-activityadd-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-activityadd-activityadd-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/activityadd/activityadd.module */
        "./src/app/pages/activityadd/activityadd.module.ts")).then(function (m) {
          return m.ActivityaddPageModule;
        });
      }
    }, {
      path: 'favoradd',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-favoradd-favoradd-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-favoradd-favoradd-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/favoradd/favoradd.module */
        "./src/app/pages/favoradd/favoradd.module.ts")).then(function (m) {
          return m.FavoraddPageModule;
        });
      }
    }, {
      path: 'classifiedadd',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-classifiedadd-classifiedadd-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-classifiedadd-classifiedadd-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/classifiedadd/classifiedadd.module */
        "./src/app/pages/classifiedadd/classifiedadd.module.ts")).then(function (m) {
          return m.ClassifiedaddPageModule;
        });
      }
    }, {
      path: 'postdetail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-postdetail-postdetail-module */
        [__webpack_require__.e("default~pages-activities-activities-module~pages-classified-classified-module~pages-companysol-compa~6e1b836b"), __webpack_require__.e("pages-postdetail-postdetail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/postdetail/postdetail.module */
        "./src/app/pages/postdetail/postdetail.module.ts")).then(function (m) {
          return m.PostdetailPageModule;
        });
      }
    }, {
      path: 'resetpassup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-resetpassup-resetpassup-module */
        "pages-resetpassup-resetpassup-module").then(__webpack_require__.bind(null,
        /*! ./pages/resetpassup/resetpassup.module */
        "./src/app/pages/resetpassup/resetpassup.module.ts")).then(function (m) {
          return m.ResetpassupPageModule;
        });
      }
    }, {
      path: 'inicio',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-inicio-inicio-module */
        "pages-inicio-inicio-module").then(__webpack_require__.bind(null,
        /*! ./pages/inicio/inicio.module */
        "./src/app/pages/inicio/inicio.module.ts")).then(function (m) {
          return m.InicioPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJdmFuY2hvXFxzb3VyY2VcXHJlcG9zXFxDb3RpemFWZW5kRnJvbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/busy.service */
    "./src/app/services/busy.service.ts"); //import { FCM } from '@ionic-native/fcm/ngx';


    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(menuController, platform, splashScreen, statusBar, fcm, router, busyService) {
        _classCallCheck(this, AppComponent);

        this.menuController = menuController;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.fcm = fcm;
        this.router = router;
        this.busyService = busyService;
        this.appPages = [];
        this.initializeApp();
        this.getPages();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.ontoken();

            _this.fcm.onTokenRefresh().subscribe(function (token) {
              _this.ontoken();

              _this.router.navigate(['/home']);
            });

            setTimeout(function () {
              _this.splashScreen.hide();
            }, 1000);
          });
        }
      }, {
        key: "ontoken",
        value: function ontoken() {
          var _this2 = this;

          this.fcm.getToken().then(function (token) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      window.localStorage.removeItem("msToken");
                      window.localStorage.setItem("msToken", token);

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
        }
      }, {
        key: "notifications",
        value: function notifications() {
          var _this3 = this;

          this.fcm.onBackgroundMessage().subscribe(function (data) {
            alert(JSON.stringify(data));

            if (data.wasTapped) {
              if (data.a == 'customer') {
                window.localStorage.removeItem("solicitudeId");
                window.localStorage.setItem("solicitudeId", data.id);

                _this3.router.navigate(['/solicitude-detail']);
              } else {
                window.localStorage.removeItem("responseId");
                window.localStorage.setItem("responseId", data.id);

                _this3.router.navigate(['/response-detail']);
              }
            }
          });
          this.fcm.onMessage().subscribe(function (data) {
            alert(JSON.stringify(data));

            if (data.wasTapped) {
              if (data.a == 'customer') {
                window.localStorage.removeItem("solicitudeId");
                window.localStorage.setItem("solicitudeId", data.id);

                _this3.router.navigate(['/solicitude-detail']);
              } else {
                window.localStorage.removeItem("responseId");
                window.localStorage.setItem("responseId", data.id);

                _this3.router.navigate(['/response-detail']);
              }
            }
          });
        }
      }, {
        key: "getPages",
        value: function getPages() {
          this.appPages = [{
            title: 'Inicio',
            url: 'home',
            icon: 'home',
            available: true
          }, {
            title: 'Pedidos',
            url: null,
            icon: 'notifications',
            available: true
          }, {
            title: 'Solicitudes',
            url: null,
            icon: 'cart',
            available: true
          },
          /*
          {
            title: 'Actvidades y Promociones',
            url: '/activities',
            icon: 'fast-food',
            available:true
          },
          {
            title: 'Clasificados',
            url: 'classified',
            icon: 'newspaper',
            available:true
          },
          {
            title: 'Pedir un Favor',
            url: 'favors',
            icon: 'thumbs-up',
            available:true
          },
          {
            title: 'Editar Publicaciones',
            url: 'posts',
            icon: 'clipboard',
            available:true
          },*/
          {
            title: 'Mi cuenta',
            url: null,
            icon: 'person',
            available: true
          }, {
            title: 'Desarrollador',
            url: '/about',
            icon: 'code-working',
            available: true
          }];
        } // Signout Button

      }, {
        key: "signout",
        value: function signout() {
          this.router.navigate(['/login']);
          this.menuController.enable(false); // Make Sidemenu disable
        }
      }, {
        key: "info",
        value: function info() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.busyService.presentAlert("¡Aviso!", "¡Acción Proximamente Disponible!");

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "sol",
        value: function sol() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.router.navigate(['/solicitudelist']);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "pedidos",
        value: function pedidos() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var userinfo;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    userinfo = JSON.parse(window.localStorage.getItem("userinfo"));

                    if (userinfo.role != "Customer") {
                      this.router.navigate(['/companysol']);
                    }

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "account",
        value: function account() {
          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));

          if (userinfo.role == 'Company') {
            this.router.navigate(['/companyup']);
          } else {
            this.router.navigate(['/customerup']);
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseMessaging"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_7__["BusyService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _services_authguard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/authguard.service */
    "./src/app/services/authguard.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _HammerGestureConfig__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./HammerGestureConfig */
    "./src/app/HammerGestureConfig.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_route_route_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/route/route.component */
    "./src/app/components/route/route.component.ts"); //import { FCM } from '@ionic-native/fcm/ngx';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"], _components_route_route_component__WEBPACK_IMPORTED_MODULE_22__["RouteComponent"]],
      entryComponents: [_components_map_map_component__WEBPACK_IMPORTED_MODULE_19__["MapComponent"], _components_route_route_component__WEBPACK_IMPORTED_MODULE_22__["RouteComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_18__["AutoCompleteModule"]],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__["Geolocation"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_20__["NativeGeocoder"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_17__["CallNumber"], _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_16__["PhotoViewer"], _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_14__["FirebaseMessaging"], //FCM,
      _services_busy_service__WEBPACK_IMPORTED_MODULE_12__["BusyService"], _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _services_authguard_service__WEBPACK_IMPORTED_MODULE_9__["AuthguardService"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }, {
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HAMMER_GESTURE_CONFIG"],
        useClass: _HammerGestureConfig__WEBPACK_IMPORTED_MODULE_15__["IonicGestureConfig"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/map/map.component.scss": function srcAppComponentsMapMapComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-searchbar {\n  color: black !important;\n  --placeholder-color: black !important;\n}\nion-searchbar input {\n  border-radius: 30px !important;\n  height: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXAvQzpcXFVzZXJzXFxJdmFuY2hvXFxzb3VyY2VcXHJlcG9zXFxDb3RpemFWZW5kRnJvbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLSSx1QkFBQTtFQUNBLHFDQUFBO0FDSEo7QURGSTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgfSIsImlvbi1zZWFyY2hiYXIge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbmlvbi1zZWFyY2hiYXIgaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/map/map.component.ts": function srcAppComponentsMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
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


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(nativeGeocoder, busyService, platform, geolocation, modalCtrl) {
        _classCallCheck(this, MapComponent);

        this.nativeGeocoder = nativeGeocoder;
        this.busyService = busyService;
        this.platform = platform;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.lat = null;
        this.lng = null;
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.platform.ready().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                        var _this5 = this;

                        var load;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.mapelement.nativeElement.style.width = this.platform.width() + "px";
                                this.mapelement.nativeElement.style.height = this.platform.height() + "px";
                                _context5.next = 4;
                                return this.busyService.presentProAlert();

                              case 4:
                                load = _context5.sent;
                                load.present();
                                this.geolocation.getCurrentPosition({
                                  maximumAge: 3000,
                                  timeout: 8000,
                                  enableHighAccuracy: true
                                }).then(function (resp) {
                                  load.dismiss();
                                  var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                                  _this5.map = new google.maps.Map(document.getElementById('map'), {
                                    zoom: 17,
                                    center: mylocation,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                                    mapTypeControl: false
                                  });

                                  _this5.map.addListener('click', function (event) {
                                    _this5.drawmarker(event.latLng);

                                    _this5.locationtoview(event.latLng);

                                    _this5.lng = event.latLng.lng;
                                    _this5.lat = event.latLng.lat;

                                    if (!(typeof event.placeId == 'undefined')) {
                                      event.stop();
                                    }
                                  });

                                  _this5.drawmarker(mylocation);

                                  _this5.autocmplete();

                                  _this5.locationtoview(new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude));

                                  _this5.lng = resp.coords.longitude;
                                  _this5.lat = resp.coords.latitude;

                                  _this5.drawubicationcontrol();
                                }, function (err) {
                                  load.dismiss();
                                });

                              case 7:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    });

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "addToCordinates",
        value: function addToCordinates() {
          this.modalCtrl.dismiss({
            lat: this.lat,
            lng: this.lng,
            dir: document.getElementById('googleplaces').getElementsByTagName('input')[0].value
          });
        }
      }, {
        key: "drawubicationcontrol",
        value: function drawubicationcontrol() {
          var _this6 = this;

          var controlDiv = document.createElement('div');
          var firstChild = document.createElement('button');
          firstChild.id = "locatiobtn";
          firstChild.style.backgroundColor = '#fff';
          firstChild.style.border = 'none';
          firstChild.style.outline = 'none';
          firstChild.style.width = '28px';
          firstChild.style.height = '28px';
          firstChild.style.borderRadius = '2px';
          firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
          firstChild.style.cursor = 'pointer';
          firstChild.style.marginRight = '10px';
          firstChild.style.padding = '0';
          firstChild.title = 'Your Location';
          controlDiv.appendChild(firstChild);
          var secondChild = document.createElement('div');
          secondChild.style.margin = '5px';
          secondChild.style.width = '18px';
          secondChild.style.height = '18px';
          secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
          secondChild.style.backgroundSize = '180px 18px';
          secondChild.style.backgroundPosition = '0 0';
          secondChild.style.backgroundRepeat = 'no-repeat';
          firstChild.appendChild(secondChild);
          firstChild.addEventListener('click', function () {
            _this6.geolocation.getCurrentPosition({
              maximumAge: 3000,
              timeout: 8000,
              enableHighAccuracy: true
            }).then(function (resp) {
              var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              _this6.lng = resp.coords.longitude;
              _this6.lat = resp.coords.latitude;

              _this6.drawmarker(mylocation);

              _this6.map.setCenter(mylocation);

              _this6.locationtoview(mylocation);
            });
          });
          google.maps.event.addListener(this.map, 'center_changed', function () {
            secondChild.style['background-position'] = '0 0';
          });
          this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
        }
      }, {
        key: "drawmarker",
        value: function drawmarker(location) {
          if (this.marker != null) {
            this.marker.setMap(null);
          }

          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            animation: "DROP",
            title: '¡ Estoy aqui !',
            travelMode: 'DRIVING'
          });
        }
      }, {
        key: "locationtoview",
        value: function locationtoview(location) {
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            if (status === 'OK') {
              if (results[0]) {
                document.getElementById('googleplaces').getElementsByTagName('input')[0].value = results[0].formatted_address; // document.getElementById('googleplaces').getElementsByTagName('input')[0].setAttribute("readonly","readonly");
              } else {
                window.alert('No results found');
                this.gbinput.value = "";
              }
            } else {
              window.alert('Geocoder failed due to: ' + status);
              this.gbinput.value = "";
            }
          });
        }
      }, {
        key: "onClear",
        value: function onClear(event) {
          if (this.marker != null) {
            this.marker.setMap(null);
          }

          document.getElementById('googleplaces').getElementsByTagName('input')[0].removeAttribute("readonly");
          document.getElementById('googleplaces').getElementsByTagName('input')[0].value = "";
        }
      }, {
        key: "autocmplete",
        value: function autocmplete() {
          var _this7 = this;

          var autocompleted = new google.maps.places.Autocomplete(document.getElementById('googleplaces').getElementsByTagName('input')[0]); // Bind the map's bounds (viewport) property to the autocomplete object,
          // so that the autocomplete requests use the current map bounds for the
          // bounds option in the request.

          autocompleted.bindTo('bounds', this.map); // Set the data fields to return when the user selects a place.

          autocompleted.setFields(['address_components', 'geometry', 'icon', 'name']); //let autocomplete = new google.maps.places.Autocomplete(this.googlePlaces.nativeElement, {types: ['geocode']});

          google.maps.event.addListener(autocompleted, 'place_changed', function () {
            // retrieve the place object for your use
            // document.getElementById('googleplaces').getElementsByTagName('input')[0].setAttribute("readonly","readonly");
            var place = autocompleted.getPlace();

            _this7.drawmarker(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));

            _this7.map.setCenter(new google.maps.LatLng(place.geometry.location.lat(), place.geometry.location.lng()));
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": false
    })], MapComponent.prototype, "mapelement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('googleplaces', {
      "static": true
    })], MapComponent.prototype, "googlePlaces", void 0);
    MapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/map/map.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./map.component.scss */
      "./src/app/components/map/map.component.scss"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/components/route/route.component.scss": function srcAppComponentsRouteRouteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGUvcm91dGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/route/route.component.ts": function srcAppComponentsRouteRouteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RouteComponent", function () {
      return RouteComponent;
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


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");

    var RouteComponent = /*#__PURE__*/function () {
      function RouteComponent(nativeGeocoder, busyService, platform, geolocation, modalCtrl) {
        _classCallCheck(this, RouteComponent);

        this.nativeGeocoder = nativeGeocoder;
        this.busyService = busyService;
        this.platform = platform;
        this.geolocation = geolocation;
        this.modalCtrl = modalCtrl;
        this.lat = null;
        this.lng = null;
        this.distance = null;
        this.duration = null;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
      }

      _createClass(RouteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this8 = this;

            var dest;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    dest = JSON.parse(window.localStorage.getItem("mapdest"));
                    console.log(dest);
                    this.lat = dest.lat;
                    this.lng = dest.lng;
                    this.platform.ready().then(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                        var _this9 = this;

                        var load;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                this.mapelement.nativeElement.style.width = this.platform.width() + "px";
                                this.mapelement.nativeElement.style.height = this.platform.height() + "px";
                                _context7.next = 4;
                                return this.busyService.presentProAlert();

                              case 4:
                                load = _context7.sent;
                                load.present();
                                this.geolocation.getCurrentPosition({
                                  maximumAge: 3000,
                                  timeout: 8000,
                                  enableHighAccuracy: true
                                }).then(function (resp) {
                                  load.dismiss();
                                  var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
                                  _this9.map = new google.maps.Map(document.getElementById('map'), {
                                    zoom: 17,
                                    center: mylocation,
                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                                    mapTypeControl: false
                                  });
                                  console.log(mylocation);

                                  _this9.startNavigating2(mylocation, new google.maps.LatLng(_this9.lat, _this9.lng));
                                }, function (err) {
                                  load.dismiss();
                                });

                              case 7:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    });

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "startNavigating2",
        value: function startNavigating2(origin, destination) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var _this10 = this;

            var load;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.busyService.presentProAlert();

                  case 2:
                    load = _context10.sent;
                    load.present();

                    if (this.directionsDisplay != null) {
                      this.directionsDisplay.setMap(null);
                    }

                    this.directionsService = new google.maps.DirectionsService();
                    this.directionsDisplay = new google.maps.DirectionsRenderer({
                      preserveViewport: true
                    });
                    this.directionsDisplay.setMap(this.map);
                    this.directionsService.route({
                      origin: origin,
                      destination: destination,
                      travelMode: google.maps.TravelMode['DRIVING']
                    }, function (res, status) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                load.dismiss();

                                if (status == google.maps.DirectionsStatus.OK) {
                                  this.distance = res.routes[0].legs[0].distance.text;
                                  this.duration = res.routes[0].legs[0].duration.text;
                                  this.directionsDisplay.setDirections(res);
                                } else {
                                  console.warn(status);
                                }

                              case 2:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, this);
                      }));
                    });

                  case 9:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          this.modalCtrl.dismiss(null);
        }
      }, {
        key: "drawubicationcontrol",
        value: function drawubicationcontrol() {
          var _this11 = this;

          var controlDiv = document.createElement('div');
          var firstChild = document.createElement('button');
          firstChild.id = "locatiobtn";
          firstChild.style.backgroundColor = '#fff';
          firstChild.style.border = 'none';
          firstChild.style.outline = 'none';
          firstChild.style.width = '28px';
          firstChild.style.height = '28px';
          firstChild.style.borderRadius = '2px';
          firstChild.style.boxShadow = '0 1px 4px rgba(0,0,0,0.3)';
          firstChild.style.cursor = 'pointer';
          firstChild.style.marginRight = '10px';
          firstChild.style.padding = '0';
          firstChild.title = 'Your Location';
          controlDiv.appendChild(firstChild);
          var secondChild = document.createElement('div');
          secondChild.style.margin = '5px';
          secondChild.style.width = '18px';
          secondChild.style.height = '18px';
          secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png)';
          secondChild.style.backgroundSize = '180px 18px';
          secondChild.style.backgroundPosition = '0 0';
          secondChild.style.backgroundRepeat = 'no-repeat';
          firstChild.appendChild(secondChild);
          firstChild.addEventListener('click', function () {
            _this11.geolocation.getCurrentPosition({
              maximumAge: 3000,
              timeout: 8000,
              enableHighAccuracy: true
            }).then(function (resp) {
              var mylocation = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
              _this11.lng = resp.coords.longitude;
              _this11.lat = resp.coords.latitude;

              _this11.map.setCenter(mylocation);

              _this11.startNavigating2(mylocation, new google.maps.LatLng(_this11.lat, _this11.lng));
            });
          });
          google.maps.event.addListener(this.map, 'center_changed', function () {
            secondChild.style['background-position'] = '0 0';
          });
          this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
        }
      }]);

      return RouteComponent;
    }();

    RouteComponent.ctorParameters = function () {
      return [{
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_2__["BusyService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map", {
      "static": false
    })], RouteComponent.prototype, "mapelement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('googleplaces', {
      "static": true
    })], RouteComponent.prototype, "googlePlaces", void 0);
    RouteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-route',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./route.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/route/route.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./route.component.scss */
      "./src/app/components/route/route.component.scss"))["default"]]
    })], RouteComponent);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts": function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "Post",
        value: function Post(data, url) {
          var _this12 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
          var options = {
            headers: headers
          };
          return new Promise(function (resolve, reject) {
            _this12.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
              return res;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              console.log('caught mapping error and rethrowing', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
              console.log('caught rethrown error, providing fallback value', err);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
            })).subscribe(function (res) {
              return resolve(res);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "Put",
        value: function Put(data, url) {
          var _this13 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
          var options = {
            headers: headers
          };
          return new Promise(function (resolve, reject) {
            _this13.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + url, data, options).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "upload",
        value: function upload(url, formData) {
          var options = {
            reportProgress: true
          };
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + url, formData, options);
          return this.http.request(req);
        }
      }, {
        key: "Delete",
        value: function Delete(url) {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            _this14.http["delete"](_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + url).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "Get",
        value: function Get(url) {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            _this15.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiurl + url).subscribe(function (res) {
              resolve(res);
            }, function (err) {
              reject(err);
            });
          });
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/authguard.service.ts": function srcAppServicesAuthguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardService", function () {
      return AuthguardService;
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

    var AuthguardService = /*#__PURE__*/function () {
      function AuthguardService(router) {
        _classCallCheck(this, AuthguardService);

        this.router = router;
      }

      _createClass(AuthguardService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var uid = window.localStorage.getItem('tokenpd');

          if (uid == '' || uid == null) {
            return this.router.parseUrl("/login");
          } else {
            return true;
          }
        }
      }]);

      return AuthguardService;
    }();

    AuthguardService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthguardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthguardService);
    /***/
  },

  /***/
  "./src/app/services/busy.service.ts": function srcAppServicesBusyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusyService", function () {
      return BusyService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var BusyService = /*#__PURE__*/function () {
      function BusyService(actionSheetController, alertCtrl, loading) {
        _classCallCheck(this, BusyService);

        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
      }

      _createClass(BusyService, [{
        key: "presentAlert",
        value: function presentAlert(title, message) {
          this.alertCtrl.create({
            header: title,
            subHeader: '',
            message: message,
            buttons: ['Aceptar']
          }).then(function (alert) {
            return alert.present();
          });
        }
      }, {
        key: "AceptInfo",
        value: function AceptInfo(title, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this16 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    return _context12.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this.alertCtrl.create({
                                  header: title,
                                  subHeader: '',
                                  message: message,
                                  buttons: [{
                                    text: 'Aceptar',
                                    handler: function handler() {
                                      return resolve(true);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context11.sent;
                                _context11.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
        }
      }, {
        key: "presentAlertYesNo",
        value: function presentAlertYesNo(title, message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var _this17 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    return _context14.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                        var alert;
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                _context13.next = 2;
                                return this.alertCtrl.create({
                                  header: title,
                                  subHeader: '',
                                  message: message,
                                  buttons: [{
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function handler() {
                                      return resolve(false);
                                    }
                                  }, {
                                    text: 'Si',
                                    handler: function handler() {
                                      return resolve(true);
                                    }
                                  }]
                                });

                              case 2:
                                alert = _context13.sent;
                                _context13.next = 5;
                                return alert.present();

                              case 5:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
        }
      }, {
        key: "presentProAlert",
        value: function presentProAlert() {
          return this.loading.create({
            message: "Por favor, espere..."
          });
        }
      }, {
        key: "presentProAlert2",
        value: function presentProAlert2(ms) {
          return this.loading.create({
            message: ms
          });
        }
      }, {
        key: "presentActionSheet",
        value: function presentActionSheet() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            var _this18 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    return _context16.abrupt("return", new Promise(function (resolve) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                        var actionSheet;
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                _context15.next = 2;
                                return this.actionSheetController.create({
                                  header: '¿Que desea?',
                                  buttons: [{
                                    text: 'Eliminar',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function handler() {
                                      return resolve("E");
                                    }
                                  }, {
                                    text: 'Cambiar',
                                    icon: 'image',
                                    handler: function handler() {
                                      return resolve("C");
                                    }
                                  }, {
                                    text: 'Ver',
                                    icon: 'eye',
                                    handler: function handler() {
                                      return resolve("V");
                                    }
                                  }, {
                                    text: 'Cerrar',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function handler() {
                                      return resolve("S");
                                    }
                                  }]
                                });

                              case 2:
                                actionSheet = _context15.sent;
                                _context15.next = 5;
                                return actionSheet.present();

                              case 5:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15, this);
                      }));
                    }));

                  case 1:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
        }
      }]);

      return BusyService;
    }();

    BusyService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    BusyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BusyService);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiurl: 'http://apicotvend.aujaminversiones.com/api/',
      fileurl: 'http://apicotvend.aujaminversiones.com/'
      /*apiurl:'https://localhost:44352/api/',
      fileurl:'https://localhost:44352/'*/

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Ivancho\source\repos\CotizaVendFront\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map