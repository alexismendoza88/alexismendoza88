(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-category-search-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-category/search-category.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-category/search-category.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border backgeneral\">\r\n  <ion-toolbar>\r\n    <!-- Side Menu Option -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-searchbar [(ngModel)]=\"paramSearch\" \r\n    (ngModelChange)=\"change()\"\r\n  \r\n    (ionCancel)=\"onCancel($event)\" placeholder=\"Buscar\"></ion-searchbar>\r\n  \r\n  </ion-toolbar>\r\n</ion-header >\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-item button class=\"itemcolor1\" (click)=\"seleccionar(item)\" *ngFor=\"let item of categories\" >\r\n    <ion-label>\r\n        {{item.name}}\r\n    </ion-label>    \r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/search-category/search-category-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-category/search-category-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SearchCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCategoryPageRoutingModule", function() { return SearchCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-category.page */ "./src/app/pages/search-category/search-category.page.ts");




const routes = [
    {
        path: '',
        component: _search_category_page__WEBPACK_IMPORTED_MODULE_3__["SearchCategoryPage"]
    }
];
let SearchCategoryPageRoutingModule = class SearchCategoryPageRoutingModule {
};
SearchCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-category/search-category.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-category/search-category.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCategoryPageModule", function() { return SearchCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-category-routing.module */ "./src/app/pages/search-category/search-category-routing.module.ts");
/* harmony import */ var _search_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-category.page */ "./src/app/pages/search-category/search-category.page.ts");







let SearchCategoryPageModule = class SearchCategoryPageModule {
};
SearchCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchCategoryPageRoutingModule"]
        ],
        declarations: [_search_category_page__WEBPACK_IMPORTED_MODULE_6__["SearchCategoryPage"]]
    })
], SearchCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/search-category/search-category.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-category/search-category.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".center-result {\n  width: 200px;\n  height: 100px;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWNhdGVnb3J5L0M6XFxVc2Vyc1xcSXZhbmNob1xcRG9jdW1lbnRzXFxQUllfUVBSSUNFXFxRUFJJQ0Uvc3JjXFxhcHBcXHBhZ2VzXFxzZWFyY2gtY2F0ZWdvcnlcXHNlYXJjaC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1jYXRlZ29yeS9zZWFyY2gtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLWNhdGVnb3J5L3NlYXJjaC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyLXJlc3VsdCB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59IiwiLmNlbnRlci1yZXN1bHQge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/search-category/search-category.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/search-category/search-category.page.ts ***!
  \***************************************************************/
/*! exports provided: SearchCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCategoryPage", function() { return SearchCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let SearchCategoryPage = class SearchCategoryPage {
    constructor(location, apiService) {
        this.location = location;
        this.apiService = apiService;
        this.working = false;
        this.categoryTitle = "...";
        this.categories = [];
        this.previuscategories = [];
        this.userinfo = null;
        this.auth = false;
        this.Productstypes = new Array();
        this.productsAves = [];
        this.paramSearch = '';
        this.shouldShowCancel = false;
    }
    ngOnInit() {
        this.apiService.Get("Categories").then(res => {
            this.categories = res.slice(0, 10);
            this.previuscategories = res;
        });
    }
    change() {
        if (this.paramSearch != null && this.paramSearch != "") {
            this.categories = this.previuscategories.filter(s => { var _a; return ((_a = s.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(this.paramSearch.toLowerCase())) >= 0; });
        }
        else {
            this.categories = this.previuscategories.slice(0, 10);
        }
    }
    onCancel(event) {
        this.categories = this.previuscategories;
    }
    seleccionar(item) {
        window.localStorage.removeItem('item');
        window.localStorage.setItem('item', JSON.stringify(item));
        this.location.back();
    }
};
SearchCategoryPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
SearchCategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-category/search-category.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-category.page.scss */ "./src/app/pages/search-category/search-category.page.scss")).default]
    })
], SearchCategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-category-search-category-module-es2015.js.map