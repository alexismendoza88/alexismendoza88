function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-company-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesCompanyCompanyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">      \n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >CREAR CUENTA - EMPRESA</p>\n    </ion-title>    \n  </ion-toolbar>\n</ion-header>\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\n  <div class=\"section_two ion-padding\">   \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <p style=\"color: yellow; font-size: 12px; font-weight: lighter;\" >Ingresa la siguiente Información</p>\n    </ion-col>\n  </ion-row>   \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\">\n      <hr style=\"background-color: white;\">\n    </ion-col>\n  </ion-row>  \n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\n    <input type=\"hidden\" formControlName=\"lat\">\n    <input type=\"hidden\" formControlName=\"lng\">\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n          <ion-item class=\"itemcolor1\">\n            <ion-select multiple=\"true\" formControlName=\"name\"  placeholder=\"Selecciona la(s) Categoría(s)\" cancelText=\"Cancelar\" okText=\"Aceptar\"  [formControl]=\"form.controls.categoriesid\" >\n              <ion-select-option  *ngFor=\"let item of items\" [value]=\"item.id\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-auto-complete  formControlName=\"provinceName\"   (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Escribe la Ciudad ó Pueblo' }\"></ion-auto-complete>\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre de Empresa, Negocio o Servicio\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Número de Celular\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"ubication\" (click)=\"focus()\" readonly=\"readonly\"  type=\"text\" placeholder=\"Elegir Ubicación\"  required></ion-input>            \n          </ion-item>  \n\n            <ion-item class=\"itemcolor1\">\n             <ion-label>¿Cuenta con Domicilio?</ion-label>\n              <ion-toggle   formControlName=\"hasDelivery\" ></ion-toggle>\n            </ion-item> \n\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\"  required></ion-input>\n            </ion-item>\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Clave - Mínimo 6 caracteres\"  required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"confirm\" type=\"password\" placeholder=\"Confirmar Clave\"  required></ion-input>\n            </ion-item>  \n\n          <div class=\"buttons ion-padding-top\">\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Guardar Información</ion-button>\n          </div>\n  </form>\n</div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/company/company-routing.module.ts": function srcAppPagesCompanyCompanyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyPageRoutingModule", function () {
      return CompanyPageRoutingModule;
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


    var _company_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./company.page */
    "./src/app/pages/company/company.page.ts");

    var routes = [{
      path: '',
      component: _company_page__WEBPACK_IMPORTED_MODULE_3__["CompanyPage"]
    }];

    var CompanyPageRoutingModule = function CompanyPageRoutingModule() {
      _classCallCheck(this, CompanyPageRoutingModule);
    };

    CompanyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompanyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/company/company.module.ts": function srcAppPagesCompanyCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function () {
      return CompanyPageModule;
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


    var _company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./company-routing.module */
    "./src/app/pages/company/company-routing.module.ts");
    /* harmony import */


    var _company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./company.page */
    "./src/app/pages/company/company.page.ts");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");

    var CompanyPageModule = function CompanyPageModule() {
      _classCallCheck(this, CompanyPageModule);
    };

    CompanyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _company_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyPageRoutingModule"]],
      declarations: [_company_page__WEBPACK_IMPORTED_MODULE_6__["CompanyPage"]]
    })], CompanyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/company/company.page.scss": function srcAppPagesCompanyCompanyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-select {\n  --placeholder-opacity: 1 !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9DOlxcVXNlcnNcXEl2YW5jaG9cXHNvdXJjZVxccmVwb3NcXENvdGl6YVZlbmRGcm9udC9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbnlcXGNvbXBhbnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW55L2NvbXBhbnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvY29tcGFueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuXHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAiLCJpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/company/company.page.ts": function srcAppPagesCompanyCompanyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyPage", function () {
      return CompanyPage;
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
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/autoprovince.service */
    "./src/app/services/autoprovince.service.ts");

    var CompanyPage = /*#__PURE__*/function () {
      function CompanyPage(autoprovinceService, modalController, router, apiService, formBuilder, busyService) {
        _classCallCheck(this, CompanyPage);

        this.autoprovinceService = autoprovinceService;
        this.modalController = modalController;
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.working = false;
        this.items = [];
        this.provinceId = 0;
        this.provinceName = "";
        this.form = this.formBuilder.group({
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
          confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          name: [''],
          phone: [''],
          ubication: [''],
          provinceName: [''],
          categoriesid: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          hasDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
          lat: [''],
          lng: ['']
        });
      }

      _createClass(CompanyPage, [{
        key: "presentMap",
        value: function presentMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.modalController.create({
                      component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
                    });

                  case 2:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (res.data) {
                                  this.form.get("ubication").setValue(res.data.dir);
                                  this.form.get("lat").setValue(res.data.lat);
                                  this.form.get("lng").setValue(res.data.lng);
                                }

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });
                    _context2.next = 6;
                    return modal.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectedItem",
        value: function selectedItem(value) {
          this.provinceId = value.id;
        }
      }, {
        key: "itemRemoved",
        value: function itemRemoved(event) {
          this.provinceId = 0;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.working = true;
          this.apiService.Get("Categories").then(function (res) {
            _this2.items = res;
            _this2.working = false;
          }, function (err) {
            _this2.working = false;
          });
        }
      }, {
        key: "focus",
        value: function focus() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.busyService.AceptInfo("¡Información!", "Recuerda activar la Ubicación");

                  case 2:
                    res = _context3.sent;

                    if (!res) {
                      _context3.next = 6;
                      break;
                    }

                    _context3.next = 6;
                    return this.presentMap();

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "tryRegister",
        value: function tryRegister(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(form.confirm != form.password)) {
                      _context4.next = 4;
                      break;
                    }

                    _context4.next = 3;
                    return this.busyService.presentAlert("¡Información!", "La clave y confirmar clave no son iguales");

                  case 3:
                    return _context4.abrupt("return");

                  case 4:
                    this.working = true;
                    form.provinceId = this.provinceId;
                    this.apiService.Post(form, "Companies").then(function (res) {
                      _this3.working = false;
                      _this3.errorMessage = "";

                      _this3.busyService.presentAlert("¡Información!", "Registro creado exitosamente");

                      _this3.router.navigate(['/login']);
                    }, function (err) {
                      _this3.working = false;
                      _this3.errorMessage = err.message;

                      _this3.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
                    });

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CompanyPage;
    }();

    CompanyPage.ctorParameters = function () {
      return [{
        type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_8__["AutoprovinceService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"]
      }];
    };

    CompanyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-company',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./company.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./company.page.scss */
      "./src/app/pages/company/company.page.scss"))["default"]]
    })], CompanyPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-company-company-module-es5.js.map