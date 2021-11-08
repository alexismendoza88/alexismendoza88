(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-list-response-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-list/response-list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-list/response-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >RESULTADOS</p>\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"detailsol()\">\r\n        <ion-icon slot=\"icon-only\" name=\"alert-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-item button   *ngFor=\"let item of items\" (click)=\"detail(item.id)\" >\r\n    <ion-label>\r\n      <h3 style=\"font-weight: bold; text-transform: capitalize;color: white;\">{{item.company.name}}&nbsp;&nbsp;<ion-icon *ngIf=\"item.company.hasDelivery==true\" slot=\"icon-only\"  src=\"assets/icon/envio.svg\"></ion-icon></h3>\r\n      <p style=\"font-weight: bold;color: #50c8ff\"><ion-icon style=\"color:#d310d3\" *ngIf=\"item.status=='I'\" name=\"star\"></ion-icon>{{item.finalAmount | currency:'USD':'symbol':'1.0-0'}}</p>\r\n      <p style=\"color: yellow;text-transform: capitalize;\">{{item.creationDate | timeAgo}}</p>\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/response-list/response-list-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/response-list/response-list-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ResponseListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseListPageRoutingModule", function() { return ResponseListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _response_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-list.page */ "./src/app/pages/response-list/response-list.page.ts");




const routes = [
    {
        path: '',
        component: _response_list_page__WEBPACK_IMPORTED_MODULE_3__["ResponseListPage"]
    }
];
let ResponseListPageRoutingModule = class ResponseListPageRoutingModule {
};
ResponseListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResponseListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/response-list/response-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/response-list/response-list.module.ts ***!
  \*************************************************************/
/*! exports provided: ResponseListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseListPageModule", function() { return ResponseListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _response_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-list-routing.module */ "./src/app/pages/response-list/response-list-routing.module.ts");
/* harmony import */ var _response_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./response-list.page */ "./src/app/pages/response-list/response-list.page.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../time-ago.pipe */ "./src/app/time-ago.pipe.ts");
/* harmony import */ var ionic_long_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-long-press */ "./node_modules/ionic-long-press/fesm2015/ionic-long-press.js");









let ResponseListPageModule = class ResponseListPageModule {
};
ResponseListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _response_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponseListPageRoutingModule"],
            ionic_long_press__WEBPACK_IMPORTED_MODULE_8__["LongPressModule"]
        ],
        declarations: [_response_list_page__WEBPACK_IMPORTED_MODULE_6__["ResponseListPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })
], ResponseListPageModule);



/***/ }),

/***/ "./src/app/pages/response-list/response-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/response-list/response-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlLWxpc3QvcmVzcG9uc2UtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/response-list/response-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/response-list/response-list.page.ts ***!
  \***********************************************************/
/*! exports provided: ResponseListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseListPage", function() { return ResponseListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");





let ResponseListPage = class ResponseListPage {
    constructor(apiService, router, busyService) {
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.items = [];
        this.working = false;
        this.selecctedItems = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.solicitudes();
    }
    detail(id) {
        window.localStorage.removeItem("responseId");
        window.localStorage.setItem("responseId", id);
        this.router.navigate(['/response-detail']);
    }
    pressed(item) {
        var exits = this.selecctedItems.filter(s => s.id == item.id);
        if (exits.length == 0) {
            this.selecctedItems.push(item);
            var myDiv = document.getElementById(item.id);
            myDiv.classList.add("item-background-color");
        }
    }
    click(item) {
        var exits = this.selecctedItems.filter(s => s.id == item.id);
        if (exits.length > 0) {
            this.selecctedItems = this.selecctedItems.filter(s => s.id != item.id);
            var myDiv = document.getElementById(item.id);
            myDiv.classList.remove("item-background-color");
        }
    }
    cancel() {
        this.selecctedItems.forEach(obj => {
            var myDiv = document.getElementById(obj.id);
            myDiv.classList.remove("item-background-color");
        });
        this.selecctedItems = [];
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var yes = yield this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar los ítems seleccionados?");
            if (yes) {
                this.working = true;
                this.apiService.Post(this.selecctedItems, "Responses/DeleteList").then(res => {
                    this.working = true;
                    this.selecctedItems = [];
                    this.solicitudes();
                }, err => {
                    this.working = false;
                    this.busyService.presentAlert("¡Información!", "Algo salió mal, intente de nuevo");
                });
            }
        });
    }
    detailsol() {
        this.router.navigate(['/solicitude-detail']);
    }
    solicitudes() {
        this.items = [];
        this.working = true;
        let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.apiService.Get("Responses/ResponsesCustomer/" + userinfo.id + "/" + window.localStorage.getItem("solicitudeId")).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.working = false;
            this.items = res;
        }), err => {
            this.working = false;
        });
    }
};
ResponseListPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"] }
];
ResponseListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./response-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-list/response-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./response-list.page.scss */ "./src/app/pages/response-list/response-list.page.scss")).default]
    })
], ResponseListPage);



/***/ })

}]);
//# sourceMappingURL=pages-response-list-response-list-module-es2015.js.map