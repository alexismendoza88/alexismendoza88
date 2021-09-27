function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-activityadd-activityadd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activityadd/activityadd.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesActivityaddActivityaddPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">Actividad y Promoción</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n  <ion-auto-complete [(ngModel)]=\"provinceName\" (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\"></ion-auto-complete>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-textarea [(ngModel)]=\"note\" rows=\"6\" cols=\"20\" placeholder=\"Describe la actividad\" (ngModelChange)=\"get($event)\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"note != '' && note !=null\" class=\"itemcolor1\">\r\n    <p>{{leng}}</p><p>/800</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" style=\"display: none;\" style=\"display: none;\">\r\n    <ion-input [(ngModel)]=\"amount\"     placeholder=\"Precio\" (ngModelChange)=\"tocurrency($event)\"></ion-input>\r\n    <p  style=\"color: yellow;\">{{currency | currency:'USD':'symbol':'1.0-0'}}</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-input [(ngModel)]=\"phone\"     placeholder=\"Teléfono\" ></ion-input>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\" style=\"display: none;\">\r\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" [(ngModel)]=\"date\" type=\"date\"     placeholder=\"Fecha Actividad\" ></ion-datetime>\r\n    <ion-icon style=\"color:white\" name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n  </ion-item>\r\n  <ion-grid >\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <h5 style=\"color:#50c8ff;font-weight: bold;\">Agregar Imagen</h5>\r\n  </ion-col>\r\n  </ion-row>\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <img (click)=\"pickfile1()\" [src]=\"imgurl1\" style=\"height:80px;\">\r\n    </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\"  class=\"ion-text-center\">\r\n    <ion-button *ngIf=\"id!=0\" [disabled]=\"working\" shape=\"round\" color=\"danger\" (click)=\"delete()\" ><ion-icon slot=\"start\" name=\"trash\"></ion-icon>Eliminar</ion-button> <ion-button [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Publicar</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/activityadd/activityadd-routing.module.ts": function srcAppPagesActivityaddActivityaddRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityaddPageRoutingModule", function () {
      return ActivityaddPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _activityadd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./activityadd.page */
    "./src/app/pages/activityadd/activityadd.page.ts");

    var routes = [{
      path: '',
      component: _activityadd_page__WEBPACK_IMPORTED_MODULE_3__["ActivityaddPage"]
    }];

    var ActivityaddPageRoutingModule = function ActivityaddPageRoutingModule() {
      _classCallCheck(this, ActivityaddPageRoutingModule);
    };

    ActivityaddPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ActivityaddPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/activityadd/activityadd.module.ts": function srcAppPagesActivityaddActivityaddModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityaddPageModule", function () {
      return ActivityaddPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _activityadd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./activityadd-routing.module */
    "./src/app/pages/activityadd/activityadd-routing.module.ts");
    /* harmony import */


    var _activityadd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activityadd.page */
    "./src/app/pages/activityadd/activityadd.page.ts");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");

    var ActivityaddPageModule = function ActivityaddPageModule() {
      _classCallCheck(this, ActivityaddPageModule);
    };

    ActivityaddPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _activityadd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActivityaddPageRoutingModule"]],
      declarations: [_activityadd_page__WEBPACK_IMPORTED_MODULE_6__["ActivityaddPage"]]
    })], ActivityaddPageModule);
    /***/
  },

  /***/
  "./src/app/pages/activityadd/activityadd.page.scss": function srcAppPagesActivityaddActivityaddPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGl2aXR5YWRkL2FjdGl2aXR5YWRkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/activityadd/activityadd.page.ts": function srcAppPagesActivityaddActivityaddPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityaddPage", function () {
      return ActivityaddPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var ActivityaddPage = /*#__PURE__*/function () {
      function ActivityaddPage(photoViewer, autoprovinceService, apiService, busyService, router) {
        _classCallCheck(this, ActivityaddPage);

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
        this.creationDate = null;
      }

      _createClass(ActivityaddPage, [{
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
        key: "getdata",
        value: function getdata() {
          var _this = this;

          this.id = 0;
          this.phone = null;
          this.note = null;
          this.date = null;
          this.amount = null;
          this.img1 = null;
          var idexist = localStorage.getItem("postid");

          if (idexist != null) {
            localStorage.removeItem("postid");
            this.working = true;
            this.apiService.Get("Posts/" + idexist).then(function (res) {
              _this.working = false;
              _this.id = res.id;
              _this.phone = res.phone;
              _this.note = res.description;
              _this.date = res.activityDate;
              _this.amount = res.price;
              _this.creationDate = res.CreationDate;

              if (res != null) {
                _this.provinceId = res.provinceId;
                _this.provinceName == res.provinceName;
              }

              _this.creationDate = res.CreationDate;

              if (res.description != null) {
                _this.leng = res.description.length;
              }

              if (res.price != null) {
                _this.currency = _this.amount;
              }

              if (res.img1 != null) {
                _this.imgurl1 = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "postimages/" + res.img1;
                _this.img1 = res.img1;
              }
            }, function (err) {
              _this.working = false;
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var yes;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.busyService.presentAlertYesNo("¡Información!", "¿Eliminar esta publicación?");

                  case 2:
                    yes = _context.sent;

                    if (yes) {
                      this.working = true;
                      this.apiService.Delete("Posts/" + this.id).then(function (res) {
                        _this2.working = false;

                        _this2.router.navigate(['/posts']);
                      }, function (err) {
                        _this2.working = false;
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
                        _this3.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen!");

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
          var _this4 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this4.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen. !");

              return;
            }

            _this4.file2 = event.target.files[0];

            _this4.loadimg("img2", _this4.file2);
          };

          input.click();
        }
      }, {
        key: "pickfile3",
        value: function pickfile3() {
          var _this5 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this5.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen!");

              return;
            }

            _this5.file3 = event.target.files[0];

            _this5.loadimg("img3", _this5.file3);
          };

          input.click();
        }
      }, {
        key: "pickfile4",
        value: function pickfile4() {
          var _this6 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this6.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen!");

              return;
            }

            _this6.file4 = event.target.files[0];

            _this6.loadimg("img4", _this6.file4);
          };

          input.click();
        }
      }, {
        key: "pickfile5",
        value: function pickfile5() {
          var _this7 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this7.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen!");

              return;
            }

            _this7.file5 = event.target.files[0];

            _this7.loadimg("img5", _this7.file5);
          };

          input.click();
        }
      }, {
        key: "pickfile6",
        value: function pickfile6() {
          var _this8 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this8.busyService.presentAlert("Información", "¡No se ha seleccionado una imágen!");

              return;
            }

            _this8.file6 = event.target.files[0];

            _this8.loadimg("img6", _this8.file6);
          };

          input.click();
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
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var userinfo, formData, data;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(this.provinceId == 0)) {
                      _context3.next = 4;
                      break;
                    }

                    _context3.next = 3;
                    return this.busyService.presentAlert("¡Información!", "Elija una Ciudad");

                  case 3:
                    return _context3.abrupt("return");

                  case 4:
                    if (!(this.phone == null || this.phone == '')) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 7;
                    return this.busyService.presentAlert("¡Información!", "Escriba un número de teléfono");

                  case 7:
                    return _context3.abrupt("return");

                  case 8:
                    if (!(this.file1 == null && this.note == null)) {
                      _context3.next = 12;
                      break;
                    }

                    _context3.next = 11;
                    return this.busyService.presentAlert("¡Información!", "Adjunte una imágen, también puede  agregar una descripción");

                  case 11:
                    return _context3.abrupt("return");

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
                      type: "A",
                      price: this.amount,
                      activityDate: new Date(this.date),
                      provinceId: this.provinceId,
                      img1: this.img1,
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

                          _this10.busyService.presentAlert("Información", "Publicación Enviada");

                          _this10.router.navigate(['/posts']);
                        } else {
                          _this10.working = false;

                          _this10.busyService.presentAlert("Información", "Publicación No Enviada");
                        }
                      }
                    }, function (err) {
                      console.log(err);
                      _this10.working = false;

                      _this10.busyService.presentAlert("Información", "Error al enviar Publicación");
                    }, function () {});

                  case 25:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ActivityaddPage;
    }();

    ActivityaddPage.ctorParameters = function () {
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

    ActivityaddPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activityadd',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./activityadd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/activityadd/activityadd.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./activityadd.page.scss */
      "./src/app/pages/activityadd/activityadd.page.scss"))["default"]]
    })], ActivityaddPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-activityadd-activityadd-module-es5.js.map