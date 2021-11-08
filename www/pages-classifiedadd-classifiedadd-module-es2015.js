(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-classifiedadd-classifiedadd-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/classifiedadd/classifiedadd.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/classifiedadd/classifiedadd.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">CLASIFICADOS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-auto-complete [(ngModel)]=\"provinceName\" (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\"></ion-auto-complete>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-textarea [(ngModel)]=\"note\" rows=\"6\" cols=\"20\" placeholder=\"Describe la oferta\" (ngModelChange)=\"get($event)\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"note != '' && note !=null\" class=\"itemcolor1\">\r\n    <p>{{leng}}</p><p>/800</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" style=\"display: none;\">\r\n    <ion-input [(ngModel)]=\"amount\"     placeholder=\"Precio\" (ngModelChange)=\"tocurrency($event)\"></ion-input>\r\n    <p  style=\"color: yellow;\">{{currency | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-input [(ngModel)]=\"phone\"     placeholder=\"Teléfono\" ></ion-input>\r\n  </ion-item>\r\n  <ion-grid >\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <h5 style=\"color:#50c8ff;font-weight: bold;\">Agregar Imágenes</h5>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile1()\">\r\n            <img [src]=\"imgurl1\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile2()\">\r\n            <img [src]=\"imgurl2\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile3()\">\r\n            <img [src]=\"imgurl3\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile4()\">\r\n            <img [src]=\"imgurl4\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile5()\">\r\n            <img [src]=\"imgurl5\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile6()\">\r\n            <img [src]=\"imgurl6\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\"  class=\"ion-text-center\">\r\n    <ion-button *ngIf=\"id!=0\" [disabled]=\"working\" shape=\"round\" color=\"danger\" (click)=\"delete()\" ><ion-icon slot=\"start\" name=\"trash\"></ion-icon>Eliminar</ion-button> <ion-button [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Publicar</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/classifiedadd/classifiedadd-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/classifiedadd/classifiedadd-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ClassifiedaddPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedaddPageRoutingModule", function() { return ClassifiedaddPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _classifiedadd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classifiedadd.page */ "./src/app/pages/classifiedadd/classifiedadd.page.ts");




const routes = [
    {
        path: '',
        component: _classifiedadd_page__WEBPACK_IMPORTED_MODULE_3__["ClassifiedaddPage"]
    }
];
let ClassifiedaddPageRoutingModule = class ClassifiedaddPageRoutingModule {
};
ClassifiedaddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClassifiedaddPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/classifiedadd/classifiedadd.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/classifiedadd/classifiedadd.module.ts ***!
  \*************************************************************/
/*! exports provided: ClassifiedaddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedaddPageModule", function() { return ClassifiedaddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _classifiedadd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classifiedadd-routing.module */ "./src/app/pages/classifiedadd/classifiedadd-routing.module.ts");
/* harmony import */ var _classifiedadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classifiedadd.page */ "./src/app/pages/classifiedadd/classifiedadd.page.ts");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");








let ClassifiedaddPageModule = class ClassifiedaddPageModule {
};
ClassifiedaddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _classifiedadd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassifiedaddPageRoutingModule"]
        ],
        declarations: [_classifiedadd_page__WEBPACK_IMPORTED_MODULE_6__["ClassifiedaddPage"]]
    })
], ClassifiedaddPageModule);



/***/ }),

/***/ "./src/app/pages/classifiedadd/classifiedadd.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/classifiedadd/classifiedadd.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYXNzaWZpZWRhZGQvY2xhc3NpZmllZGFkZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/classifiedadd/classifiedadd.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/classifiedadd/classifiedadd.page.ts ***!
  \***********************************************************/
/*! exports provided: ClassifiedaddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedaddPage", function() { return ClassifiedaddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/autoprovince.service */ "./src/app/services/autoprovince.service.ts");
/* harmony import */ var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/photo-viewer/ngx */ "./node_modules/@ionic-native/photo-viewer/ngx/index.js");









