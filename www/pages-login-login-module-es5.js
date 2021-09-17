function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border backgeneral\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-button  (click)='home()'>\n        <ion-icon style=\"color:white\" name=\"home-outline\" slot=\"start\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<!-- Contents -->\n<ion-content id=\"signin\" fullscreen style=\"text-align: center !important\" class=\"backgeneral\">\n  <img class=\"\" src=\"assets/images/logo.png\" style=\"height: 150px;\" />\n  <div style=\"margin-top: -20px;\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <p style=\"color: yellow; font-size: 12px; font-weight: lighter;\" >Ingresa la siguiente Información</p>\n      </ion-col>\n    </ion-row>  \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <hr style=\"background-color: white;\">\n      </ion-col>\n    </ion-row>    \n    <!-- SignIn Form -->\n    <form class=\"ion-padding\" #form=\"ngForm\" [formGroup]=\"validations_form\"  (ngSubmit)=\"login(validations_form.value)\">\n      <!-- Email -->\n      <ion-item class=\"itemcolor1\">\n        <ion-label>\n          <ion-icon name=\"mail\" style=\"color:white\"></ion-icon>\n        </ion-label>\n        <ion-input type=\"email\"  formControlName=\"email\"  placeholder=\"Correo\" ></ion-input>\n      </ion-item>\n\n      <!-- Password -->\n      <ion-item class=\"ion-padding-top\" class=\"itemcolor1\">\n        <ion-label>\n          <ion-icon name=\"key\" style=\"color:white\"></ion-icon>\n        </ion-label>\n        <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Clave\" ></ion-input>\n      </ion-item>\n      <ion-item class=\"itemcolor1\">\n        <ion-label>Recordar Clave</ion-label>\n         <ion-toggle   formControlName=\"remenber\" ></ion-toggle>\n       </ion-item>      \n      <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n      <!-- SignIn Buttons -->\n      <div class=\"buttons\">\n        <ion-button type=\"submit\" [disabled]=\"form.invalid\"  expand=\"block\" color=\"secondary\"  shape=\"round\" routerDirection=\"root\">\n          <ion-text><strong>Iniciar</strong></ion-text>\n        </ion-button>\n      <!-- Forget Passw\n        ord Button -->        \n      <ion-button expand=\"block\" style=\"color:white;\" fill=\"clear\" slot=\"end\" (click)=\"resetpass()\"\n        routerDirection=\"root\">\n       ¿Olvidaste tu clave?\n      </ion-button>\n      </div>\n    </form>\n  </div>\n\n</ion-content>";
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    __webpack_exports__["default"] = ".section_one {\n  height: 10%;\n}\n.section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n.section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n.section_two img {\n  height: 40%;\n}\n.section_three {\n  height: 5%;\n}\na.btn-social,\n.btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n.btn-facebook {\n  background-color: #3b5998;\n}\n.btn-google-plus {\n  background-color: #dd4b39;\n}\n.btn-instagram {\n  background-color: #3f729b;\n}\n.btn-twitter {\n  background-color: #55acee;\n}\nion-header {\n  border-bottom: none !important;\n}\nion-header ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxJdmFuY2hvXFxzb3VyY2VcXHJlcG9zXFxDb3RpemFWZW5kRnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FERUk7RUFDSSw4QkFBQTtFQUNBLGlCQUFBO0FDQVI7QURNSTtFQUNJLFdBQUE7QUNIUjtBRE9BO0VBQ0ksVUFBQTtBQ0pKO0FET0E7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7QUNKSjtBRE9BO0VBQ0kseUJBQUE7QUNKSjtBRE9BO0VBT0ksOEJBQUE7QUNWSjtBREtJO0VBQ0ksK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbl9vbmUge1xyXG4gICAgaGVpZ2h0OiAxMCU7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY29sb3IxKTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb25fdHdvIHtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbl90aHJlZSB7XHJcbiAgICBoZWlnaHQ6IDUlO1xyXG59XHJcblxyXG5hLmJ0bi1zb2NpYWwsXHJcbi5idG4tc29jaWFsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogOHB4IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxufVxyXG5cclxuLmJ0bi1nb29nbGUtcGx1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG59XHJcblxyXG4uYnRuLWluc3RhZ3JhbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xyXG59XHJcblxyXG4uYnRuLXR3aXR0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1YWNlZTtcclxufVxyXG5cclxuaW9uLWhlYWRlcntcclxuXHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH0iLCIuc2VjdGlvbl9vbmUge1xuICBoZWlnaHQ6IDEwJTtcbn1cbi5zZWN0aW9uX29uZSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHBhZGRpbmctdG9wOiAyJTtcbn1cbi5zZWN0aW9uX29uZSBwIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNlY3Rpb25fdHdvIGltZyB7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uc2VjdGlvbl90aHJlZSB7XG4gIGhlaWdodDogNSU7XG59XG5cbmEuYnRuLXNvY2lhbCxcbi5idG4tc29jaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbjogOHB4IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xufVxuXG4uYnRuLWdvb2dsZS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkNGIzOTtcbn1cblxuLmJ0bi1pbnN0YWdyYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3MjliO1xufVxuXG4uYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xufVxuXG5pb24taGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufSJdfQ== */";
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

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, formBuilder, busyService, apiService) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.apiService = apiService;
        this.errorMessage = '';
      }

      _createClass(LoginPage, [{
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

              if (res.data.role == "Customer") {
                document.getElementById("pedidos").style.display = 'none';

                _this.router.navigate(['/solicitudelist']);
              } else {
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