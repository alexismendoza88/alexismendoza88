(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favors-favors-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favors/favors.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favors/favors.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button >\n          <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n      Favores\n    </ion-title>\n    <ion-buttons slot=\"end\" >\n      <ion-button [routerLink]=\"['/favoradd']\">\n        <ion-icon  name=\"add-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n      <ion-item button *ngFor=\"let item of items\" (click)=\"details(item)\">\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 != null\">\n          <img  [src]=\"item.img1\"  >\n        </ion-thumbnail>\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 == null\">\n          <img  [src]=\"'/assets/images/empty.png'\"  >\n        </ion-thumbnail>\n        <ion-label>\n          <ion-text> <h3 style=\"font-weight: bold; text-transform: capitalize;color:white\">{{item.creationDate | timeAgo}}</h3></ion-text>\n          <p  style=\"color: yellow;\">{{item.description}}</p>\n          <p *ngIf=\"item.price!=null\" style=\"font-weight: bold;color: #0ae70a\" >{{item.price | currency:'USD':'symbol':'1.0-0'}}</p> \n        </ion-label>\n        <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward\"></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/favors/favors-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/favors/favors-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavorsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorsPageRoutingModule", function() { return FavorsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favors.page */ "./src/app/pages/favors/favors.page.ts");




const routes = [
    {
        path: '',
        component: _favors_page__WEBPACK_IMPORTED_MODULE_3__["FavorsPage"]
    }
];
let FavorsPageRoutingModule = class FavorsPageRoutingModule {
};
FavorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavorsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favors/favors.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/favors/favors.module.ts ***!
  \***********************************************/
/*! exports provided: FavorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorsPageModule", function() { return FavorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favors-routing.module */ "./src/app/pages/favors/favors-routing.module.ts");
/* harmony import */ var _favors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favors.page */ "./src/app/pages/favors/favors.page.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../time-ago.pipe */ "./src/app/time-ago.pipe.ts");








let FavorsPageModule = class FavorsPageModule {
};
FavorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favors_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavorsPageRoutingModule"]
        ],
        declarations: [_favors_page__WEBPACK_IMPORTED_MODULE_6__["FavorsPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })
], FavorsPageModule);



/***/ }),

/***/ "./src/app/pages/favors/favors.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/favors/favors.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9ycy9mYXZvcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/favors/favors.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/favors/favors.page.ts ***!
  \*********************************************/
/*! exports provided: FavorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavorsPage", function() { return FavorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let FavorsPage = class FavorsPage {
    constructor(apiService, router, busyService) {
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.working = false;
        this.items = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.activities();
    }
    activities() {
        this.working = true;
        let provinceId = localStorage.getItem("province") == null ? -1 : (JSON.parse(localStorage.getItem("province"))).id;
        this.apiService.Get("Posts/PostsByType/F/" + provinceId).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.working = false;
            this.items = res;
            this.items.forEach(element => {
                if (element.img1 != null) {
                    element.img1 = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + element.img1;
                }
            });
        }), err => {
            this.working = false;
        });
    }
    details(item) {
        localStorage.removeItem("postid");
        localStorage.setItem("postid", item.id);
        this.router.navigate(['/postdetail']);
    }
};
FavorsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"] }
];
FavorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favors.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favors/favors.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favors.page.scss */ "./src/app/pages/favors/favors.page.scss")).default]
    })
], FavorsPage);



/***/ })

}]);
//# sourceMappingURL=pages-favors-favors-module-es2015.js.map