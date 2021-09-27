(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-resetpass-resetpass-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpass/resetpass.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpass/resetpass.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n        \r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >CAMBIAR CLAVE</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <p style=\"color: yellow; font-size: 12px; font-weight: lighter;\" >Ingresa el Correo Electrónico.</p>\r\n    </ion-col>\r\n  </ion-row>  \r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\">\r\n      <hr style=\"background-color: white;\">\r\n    </ion-col>\r\n  </ion-row>   \r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-input [(ngModel)]=\"mail\" placeholder=\"Correo Electrónico\" ></ion-input>\r\n  </ion-item>\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\"  class=\"ion-text-center\">\r\n   <ion-button [disabled]=\"working || mail==''\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Enviar</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/resetpass/resetpass-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/resetpass/resetpass-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ResetpassPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpassPageRoutingModule", function() { return ResetpassPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _resetpass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpass.page */ "./src/app/pages/resetpass/resetpass.page.ts");




const routes = [
    {
        path: '',
        component: _resetpass_page__WEBPACK_IMPORTED_MODULE_3__["ResetpassPage"]
    }
];
let ResetpassPageRoutingModule = class ResetpassPageRoutingModule {
};
ResetpassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetpassPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/resetpass/resetpass.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/resetpass/resetpass.module.ts ***!
  \*****************************************************/
/*! exports provided: ResetpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpassPageModule", function() { return ResetpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _resetpass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resetpass-routing.module */ "./src/app/pages/resetpass/resetpass-routing.module.ts");
/* harmony import */ var _resetpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resetpass.page */ "./src/app/pages/resetpass/resetpass.page.ts");







let ResetpassPageModule = class ResetpassPageModule {
};
ResetpassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _resetpass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetpassPageRoutingModule"]
        ],
        declarations: [_resetpass_page__WEBPACK_IMPORTED_MODULE_6__["ResetpassPage"]]
    })
], ResetpassPageModule);



/***/ }),

/***/ "./src/app/pages/resetpass/resetpass.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/resetpass/resetpass.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc2V0cGFzcy9yZXNldHBhc3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/resetpass/resetpass.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/resetpass/resetpass.page.ts ***!
  \***************************************************/
/*! exports provided: ResetpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpassPage", function() { return ResetpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");





let ResetpassPage = class ResetpassPage {
    constructor(apiService, router, busyService) {
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.mail = '';
        this.working = false;
    }
    ngOnInit() {
    }
    send() {
        this.working = true;
        this.apiService.Get("Users/SendCode/" + this.mail).then(res => {
            this.working = false;
            console.log(res);
            if (res.ok) {
                this.busyService.presentAlert("¡Información!", res.message);
                localStorage.removeItem("resetid");
                localStorage.setItem("resetid", res.id);
                this.router.navigate(['/resetpassup']);
            }
            else {
                this.busyService.presentAlert("¡Información!", res.message);
            }
        }, err => {
            this.working = false;
        });
    }
};
ResetpassPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"] }
];
ResetpassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resetpass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./resetpass.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/resetpass/resetpass.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./resetpass.page.scss */ "./src/app/pages/resetpass/resetpass.page.scss")).default]
    })
], ResetpassPage);



/***/ })

}]);
//# sourceMappingURL=pages-resetpass-resetpass-module-es2015.js.map