let ClassifiedaddPage = class ClassifiedaddPage {
    constructor(photoViewer, autoprovinceService, apiService, busyService, router) {
        this.photoViewer = photoViewer;
        this.autoprovinceService = autoprovinceService;
        this.apiService = apiService;
        this.busyService = busyService;
        this.router = router;
        this.file1 = null;
        this.file2 = null;
        this.file3 = null;
        this.file4 = null;
        this.file5 = null;
        this.file6 = null;
        this.imgurl1 = "";
        this.imgurl2 = "";
        this.imgurl3 = "";
        this.imgurl4 = "";
        this.imgurl5 = "";
        this.imgurl6 = "";
        this.date = null;
        this.phone = null;
        this.note = null;
        this.id = 0;
        this.leng = 0;
        this.creationdate = null;
        this.currency = null;
        this.amount = null;
        this.working = false;
        this.provinceId = 0;
        this.provinceName = '';
        this.img1 = null;
        this.img2 = null;
        this.img3 = null;
        this.img4 = null;
        this.img5 = null;
        this.img6 = null;
        this.creationDate = null;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        if (localStorage.getItem("province") != null) {
            let province = JSON.parse(window.localStorage.getItem("province"));
            this.provinceId = province.id;
            this.provinceName = province.name;
        }
        this.working = false;
        this.imgurl1 = "/assets/images/plus.png";
        this.imgurl2 = "/assets/images/plus.png";
        this.imgurl3 = "/assets/images/plus.png";
        this.imgurl4 = "/assets/images/plus.png";
        this.imgurl5 = "/assets/images/plus.png";
        this.imgurl6 = "/assets/images/plus.png";
        this.getdata();
    }
    selectedItem(value) {
        this.provinceId = value.id;
        localStorage.removeItem("province");
        localStorage.setItem("province", JSON.stringify({ id: value.id, name: this.provinceName }));
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var yes = yield this.busyService.presentAlertYesNo("¡ Información !", "¿ Eliminar esta publicación ?");
            if (yes) {
                this.working = true;
                this.apiService.Delete("Posts/" + this.id).then(res => {
                    this.working = false;
                    this.router.navigate(['/posts']);
                }, err => {
                    this.working = false;
                });
            }
        });
    }
    getdata() {
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
                this.creationDate = res.CreationDate;
                if (res != null) {
                    this.provinceId = res.provinceId;
                    this.provinceName == res.provinceName;
                }
                if (res.description != null) {
                    this.leng = res.description.length;
                }
                if (res.price != null) {
                    this.currency = this.amount;
                }
                if (res.img1 != null) {
                    this.imgurl1 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img1;
                    this.img1 = res.img1;
                }
                if (res.img2 != null) {
                    this.imgurl2 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img2;
                    this.img2 = res.img2;
                }
                if (res.img3 != null) {
                    this.imgurl3 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img3;
                    this.img3 = res.img3;
                }
                if (res.img4 != null) {
                    this.imgurl4 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img4;
                    this.img4 = res.img4;
                }
                if (res.img5 != null) {
                    this.imgurl5 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img5;
                    this.img5 = res.img5;
                }
                if (res.img6 != null) {
                    this.imgurl6 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img6;
                    this.img6 = res.img6;
                }
            }, err => {
                this.working = false;
            });
        }
    }
    get(event) {
        this.leng = event.length;
    }
    tocurrency() {
        this.currency = this.amount;
    }
    pickfile1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file1 != null || this.img1 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file1 = null;
                    this.img1 = null;
                    this.imgurl1 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl1);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file1 = event.target.files[0];
                this.loadimg("img1", this.file1);
            };
            input.click();
        });
    }
    pickfile2() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file2 != null || this.img2 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file2 = null;
                    this.img2 = null;
                    this.imgurl2 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl2);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file2 = event.target.files[0];
                this.loadimg("img2", this.file2);
            };
            input.click();
        });
    }
    pickfile3() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file3 != null || this.img3 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file3 = null;
                    this.img3 = null;
                    this.imgurl3 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl3);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file3 = event.target.files[0];
                this.loadimg("img3", this.file3);
            };
            input.click();
        });
    }
    pickfile4() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file4 != null || this.img4 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file4 = null;
                    this.img4 = null;
                    this.imgurl4 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl4);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file4 = event.target.files[0];
                this.loadimg("img4", this.file4);
            };
            input.click();
        });
    }
    pickfile5() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file5 != null || this.img5 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file5 = null;
                    this.img5 = null;
                    this.imgurl5 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl5);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file5 = event.target.files[0];
                this.loadimg("img5", this.file5);
            };
            input.click();
        });
    }
    pickfile6() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.file6 != null || this.img6 != null) {
                let res = yield this.busyService.presentActionSheet();
                if (res == "E") {
                    this.file6 = null;
                    this.img6 = null;
                    this.imgurl6 = "/assets/images/plus.png";
                    return;
                }
                if (res == "V") {
                    this.photoViewer.show(this.imgurl6);
                    return;
                }
                if (res == "S") {
                    return;
                }
            }
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (event) => {
                if (event.target.files.length == 0) {
                    this.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");
                    return;
                }
                this.file6 = event.target.files[0];
                this.loadimg("img6", this.file6);
            };
            input.click();
        });
    }
    loadimg(to, file) {
        // setting up the reader
        var reader = new FileReader();
        reader.readAsDataURL(file); // this is reading as data url
        // here we tell the reader what to do when it's done reading...
        reader.onload = (event) => {
            var content = event.target.result; // this is the content!
            if (to == 'img1')
                this.imgurl1 = content;
            if (to == 'img2')
                this.imgurl2 = content;
            if (to == 'img3')
                this.imgurl3 = content;
            if (to == 'img4')
                this.imgurl4 = content;
            if (to == 'img5')
                this.imgurl5 = content;
            if (to == 'img6')
                this.imgurl6 = content;
        };
    }
    send() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.provinceId == 0) {
                yield this.busyService.presentAlert("¡Información!", "Elija una Ciudad");
                return;
            }
            if (this.phone == null || this.phone == '') {
                yield this.busyService.presentAlert("¡Información!", "Escriba un número de teléfono");
                return;
            }
            if (this.note == null) {
                yield this.busyService.presentAlert("¡Información!", "Adjunte una imagen, también puede  agregar una descripción");
                return;
            }
            this.working = true;
            let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
            this.creationDate = this.creationDate == null ? new Date() : this.creationDate;
            var formData = new FormData();
            let data = {
                id: this.id,
                userId: userinfo.id,
                description: this.note,
                phone: this.phone,
                type: "C",
                price: this.amount,
                provinceId: this.provinceId,
                img1: this.img1,
                img2: this.img2,
                img3: this.img3,
                img4: this.img4,
                img5: this.img5,
                img6: this.img6,
                creationDate: this.creationDate
            };
            formData.append('img1', this.file1);
            formData.append('img2', this.file2);
            formData.append('img3', this.file3);
            formData.append('img4', this.file4);
            formData.append('img5', this.file5);
            formData.append('img6', this.file6);
            formData.append("post", JSON.stringify(data));
            this.apiService.upload("Posts/Upload", formData).subscribe(event => {
                if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                    const percentDone = Math.round(100 * event.loaded / event.total);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                    if (event.body.ok) {
                        this.working = false;
                        this.busyService.presentAlert("¡Información!", "Publicación Enviada");
                        this.router.navigate(['/posts']);
                    }
                    else {
                        this.working = false;
                        this.busyService.presentAlert("¡Información!", "Publicación no Enviada");
                    }
                }
            }, (err) => {
                console.log(err);
                this.working = false;
                this.busyService.presentAlert("¡Información!", "Error al  enviar Publicación");
            }, () => {
            });
        });
    }
};
ClassifiedaddPage.ctorParameters = () => [
    { type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"] },
    { type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_7__["AutoprovinceService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClassifiedaddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-classifiedadd',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./classifiedadd.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/classifiedadd/classifiedadd.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./classifiedadd.page.scss */ "./src/app/pages/classifiedadd/classifiedadd.page.scss")).default]
    })
], ClassifiedaddPage);



/***/ })

}]);
//# sourceMappingURL=pages-classifiedadd-classifiedadd-module-es2015.js.map