(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-companyup-companyup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companyup/companyup.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companyup/companyup.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Mi Cuenta</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\r\n  <div class=\"section_two ion-padding\">\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\r\n    <input type=\"hidden\" formControlName=\"id\">\r\n    <input type=\"hidden\" formControlName=\"userId\">\r\n    <input type=\"hidden\" formControlName=\"creationDate\">\r\n    <input type=\"hidden\" formControlName=\"lat\">\r\n    <input type=\"hidden\" formControlName=\"lng\">\r\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n          <ion-item class=\"itemcolor1\">\r\n            <ion-select multiple=\"true\" placeholder=\"Seleccione Categorías\"  cancelText=\"Cancelar\" okText=\"Aceptar\"  [formControl]=\"form.controls.categoriesid\"  >\r\n              <ion-select-option   *ngFor=\"let item of items\" [value]=\"item.id\" >{{item.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-auto-complete  formControlName=\"provinceName\"   (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\"></ion-auto-complete>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgempresa\"><ion-icon class=\"allicon\" name=\"storefront-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre\"  ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgcelular\"><ion-icon class=\"allicon\" name=\"phone-portrait-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Teléfono\"  ></ion-input>\r\n          </ion-item> \r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\"><ion-icon class=\"allicon\" name=\"call-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"fijo\"  type=\"text\" placeholder=\"Teléfono fijo\"  ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgubicacion\"><ion-icon class=\"allicon\" name=\"location-outline\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"ubication\" readonly=\"readonly\"   type=\"text\" placeholder=\"Ubicación\"  ></ion-input>\r\n            <ion-button (click)=\"presentMap()\" color=\"secondary\" slot=\"end\" ><ion-icon name=\"map-outline\"></ion-icon></ion-button>\r\n          </ion-item>  \r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgfacebook\"><ion-icon class=\"allicon\" name=\"logo-facebook\" style=\"color:white\"></ion-icon> </div>\r\n            <ion-input formControlName=\"facebook\" type=\"text\" placeholder=\"Facebook\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lgyoutube\"><ion-icon class=\"allicon\" name=\"logo-youtube\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"youtube\" type=\"text\" placeholder=\"Youtube\"></ion-input>\r\n          </ion-item>\r\n          <ion-item class=\"itemcolor1\">\r\n            <div class=\"divide\" id=\"lginstagram\"><ion-icon class=\"allicon\" name=\"logo-instagram\" style=\"color:white\"></ion-icon></div>\r\n            <ion-input formControlName=\"instagram\" type=\"text\" placeholder=\"Instagram\"></ion-input>\r\n          </ion-item>\r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgdomicilio\"><ion-icon class=\"allicon\" name=\"id-card-outline\" style=\"color:white\"></ion-icon></div>\r\n             <ion-label>Domicilio</ion-label>\r\n              <ion-toggle   formControlName=\"hasDelivery\" ></ion-toggle>\r\n            </ion-item> \r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\"><ion-icon class=\"allicon\" name=\"construct\" style=\"color:white\"></ion-icon></div>\r\n              <ion-label>¿Desactivar Notificaciones?</ion-label>\r\n               <ion-toggle   formControlName=\"notifications\" ></ion-toggle>\r\n             </ion-item> \r\n\r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgcorreo\"><ion-icon class=\"allicon\" name=\"mail-outline\" style=\"color:white\"></ion-icon></div>\r\n              <ion-input formControlName=\"email\" readonly=\"readonly\" type=\"text\" placeholder=\"Correo\"  ></ion-input>\r\n            </ion-item> \r\n            <ion-item class=\"itemcolor1\">\r\n              <div class=\"divide\" id=\"lgmegafono\"><ion-icon class=\"allicon\" name=\"megaphone\" style=\"color:white\"></ion-icon></div>\r\n              <ion-textarea formControlName=\"RtpaInmediata\" rows=\"6\" cols=\"20\" placeholder=\"Respuesta rapida al cliente\" ></ion-textarea>\r\n            </ion-item>\r\n         \r\n            <div class=\"buttons ion-padding-top\">\r\n              <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Actualizar</ion-button>\r\n            </div>\r\n  </form>\r\n</div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/companyup/companyup-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/companyup/companyup-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompanyupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyupPageRoutingModule", function() { return CompanyupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companyup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companyup.page */ "./src/app/pages/companyup/companyup.page.ts");




const routes = [
    {
        path: '',
        component: _companyup_page__WEBPACK_IMPORTED_MODULE_3__["CompanyupPage"]
    }
];
let CompanyupPageRoutingModule = class CompanyupPageRoutingModule {
};
CompanyupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanyupPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/companyup/companyup.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/companyup/companyup.module.ts ***!
  \*****************************************************/
/*! exports provided: CompanyupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyupPageModule", function() { return CompanyupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _companyup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companyup-routing.module */ "./src/app/pages/companyup/companyup-routing.module.ts");
/* harmony import */ var _companyup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companyup.page */ "./src/app/pages/companyup/companyup.page.ts");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");








