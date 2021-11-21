(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-solicitude-detail-solicitude-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude-detail/solicitude-detail.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude-detail/solicitude-detail.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >DETALLE SOLICITUD</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-label>Categoría:</ion-label>\r\n    <p style=\"color:yellow\">{{item?.category.name}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item >\r\n    <ion-label style=\"color: white;\">Alguien Solicita:</ion-label>\r\n    <p style=\"color:yellow\">{{item?.mostrar_nombre}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"role!='Company'\">\r\n    <label style=\"color:white;font-weight: bold;\">Estás Buscando:</label>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-textarea  style=\"text-align:justify\" readonly rows=\"2\" cols=\"20\">{{item?.note}}</ion-textarea>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>   \r\n  </ion-item>\r\n  \r\n  \r\n  <ion-row *ngIf=\"responId==0 && role=='Company'\" class=\"ion-align-items-center\" > \r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <hr style=\"background-color: white;\">         \r\n      <ion-label style=\"color:cyan; font-size: 15px; font-weight: bold;  \">¿TIENES ESTE PRODUCTO Ó SERVICIO?</ion-label>\r\n    </ion-col>\r\n  </ion-row>      \r\n    \r\n    <ion-row *ngIf=\"responId==0 && role=='Company'\" class=\"ion-align-items-center\" > \r\n      <ion-col size=\"12\">\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>   \r\n\r\n    <ion-item  *ngIf=\"item?.fileUrl!=null && item?.fileUrl!=''\" >\r\n      <img *ngIf=\"ispdf==false\"   src=\"{{item?.fileUrl}}\" (click)=\"photoview(item?.fileUrl)\" style=\"width:100%;height: 200px;\">  \r\n       <a *ngIf=\"ispdf==true\" href=\"{{item?.fileUrl}}\" target=\"blank\" ><img src=\"./../../.././assets/pdf.png\" style=\"width:100%;height:50px;\">  </a>\r\n    </ion-item>\r\n    \r\n  <ion-grid *ngIf=\"role=='Company'  && responId==0\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"response()\" style=\"position: absolute; right: 55%;\"><ion-icon slot=\"start\" name=\"checkmark-circle\"></ion-icon>SI</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n<ion-grid *ngIf=\"role=='Company'  && responId==0\">\r\n  <ion-row class=\"ion-align-items-center\">\r\n<ion-col size=\"12\" class=\"ion-text-center\">\r\n  <ion-button shape=\"round\" color=\"danger\" (click)=\"rtaNo()\" style=\"position: absolute; bottom: -18px; right: 25%;\"><ion-icon slot=\"start\" name=\"close-circle\"></ion-icon>NO</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n<ion-grid *ngIf=\"role=='Company' && responId!=0\">\r\n  <ion-row class=\"ion-align-items-center\">\r\n<ion-col size=\"12\" class=\"ion-text-center\">\r\n  <ion-button shape=\"round\" color=\"secondary\" (click)=\"response()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Ver Respuesta</ion-button>\r\n</ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/solicitude-detail/solicitude-detail-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/solicitude-detail/solicitude-detail-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SolicitudeDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPageRoutingModule", function() { return SolicitudeDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./solicitude-detail.page */ "./src/app/pages/solicitude-detail/solicitude-detail.page.ts");




const routes = [
    {
        path: '',
        component: _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudeDetailPage"]
    }
];
let SolicitudeDetailPageRoutingModule = class SolicitudeDetailPageRoutingModule {
};
SolicitudeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SolicitudeDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/solicitude-detail/solicitude-detail.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/solicitude-detail/solicitude-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: SolicitudeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPageModule", function() { return SolicitudeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _solicitude_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitude-detail-routing.module */ "./src/app/pages/solicitude-detail/solicitude-detail-routing.module.ts");
/* harmony import */ var _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./solicitude-detail.page */ "./src/app/pages/solicitude-detail/solicitude-detail.page.ts");







