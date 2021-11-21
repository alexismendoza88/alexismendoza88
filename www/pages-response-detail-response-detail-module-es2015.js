(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-detail-response-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-detail/response-detail.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-detail/response-detail.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >DETALLE RESPUESTA</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-label>Precio</ion-label>\r\n    <p *ngIf=\"item?.finalAmount!=item?.amount\" style=\"color:#50c8ff;text-decoration: line-through\">{{item?.amount | currency:'USD':'symbol':'1.0-0'}}&nbsp;  -</p>&nbsp; <p style=\"color: yellow;\">{{item?.finalAmount | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n  \r\n  <ion-item class=\"itemcolor1\" *ngIf=\"item?.note!='' && item?.note!='null' \">\r\n    <ion-textarea>\r\n      <p style=\"color: yellow;\">{{item?.note}}</p>\r\n     </ion-textarea>\r\n    </ion-item>\r\n\r\n    <ion-item  *ngIf=\"item?.fileUrl!=null && item?.fileUrl!=''\" >\r\n      <img *ngIf=\"ispdf==false\"   src=\"{{item?.fileUrl}}\" (click)=\"photoview(item?.fileUrl)\" style=\"width:100%;height: 200px;\">  \r\n       <a *ngIf=\"ispdf==true\" href=\"{{item?.fileUrl}}\" target=\"blank\" ><img src=\"./../../.././assets/pdf.png\" style=\"width:100%;height:50px;\">  </a>\r\n    </ion-item>\r\n\r\n  <!-- <ion-item  *ngIf=\"item?.fileUrl!=null && item?.fileUrl!=''\"  >\r\n    <img src=\"{{item?.fileUrl}}\" (click)=\"photoview(item?.fileUrl)\" style=\"width:100%;height: 300px;\">\r\n  </ion-item> -->\r\n\r\n  <ion-item class=\"itemcolor1\"  style=\"display: none;\">\r\n    <ion-label><ion-icon name=\"time-outline\"></ion-icon></ion-label>\r\n    <p>{{item?.delivery}}</p>\r\n  </ion-item>\r\n  <ion-grid *ngIf=\"item?.status=='I'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <hr style=\"background-color: white;\">\r\n    <h4 style=\"color:white;font-weight: bold;\">Contacto</h4>\r\n    <hr style=\"background-color: white;\">\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <ion-item  *ngIf=\"role=='Customer'  && item?.status=='I'\">\r\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"person-outline\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.company.name}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Customer'  && item?.status=='I'\" button (click)=\"call(item?.company.phone)\">\r\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.company.fijo}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Customer' && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.company.phone}}\">\r\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.company.phone}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\">\r\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"person-outline\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.name}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\" button (click)=\"call(item?.solicitude.customer.phone)\">\r\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.fijo}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.solicitude.customer.phone}}\">\r\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.phone}}</p>\r\n  </ion-item>\r\n<!-- \r\n  <ion-item  *ngIf=\"role=='Company' && item?.solicitude.customer.name==null  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.solicitude.customer.phone}}\">\r\n    <ion-label ><ion-icon name=\"person-outline\" color=\"success\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.name}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item  *ngIf=\"role=='Company' && item?.solicitude.customer.name==null  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.solicitude.customer.phone}}\">\r\n    <ion-label ><ion-icon name=\"call-outline\" color=\"success\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.fijo}}</p>\r\n  </ion-item>\r\n \r\n  <ion-item  *ngIf=\"role=='Company' && item?.solicitude.customer.name==null  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.solicitude.customer.phone}}\">\r\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \r\n    <p class=\"itemcolor2\">{{item?.solicitude.customer.phone}}</p>\r\n  </ion-item> -->\r\n  \r\n  \r\n  <ion-grid *ngIf=\"role=='Company' && item?.customerId==userid  && item?.customerId==userid && item?.status=='P'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"edit()\" ><ion-icon name=\"create-outline\"></ion-icon>Editar</ion-button><ion-button shape=\"round\" color=\"danger\" (click)=\"delete()\" ><ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>Eliminar</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\">\r\n      <!-- <hr style=\"background-color: white;\"> -->\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n\r\n  <!-- <ion-label style=\"color:yellow; font-size: 16px; font-weight: bold; padding: 25px;\">¿QIUERES ESTE SERVICIO O PRODUCTO?</ion-label> -->\r\n  \r\n  <ion-row class=\"ion-align-items-center\" > \r\n    <ion-col size=\"12\">\r\n      <!-- <hr style=\"background-color: white;\"> -->\r\n    </ion-col>\r\n  </ion-row>   \r\n  <ion-grid *ngIf=\"(role=='Customer' || item?.customerId!=userid ) && item?.status=='P'\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"Interested(null,null)\" >Contactar Empresa ó Persona</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <ion-grid *ngIf=\"(role=='Customer' || item?.customerId!=userid)  && item?.status=='I' && item?.company?.lat!=null && item?.company?.lng!=null\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"navigate()\" ><ion-icon name=\"map-outline\"></ion-icon> ¿Como llegar?</ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/response-detail/response-detail-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/response-detail/response-detail-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ResponseDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseDetailPageRoutingModule", function() { return ResponseDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _response_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response-detail.page */ "./src/app/pages/response-detail/response-detail.page.ts");




