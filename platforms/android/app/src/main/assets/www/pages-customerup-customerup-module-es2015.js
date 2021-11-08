(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customerup-customerup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerup/customerup.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerup/customerup.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">MI CUENTA</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen  class=\"backgeneral\">\r\n  <div class=\"section_two ion-padding\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <input type=\"hidden\" formControlName=\"userId\">\r\n         <ion-item class=\"itemcolor1\">\r\n          <div class=\"divide\" id=\"lgpersona\"><ion-icon class=\"allicon\" name=\"person\" style=\"color: white;\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombres\"  required></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgcelular\"><ion-icon class=\"allicon\" name=\"phone-portrait-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Teléfono\"  required></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\"><ion-icon class=\"allicon\" name=\"call-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"fijo\"  type=\"text\" placeholder=\"Teléfono fijo\"  required></ion-input>\r\n          </ion-item>\r\n              \r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n              <ion-input formControlName=\"email\" readonly=\"readonly\" type=\"text\" placeholder=\"Correo\"  required></ion-input>\r\n            </ion-item> \r\n\r\n          <div class=\"buttons ion-padding-top\">\r\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >ACTUALIZAR INFORMACIÓN</ion-button>\r\n          </div>\r\n  </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/customerup/customerup-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/customerup/customerup-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CustomerupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerupPageRoutingModule", function() { return CustomerupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _customerup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customerup.page */ "./src/app/pages/customerup/customerup.page.ts");




const routes = [
    {
        path: '',
        component: _customerup_page__WEBPACK_IMPORTED_MODULE_3__["CustomerupPage"]
    }
];
let CustomerupPageRoutingModule = class CustomerupPageRoutingModule {
};
CustomerupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/customerup/customerup.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/customerup/customerup.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomerupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerupPageModule", function() { return CustomerupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _customerup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customerup-routing.module */ "./src/app/pages/customerup/customerup-routing.module.ts");
/* harmony import */ var _customerup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customerup.page */ "./src/app/pages/customerup/customerup.page.ts");







let CustomerupPageModule = class CustomerupPageModule {
};
CustomerupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customerup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerupPageRoutingModule"]
        ],
        declarations: [_customerup_page__WEBPACK_IMPORTED_MODULE_6__["CustomerupPage"]]
    })
], CustomerupPageModule);



/***/ }),

/***/ "./src/app/pages/customerup/customerup.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/customerup/customerup.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVydXAvY3VzdG9tZXJ1cC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/customerup/customerup.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/customerup/customerup.page.ts ***!
  \*****************************************************/
/*! exports provided: CustomerupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerupPage", function() { return CustomerupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");






let CustomerupPage = class CustomerupPage {
    constructor(router, apiService, formBuilder, busyService) {
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
                    required: false,
                }],
            phone: [''],
            fijo: [''],
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.getdata();
    }
    getdata() {
        this.working = true;
        this.apiService.Get("Customers/CustomerUser/" + this.userinfo.id).then(res => {
            this.working = false;
            this.form.get("email").setValue(res.email);
            this.form.get("name").setValue(res.name);
            this.form.get("phone").setValue(res.phone);
            this.form.get("fijo").setValue(res.fijo);
            this.form.get("userId").setValue(res.userId);
            this.form.get("id").setValue(res.id);
        }, err => {
            this.working = false;
            this.errorMessage = err.message;
            this.busyService.presentAlert("¡Información!", "Error al consultar información de su cuenta");
        });
    }
    tryRegister(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.working = true;
            this.apiService.Put(form, "Customers/" + form.id)
                .then(res => {
                this.working = false;
                this.errorMessage = "";
                this.busyService.presentAlert("¡Información!", "Cuenta Actualizada Exitosamente");
                this.getdata();
            }, err => {
                this.working = false;
                this.errorMessage = err.message;
                this.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
            });
        });
    }
};
CustomerupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] }
];
CustomerupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customerup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customerup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customerup/customerup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customerup.page.scss */ "./src/app/pages/customerup/customerup.page.scss")).default]
    })
], CustomerupPage);



/***/ })

}]);
//# sourceMappingURL=pages-customerup-customerup-module-es2015.js.map