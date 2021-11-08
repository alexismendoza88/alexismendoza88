(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-response-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response/response.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response/response.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >RESPUESTA SOLICITUD</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <p style=\"color: yellow; font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Ingresa la siguiente Información</p>\r\n      <hr style=\"background-color: white;\">\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-label *ngIf=\"descuento == 0\"   style=\"color:yellow; font-size: 16px; font-weight: bold; padding: 62px;\"> !OJO¡<span style=\"color: white;\"> NO APLICA DESCUENTO</span></ion-label>\r\n  \r\n  <ion-row class=\"ion-align-items-center\" *ngIf=\"descuento == 0\"> \r\n    <ion-col size=\"12\">\r\n      <hr style=\"background-color: white;\">\r\n    </ion-col>\r\n  </ion-row> \r\n  \r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-input [(ngModel)]=\"amount\" placeholder=\"Precio del Producto ó Servicio\" (ngModelChange)=\"tocurrency($event)\"></ion-input>\r\n    <p  style=\"color: yellow; font-weight: bold;\">{{currency | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n\r\n  <ion-item *ngIf=\"descuento == 1\" class=\"itemcolor1\">\r\n    <ion-input  [(ngModel)]=\"finalamount\" (ngModelChange)=\"tocurrency2($event)\"  placeholder=\"Último Precio ó Descuento\"></ion-input>\r\n    <p  style=\"color: yellow; font-weight: bold;\">{{currency2 | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-textarea [(ngModel)]=\"note\" maxlength=\"800\" (ngModelChange)=\"get($event)\" rows=\"6\" cols=\"20\" placeholder=\"¿Alguna Observación o Sugerencia?\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" *ngIf=\"note != '' && note !=null\" >\r\n    <p>{{leng}}</p><p>/800</p>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-label position=\"floating\">Tiempo De Entrega</ion-label>\r\n    <ion-input  [(ngModel)]=\"delivery\" placeholder=\"Entrega Inmediata\" ></ion-input>\r\n  </ion-item>\r\n\r\n  \r\n  <ion-item class=\"itemcolor1\"  button (click)=\"pickfile()\">\r\n    <ion-label>Adjuntar PDF o Foto</ion-label>\r\n    <ion-icon slot=\"end\" class=\"itemcolor1\" name=\"document-attach-outline\"></ion-icon>\r\n  </ion-item>\r\n  <ion-item  *ngIf=\"fileUrl!=''\" >\r\n    <ion-img [src]=\"fileUrl\"></ion-img>\r\n    <ion-button (click)=\"clearimg()\" color=\"danger\" ><ion-icon slot=\"icon-only\" name=\"trash-bin-outline\"></ion-icon></ion-button>\r\n  </ion-item>\r\n \r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button *ngIf=\"responseId!=null\"  [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Actualizar y Responder</ion-button>\r\n    <ion-button *ngIf=\"responseId==null\" [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Responder</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/response/response-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/response/response-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ResponsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePageRoutingModule", function() { return ResponsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _response_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response.page */ "./src/app/pages/response/response.page.ts");




const routes = [
    {
        path: '',
        component: _response_page__WEBPACK_IMPORTED_MODULE_3__["ResponsePage"]
    }
];
let ResponsePageRoutingModule = class ResponsePageRoutingModule {
};
ResponsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResponsePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/response/response.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/response/response.module.ts ***!
  \***************************************************/
/*! exports provided: ResponsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePageModule", function() { return ResponsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _response_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./response-routing.module */ "./src/app/pages/response/response-routing.module.ts");
/* harmony import */ var _response_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./response.page */ "./src/app/pages/response/response.page.ts");







let ResponsePageModule = class ResponsePageModule {
};
ResponsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _response_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponsePageRoutingModule"]
        ],
        declarations: [_response_page__WEBPACK_IMPORTED_MODULE_6__["ResponsePage"]]
    })
], ResponsePageModule);



/***/ }),

/***/ "./src/app/pages/response/response.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/response/response.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlL3Jlc3BvbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/response/response.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/response/response.page.ts ***!
  \*************************************************/
