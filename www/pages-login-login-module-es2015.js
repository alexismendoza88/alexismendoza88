(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">      \r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >ACCESO A QPRICE</p>\r\n    </ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Contents -->\r\n<ion-content id=\"signin\" fullscreen style=\"text-align: center !important\" class=\"backgeneral\">  \r\n  <div style=\"margin-top: -20px;\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <p style=\"color: yellow; font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Ingresa la siguiente Información</p>\r\n      </ion-col>\r\n    </ion-row>  \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>    \r\n    <!-- SignIn Form -->\r\n    <form class=\"ion-padding\" #form=\"ngForm\" [formGroup]=\"validations_form\"  (ngSubmit)=\"login(validations_form.value)\">\r\n      <!-- Email -->\r\n      <ion-item class=\"itemcolor1\">\r\n        <ion-label>\r\n          <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n        </ion-label>\r\n        <ion-input type=\"email\"  formControlName=\"email\"  placeholder=\"Correo Electrónico\" ></ion-input>\r\n      </ion-item>\r\n\r\n      <!-- Password -->\r\n      <ion-item class=\"ion-padding-top\" class=\"itemcolor1\">\r\n        <ion-label>\r\n          <div class=\"divide\" id=\"lgpassword\"><ion-icon class=\"allicon\" name=\"key\" style=\"color:white\"></ion-icon></div>\r\n        </ion-label>\r\n        <ion-input formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\" ></ion-input>\r\n        <ion-icon item-end [name]=\"passwordIcon\" class=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\r\n      </ion-item>\r\n      <ion-item class=\"itemcolor1\">\r\n        <ion-label>¿Recordar Clave?</ion-label>\r\n         <ion-toggle   formControlName=\"remenber\" ></ion-toggle>\r\n       </ion-item>      \r\n      <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n      <!-- SignIn Buttons -->\r\n      <div class=\"buttons\">\r\n        <ion-button type=\"submit\" [disabled]=\"form.invalid\"  expand=\"block\" color=\"secondary\"  shape=\"round\" routerDirection=\"root\">\r\n          <ion-text><strong>Entrar</strong></ion-text>\r\n        </ion-button>\r\n      <!-- Forget Passw\r\n        ord Button -->        \r\n      <ion-button expand=\"block\" style=\"color:white;\" fill=\"clear\" slot=\"end\" (click)=\"resetpass()\"\r\n        routerDirection=\"root\">\r\n       ¿Olvidaste Clave?\r\n      </ion-button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section_one {\n  height: 10%;\n}\n.section_one h2 {\n  font-weight: 900;\n  padding-top: 2%;\n}\n.section_one p {\n  color: var(--ion-color-color1);\n  font-weight: bold;\n}\n.section_two img {\n  height: 40%;\n}\n.section_three {\n  height: 5%;\n}\na.btn-social,\n.btn-social {\n  border-radius: 50%;\n  color: #ffffff !important;\n  display: inline-block;\n  height: 35px;\n  line-height: 35px;\n  margin: 8px 4px;\n  text-align: center;\n  text-decoration: none;\n  transition: background-color 0.3s;\n  width: 35px;\n}\n.btn-facebook {\n  background-color: #3b5998;\n}\n.btn-google-plus {\n  background-color: #dd4b39;\n}\n.btn-instagram {\n  background-color: #3f729b;\n}\n.btn-twitter {\n  background-color: #55acee;\n}\nion-header {\n  border-bottom: none !important;\n}\nion-header ion-toolbar {\n  --background-color: transparent;\n  --ion-color-base: transparent !important;\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxJdmFuY2hvXFxEb2N1bWVudHNcXFBSWV9RUFJJQ0VcXFFQUklDRS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ1I7QURFSTtFQUNJLDhCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRE1JO0VBQ0ksV0FBQTtBQ0hSO0FET0E7RUFDSSxVQUFBO0FDSko7QURPQTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtBQ0pKO0FET0E7RUFPSSw4QkFBQTtBQ1ZKO0FES0k7RUFDSSwrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uX29uZSB7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1jb2xvcjEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbl90d28ge1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uX3RocmVlIHtcclxuICAgIGhlaWdodDogNSU7XHJcbn1cclxuXHJcbmEuYnRuLXNvY2lhbCxcclxuLmJ0bi1zb2NpYWwge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgbWFyZ2luOiA4cHggNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbiAgICB3aWR0aDogMzVweDtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZS1wbHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbn1cclxuXHJcbi5idG4taW5zdGFncmFtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XHJcbn1cclxuXHJcbi5idG4tdHdpdHRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTVhY2VlO1xyXG59XHJcblxyXG5pb24taGVhZGVye1xyXG5cclxuICAgIGlvbi10b29sYmFyIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfSIsIi5zZWN0aW9uX29uZSB7XG4gIGhlaWdodDogMTAlO1xufVxuLnNlY3Rpb25fb25lIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgcGFkZGluZy10b3A6IDIlO1xufVxuLnNlY3Rpb25fb25lIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWNvbG9yMSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc2VjdGlvbl90d28gaW1nIHtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5zZWN0aW9uX3RocmVlIHtcbiAgaGVpZ2h0OiA1JTtcbn1cblxuYS5idG4tc29jaWFsLFxuLmJ0bi1zb2NpYWwge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbWFyZ2luOiA4cHggNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB3aWR0aDogMzVweDtcbn1cblxuLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XG59XG5cbi5idG4tZ29vZ2xlLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xufVxuXG4uYnRuLWluc3RhZ3JhbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjcyOWI7XG59XG5cbi5idG4tdHdpdHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NWFjZWU7XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");






let LoginPage = class LoginPage {
    constructor(router, formBuilder, busyService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.apiService = apiService;
        this.errorMessage = '';
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    }
    ngOnInit() {
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
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](mail, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](pass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])),
            remenber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](recordar, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
        });
    }
    login(value) {
        this.working = true;
        value.msToken = window.localStorage.getItem("msToken");
        this.apiService.Post(value, "Users/Login")
            .then(res => {
            this.working = false;
            if (res.ok) {
                if (value.remenber) {
                    window.localStorage.removeItem("emailMoney");
                    window.localStorage.removeItem("passwordMoney");
                    window.localStorage.removeItem("remember");
                    window.localStorage.setItem("emailMoney", value.email);
                    window.localStorage.setItem("passwordMoney", value.password);
                    window.localStorage.setItem("remember", "si");
                }
                else {
                    window.localStorage.removeItem("emailMoney");
                    window.localStorage.removeItem("passwordMoney");
                    window.localStorage.removeItem("remember");
                    window.localStorage.setItem("remember", "no");
                }
                window.localStorage.removeItem("userinfo");
                window.localStorage.setItem("userinfo", JSON.stringify(res.data));
                if (res.data.role == "Customer") {
                    document.getElementById("pedidos").style.display = 'none';
                    this.router.navigate(['/solicitudelist']);
                }
                else {
                    this.router.navigate(['/companysol']);
                }
            }
            else {
                this.busyService.presentAlert("¡Informe!", res.message);
            }
        }, err => {
            this.working = false;
            this.busyService.presentAlert("¡Informe!", "Ocurrió un error, intente de nuevo");
        });
    }
    home() {
        this.router.navigate(['/inicio']);
    }
    resetpass() {
        this.router.navigate(['/resetpass']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map