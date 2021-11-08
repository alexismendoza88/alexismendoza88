(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-weekend-weekend-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekend/weekend.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekend/weekend.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">FIN DE SEMANA</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\r\n  <div class=\"section_two ion-padding\">\r\n\r\n  <!-- <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n         \r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgyoutube\"><ion-icon class=\"allicon\" name=\"copy-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre Categoria\"></ion-input>\r\n          </ion-item>\r\n         \r\n            <div class=\"buttons ion-padding-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Crear</ion-button>\r\n            </div>\r\n  </form> -->\r\n\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/weekend/weekend-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/weekend/weekend-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WeekendPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekendPageRoutingModule", function() { return WeekendPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _weekend_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weekend.page */ "./src/app/pages/weekend/weekend.page.ts");




const routes = [
    {
        path: '',
        component: _weekend_page__WEBPACK_IMPORTED_MODULE_3__["WeekendPage"]
    }
];
let WeekendPageRoutingModule = class WeekendPageRoutingModule {
};
WeekendPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WeekendPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/weekend/weekend.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/weekend/weekend.module.ts ***!
  \*************************************************/
/*! exports provided: WeekendPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekendPageModule", function() { return WeekendPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _weekend_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weekend-routing.module */ "./src/app/pages/weekend/weekend-routing.module.ts");
/* harmony import */ var _weekend_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weekend.page */ "./src/app/pages/weekend/weekend.page.ts");







let WeekendPageModule = class WeekendPageModule {
};
WeekendPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _weekend_routing_module__WEBPACK_IMPORTED_MODULE_5__["WeekendPageRoutingModule"]
        ],
        declarations: [_weekend_page__WEBPACK_IMPORTED_MODULE_6__["WeekendPage"]]
    })
], WeekendPageModule);



/***/ }),

/***/ "./src/app/pages/weekend/weekend.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/weekend/weekend.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlZWtlbmQvd2Vla2VuZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/weekend/weekend.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/weekend/weekend.page.ts ***!
  \***********************************************/
/*! exports provided: WeekendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekendPage", function() { return WeekendPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WeekendPage = class WeekendPage {
    constructor() { }
    ngOnInit() {
    }
};
WeekendPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weekend',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./weekend.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/weekend/weekend.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./weekend.page.scss */ "./src/app/pages/weekend/weekend.page.scss")).default]
    })
], WeekendPage);



/***/ })

}]);
//# sourceMappingURL=pages-weekend-weekend-module-es2015.js.map