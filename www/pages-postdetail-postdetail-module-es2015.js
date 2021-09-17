(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-postdetail-postdetail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postdetail/postdetail.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postdetail/postdetail.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">Detalle Publicación</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"itemcolor1\" *ngIf=\"note!=null\">\n    <ion-text style=\"color:yellow\">\n      <p >{{note}}</p>\n     </ion-text>\n  </ion-item>\n  <ion-item class=\"itemcolor1\"  button (click)=\"call(phone)\">\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \n    <p >{{phone}}</p>\n  </ion-item>\n  <ion-item class=\"itemcolor1\" button href=\"https://api.whatsapp.com/send?phone=+57{{phone}}\">\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \n    <p >{{phone}}</p>\n  </ion-item> \n  <ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col *ngFor=\"let item of images\"> \n          <ion-thumbnail button (click)=\"photoview(item)\">\n            <img [src]=\"item\">\n          </ion-thumbnail>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/postdetail/postdetail-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PostdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageRoutingModule", function() { return PostdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");




const routes = [
    {
        path: '',
        component: _postdetail_page__WEBPACK_IMPORTED_MODULE_3__["PostdetailPage"]
    }
];
let PostdetailPageRoutingModule = class PostdetailPageRoutingModule {
};
PostdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostdetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.module.ts ***!
  \*******************************************************/
/*! exports provided: PostdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPageModule", function() { return PostdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postdetail-routing.module */ "./src/app/pages/postdetail/postdetail-routing.module.ts");
/* harmony import */ var _postdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postdetail.page */ "./src/app/pages/postdetail/postdetail.page.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../time-ago.pipe */ "./src/app/time-ago.pipe.ts");








let PostdetailPageModule = class PostdetailPageModule {
};
PostdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _postdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostdetailPageRoutingModule"]
        ],
        declarations: [_postdetail_page__WEBPACK_IMPORTED_MODULE_6__["PostdetailPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })
], PostdetailPageModule);



/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RkZXRhaWwvcG9zdGRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/postdetail/postdetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/postdetail/postdetail.page.ts ***!
  \*****************************************************/
/*! exports provided: PostdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostdetailPage", function() { return PostdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let PostdetailPage = class PostdetailPage {
    constructor(callNumber, photoViewer, apiService) {
        this.callNumber = callNumber;
        this.photoViewer = photoViewer;
        this.apiService = apiService;
        this.working = false;
        this.id = 0;
        this.date = null;
        this.phone = null;
        this.note = null;
        this.currency = null;
        this.amount = null;
        this.creationDate = null;
        this.images = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.working = false;
        this.getdata();
    }
    getdata() {
        this.images = [];
        this.id = 0;
        this.phone = null;
        this.note = null;
        this.date = null;
        this.amount = null;
        let idexist = localStorage.getItem("postid");
        if (idexist != null) {
            localStorage.removeItem("postid");
            this.working = true;
            this.apiService.Get("Posts/" + idexist).then(res => {
                this.working = false;
                this.id = res.id;
                this.phone = res.phone;
                this.note = res.description;
                this.date = res.activityDate;
                this.amount = res.price;
                this.creationDate = res.creationDate;
                if (res.price != null) {
                    this.currency = this.amount;
                }
                if (res.img1 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img1);
                }
                if (res.img2 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img2);
                }
                if (res.img3 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img3);
                }
                if (res.img4 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img4);
                }
                if (res.img5 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img5);
                }
                if (res.img6 != null) {
                    this.images.push(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + res.img6);
                }
            }, err => {
                this.working = false;
            });
        }
    }
    call(number) {
        this.callNumber.callNumber(number, true)
            .then(res => { })
            .catch(err => { });
    }
    photoview(url) {
        this.photoViewer.show(url);
    }
};
PostdetailPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_3__["PhotoViewer"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
PostdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-postdetail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./postdetail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/postdetail/postdetail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./postdetail.page.scss */ "./src/app/pages/postdetail/postdetail.page.scss")).default]
    })
], PostdetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-postdetail-postdetail-module-es2015.js.map