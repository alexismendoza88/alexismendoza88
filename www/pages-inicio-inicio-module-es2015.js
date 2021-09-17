(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border backgeneral\">\n  <ion-toolbar color=\"secondary\">\n    <ion-title class=\"ion-text-center\" >\n      <p style=\"color: white; font-size: 20px; font-weight: bold;\" >¡BIENVENIDO - QPRICE!</p>\n    </ion-title>           \n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text>\n          <span style=\"font-size: 12px;color:yellow;font-weight:lighter;\">{{result}}</span>          \n        </ion-text>\n      </ion-col>\n    </ion-row>  \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  size=\"small\"  (click)=\"iniciar_sesion()\" shape=\"round\" color=\"secondary\" ><ion-icon slot=\"start\" name=\"cube-outline\"></ion-icon><p style=\"color: white; font-size: 20px; font-weight: bold;\" >Iniciar Sesión</p></ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\">\n        <hr style=\"background-color: white;\">\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text color=\"warning\" >\n          <span style=\"font-size: 16px;color:yellow;font-weight: bold;\">¿ERES NUEVO USUARIO?</span>          \n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">     \n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  size=\"small\"  (click)=\"company()\" shape=\"round\" color=\"secondary\" ><ion-icon slot=\"start\" name=\"cube-outline\"></ion-icon><p style=\"color: white; font-size: 20px; font-weight: bold;\" >OFRECES</p></ion-button>\n      </ion-col>     \n    </ion-row> \n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text color=\"warning\" >\n          <span style=\"font-size: 12px;color:yellow;font-weight: bold;\">O</span>          \n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-button  size=\"small\"  (click)=\"customer()\" shape=\"round\" color=\"secondary\" ><ion-icon slot=\"start\" name=\"cube-outline\"></ion-icon><p style=\"color: white; font-size: 20px; font-weight: bold;\" >BUSCAS</p></ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        <ion-text>\n          <span style=\"font-size: 12px;color:yellow;font-weight: lighter;\">¿UN PRODUCTO O SERVICIO?</span>          \n        </ion-text>\n      </ion-col>\n    </ion-row>      \n</ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/inicio/inicio-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function() { return InicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio-routing.module */ "./src/app/pages/inicio/inicio-routing.module.ts");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inicio.page */ "./src/app/pages/inicio/inicio.page.ts");







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })
], InicioPageModule);



/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/inicio/inicio.page.ts ***!
  \*********************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let InicioPage = class InicioPage {
    constructor(router) {
        this.router = router;
        this.result = '....';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.result = 'hola, Buenas ....';
    }
    customer() {
        window.localStorage.removeItem("iscustomer");
        window.localStorage.setItem("iscustomer", "si");
        this.router.navigate(['/customer']);
    }
    company() {
        window.localStorage.removeItem("iscustomer");
        window.localStorage.setItem("iscustomer", "no");
        this.router.navigate(['/company']);
    }
    iniciar_sesion() {
        window.localStorage.removeItem("iscustomer");
        window.localStorage.setItem("iscustomer", "no");
        this.router.navigate(['/login']);
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.page.scss */ "./src/app/pages/inicio/inicio.page.scss")).default]
    })
], InicioPage);



/***/ })

}]);
//# sourceMappingURL=pages-inicio-inicio-module-es2015.js.map