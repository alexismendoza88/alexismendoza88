(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-company-company-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">      \n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >CREAR CUENTA - EMPRESA</p>\n    </ion-title>    \n  </ion-toolbar>\n</ion-header>\n<ion-content  id=\"signup\" fullscreen class=\"backgeneral\" >\n  <div class=\"section_two ion-padding\">   \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\" class=\"ion-text-center\">\n      <p style=\"color: yellow; font-size: 12px; font-weight: lighter;\" >Ingresa la siguiente Información</p>\n    </ion-col>\n  </ion-row>   \n  <ion-row class=\"ion-align-items-center\">\n    <ion-col size=\"12\">\n      <hr style=\"background-color: white;\">\n    </ion-col>\n  </ion-row>  \n  <form [formGroup]=\"form\" (ngSubmit)=\"tryRegister(form.value)\">\n    <input type=\"hidden\" formControlName=\"lat\">\n    <input type=\"hidden\" formControlName=\"lng\">\n    <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n          <ion-item class=\"itemcolor1\">\n            <ion-select multiple=\"true\" formControlName=\"name\"  placeholder=\"Selecciona la(s) Categoría(s)\" cancelText=\"Cancelar\" okText=\"Aceptar\"  [formControl]=\"form.controls.categoriesid\" >\n              <ion-select-option  *ngFor=\"let item of items\" [value]=\"item.id\">{{item.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-auto-complete  formControlName=\"provinceName\"   (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Escribe la Ciudad ó Pueblo' }\"></ion-auto-complete>\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"name\" type=\"text\" placeholder=\"Nombre de Empresa, Negocio o Servicio\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"phone\"  type=\"text\" placeholder=\"Número de Celular\"  required></ion-input>\n          </ion-item>\n\n          <ion-item class=\"itemcolor1\">\n            <ion-input formControlName=\"ubication\" (click)=\"focus()\" readonly=\"readonly\"  type=\"text\" placeholder=\"Elegir Ubicación\"  required></ion-input>            \n          </ion-item>  \n\n            <ion-item class=\"itemcolor1\">\n             <ion-label>¿Cuenta con Domicilio?</ion-label>\n              <ion-toggle   formControlName=\"hasDelivery\" ></ion-toggle>\n            </ion-item> \n\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"email\" type=\"text\" placeholder=\"Correo Electrónico\"  required></ion-input>\n            </ion-item>\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Clave - Mínimo 6 caracteres\"  required></ion-input>\n            </ion-item>\n\n            <ion-item class=\"itemcolor1\">\n              <ion-input formControlName=\"confirm\" type=\"password\" placeholder=\"Confirmar Clave\"  required></ion-input>\n            </ion-item>  \n\n          <div class=\"buttons ion-padding-top\">\n            <ion-button expand=\"block\" color=\"secondary\"  shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" >Guardar Información</ion-button>\n          </div>\n  </form>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/company/company-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/company/company-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CompanyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageRoutingModule", function() { return CompanyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _company_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.page */ "./src/app/pages/company/company.page.ts");




const routes = [
    {
        path: '',
        component: _company_page__WEBPACK_IMPORTED_MODULE_3__["CompanyPage"]
    }
];
let CompanyPageRoutingModule = class CompanyPageRoutingModule {
};
CompanyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/company/company.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/company/company.module.ts ***!
  \*************************************************/
/*! exports provided: CompanyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function() { return CompanyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/pages/company/company-routing.module.ts");
/* harmony import */ var _company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company.page */ "./src/app/pages/company/company.page.ts");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");








let CompanyPageModule = class CompanyPageModule {
};
CompanyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyPageRoutingModule"]
        ],
        declarations: [_company_page__WEBPACK_IMPORTED_MODULE_6__["CompanyPage"]]
    })
], CompanyPageModule);



/***/ }),

/***/ "./src/app/pages/company/company.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/company/company.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  --placeholder-opacity: 1 !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFueS9DOlxcVXNlcnNcXEl2YW5jaG9cXHNvdXJjZVxccmVwb3NcXENvdGl6YVZlbmRGcm9udC9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbnlcXGNvbXBhbnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW55L2NvbXBhbnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbnkvY29tcGFueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0IHtcclxuXHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICAiLCJpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/company/company.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/company/company.page.ts ***!
  \***********************************************/
/*! exports provided: CompanyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPage", function() { return CompanyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/autoprovince.service */ "./src/app/services/autoprovince.service.ts");









let CompanyPage = class CompanyPage {
    constructor(autoprovinceService, modalController, router, apiService, formBuilder, busyService) {
        this.autoprovinceService = autoprovinceService;
        this.modalController = modalController;
        this.router = router;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.busyService = busyService;
        this.errorMessage = '';
        this.successMessage = '';
        this.working = false;
        this.items = [];
        this.provinceId = 0;
        this.provinceName = "";
        this.form = this.formBuilder.group({
            email: ['',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                ])
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
                ])],
            confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: [''],
            phone: [''],
            ubication: [''],
            provinceName: [''],
            categoriesid: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            hasDelivery: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            lat: [''],
            lng: [''],
        });
    }
    presentMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"]
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
    ngOnInit() {
    }
    selectedItem(value) {
        this.provinceId = value.id;
    }
    itemRemoved(event) {
        this.provinceId = 0;
    }
    ionViewWillEnter() {
        this.working = true;
        this.apiService.Get("Categories").then(res => {
            this.items = res;
            this.working = false;
        }, err => {
            this.working = false;
        });
    }
    focus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let res = yield this.busyService.AceptInfo("¡Información!", "Recuerda activar la Ubicación");
            if (res) {
                yield this.presentMap();
            }
        });
    }
    tryRegister(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (form.confirm != form.password) {
                yield this.busyService.presentAlert("¡Información!", "La clave y confirmar clave no son iguales");
                return;
            }
            this.working = true;
            form.provinceId = this.provinceId;
            this.apiService.Post(form, "Companies")
                .then(res => {
                this.working = false;
                this.errorMessage = "";
                this.busyService.presentAlert("¡Información!", "Registro creado exitosamente");
                this.router.navigate(['/login']);
            }, err => {
                this.working = false;
                this.errorMessage = err.message;
                this.busyService.presentAlert("¡Información!", "No fue posible crear la cuenta");
            });
        });
    }
};
CompanyPage.ctorParameters = () => [
    { type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_8__["AutoprovinceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"] }
];
CompanyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./company.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company/company.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./company.page.scss */ "./src/app/pages/company/company.page.scss")).default]
    })
], CompanyPage);



/***/ })

}]);
//# sourceMappingURL=pages-company-company-module-es2015.js.map