let SolicitudeDetailPageModule = class SolicitudeDetailPageModule {
};
SolicitudeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _solicitude_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudeDetailPageRoutingModule"]
        ],
        declarations: [_solicitude_detail_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudeDetailPage"]]
    })
], SolicitudeDetailPageModule);



/***/ }),

/***/ "./src/app/pages/solicitude-detail/solicitude-detail.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/solicitude-detail/solicitude-detail.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-weight: bold !important;\n}\n\nion-item {\n  margin-top: 3px !important;\n  margin-bottom: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZS1kZXRhaWwvQzpcXFVzZXJzXFxJdmFuY2hvXFxEb2N1bWVudHNcXFBSWV9RUFJJQ0VcXFFQUklDRS9zcmNcXGFwcFxccGFnZXNcXHNvbGljaXR1ZGUtZGV0YWlsXFxzb2xpY2l0dWRlLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGUtZGV0YWlsL3NvbGljaXR1ZGUtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlLWRldGFpbC9zb2xpY2l0dWRlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcclxufSIsImlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDNweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/solicitude-detail/solicitude-detail.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/solicitude-detail/solicitude-detail.page.ts ***!
  \*******************************************************************/
/*! exports provided: SolicitudeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPage", function() { return SolicitudeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");






let SolicitudeDetailPage = class SolicitudeDetailPage {
    constructor(photoViewer, apiService, router) {
        this.photoViewer = photoViewer;
        this.apiService = apiService;
        this.router = router;
        this.item = null;
        this.apifile = '';
        this.working = false;
        this.userid = null;
        this.role = null;
        this.responId = 0;
        this.ispdf = false;
        this.disponibilidad = null;
    }
    ngOnInit() {
    }
    photoview(url) {
        this.photoViewer.show(url);
    }
    ionViewWillEnter() {
        this.responId = 0;
        this.item = null;
        let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.userid = userinfo.id;
        this.role = userinfo.role;
        this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fileurl + "solicitudefiles/";
        this.working = true;
        this.apiService.Get("Solicitudes/" + window.localStorage.getItem("solicitudeId")).then(res => {
            this.working = false;
            window.localStorage.setItem('Incluir_Descuento', res.descuento);
            if (res.fileUrl != null && res.fileUrl != '') {
                res.fileUrl = this.apifile + res.fileUrl;
                var ext = res.fileUrl.split('/')[4];
                ext = ext.split('.')[1];
                if (ext == "pdf" || ext == "PDF") {
                    this.ispdf = true;
                }
                else {
                    this.ispdf = false;
                }
            }
            this.item = res;
            this.apiService.Get("Solicitudes/Solicitude_view/" + this.item.id + "/" + this.userid);
            var filter = res.responses.filter(s => s.company.userId == userinfo.id);
            if (filter.length > 0) {
                this.responId = filter[0].id;
            }
        }, err => {
            this.working = false;
        });
    }
    response() {
        if (this.responId != 0) {
            window.localStorage.removeItem('solicitudeId');
            window.localStorage.setItem('solicitudeId', this.item.id);
            window.localStorage.removeItem('responseId');
            window.localStorage.setItem('responseId', this.responId.toString());
            this.router.navigate(['/response-detail']);
        }
        else {
            window.localStorage.removeItem('responseId');
            window.localStorage.removeItem('solicitudeId');
            window.localStorage.setItem('solicitudeId', this.item.id);
            this.router.navigate(['/response']);
        }
    }
    rtaNo() {
        this.router.navigate(['/companysol']);
    }
};
SolicitudeDetailPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SolicitudeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-solicitude-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./solicitude-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude-detail/solicitude-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./solicitude-detail.page.scss */ "./src/app/pages/solicitude-detail/solicitude-detail.page.scss")).default]
    })
], SolicitudeDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-solicitude-detail-solicitude-detail-module-es2015.js.map