/*! exports provided: ResponsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsePage", function() { return ResponsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");







let ResponsePage = class ResponsePage {
    constructor(apiService, busyService, router) {
        this.apiService = apiService;
        this.busyService = busyService;
        this.router = router;
        this.items = [];
        this.amount = null;
        this.finalamount = null;
        this.file = null;
        this.note = null;
        this.solicitudeId = null;
        this.userId = null;
        this.working = false;
        this.delivery = "";
        this.fileUrl = '';
        this.leng = 0;
        this.currency = '';
        this.currency2 = '';
        this.apifile = '';
        this.responseId = null;
        this.descuento = '';
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.solicitudeId = window.localStorage.getItem('solicitudeId');
        this.responseId = window.localStorage.getItem("responseId");
        if (window.localStorage.getItem("responseId") != null) {
            this.getdata();
        }
        else {
            this.amount = null;
            this.finalamount = null;
            this.file = null;
            this.note = null;
            this.delivery = "";
            this.fileUrl = "";
            this.currency = null;
            this.currency2 = null;
            this.descuento = window.localStorage.getItem('Incluir_Descuento');
        }
        if (this.descuento == "0") {
            this.busyService.presentAlert("¡Información!", "!OJO¡ NO APLICA DESCUENTO.");
        }
    }
    detailsolicitude() {
        this.router.navigate(['/solicitude-detail']);
    }
    getdata() {
        this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "responsefiles/";
        this.working = true;
        this.apiService.Get("Responses/" + window.localStorage.getItem("responseId")).then(res => {
            this.working = false;
            if (res.fileUrl != null && res.fileUrl != '') {
                this.fileUrl = this.apifile + res.fileUrl;
            }
            this.amount = res.amount;
            this.finalamount = res.finalAmount;
            if (res.note == null || res.note == 'null') {
                this.note = '';
            }
            else {
                this.note = res.note;
            }
            this.delivery = res.delivery;
            this.currency = this.amount;
            this.currency2 = this.finalamount;
        }, err => {
            this.working = false;
        });
    }
    tocurrency() {
        this.currency = this.amount;
    }
    tocurrency2() {
        this.currency2 = this.finalamount;
    }
    get(event) {
        this.leng = event.length;
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.amount == null) {
                yield this.busyService.presentAlert("¡Información!", "El campo Precio del Producto ó Servicio es Requerido.");
                return;
            }
            if (this.finalamount == null) {
                this.finalamount = this.amount;
            }
            if (parseInt(this.finalamount) > parseInt(this.amount)) {
                yield this.busyService.presentAlert("¡Información!", "El campo Último Precio o Descuento debe ser menor ó igual al Precio Original.");
                return;
            }
            this.working = true;
            let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
            var responseIdx = window.localStorage.getItem('responseId') == null ? "-1" : window.localStorage.getItem('responseId');
            var formData = new FormData();
            formData.append('upload', this.file);
            formData.append("userId", userinfo.id);
            formData.append("solicitudeId", this.solicitudeId);
            formData.append("note", this.note);
            formData.append("finalamount", this.finalamount);
            formData.append("amount", this.amount);
            formData.append("delivery", this.delivery);
            formData.append("responseId", responseIdx);
            this.apiService.upload("Responses/Upload", formData).subscribe(event => {
                if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                    const percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                    if (event.body.ok) {
                        this.working = false;
                        this.busyService.presentAlert("¡Información!", "Respuesta Enviada");
                        this.router.navigate(['/companysol']);
                    }
                    else {
                        this.working = false;
                        this.busyService.presentAlert("¡Información!", "Respuesta no Enviada");
                    }
                }
            }, (err) => {
                this.working = false;
                this.busyService.presentAlert("¡Información!", "Error al enviar Respuesta");
            }, () => {
            });
        });
    }
    pickfile() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = (event) => {
            if (event.target.files.length == 0) {
                this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                return;
            }
            this.file = event.target.files[0];
            this.loadimg("#image", this.file);
        };
        input.click();
    }
    loadimg(idimg, file) {
        // setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url
        // here we tell the reader what to do when it's done reading...
        reader.onload = (event) => {
            var content = event.target.result; // this is the content!
            this.fileUrl = content;
        };
    }
    clearimg() {
        this.fileUrl = '';
        this.file = null;
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.busyService.presentAlert("¡Información!", "OJO ESTE PRODUCTO O SERVICIO NO OFRECE DESCUENTO.");
        });
    }
};
ResponsePage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ResponsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-response',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./response.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response/response.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./response.page.scss */ "./src/app/pages/response/response.page.scss")).default]
    })
], ResponsePage);



/***/ })

}]);
//# sourceMappingURL=pages-response-response-module-es2015.js.map