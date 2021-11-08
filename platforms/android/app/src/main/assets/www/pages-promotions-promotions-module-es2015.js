(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-promotions-promotions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/promotions/promotions.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/promotions/promotions.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">PROMOCIONES</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\r\n  <div class=\"section_two ion-padding\">\r\n\r\n  <!-- <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n         \r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgyoutube\"><ion-icon class=\"allicon\" name=\"copy-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre Categoria\"></ion-input>\r\n          </ion-item>\r\n         \r\n            <div class=\"buttons ion-padding-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Crear</ion-button>\r\n            </div>\r\n  </form> -->\r\n\r\n</div>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/promotions/promotions-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/promotions/promotions-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PromotionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsPageRoutingModule", function() { return PromotionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promotions.page */ "./src/app/pages/promotions/promotions.page.ts");




const routes = [
    {
        path: '',
        component: _promotions_page__WEBPACK_IMPORTED_MODULE_3__["PromotionsPage"]
    }
];
let PromotionsPageRoutingModule = class PromotionsPageRoutingModule {
};
PromotionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PromotionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/promotions/promotions.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/promotions/promotions.module.ts ***!
  \*******************************************************/
/*! exports provided: PromotionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsPageModule", function() { return PromotionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _promotions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotions-routing.module */ "./src/app/pages/promotions/promotions-routing.module.ts");
/* harmony import */ var _promotions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promotions.page */ "./src/app/pages/promotions/promotions.page.ts");







let PromotionsPageModule = class PromotionsPageModule {
};
PromotionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _promotions_routing_module__WEBPACK_IMPORTED_MODULE_5__["PromotionsPageRoutingModule"]
        ],
        declarations: [_promotions_page__WEBPACK_IMPORTED_MODULE_6__["PromotionsPage"]]
    })
], PromotionsPageModule);



/***/ }),

/***/ "./src/app/pages/promotions/promotions.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/promotions/promotions.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb21vdGlvbnMvcHJvbW90aW9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/promotions/promotions.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/promotions/promotions.page.ts ***!
  \*****************************************************/
/*! exports provided: PromotionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionsPage", function() { return PromotionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PromotionsPage = class PromotionsPage {
    constructor() { }
    ngOnInit() {
    }
};
PromotionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-promotions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./promotions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/promotions/promotions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./promotions.page.scss */ "./src/app/pages/promotions/promotions.page.scss")).default]
    })
], PromotionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-promotions-promotions-module-es2015.js.map