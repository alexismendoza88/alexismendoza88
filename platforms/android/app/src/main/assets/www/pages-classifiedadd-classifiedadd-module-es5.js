function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-classifiedadd-classifiedadd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/classifiedadd/classifiedadd.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesClassifiedaddClassifiedaddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">CLASIFICADOS</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-auto-complete [(ngModel)]=\"provinceName\" (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\"></ion-auto-complete>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-textarea [(ngModel)]=\"note\" rows=\"6\" cols=\"20\" placeholder=\"Describe la oferta\" (ngModelChange)=\"get($event)\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"note != '' && note !=null\" class=\"itemcolor1\">\r\n    <p>{{leng}}</p><p>/800</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" style=\"display: none;\">\r\n    <ion-input [(ngModel)]=\"amount\"     placeholder=\"Precio\" (ngModelChange)=\"tocurrency($event)\"></ion-input>\r\n    <p  style=\"color: yellow;\">{{currency | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-input [(ngModel)]=\"phone\"     placeholder=\"Teléfono\" ></ion-input>\r\n  </ion-item>\r\n  <ion-grid >\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <h5 style=\"color:#50c8ff;font-weight: bold;\">Agregar Imágenes</h5>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n  <ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile1()\">\r\n            <img [src]=\"imgurl1\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile2()\">\r\n            <img [src]=\"imgurl2\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile3()\">\r\n            <img [src]=\"imgurl3\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    \r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile4()\">\r\n            <img [src]=\"imgurl4\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile5()\">\r\n            <img [src]=\"imgurl5\" >\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-thumbnail button (click)=\"pickfile6()\">\r\n            <img [src]=\"imgurl6\">\r\n          </ion-thumbnail>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\"  class=\"ion-text-center\">\r\n    <ion-button *ngIf=\"id!=0\" [disabled]=\"working\" shape=\"round\" color=\"danger\" (click)=\"delete()\" ><ion-icon slot=\"start\" name=\"trash\"></ion-icon>Eliminar</ion-button> <ion-button [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Publicar</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/classifiedadd/classifiedadd-routing.module.ts": function srcAppPagesClassifiedaddClassifiedaddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassifiedaddPageRoutingModule", function () {
      return ClassifiedaddPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _classifiedadd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./classifiedadd.page */
    "./src/app/pages/classifiedadd/classifiedadd.page.ts");

    var routes = [{
      path: '',
      component: _classifiedadd_page__WEBPACK_IMPORTED_MODULE_3__["ClassifiedaddPage"]
    }];

    var ClassifiedaddPageRoutingModule = function ClassifiedaddPageRoutingModule() {
      _classCallCheck(this, ClassifiedaddPageRoutingModule);
    };

    ClassifiedaddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ClassifiedaddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/classifiedadd/classifiedadd.module.ts": function srcAppPagesClassifiedaddClassifiedaddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassifiedaddPageModule", function () {
      return ClassifiedaddPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _classifiedadd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./classifiedadd-routing.module */
    "./src/app/pages/classifiedadd/classifiedadd-routing.module.ts");
    /* harmony import */


    var _classifiedadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./classifiedadd.page */
    "./src/app/pages/classifiedadd/classifiedadd.page.ts");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");

    var ClassifiedaddPageModule = function ClassifiedaddPageModule() {
      _classCallCheck(this, ClassifiedaddPageModule);
    };

    ClassifiedaddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _classifiedadd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClassifiedaddPageRoutingModule"]],
      declarations: [_classifiedadd_page__WEBPACK_IMPORTED_MODULE_6__["ClassifiedaddPage"]]
    })], ClassifiedaddPageModule);
    /***/
  },

  /***/
  "./src/app/pages/classifiedadd/classifiedadd.page.scss": function srcAppPagesClassifiedaddClassifiedaddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NsYXNzaWZpZWRhZGQvY2xhc3NpZmllZGFkZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/classifiedadd/classifiedadd.page.ts": function srcAppPagesClassifiedaddClassifiedaddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassifiedaddPage", function () {
      return ClassifiedaddPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/autoprovince.service */
    "./src/app/services/autoprovince.service.ts");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/ngx/index.js");

    var ClassifiedaddPage = /*#__PURE__*/function () {
      function ClassifiedaddPage(photoViewer, autoprovinceService, apiService, busyService, router) {
        _classCallCheck(this, ClassifiedaddPage);

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

      _createClass(ClassifiedaddPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (localStorage.getItem("province") != null) {
            var province = JSON.parse(window.localStorage.getItem("province"));
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
      }, {
        key: "selectedItem",
        value: function selectedItem(value) {
          this.provinceId = value.id;
          localStorage.removeItem("province");
          localStorage.setItem("province", JSON.stringify({
            id: value.id,
            name: this.provinceName
          }));
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var yes;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.busyService.presentAlertYesNo("¡ Información !", "¿ Eliminar esta publicación ?");

                  case 2:
                    yes = _context.sent;

                    if (yes) {
                      this.working = true;
                      this.apiService.Delete("Posts/" + this.id).then(function (res) {
                        _this.working = false;

                        _this.router.navigate(['/posts']);
                      }, function (err) {
                        _this.working = false;
                      });
                    }

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this2 = this;

          this.id = 0;
          this.phone = null;
          this.note = null;
          this.date = null;
          this.amount = null;
          var idexist = localStorage.getItem("postid");

          if (idexist != null) {
            localStorage.removeItem("postid");
            this.working = true;
            this.apiService.Get("Posts/" + idexist).then(function (res) {
              _this2.working = false;
              _this2.id = res.id;
              _this2.phone = res.phone;
              _this2.note = res.description;
              _this2.date = res.activityDate;
              _this2.amount = res.price;
              _this2.creationDate = res.CreationDate;

              if (res != null) {
                _this2.provinceId = res.provinceId;
                _this2.provinceName == res.provinceName;
              }

              if (res.description != null) {
                _this2.leng = res.description.length;
              }

              if (res.price != null) {
                _this2.currency = _this2.amount;
              }

              if (res.img1 != null) {
                _this2.imgurl1 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img1;
                _this2.img1 = res.img1;
              }

              if (res.img2 != null) {
                _this2.imgurl2 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img2;
                _this2.img2 = res.img2;
              }

              if (res.img3 != null) {
                _this2.imgurl3 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img3;
                _this2.img3 = res.img3;
              }

              if (res.img4 != null) {
                _this2.imgurl4 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img4;
                _this2.img4 = res.img4;
              }

              if (res.img5 != null) {
                _this2.imgurl5 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img5;
                _this2.img5 = res.img5;
              }

              if (res.img6 != null) {
                _this2.imgurl6 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img6;
                _this2.img6 = res.img6;
              }
            }, function (err) {
              _this2.working = false;
            });
          }
        }
      }, {
        key: "get",
        value: function get(event) {
          this.leng = event.length;
        }
      }, {
        key: "tocurrency",
        value: function tocurrency() {
          this.currency = this.amount;
        }
      }, {
        key: "pickfile1",
        value: function pickfile1() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(this.file1 != null || this.img1 != null)) {
                      _context2.next = 14;
                      break;
                    }

                    _context2.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context2.sent;

                    if (!(res == "E")) {
                      _context2.next = 9;
                      break;
                    }

                    this.file1 = null;
                    this.img1 = null;
                    this.imgurl1 = "/assets/images/plus.png";
                    return _context2.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context2.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl1);
                    return _context2.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context2.next = 14;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this3.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this3.file1 = event.target.files[0];

                      _this3.loadimg("img1", _this3.file1);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "pickfile2",
        value: function pickfile2() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.file2 != null || this.img2 != null)) {
                      _context3.next = 14;
                      break;
                    }

                    _context3.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context3.sent;

                    if (!(res == "E")) {
                      _context3.next = 9;
                      break;
                    }

                    this.file2 = null;
                    this.img2 = null;
                    this.imgurl2 = "/assets/images/plus.png";
                    return _context3.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context3.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl2);
                    return _context3.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context3.next = 14;
                      break;
                    }

                    return _context3.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this4.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this4.file2 = event.target.files[0];

                      _this4.loadimg("img2", _this4.file2);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "pickfile3",
        value: function pickfile3() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this5 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(this.file3 != null || this.img3 != null)) {
                      _context4.next = 14;
                      break;
                    }

                    _context4.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context4.sent;

                    if (!(res == "E")) {
                      _context4.next = 9;
                      break;
                    }

                    this.file3 = null;
                    this.img3 = null;
                    this.imgurl3 = "/assets/images/plus.png";
                    return _context4.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context4.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl3);
                    return _context4.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context4.next = 14;
                      break;
                    }

                    return _context4.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this5.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this5.file3 = event.target.files[0];

                      _this5.loadimg("img3", _this5.file3);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "pickfile4",
        value: function pickfile4() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.file4 != null || this.img4 != null)) {
                      _context5.next = 14;
                      break;
                    }

                    _context5.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context5.sent;

                    if (!(res == "E")) {
                      _context5.next = 9;
                      break;
                    }

                    this.file4 = null;
                    this.img4 = null;
                    this.imgurl4 = "/assets/images/plus.png";
                    return _context5.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context5.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl4);
                    return _context5.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context5.next = 14;
                      break;
                    }

                    return _context5.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this6.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this6.file4 = event.target.files[0];

                      _this6.loadimg("img4", _this6.file4);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "pickfile5",
        value: function pickfile5() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this7 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(this.file5 != null || this.img5 != null)) {
                      _context6.next = 14;
                      break;
                    }

                    _context6.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context6.sent;

                    if (!(res == "E")) {
                      _context6.next = 9;
                      break;
                    }

                    this.file5 = null;
                    this.img5 = null;
                    this.imgurl5 = "/assets/images/plus.png";
                    return _context6.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context6.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl5);
                    return _context6.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context6.next = 14;
                      break;
                    }

                    return _context6.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this7.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this7.file5 = event.target.files[0];

                      _this7.loadimg("img5", _this7.file5);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "pickfile6",
        value: function pickfile6() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this8 = this;

            var res, input;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!(this.file6 != null || this.img6 != null)) {
                      _context7.next = 14;
                      break;
                    }

                    _context7.next = 3;
                    return this.busyService.presentActionSheet();

                  case 3:
                    res = _context7.sent;

                    if (!(res == "E")) {
                      _context7.next = 9;
                      break;
                    }

                    this.file6 = null;
                    this.img6 = null;
                    this.imgurl6 = "/assets/images/plus.png";
                    return _context7.abrupt("return");

                  case 9:
                    if (!(res == "V")) {
                      _context7.next = 12;
                      break;
                    }

                    this.photoViewer.show(this.imgurl6);
                    return _context7.abrupt("return");

                  case 12:
                    if (!(res == "S")) {
                      _context7.next = 14;
                      break;
                    }

                    return _context7.abrupt("return");

                  case 14:
                    input = document.createElement('input');
                    input.type = 'file';

                    input.onchange = function (event) {
                      if (event.target.files.length == 0) {
                        _this8.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

                        return;
                      }

                      _this8.file6 = event.target.files[0];

                      _this8.loadimg("img6", _this8.file6);
                    };

                    input.click();

                  case 18:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "loadimg",
        value: function loadimg(to, file) {
          var _this9 = this;

          // setting up the reader
          var reader = new FileReader();
          reader.readAsDataURL(file); // this is reading as data url
          // here we tell the reader what to do when it's done reading...

          reader.onload = function (event) {
            var content = event.target.result; // this is the content!

            if (to == 'img1') _this9.imgurl1 = content;
            if (to == 'img2') _this9.imgurl2 = content;
            if (to == 'img3') _this9.imgurl3 = content;
            if (to == 'img4') _this9.imgurl4 = content;
            if (to == 'img5') _this9.imgurl5 = content;
            if (to == 'img6') _this9.imgurl6 = content;
          };
        }
      }, {
        key: "send",
        value: function send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this10 = this;

            var userinfo, formData, data;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(this.provinceId == 0)) {
                      _context8.next = 4;
                      break;
                    }

                    _context8.next = 3;
                    return this.busyService.presentAlert("¡Información!", "Elija una Ciudad");

                  case 3:
                    return _context8.abrupt("return");

                  case 4:
                    if (!(this.phone == null || this.phone == '')) {
                      _context8.next = 8;
                      break;
                    }

                    _context8.next = 7;
                    return this.busyService.presentAlert("¡Información!", "Escriba un número de teléfono");

                  case 7:
                    return _context8.abrupt("return");

                  case 8:
                    if (!(this.note == null)) {
                      _context8.next = 12;
                      break;
                    }

                    _context8.next = 11;
                    return this.busyService.presentAlert("¡Información!", "Adjunte una imagen, también puede  agregar una descripción");

                  case 11:
                    return _context8.abrupt("return");

                  case 12:
                    this.working = true;
                    userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
                    this.creationDate = this.creationDate == null ? new Date() : this.creationDate;
                    formData = new FormData();
                    data = {
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
                    this.apiService.upload("Posts/Upload", formData).subscribe(function (event) {
                      if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                        var percentDone = Math.round(100 * event.loaded / event.total);
                      } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        if (event.body.ok) {
                          _this10.working = false;

                          _this10.busyService.presentAlert("¡Información!", "Publicación Enviada");

                          _this10.router.navigate(['/posts']);
                        } else {
                          _this10.working = false;

                          _this10.busyService.presentAlert("¡Información!", "Publicación no Enviada");
                        }
                      }
                    }, function (err) {
                      console.log(err);
                      _this10.working = false;

                      _this10.busyService.presentAlert("¡Información!", "Error al  enviar Publicación");
                    }, function () {});

                  case 25:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return ClassifiedaddPage;
    }();

    ClassifiedaddPage.ctorParameters = function () {
      return [{
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_8__["PhotoViewer"]
      }, {
        type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_7__["AutoprovinceService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ClassifiedaddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classifiedadd',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./classifiedadd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/classifiedadd/classifiedadd.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./classifiedadd.page.scss */
      "./src/app/pages/classifiedadd/classifiedadd.page.scss"))["default"]]
    })], ClassifiedaddPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-classifiedadd-classifiedadd-module-es5.js.map