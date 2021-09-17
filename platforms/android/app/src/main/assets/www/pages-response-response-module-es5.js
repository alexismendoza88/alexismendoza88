function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-response-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response/response.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesResponseResponsePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >RESPUESTA SOLICITUD</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <div class=\"section_two ion-padding\" >\n    <p style=\"color: yellow; text-align: center;\">Ingresa la siguiente Información</p>\n  </div>  \n  <ion-item class=\"itemcolor1\">\n    <ion-input [(ngModel)]=\"amount\" placeholder=\"Precio del Producto ó Servicio\" (ngModelChange)=\"tocurrency($event)\"></ion-input>\n    <p  style=\"color: yellow; font-weight: bold;\">{{currency | currency:'USD':'symbol':'1.0-0'}}</p>\n  </ion-item>\n  <ion-item class=\"itemcolor1\">\n    <ion-input [(ngModel)]=\"finalamount\" (ngModelChange)=\"tocurrency2($event)\"  placeholder=\"Último Precio ó Descuento\"></ion-input>\n    <p  style=\"color: yellow; font-weight: bold;\">{{currency2 | currency:'USD':'symbol':'1.0-0'}}</p>\n  </ion-item>\n  <ion-item class=\"itemcolor1\">\n    <ion-textarea [(ngModel)]=\"note\" maxlength=\"800\" (ngModelChange)=\"get($event)\" rows=\"6\" cols=\"20\" placeholder=\"¿Alguna Observación o Sugerencia?\"></ion-textarea>\n  </ion-item>\n  <ion-item class=\"itemcolor1\" *ngIf=\"note != '' && note !=null\" >\n    <p>{{leng}}</p><p>/800</p>\n  </ion-item>\n  <ion-item class=\"itemcolor1\"  button (click)=\"pickfile()\">\n    <ion-label>Adjuntar PDF o Foto</ion-label>\n    <ion-icon slot=\"end\" class=\"itemcolor1\" name=\"document-attach-outline\"></ion-icon>\n  </ion-item>\n  <ion-item  *ngIf=\"fileUrl!=''\" >\n    <ion-img [src]=\"fileUrl\"></ion-img>\n    <ion-button (click)=\"clearimg()\" color=\"danger\" ><ion-icon slot=\"icon-only\" name=\"trash-bin-outline\"></ion-icon></ion-button>\n  </ion-item>\n  <ion-item class=\"itemcolor1\" style=\"display: none;\">\n    <ion-input [(ngModel)]=\"delivery\" placeholder=\"Tiempo de Entrega\"></ion-input>\n  </ion-item>\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button *ngIf=\"responseId!=null\"  [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Actualizar y Responder</ion-button>\n    <ion-button *ngIf=\"responseId==null\" [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Responder</ion-button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/response/response-routing.module.ts": function srcAppPagesResponseResponseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsePageRoutingModule", function () {
      return ResponsePageRoutingModule;
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


    var _response_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./response.page */
    "./src/app/pages/response/response.page.ts");

    var routes = [{
      path: '',
      component: _response_page__WEBPACK_IMPORTED_MODULE_3__["ResponsePage"]
    }];

    var ResponsePageRoutingModule = function ResponsePageRoutingModule() {
      _classCallCheck(this, ResponsePageRoutingModule);
    };

    ResponsePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResponsePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/response/response.module.ts": function srcAppPagesResponseResponseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsePageModule", function () {
      return ResponsePageModule;
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


    var _response_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./response-routing.module */
    "./src/app/pages/response/response-routing.module.ts");
    /* harmony import */


    var _response_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./response.page */
    "./src/app/pages/response/response.page.ts");

    var ResponsePageModule = function ResponsePageModule() {
      _classCallCheck(this, ResponsePageModule);
    };

    ResponsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _response_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponsePageRoutingModule"]],
      declarations: [_response_page__WEBPACK_IMPORTED_MODULE_6__["ResponsePage"]]
    })], ResponsePageModule);
    /***/
  },

  /***/
  "./src/app/pages/response/response.page.scss": function srcAppPagesResponseResponsePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNlL3Jlc3BvbnNlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/response/response.page.ts": function srcAppPagesResponseResponsePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsePage", function () {
      return ResponsePage;
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

    var ResponsePage = /*#__PURE__*/function () {
      function ResponsePage(apiService, busyService, router) {
        _classCallCheck(this, ResponsePage);

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
      }

      _createClass(ResponsePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.solicitudeId = window.localStorage.getItem('solicitudeId');
          this.responseId = window.localStorage.getItem("responseId");

          if (window.localStorage.getItem("responseId") != null) {
            this.getdata();
          } else {
            this.amount = null;
            this.finalamount = null;
            this.file = null;
            this.note = null;
            this.delivery = "";
            this.fileUrl = "";
            this.currency = null;
            this.currency2 = null;
          }
        }
      }, {
        key: "detailsolicitude",
        value: function detailsolicitude() {
          this.router.navigate(['/solicitude-detail']);
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this = this;

          this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fileurl + "responsefiles/";
          this.working = true;
          this.apiService.Get("Responses/" + window.localStorage.getItem("responseId")).then(function (res) {
            _this.working = false;

            if (res.fileUrl != null && res.fileUrl != '') {
              _this.fileUrl = _this.apifile + res.fileUrl;
            }

            _this.amount = res.amount;
            _this.finalamount = res.finalAmount;

            if (res.note == null || res.note == 'null') {
              _this.note = '';
            } else {
              _this.note = res.note;
            }

            _this.delivery = res.delivery;
            _this.currency = _this.amount;
            _this.currency2 = _this.finalamount;
          }, function (err) {
            _this.working = false;
          });
        }
      }, {
        key: "tocurrency",
        value: function tocurrency() {
          this.currency = this.amount;
        }
      }, {
        key: "tocurrency2",
        value: function tocurrency2() {
          this.currency2 = this.finalamount;
        }
      }, {
        key: "get",
        value: function get(event) {
          this.leng = event.length;
        }
      }, {
        key: "send",
        value: function send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var userinfo, responseIdx, formData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.amount == null)) {
                      _context.next = 4;
                      break;
                    }

                    _context.next = 3;
                    return this.busyService.presentAlert("¡Información!", "El campo Precio del Producto ó Servicio es Requerido.");

                  case 3:
                    return _context.abrupt("return");

                  case 4:
                    if (this.finalamount == null) {
                      this.finalamount = this.amount;
                    }

                    if (!(parseInt(this.finalamount) > parseInt(this.amount))) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 8;
                    return this.busyService.presentAlert("¡Información!", "El campo Último Precio o Descuento debe ser menor ó igual que el Precio Original.");

                  case 8:
                    return _context.abrupt("return");

                  case 9:
                    this.working = true;
                    userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
                    responseIdx = window.localStorage.getItem('responseId') == null ? "-1" : window.localStorage.getItem('responseId');
                    formData = new FormData();
                    formData.append('upload', this.file);
                    formData.append("userId", userinfo.id);
                    formData.append("solicitudeId", this.solicitudeId);
                    formData.append("note", this.note);
                    formData.append("finalamount", this.finalamount);
                    formData.append("amount", this.amount);
                    formData.append("delivery", this.delivery);
                    formData.append("responseId", responseIdx);
                    this.apiService.upload("Responses/Upload", formData).subscribe(function (event) {
                      if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                        var percentDone = Math.round(100 * event.loaded / event.total);
                      } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        if (event.body.ok) {
                          _this2.working = false;

                          _this2.busyService.presentAlert("¡Información!", "Respuesta Enviada");

                          _this2.router.navigate(['/companysol']);
                        } else {
                          _this2.working = false;

                          _this2.busyService.presentAlert("¡Información!", "Respuesta no Enviada");
                        }
                      }
                    }, function (err) {
                      _this2.working = false;

                      _this2.busyService.presentAlert("¡Información!", "Error al enviar Respuesta");
                    }, function () {});

                  case 22:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "pickfile",
        value: function pickfile() {
          var _this3 = this;

          var input = document.createElement('input');
          input.type = 'file';

          input.onchange = function (event) {
            if (event.target.files.length == 0) {
              _this3.busyService.presentAlert("¡Información!", "No se ha seleccionado una imágen");

              return;
            }

            _this3.file = event.target.files[0];

            _this3.loadimg("#image", _this3.file);
          };

          input.click();
        }
      }, {
        key: "loadimg",
        value: function loadimg(idimg, file) {
          var _this4 = this;

          // setting up the reader
          var reader = new FileReader();
          reader.readAsDataURL(file); // this is reading as data url
          // here we tell the reader what to do when it's done reading...

          reader.onload = function (event) {
            var content = event.target.result; // this is the content!

            _this4.fileUrl = content;
          };
        }
      }, {
        key: "clearimg",
        value: function clearimg() {
          this.fileUrl = '';
          this.file = null;
        }
      }]);

      return ResponsePage;
    }();

    ResponsePage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ResponsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-response',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./response.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response/response.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./response.page.scss */
      "./src/app/pages/response/response.page.scss"))["default"]]
    })], ResponsePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-response-response-module-es5.js.map