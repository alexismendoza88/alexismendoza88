function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-response-detail-response-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-detail/response-detail.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesResponseDetailResponseDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >DETALLE RESPUESTA</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"itemcolor1\">\n    <ion-label>Precio</ion-label>\n    <p *ngIf=\"item?.finalAmount!=item?.amount\" style=\"color:#50c8ff;text-decoration: line-through\">{{item?.amount | currency:'USD':'symbol':'1.0-0'}}&nbsp;  -</p>&nbsp; <p style=\"color: yellow;\">{{item?.finalAmount | currency:'USD':'symbol':'1.0-0'}}</p>\n  </ion-item>\n  <ion-item class=\"itemcolor1\" *ngIf=\"item?.note!='' && item?.note!='null' \">\n    <ion-text>\n      <p style=\"color: yellow;\">{{item?.note}}</p>\n     </ion-text>\n    </ion-item>\n  <ion-item  *ngIf=\"item?.fileUrl!=null && item?.fileUrl!=''\"  >\n    <img src=\"{{item?.fileUrl}}\" (click)=\"photoview(item?.fileUrl)\" style=\"width:100%;height: 300px;\">\n  </ion-item>\n  <ion-item class=\"itemcolor1\"  style=\"display: none;\">\n    <ion-label><ion-icon name=\"time-outline\"></ion-icon></ion-label>\n    <p>{{item?.delivery}}</p>\n  </ion-item>\n  <ion-grid *ngIf=\"item?.status=='I'\">\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <h4 style=\"color:#50c8ff;font-weight: bold;\">Contacto</h4>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  <ion-item  *ngIf=\"role=='Customer' && item?.status=='I'\">\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"person-outline\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.company.name}}</p>\n  </ion-item>\n  <ion-item  *ngIf=\"role=='Customer'  && item?.status=='I'\" button (click)=\"call(item?.company.phone)\">\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.company.phone}}</p>\n  </ion-item>\n  <ion-item  *ngIf=\"role=='Customer'  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.company.phone}}\">\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.company.phone}}</p>\n  </ion-item>\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\">\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"person-outline\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.solicitude.customer.name}}</p>\n  </ion-item>\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\" button (click)=\"call(item?.solicitude.customer.phone)\">\n    <ion-label style=\"color: white !important;\"><ion-icon name=\"call-outline\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.solicitude.customer.phone}}</p>\n  </ion-item>\n  <ion-item  *ngIf=\"role=='Company'  && item?.status=='I'\" button href=\"https://api.whatsapp.com/send?phone=+57{{item?.solicitude.customer.phone}}\">\n    <ion-label ><ion-icon name=\"logo-whatsapp\" color=\"success\"></ion-icon></ion-label> \n    <p class=\"itemcolor2\">{{item?.solicitude.customer.phone}}</p>\n  </ion-item>\n  <ion-grid *ngIf=\"role=='Company'  && item?.status=='P'\">\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"edit()\" ><ion-icon name=\"create-outline\"></ion-icon>Editar</ion-button><ion-button shape=\"round\" color=\"danger\" (click)=\"delete()\" ><ion-icon slot=\"start\" name=\"trash-outline\"></ion-icon>Eliminar</ion-button>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"role=='Customer'  && item?.status=='P'\">\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"Interested(null,null)\" ><ion-icon name=\"heart-outline\"></ion-icon>Me interesa</ion-button>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"role=='Customer'  && item?.status=='I' && item?.company?.lat!=null && item?.company?.lng!=null\">\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"navigate()\" ><ion-icon name=\"map-outline\"></ion-icon> ¿Como llegar?</ion-button>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/response-detail/response-detail-routing.module.ts": function srcAppPagesResponseDetailResponseDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseDetailPageRoutingModule", function () {
      return ResponseDetailPageRoutingModule;
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


    var _response_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./response-detail.page */
    "./src/app/pages/response-detail/response-detail.page.ts");

    var routes = [{
      path: '',
      component: _response_detail_page__WEBPACK_IMPORTED_MODULE_3__["ResponseDetailPage"]
    }];

    var ResponseDetailPageRoutingModule = function ResponseDetailPageRoutingModule() {
      _classCallCheck(this, ResponseDetailPageRoutingModule);
    };

    ResponseDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ResponseDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/response-detail/response-detail.module.ts": function srcAppPagesResponseDetailResponseDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseDetailPageModule", function () {
      return ResponseDetailPageModule;
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


    var _response_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./response-detail-routing.module */
    "./src/app/pages/response-detail/response-detail-routing.module.ts");
    /* harmony import */


    var _response_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./response-detail.page */
    "./src/app/pages/response-detail/response-detail.page.ts");

    var ResponseDetailPageModule = function ResponseDetailPageModule() {
      _classCallCheck(this, ResponseDetailPageModule);
    };

    ResponseDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _response_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResponseDetailPageRoutingModule"]],
      declarations: [_response_detail_page__WEBPACK_IMPORTED_MODULE_6__["ResponseDetailPage"]]
    })], ResponseDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/response-detail/response-detail.page.scss": function srcAppPagesResponseDetailResponseDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzcG9uc2UtZGV0YWlsL0M6XFxVc2Vyc1xcSXZhbmNob1xcc291cmNlXFxyZXBvc1xcQ290aXphVmVuZEZyb250L3NyY1xcYXBwXFxwYWdlc1xccmVzcG9uc2UtZGV0YWlsXFxyZXNwb25zZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNwb25zZS1kZXRhaWwvcmVzcG9uc2UtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNwb25zZS1kZXRhaWwvcmVzcG9uc2UtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/response-detail/response-detail.page.ts": function srcAppPagesResponseDetailResponseDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseDetailPage", function () {
      return ResponseDetailPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/route/route.component */
    "./src/app/components/route/route.component.ts");

    var ResponseDetailPage = /*#__PURE__*/function () {
      function ResponseDetailPage(modalController, callNumber, photoViewer, apiService, router, busyService, alertController) {
        _classCallCheck(this, ResponseDetailPage);

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
      }

      _createClass(ResponseDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "photoview",
        value: function photoview(url) {
          this.photoViewer.show(url);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getdata();
        }
      }, {
        key: "call",
        value: function call(number) {
          this.callNumber.callNumber(number, true).then(function (res) {})["catch"](function (err) {});
        }
      }, {
        key: "getdata",
        value: function getdata() {
          var _this = this;

          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.userid = userinfo.id;
          this.role = userinfo.role;
          this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fileurl + "responsefiles/";
          this.working = true;
          this.apiService.Get("Responses/" + window.localStorage.getItem("responseId")).then(function (res) {
            _this.working = false;

            if (res.fileUrl != null && res.fileUrl != '') {
              res.fileUrl = _this.apifile + res.fileUrl;
            }

            _this.item = res;
          }, function (err) {
            _this.working = false;
          });
        }
      }, {
        key: "navigate",
        value: function navigate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    localStorage.removeItem("mapdest");
                    localStorage.setItem("mapdest", JSON.stringify({
                      lat: this.item.company.lat,
                      lng: this.item.company.lng
                    }));
                    _context2.next = 4;
                    return this.modalController.create({
                      component: _components_route_route_component__WEBPACK_IMPORTED_MODULE_9__["RouteComponent"]
                    });

                  case 4:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (res) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                if (res.data) {}

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));
                    });
                    _context2.next = 8;
                    return modal.present();

                  case 8:
                    return _context2.abrupt("return", _context2.sent);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit() {
          window.localStorage.setItem('responseId', window.localStorage.getItem("responseId"));
          this.router.navigate(['/response']);
        }
      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var yes;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar esta respuesta?");

                  case 2:
                    yes = _context3.sent;

                    if (yes) {
                      this.working = true;
                      this.apiService.Delete("Responses/" + window.localStorage.getItem("responseId")).then(function (res) {
                        _this3.working = false;

                        _this3.router.navigate(['/solicitude-detail']);
                      }, function (err) {
                        _this3.working = false;
                      });
                    }

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "Interested",
        value: function Interested() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: '¿Seguro te Interesa?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Sí',
                        handler: function handler(data) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var _this5 = this;

                            var userinfo, datasend;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    this.working = true;
                                    userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
                                    datasend = {
                                      "userId": userinfo.id,
                                      "responseId": window.localStorage.getItem("responseId")
                                    };
                                    this.apiService.Post(datasend, "Responses/Interested").then(function (res) {
                                      _this5.working = false;

                                      _this5.busyService.presentAlert("¡Información!", "Datos Enviados");

                                      _this5.getdata();
                                    }, function (err) {
                                      _this5.working = false;

                                      _this5.busyService.presentAlert("¡Información!", "Error al enviar los datos");
                                    });

                                  case 4:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ResponseDetailPage;
    }();

    ResponseDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_8__["CallNumber"]
      }, {
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_7__["PhotoViewer"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_5__["BusyService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }];
    };

    ResponseDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-response-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./response-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/response-detail/response-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./response-detail.page.scss */
      "./src/app/pages/response-detail/response-detail.page.scss"))["default"]]
    })], ResponseDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-response-detail-response-detail-module-es5.js.map