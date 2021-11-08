function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-category-esp-search-category-esp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-category-esp/search-category-esp.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchCategoryEspSearchCategoryEspPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border backgeneral\">\r\n  <ion-toolbar>\r\n    <!-- Side Menu Option -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-searchbar [(ngModel)]=\"paramSearch\" \r\n    (ngModelChange)=\"change()\"\r\n  \r\n    (ionCancel)=\"onCancel($event)\" placeholder=\"Buscar\"></ion-searchbar>\r\n  \r\n  </ion-toolbar>\r\n</ion-header >\r\n\r\n<ion-content class=\"backgeneral\">\r\n\r\n<ion-list style=\"height: 200px; overflow-y: auto;\">\r\n  <ion-item button class=\"itemcolor1\" (click)=\"seleccion_categoria(item)\" *ngFor=\"let item of categories\" >\r\n    <ion-label>\r\n        {{item.name}}\r\n    </ion-label>    \r\n  </ion-item>\r\n</ion-list>\r\n \r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <hr style=\"background-color: white;\">\r\n      <p style=\"color: yellow; font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Categoría(s) Seleccionada(s)</p>\r\n      <hr style=\"background-color: white;\">\r\n    </ion-col>\r\n  </ion-row>    \r\n  <ion-list style=\"height: 100px; overflow-y: auto;\">\r\n  <ion-item button class=\"itemcolor1\" *ngFor=\"let itemCatselec of selectedcategories\" >\r\n    <ion-label>\r\n        {{itemCatselec.name}}\r\n    </ion-label>    \r\n  </ion-item>  \r\n</ion-list>\r\n\r\n<div class=\"buttons ion-padding-top\">\r\n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"enviar_categoria()\" shape=\"round\">Enviar</ion-button>\r\n</div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/search-category-esp/search-category-esp-routing.module.ts": function srcAppPagesSearchCategoryEspSearchCategoryEspRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCategoryEspPageRoutingModule", function () {
      return SearchCategoryEspPageRoutingModule;
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


    var _search_category_esp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-category-esp.page */
    "./src/app/pages/search-category-esp/search-category-esp.page.ts");

    var routes = [{
      path: '',
      component: _search_category_esp_page__WEBPACK_IMPORTED_MODULE_3__["SearchCategoryEspPage"]
    }];

    var SearchCategoryEspPageRoutingModule = function SearchCategoryEspPageRoutingModule() {
      _classCallCheck(this, SearchCategoryEspPageRoutingModule);
    };

    SearchCategoryEspPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchCategoryEspPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search-category-esp/search-category-esp.module.ts": function srcAppPagesSearchCategoryEspSearchCategoryEspModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCategoryEspPageModule", function () {
      return SearchCategoryEspPageModule;
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


    var _search_category_esp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-category-esp-routing.module */
    "./src/app/pages/search-category-esp/search-category-esp-routing.module.ts");
    /* harmony import */


    var _search_category_esp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-category-esp.page */
    "./src/app/pages/search-category-esp/search-category-esp.page.ts");

    var SearchCategoryEspPageModule = function SearchCategoryEspPageModule() {
      _classCallCheck(this, SearchCategoryEspPageModule);
    };

    SearchCategoryEspPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_category_esp_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchCategoryEspPageRoutingModule"]],
      declarations: [_search_category_esp_page__WEBPACK_IMPORTED_MODULE_6__["SearchCategoryEspPage"]]
    })], SearchCategoryEspPageModule);
    /***/
  },

  /***/
  "./src/app/pages/search-category-esp/search-category-esp.page.scss": function srcAppPagesSearchCategoryEspSearchCategoryEspPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1jYXRlZ29yeS1lc3Avc2VhcmNoLWNhdGVnb3J5LWVzcC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/search-category-esp/search-category-esp.page.ts": function srcAppPagesSearchCategoryEspSearchCategoryEspPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCategoryEspPage", function () {
      return SearchCategoryEspPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SearchCategoryEspPage = /*#__PURE__*/function () {
      function SearchCategoryEspPage(location, apiService) {
        _classCallCheck(this, SearchCategoryEspPage);

        this.location = location;
        this.apiService = apiService;
        this.working = false;
        this.categoryTitle = "...";
        this.categories = [];
        this.previuscategories = [];
        this.selectedcategories = [];
        this.userinfo = null;
        this.auth = false;
        this.Productstypes = new Array();
        this.productsAves = [];
        this.paramSearch = '';
        this.shouldShowCancel = false;
      }

      _createClass(SearchCategoryEspPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.apiService.Get("Categories").then(function (res) {
            _this.categories = res;
            _this.previuscategories = res;
          });
        }
      }, {
        key: "change",
        value: function change() {
          var _this2 = this;

          if (this.paramSearch != null && this.paramSearch != "") {
            this.categories = this.previuscategories.filter(function (s) {
              var _a;

              return ((_a = s.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(_this2.paramSearch.toLowerCase())) >= 0;
            });
          } else {
            this.categories = this.previuscategories;
          }
        }
      }, {
        key: "onCancel",
        value: function onCancel(event) {
          this.categories = this.previuscategories;
        }
      }, {
        key: "seleccion_categoria",
        value: function seleccion_categoria(item) {
          this.selectedcategories.push(item);
        }
      }, {
        key: "enviar_categoria",
        value: function enviar_categoria() {
          window.localStorage.removeItem('categoria_seleccion');
          window.localStorage.setItem('categoria_seleccion', JSON.stringify(this.selectedcategories));
          this.location.back();
        }
      }]);

      return SearchCategoryEspPage;
    }();

    SearchCategoryEspPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    SearchCategoryEspPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-category-esp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-category-esp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-category-esp/search-category-esp.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-category-esp.page.scss */
      "./src/app/pages/search-category-esp/search-category-esp.page.scss"))["default"]]
    })], SearchCategoryEspPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-search-category-esp-search-category-esp-module-es5.js.map