const routes = [
    {
        path: '',
        component: _response_detail_page__WEBPACK_IMPORTED_MODULE_3__["ResponseDetailPage"]
    }
];
let ResponseDetailPageRoutingModule = class ResponseDetailPageRoutingModule {
};
ResponseDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResponseDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/response-detail/response-detail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/response-detail/response-detail.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResponseDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseDetailPageModule", function() { return ResponseDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _response_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-detail-routing.module */ "./src/app/pages/response-detail/response-detail-routing.module.ts");
/* harmony import */ var _response_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./response-detail.page */ "./src/app/pages/response-detail/response-detail.page.ts");







let ResponseDetailPageModule = class ResponseDetailPageModule {
};
ResponseDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _response_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponseDetailPageRoutingModule"]
        ],
        declarations: [_response_detail_page__WEBPACK_IMPORTED_MODULE_6__["ResponseDetailPage"]]
    })
], ResponseDetailPageModule);



/***/ }),

/***/ "./src/app/pages/response-detail/response-detail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/response-detail/response-detail.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzcG9uc2UtZGV0YWlsL0M6XFxVc2Vyc1xcSXZhbmNob1xcRG9jdW1lbnRzXFxQUllfUVBSSUNFXFxRUFJJQ0Uvc3JjXFxhcHBcXHBhZ2VzXFxyZXNwb25zZS1kZXRhaWxcXHJlc3BvbnNlLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlLWRldGFpbC9yZXNwb25zZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlLWRldGFpbC9yZXNwb25zZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufSIsImlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/response-detail/response-detail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/response-detail/response-detail.page.ts ***!
  \***************************************************************/
/*! exports provided: ResponseDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseDetailPage", function() { return ResponseDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/route/route.component */ "./src/app/components/route/route.component.ts");











let ResponseDetailPage = class ResponseDetailPage {
    constructor(modalController, callNumber, photoViewer, apiService, router, busyService, alertController) {
        this.modalController = modalController;
        this.callNumber = callNumber;
        this.photoViewer = photoViewer;
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.alertController = alertController;
        this.item = null;
        this.apifile = '';
        this.working = false;
        this.userid = null;
        this.role = null;
        this.companyid = null;
        this.ispdf = false;
    }
    ngOnInit() {
    }
    photoview(url) {
        this.photoViewer.show(url);
    }
    ionViewWillEnter() {
        this.getdata();
    }
    call(number) {
        this.callNumber.callNumber(number, true)
            .then(res => { })
            .catch(err => { });
    }
    getdata() {
        let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.userid = userinfo.id;
        this.role = userinfo.role;
        this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fileurl + "responsefiles/";
        this.working = true;
        this.apiService.Get("Responses/" + window.localStorage.getItem("responseId") + "/" + this.userid).then(res => {
            this.working = false;
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
            // if( res.fileUrl!=null &&  res.fileUrl!='')
            // {
            // res.fileUrl= this.apifile +  res.fileUrl;
            // }
            this.item = res;
            console.log(this.item);
        }, err => {
            this.working = false;
        });
    }
    navigate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            localStorage.removeItem("mapdest");
            localStorage.setItem("mapdest", JSON.stringify({ lat: this.item.company.lat, lng: this.item.company.lng }));
            const modal = yield this.modalController.create({
                component: _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__["RouteComponent"]
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.data) {
                }
            }));
            return yield modal.present();
        });
    }
    edit() {
        window.localStorage.setItem('responseId', window.localStorage.getItem("responseId"));
        this.router.navigate(['/response']);
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var yes = yield this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar esta respuesta?");
            if (yes) {
                this.working = true;
                this.apiService.Delete("Responses/" + window.localStorage.getItem("responseId")).then(res => {
                    this.working = false;
                    this.router.navigate(['/solicitude-detail']);
                }, err => {
                    this.working = false;
                });
            }
        });
    }
    Interested() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Seguro te Interesa?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Sí',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.working = true;
                            let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
                            var datasend = {
                                "userId": userinfo.id,
                                "responseId": window.localStorage.getItem("responseId"),
                            };
                            this.apiService.Post(datasend, "Responses/Interested").then(res => {
                                this.working = false;
                                this.busyService.presentAlert("¡Información!", "Datos Enviados");
                                this.getdata();
                            }, err => {
                                this.working = false;
                                this.busyService.presentAlert("¡Información!", "Error al enviar los datos");
                            });
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ResponseDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"] },
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ResponseDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./response-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-detail/response-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./response-detail.page.scss */ "./src/app/pages/response-detail/response-detail.page.scss")).default]
    })
], ResponseDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-response-detail-response-detail-module-es2015.js.map