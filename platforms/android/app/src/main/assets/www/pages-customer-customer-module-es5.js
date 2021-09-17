function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-customer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesCustomerCustomerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >CREAR CUENTA - PERSONA</p>      \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content  id=\"signup\" fullscreen  class=\"backgeneral\">\n  <div class=\"section_two ion-padding\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>    \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p style=\"color: yellow; font-size: 12px; font-weight: lighter;\" >Ingresa la siguiente Información</p>\n      </ion-col>\n    </ion-row>  \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <hr style=\"background-color: white;\">\n      </ion-col>\n    </ion-row>    \n         <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombres y Apellidos\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Número de Celular\"  required></ion-input>\n          </ion-item>\n              \n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\"  required></ion-input>\n            </ion-item> \n              \n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Clave - Mínimo 6 caracteres\"  required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"confirm\" type=\"password\" placeholder=\"Confirmar Clave\"  required></ion-input>\n            </ion-item>  \n\n          <div class=\"buttons ion-padding-top\">\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Guardar Información</ion-button>\n          </div>\n  </form>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/customer/customer-routing.module.ts": function srcAppPagesCustomerCustomerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function () {
      return CustomerPageRoutingModule;
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


    var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer.page */
    "./src/app/pages/customer/customer.page.ts");

    var routes = [{
      path: '',
      component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }];

    var CustomerPageRoutingModule = function CustomerPageRoutingModule() {
      _classCallCheck(this, CustomerPageRoutingModule);
    };

    CustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustomerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/customer/customer.module.ts": function srcAppPagesCustomerCustomerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function () {
      return CustomerPageModule;
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


    var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./customer-routing.module */
    "./src/app/pages/customer/customer-routing.module.ts");
    /* harmony import */


    var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./customer.page */
    "./src/app/pages/customer/customer.page.ts");

    var CustomerPageModule = function CustomerPageModule() {
      _classCallCheck(this, CustomerPageModule);
    };

    CustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"]],
      declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
    })], CustomerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/customer/customer.page.scss": function srcAppPagesCustomerCustomerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/customer/customer.page.ts": function srcAppPagesCustomerCustomerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerPage", function () {
      return CustomerPage;
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

    var CustomerPage = /*#__PURE__*/function () {
      function CustomerPage(router, apiService, formBuilder, busyService) {
        _classCallCheck(this, CustomerPage);

        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.form = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          name: ['', {
            required: false
          }],
          phone: ['']
        });
      }

      _createClass(CustomerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "tryRegister",
        value: function tryRegister(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(form.confirm != form.password)) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return this.busyService.presentAlert("¡Información!", "La clave y confirmar clave no son iguales");

                  case 3:
                    return _context.abrupt("return");

                  case 4:
                    this.working = true;
                    this.apiService.Post(form, "Customers").then(function (res) {
                      _this.working = false;
                      _this.errorMessage = "";

                      _this.busyService.presentAlert("¡Información!", "Registro creado exitosamente");

                      _this.router.navigate(['/login']);
                    }, function (err) {
                      _this.working = false;
                      _this.errorMessage = err.message;

                      _this.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return CustomerPage;
    }();

    CustomerPage.ctorParameters = function () {
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

    CustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-customer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./customer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./customer.page.scss */
      "./src/app/pages/customer/customer.page.scss"))["default"]]
    })], CustomerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-customer-customer-module-es5.js.map