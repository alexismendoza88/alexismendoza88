function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">      \r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >ACCESO A QPRICE</p>\r\n    </ion-title>    \r\n  </ion-toolbar>\r\n</ion-header> \r\n\r\n\r\n<!-- Contents -->\r\n<ion-content id=\"signin\" class=\"backgeneral\">  \r\n  \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <p style=\"color: yellow; font-size: 14px; font-weight: bold; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Ingresa la siguiente Información</p>\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>    \r\n    <!-- SignIn Form -->\r\n    <form class=\"ion-padding\" #form=\"ngForm\" [formGroup]=\"validations_form\"  (ngSubmit)=\"login(validations_form.value)\">\r\n      <!-- Email -->\r\n      <ion-item class=\"itemcolor1\">\r\n        <ion-label>\r\n          <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n        </ion-label>\r\n        <ion-input type=\"email\"  formControlName=\"email\"  placeholder=\"Correo Electrónico\" ></ion-input>\r\n      </ion-item>\r\n\r\n      <!-- Password -->\r\n      <ion-item class=\"ion-padding-top\" class=\"itemcolor1\">\r\n        <ion-label>\r\n          <div class=\"divide\" id=\"lgpassword\"><ion-icon class=\"allicon\" name=\"key\" style=\"color:white\"></ion-icon></div>\r\n        </ion-label>\r\n        <ion-input formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\" ></ion-input>\r\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"itemcolor1\">\r\n        <ion-label style=\"font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\">¿Recordar Clave?</ion-label>\r\n         <ion-toggle   formControlName=\"remenber\" ></ion-toggle>\r\n       </ion-item>      \r\n      <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n      <!-- SignIn Buttons -->\r\n      <div class=\"buttons\">\r\n        <ion-button type=\"submit\" [disabled]=\"form.invalid\"  expand=\"block\" color=\"secondary\"  shape=\"round\" routerDirection=\"root\">\r\n          <ion-text><strong>Entrar</strong></ion-text>\r\n        </ion-button>\r\n      <!-- Forget Passw\r\n        ord Button -->        \r\n      <ion-button expand=\"block\" style=\"color:white;\" fill=\"clear\" slot=\"end\" (click)=\"resetpass()\"\r\n        routerDirection=\"root\">\r\n       ¿Olvidaste Clave?\r\n      </ion-button>\r\n      </div>\r\n    </form>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts": function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts": function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss": function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts": function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, formBuilder, busyService, apiService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.apiService = apiService;
        this.errorMessage = '';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
      }

      _createClass(LoginPage, [{
        key: "hideShowPassword",
        value: function hideShowPassword() {
          this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
          this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var recordar = true;
          var pass = window.localStorage.getItem("passwordMoney");
          var mail = window.localStorage.getItem("emailMoney");
          var remember = window.localStorage.getItem("remember");

          if (remember == 'no') {
            recordar = false;
          }

          if (mail == null) {
            mail = '';
          }

          if (pass == null) {
            pass = '';
          }

          this.validations_form = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](mail, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](pass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
            remenber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](recordar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([]))
          });
        }
      }, {
        key: "login",
        value: function login(value) {
          var _this = this;

          this.working = true;
          value.msToken = window.localStorage.getItem("msToken");
          this.apiService.Post(value, "Users/Login").then(function (res) {
            _this.working = false;

            if (res.ok) {
              if (value.remenber) {
                window.localStorage.removeItem("emailMoney");
                window.localStorage.removeItem("passwordMoney");
                window.localStorage.removeItem("remember");
                window.localStorage.setItem("emailMoney", value.email);
                window.localStorage.setItem("passwordMoney", value.password);
                window.localStorage.setItem("remember", "si");
              } else {
                window.localStorage.removeItem("emailMoney");
                window.localStorage.removeItem("passwordMoney");
                window.localStorage.removeItem("remember");
                window.localStorage.setItem("remember", "no");
              }

              window.localStorage.removeItem("userinfo");
              window.localStorage.setItem("userinfo", JSON.stringify(res.data));
              console.log("ivancho..." + res.data.createCategory);

              if (res.data.createCategory != 1) {
                document.getElementById("categorias").style.display = 'none'; //codigo de categoria        
              }

              if (res.data.role == "Customer") {
                document.getElementById("pedidos").style.display = "none";

                _this.router.navigate(['/solicitudelist']);
              } else {
                document.getElementById("pedidos").style.display = "inline";

                _this.router.navigate(['/companysol']);
              }
            } else {
              _this.busyService.presentAlert("¡Informe!", res.message);
            }
          }, function (err) {
            _this.working = false;

            _this.busyService.presentAlert("¡Informe!", "Ocurrió un error, intente de nuevo");
          });
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/inicio']);
        }
      }, {
        key: "resetpass",
        value: function resetpass() {
          this.router.navigate(['/resetpass']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map