let CompanyupPageModule = class CompanyupPageModule {
};
CompanyupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _companyup_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyupPageRoutingModule"]
        ],
        declarations: [_companyup_page__WEBPACK_IMPORTED_MODULE_6__["CompanyupPage"]]
    })
], CompanyupPageModule);



/***/ }),

/***/ "./src/app/pages/companyup/companyup.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/companyup/companyup.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  --placeholder-opacity: 1 !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueXVwL0M6XFxVc2Vyc1xcSXZhbmNob1xcRG9jdW1lbnRzXFxQUllfUVBSSUNFXFxRUFJJQ0Uvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW55dXBcXGNvbXBhbnl1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbXBhbnl1cC9jb21wYW55dXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnl1cC9jb21wYW55dXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcblxyXG4gICAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgIiwiaW9uLXNlbGVjdCB7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/companyup/companyup.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/companyup/companyup.page.ts ***!
  \***************************************************/
/*! exports provided: CompanyupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyupPage", function() { return CompanyupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/autoprovince.service */ "./src/app/services/autoprovince.service.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");









let CompanyupPage = class CompanyupPage {
    constructor(modalController, autoprovinceService, router, apiService, formBuilder, busyService) {
        this.modalController = modalController;
        this.autoprovinceService = autoprovinceService;
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.working = false;
        this.items = [];
        this.provinceId = 0;
        this.note = null;
        this.file = null;
        this.provinceName = "";
        this.leng = 0;
        this.id = "";
        this.categoriesple = "";
        this.compareWithFn = (o1, o2) => {
            return o1 && o2 ? o1.id === o2.id : o1 === o2;
        };
        this.form = this.formBuilder.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: [''],
            phone: [''],
            fijo: [''],
            userId: [''],
            creationDate: [''],
            ubication: [''],
            facebook: [''],
            youtube: [''],
            instagram: [''],
            provinceName: [''],
            categoriesid: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            notifications: [],
            RtpaInmediata: [''],
            hasDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            lat: [''],
            lng: [''],
        });
    }
    ngOnInit() {
    }
    selectedItem(value) {
        this.provinceId = value.id;
    }
    presentMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"]
            });
            modal.onDidDismiss().then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (res.data) {
                    this.form.get("ubication").setValue(res.data.dir);
                    this.form.get("lat").setValue(res.data.lat);
                    this.form.get("lng").setValue(res.data.lng);
                }
            }));
            return yield modal.present();
        });
    }
    ionViewWillEnter() {
        this.userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.working = true;
        this.apiService.Get("Categories").then(res => {
            this.working = false;
            this.items = res;
            this.getdata();
        }, err => {
            this.working = false;
        });
    }
    getdata() {
        this.working = true;
        this.apiService.Get("Companies/CompanyUser/" + this.userinfo.id).then(res => {
            this.working = false;
            var formData = new FormData();
            this.form.get("email").setValue(res.email);
            this.form.get("name").setValue(res.name);
            this.form.get("phone").setValue(res.phone);
            this.form.get("fijo").setValue(res.fijo);
            this.form.get("ubication").setValue(res.ubication);
            this.form.get("facebook").setValue(res.facebook);
            this.form.get("youtube").setValue(res.youtube);
            this.form.get("instagram").setValue(res.instagram);
            this.form.get("categoriesid").setValue(res.categoriesid);
            this.form.get("provinceName").setValue(res.provinceName);
            this.provinceId = res.provinceId;
            this.form.get("hasDelivery").setValue(res.hasDelivery);
            this.form.get("creationDate").setValue(res.creationDate);
            this.form.get("notifications").setValue(res.notifications);
            this.form.get("RtpaInmediata").setValue(res.RtpaInmediata);
            this.form.get("userId").setValue(res.userId);
            this.form.get("id").setValue(res.id);
            this.form.get("lat").setValue(res.lat);
            this.form.get("lng").setValue(res.lng);
            this.id = res.id;
        }, err => {
            this.working = false;
            this.errorMessage = err.message;
            this.busyService.presentAlert("¡Información!", "Error al consultar información de su cuenta");
        });
    }
    itemRemoved(event) {
        this.provinceId = 0;
    }
    tryRegister(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.working = true;
            form.provinceId = this.provinceId;
            this.apiService.Post(form, "Companies/CompanyUp")
                .then(res => {
                this.working = false;
                this.errorMessage = "";
                this.busyService.presentAlert("¡Información!", "Cuenta actualizada exitosamente");
                this.getdata();
            }, err => {
                this.working = false;
                this.errorMessage = err.message;
                this.busyService.presentAlert("¡Información!", "No fue posible actualizar la cuenta");
            });
        });
    }
};
CompanyupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__["AutoprovinceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] }
];
CompanyupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companyup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companyup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/companyup/companyup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companyup.page.scss */ "./src/app/pages/companyup/companyup.page.scss")).default]
    })
], CompanyupPage);



/***/ })

}]);
//# sourceMappingURL=pages-companyup-companyup-module-es2015.js.map