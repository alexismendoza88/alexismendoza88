function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customerup-customerup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerup/customerup.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomerupCustomerupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Mi Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  id=\"signup\" fullscreen  class=\"backgeneral\">\n  <div class=\"section_two ion-padding\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n    <input type=\"hidden\" formControlName=\"id\">\n    <input type=\"hidden\" formControlName=\"userId\">\n         <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombres\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Teléfono\"  required></ion-input>\n          </ion-item>\n              \n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"email\" readonly=\"readonly\" type=\"text\" placeholder=\"Correo\"  required></ion-input>\n            </ion-item> \n\n          <div class=\"buttons ion-padding-top\">\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Actualizar</ion-button>\n          </div>\n  </form>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/customerup/customerup-routing.module.ts": function srcAppPagesCustomerupCustomerupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerupPageRoutingModule", function () {
      return CustomerupPageRoutingModule;
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


    var _customerup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customerup.page */
    "./src/app/pages/customerup/customerup.page.ts");

    var routes = [{
      path: '',
      component: _customerup_page__WEBPACK_IMPORTED_MODULE_3__["CustomerupPage"]
    }];

    var CustomerupPageRoutingModule = function CustomerupPageRoutingModule() {
      _classCallCheck(this, CustomerupPageRoutingModule);
    };

    CustomerupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/customerup/customerup.module.ts": function srcAppPagesCustomerupCustomerupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerupPageModule", function () {
      return CustomerupPageModule;
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


    var _customerup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customerup-routing.module */
    "./src/app/pages/customerup/customerup-routing.module.ts");
    /* harmony import */


    var _customerup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customerup.page */
    "./src/app/pages/customerup/customerup.page.ts");

    var CustomerupPageModule = function CustomerupPageModule() {
      _classCallCheck(this, CustomerupPageModule);
    };

    CustomerupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customerup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerupPageRoutingModule"]],
      declarations: [_customerup_page__WEBPACK_IMPORTED_MODULE_6__["CustomerupPage"]]
    })], CustomerupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/customerup/customerup.page.scss": function srcAppPagesCustomerupCustomerupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVydXAvY3VzdG9tZXJ1cC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/customerup/customerup.page.ts": function srcAppPagesCustomerupCustomerupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerupPage", function () {
      return CustomerupPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");

    var CustomerupPage = /*#__PURE__*/function () {
      function CustomerupPage(router, apiService, formBuilder, busyService) {
        _classCallCheck(this, CustomerupPage);

        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.form = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          userId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          name: ['', {
            required: false
          }],
          phone: ['']
        });
      }

      _createClass(CustomerupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.getdata();
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this = this;

          this.working = true;
          this.apiService.Get("Customers/CustomerUser/" + this.userinfo.id).then(function (res) {
            _this.working = false;

            _this.form.get("email").setValue(res.email);

            _this.form.get("name").setValue(res.name);

            _this.form.get("phone").setValue(res.phone);

            _this.form.get("userId").setValue(res.userId);

            _this.form.get("id").setValue(res.id);
          }, function (err) {
            _this.working = false;
            _this.errorMessage = err.message;

            _this.busyService.presentAlert("¡Información!", "Error al consultar información de su cuenta");
          });
        }
      }, {
        key: "tryRegister",
        value: function tryRegister(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.working = true;
                    this.apiService.Put(form, "Customers/" + form.id).then(function (res) {
                      _this2.working = false;
                      _this2.errorMessage = "";

                      _this2.busyService.presentAlert("¡Información!", "Cuenta Actualizada Exitosamente");

                      _this2.getdata();
                    }, function (err) {
                      _this2.working = false;
                      _this2.errorMessage = err.message;

                      _this2.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CustomerupPage;
    }();

    CustomerupPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"]
      }];
    };

    CustomerupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customerup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customerup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerup/customerup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customerup.page.scss */
      "./src/app/pages/customerup/customerup.page.scss"))["default"]]
    })], CustomerupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-customerup-customerup-module-es5.js.map