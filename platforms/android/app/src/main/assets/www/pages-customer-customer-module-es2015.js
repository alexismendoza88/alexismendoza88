(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-customer-customer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >CREAR CUENTA - PERSONA</p>      \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen  class=\"backgeneral\">\r\n  <div class=\"section_two ion-padding\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>    \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <p style=\"color: yellow; font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Ingresa la siguiente Información</p>\r\n      </ion-col>\r\n    </ion-row>  \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>    \r\n         <ion-item class=\"itemcolor1\">\r\n           <div class=\"divide\" id=\"lgpersona\"><ion-icon class=\"allicon\" name=\"person\" style=\"color: white;\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\" Nombres y Apellidos  (*)\"  required></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"email\" type=\"text\" placeholder=\" Correo Electrónico  (*)\"  required></ion-input>\r\n          </ion-item>               \r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgpassword\"><ion-icon class=\"allicon\" name=\"key\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Clave - Mínimo 6 caracteres  (*)\"  required></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgpassword\"><ion-icon class=\"allicon\" name=\"key\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"confirm\" type=\"password\" placeholder=\"Confirmar Clave  (*)\"  required></ion-input>\r\n          </ion-item> \r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgcelular\"><ion-icon class=\"allicon\" name=\"phone-portrait-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"N° Celular\"  required></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\"><ion-icon class=\"allicon\" name=\"call-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"fijo\"  type=\"text\" placeholder=\" N° Fijo\"  ></ion-input>\r\n          </ion-item>    \r\n          \r\n          <div class=\"buttons ion-padding-top\">\r\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Guardar Información</ion-button>\r\n          </div>\r\n  </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/customer/customer-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CustomerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageRoutingModule", function() { return CustomerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer.page */ "./src/app/pages/customer/customer.page.ts");




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_3__["CustomerPage"]
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CustomerPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/customer/customer.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/*! exports provided: CustomerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPageModule", function() { return CustomerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/pages/customer/customer-routing.module.ts");
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer.page */ "./src/app/pages/customer/customer.page.ts");







let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustomerPageRoutingModule"]
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_6__["CustomerPage"]]
    })
], CustomerPageModule);



/***/ }),

/***/ "./src/app/pages/customer/customer.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/customer/customer.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/customer/customer.page.ts ***!
  \*************************************************/
/*! exports provided: CustomerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerPage", function() { return CustomerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");






let CustomerPage = class CustomerPage {
    constructor(router, apiService, formBuilder, busyService) {
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
                    required: false,
                }],
            phone: [''],
            fijo: [''],
        });
    }
    ngOnInit() {
    }
    tryRegister(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (form.confirm != form.password) {
                yield this.busyService.presentAlert("¡Información!", "La clave y confirmar clave no son iguales");
                return;
            }
            this.working = true;
            this.apiService.Post(form, "Customers")
                .then(res => {
                this.working = false;
                this.errorMessage = "";
                this.busyService.presentAlert("¡Información!", "Registro creado exitosamente");
                this.router.navigate(['/login']);
            }, err => {
                this.working = false;
                this.errorMessage = err.message;
                this.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
            });
        });
    }
};
CustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] }
];
CustomerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-customer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customer.page.scss */ "./src/app/pages/customer/customer.page.scss")).default]
    })
], CustomerPage);



/***/ })

}]);
//# sourceMappingURL=pages-customer-customer-module-es2015.js.map