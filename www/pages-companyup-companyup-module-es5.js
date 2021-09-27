function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companyup-companyup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companyup/companyup.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesCompanyupCompanyupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Mi Cuenta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\r\n  <div class=\"section_two ion-padding\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <input type=\"hidden\" formControlName=\"userId\">\r\n    <input type=\"hidden\" formControlName=\"creationDate\">\r\n    <input type=\"hidden\" formControlName=\"lat\">\r\n    <input type=\"hidden\" formControlName=\"lng\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n          <ion-item class=\"itemcolor1\">\r\n            <ion-select multiple=\"true\" placeholder=\"Seleccione Categorías\"  cancelText=\"Cancelar\" okText=\"Aceptar\"  [formControl]=\"form.controls.categoriesid\"  >\r\n              <ion-select-option   *ngFor=\"let item of items\" [value]=\"item.id\" >{{item.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-auto-complete  formControlName=\"provinceName\"   (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\"></ion-auto-complete>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgempresa\"><ion-icon class=\"allicon\" name=\"storefront-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre\"  ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgcelular\"><ion-icon class=\"allicon\" name=\"phone-portrait-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Teléfono\"  ></ion-input>\r\n          </ion-item> \r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\"><ion-icon class=\"allicon\" name=\"call-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"fijo\"  type=\"text\" placeholder=\"Teléfono fijo\"  ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgubicacion\"><ion-icon class=\"allicon\" name=\"location-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"ubication\" readonly=\"readonly\"   type=\"text\" placeholder=\"Ubicación\"  ></ion-input>\r\n            <ion-button (click)=\"presentMap()\" color=\"secondary\" slot=\"end\" ><ion-icon name=\"map-outline\"></ion-icon></ion-button>\r\n          </ion-item>  \r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgfacebook\"><ion-icon class=\"allicon\" name=\"logo-facebook\" style=\"color:white\"></ion-icon> </div>\r\n            <ion-input formControlName=\"facebook\" type=\"text\" placeholder=\"Facebook\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgyoutube\"><ion-icon class=\"allicon\" name=\"logo-youtube\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"youtube\" type=\"text\" placeholder=\"Youtube\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lginstagram\"><ion-icon class=\"allicon\" name=\"logo-instagram\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"instagram\" type=\"text\" placeholder=\"Instagram\"></ion-input>\r\n          </ion-item>\r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgdomicilio\"><ion-icon class=\"allicon\" name=\"id-card-outline\" style=\"color:white\"></ion-icon></div>\r\n             <ion-label>Domicilio</ion-label>\r\n              <ion-toggle   formControlName=\"hasDelivery\" ></ion-toggle>\r\n            </ion-item> \r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\"><ion-icon class=\"allicon\" name=\"construct\" style=\"color:white\"></ion-icon></div>\r\n              <ion-label>¿Desactivar Notificaciones?</ion-label>\r\n               <ion-toggle   formControlName=\"notifications\" ></ion-toggle>\r\n             </ion-item> \r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n              <ion-input formControlName=\"email\" readonly=\"readonly\" type=\"text\" placeholder=\"Correo\"  ></ion-input>\r\n            </ion-item> \r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgmegafono\"><ion-icon class=\"allicon\" name=\"megaphone\" style=\"color:white\"></ion-icon></div>\r\n              <ion-textarea formControlName=\"RtpaInmediata\" rows=\"6\" cols=\"20\" placeholder=\"Respuesta rapida al cliente\" ></ion-textarea>\r\n            </ion-item>\r\n         \r\n            <div class=\"buttons ion-padding-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Actualizar</ion-button>\r\n            </div>\r\n  </form>\r\n</div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/companyup/companyup-routing.module.ts": function srcAppPagesCompanyupCompanyupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyupPageRoutingModule", function () {
      return CompanyupPageRoutingModule;
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


    var _companyup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./companyup.page */
    "./src/app/pages/companyup/companyup.page.ts");

    var routes = [{
      path: '',
      component: _companyup_page__WEBPACK_IMPORTED_MODULE_3__["CompanyupPage"]
    }];

    var CompanyupPageRoutingModule = function CompanyupPageRoutingModule() {
      _classCallCheck(this, CompanyupPageRoutingModule);
    };

    CompanyupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CompanyupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/companyup/companyup.module.ts": function srcAppPagesCompanyupCompanyupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyupPageModule", function () {
      return CompanyupPageModule;
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


    var _companyup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./companyup-routing.module */
    "./src/app/pages/companyup/companyup-routing.module.ts");
    /* harmony import */


    var _companyup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./companyup.page */
    "./src/app/pages/companyup/companyup.page.ts");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");

    var CompanyupPageModule = function CompanyupPageModule() {
      _classCallCheck(this, CompanyupPageModule);
    };

    CompanyupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _companyup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyupPageRoutingModule"]],
      declarations: [_companyup_page__WEBPACK_IMPORTED_MODULE_6__["CompanyupPage"]]
    })], CompanyupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/companyup/companyup.page.scss": function srcAppPagesCompanyupCompanyupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-select {\n  --placeholder-opacity: 1 !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueXVwL0M6XFxVc2Vyc1xcSXZhbmNob1xcRG9jdW1lbnRzXFxQUllfUVBSSUNFXFxRUFJJQ0Uvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW55dXBcXGNvbXBhbnl1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhbnl1cC9jb21wYW55dXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnl1cC9jb21wYW55dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcblxyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgIiwiaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/companyup/companyup.page.ts": function srcAppPagesCompanyupCompanyupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyupPage", function () {
      return CompanyupPage;
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


    var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/autoprovince.service */
    "./src/app/services/autoprovince.service.ts");
    /* harmony import */


    var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/map/map.component */
    "./src/app/components/map/map.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CompanyupPage = /*#__PURE__*/function () {
      function CompanyupPage(modalController, autoprovinceService, router, apiService, formBuilder, busyService) {
        _classCallCheck(this, CompanyupPage);

        this.modalController = modalController;
        this.autoprovinceService = autoprovinceService;
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.working = false;
        this.items = [];
        this.provinceId = 0;
        this.note = null;
        this.file = null;
        this.provinceName = "";
        this.leng = 0;
        this.id = "";
        this.categoriesple = "";

        this.compareWithFn = function (o1, o2) {
          return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };

        this.form = this.formBuilder.group({
          id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          name: [''],
          phone: [''],
          fijo: [''],
          userId: [''],
          creationDate: [''],
          ubication: [''],
          facebook: [''],
          youtube: [''],
          instagram: [''],
          provinceName: [''],
          categoriesid: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
          notifications: [],
          RtpaInmediata: [''],
          hasDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
          lat: [''],
          lng: ['']
        });
      }

      _createClass(CompanyupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectedItem",
        value: function selectedItem(value) {
          this.provinceId = value.id;
        }
      }, {
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
                      component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.working = true;
          this.apiService.Get("Categories").then(function (res) {
            _this2.working = false;
            _this2.items = res;

            _this2.getdata();
          }, function (err) {
            _this2.working = false;
          });
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this3 = this;

          this.working = true;
          this.apiService.Get("Companies/CompanyUser/" + this.userinfo.id).then(function (res) {
            _this3.working = false;
            var formData = new FormData();

            _this3.form.get("email").setValue(res.email);

            _this3.form.get("name").setValue(res.name);

            _this3.form.get("phone").setValue(res.phone);

            _this3.form.get("fijo").setValue(res.fijo);

            _this3.form.get("ubication").setValue(res.ubication);

            _this3.form.get("facebook").setValue(res.facebook);

            _this3.form.get("youtube").setValue(res.youtube);

            _this3.form.get("instagram").setValue(res.instagram);

            _this3.form.get("categoriesid").setValue(res.categoriesid);

            _this3.form.get("provinceName").setValue(res.provinceName);

            _this3.provinceId = res.provinceId;

            _this3.form.get("hasDelivery").setValue(res.hasDelivery);

            _this3.form.get("creationDate").setValue(res.creationDate);

            _this3.form.get("notifications").setValue(res.notifications);

            _this3.form.get("RtpaInmediata").setValue(res.RtpaInmediata);

            _this3.form.get("userId").setValue(res.userId);

            _this3.form.get("id").setValue(res.id);

            _this3.form.get("lat").setValue(res.lat);

            _this3.form.get("lng").setValue(res.lng);

            _this3.id = res.id;
          }, function (err) {
            _this3.working = false;
            _this3.errorMessage = err.message;

            _this3.busyService.presentAlert("¡Información!", "Error al consultar información de su cuenta");
          });
        }
      }, {
        key: "itemRemoved",
        value: function itemRemoved(event) {
          this.provinceId = 0;
        }
      }, {
        key: "tryRegister",
        value: function tryRegister(form) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.working = true;
                    form.provinceId = this.provinceId;
                    this.apiService.Post(form, "Companies/CompanyUp").then(function (res) {
                      _this4.working = false;
                      _this4.errorMessage = "";

                      _this4.busyService.presentAlert("¡Información!", "Cuenta actualizada exitosamente");

                      _this4.getdata();
                    }, function (err) {
                      _this4.working = false;
                      _this4.errorMessage = err.message;

                      _this4.busyService.presentAlert("¡Información!", "No fue posible actualizar la cuenta");
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return CompanyupPage;
    }();

    CompanyupPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"]
      }, {
        type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__["AutoprovinceService"]
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

    CompanyupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-companyup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./companyup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companyup/companyup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./companyup.page.scss */
      "./src/app/pages/companyup/companyup.page.scss"))["default"]]
    })], CompanyupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-companyup-companyup-module-es5.js.map