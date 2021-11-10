function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-advertisements-advertisements-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisements/advertisements.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesAdvertisementsAdvertisementsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Anuncios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\r\n  <div class=\"section_two ion-padding\">\r\n\r\n  <!-- <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n         \r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgyoutube\"><ion-icon class=\"allicon\" name=\"copy-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre Categoria\"></ion-input>\r\n          </ion-item>\r\n         \r\n            <div class=\"buttons ion-padding-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Crear</ion-button>\r\n            </div>\r\n  </form> -->\r\n\r\n</div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/advertisements/advertisements-routing.module.ts": function srcAppPagesAdvertisementsAdvertisementsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertisementsPageRoutingModule", function () {
      return AdvertisementsPageRoutingModule;
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


    var _advertisements_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./advertisements.page */
    "./src/app/pages/advertisements/advertisements.page.ts");

    var routes = [{
      path: '',
      component: _advertisements_page__WEBPACK_IMPORTED_MODULE_3__["AdvertisementsPage"]
    }];

    var AdvertisementsPageRoutingModule = function AdvertisementsPageRoutingModule() {
      _classCallCheck(this, AdvertisementsPageRoutingModule);
    };

    AdvertisementsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdvertisementsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/advertisements/advertisements.module.ts": function srcAppPagesAdvertisementsAdvertisementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertisementsPageModule", function () {
      return AdvertisementsPageModule;
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


    var _advertisements_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./advertisements-routing.module */
    "./src/app/pages/advertisements/advertisements-routing.module.ts");
    /* harmony import */


    var _advertisements_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./advertisements.page */
    "./src/app/pages/advertisements/advertisements.page.ts");

    var AdvertisementsPageModule = function AdvertisementsPageModule() {
      _classCallCheck(this, AdvertisementsPageModule);
    };

    AdvertisementsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _advertisements_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdvertisementsPageRoutingModule"]],
      declarations: [_advertisements_page__WEBPACK_IMPORTED_MODULE_6__["AdvertisementsPage"]]
    })], AdvertisementsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/advertisements/advertisements.page.scss": function srcAppPagesAdvertisementsAdvertisementsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkdmVydGlzZW1lbnRzL2FkdmVydGlzZW1lbnRzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/advertisements/advertisements.page.ts": function srcAppPagesAdvertisementsAdvertisementsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvertisementsPage", function () {
      return AdvertisementsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AdvertisementsPage = /*#__PURE__*/function () {
      function AdvertisementsPage() {
        _classCallCheck(this, AdvertisementsPage);
      }

      _createClass(AdvertisementsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdvertisementsPage;
    }();

    AdvertisementsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-advertisements',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./advertisements.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/advertisements/advertisements.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./advertisements.page.scss */
      "./src/app/pages/advertisements/advertisements.page.scss"))["default"]]
    })], AdvertisementsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-advertisements-advertisements-module-es5.js.map