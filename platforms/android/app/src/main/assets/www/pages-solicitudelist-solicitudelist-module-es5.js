function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-solicitudelist-solicitudelist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitudelist/solicitudelist.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesSolicitudelistSolicitudelistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle menu=\"pages\">\r\n        <ion-button >\r\n          <ion-icon name=\"menu-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n      <ion-button (click)=\"cancel()\" *ngIf=\"selecctedItems.length > 0\">\r\n        <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >SOLICITUDES</p>      \r\n    </ion-title>\r\n    <ion-buttons slot=\"end\" >\r\n      <ion-button [routerLink]=\"['/solicitude']\" *ngIf=\"selecctedItems.length ==0\">        \r\n        <div class=\"iconagregar\"><ion-icon class=\"tamagregar\" name=\"add-circle\" style=\"color:white\"></ion-icon></div>      \r\n      </ion-button>\r\n      <ion-button (click)=\"delete()\" *ngIf=\"selecctedItems.length > 0\">\r\n        <ion-icon name=\"trash-outline\"></ion-icon>\r\n        <ion-badge color=\"secondary\">{{selecctedItems.length}}</ion-badge>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-tab-bar class=\"backgeneral\">\r\n    <ion-tab-button (click)=\"filter('f1')\" #tab1>\r\n      <ion-label [style.color]=\"color\" >HOY</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"filter('f2')\" #tab2>\r\n      <ion-label [style.color]=\"color2\" >AYER</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button (click)=\"filter('f3')\" #tab3>\r\n      <ion-label [style.color]=\"color3\" >ANTIGUAS</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n<ion-content class=\"backgeneral\">\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-item *ngFor=\"let item of items\" id=\"{{item.id}}\" ion-long-press [interval]=\"200\" (pressed)=\"pressed(item)\" (click)=\"click(item)\">\r\n    <ion-label>\r\n      <ion-text > <h3 style=\"font-weight: bold; text-transform: capitalize;color: white;\">{{item.creationDate | timeAgo}} - {{item.category.name}}</h3></ion-text>\r\n      <p  style=\"color: yellow;\" *ngIf=\"item.note!='null' && item.note!=''\">{{item.note}}</p>\r\n      <p  style=\"color: yellow;\" *ngIf=\"item.note=='null' || item.note==''\"><ion-icon style=\"color:yellow\" name=\"document-attach-outline\"></ion-icon></p>\r\n      <p style=\"font-weight: bold;color: #50c8ff\"><ion-icon src=\"assets/icon/eye.svg\"></ion-icon> {{item.responses.length}}/{{item.solicitude_Views.length}}</p>\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/solicitudelist/solicitudelist-routing.module.ts": function srcAppPagesSolicitudelistSolicitudelistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudelistPageRoutingModule", function () {
      return SolicitudelistPageRoutingModule;
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


    var _solicitudelist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./solicitudelist.page */
    "./src/app/pages/solicitudelist/solicitudelist.page.ts");

    var routes = [{
      path: '',
      component: _solicitudelist_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudelistPage"]
    }];

    var SolicitudelistPageRoutingModule = function SolicitudelistPageRoutingModule() {
      _classCallCheck(this, SolicitudelistPageRoutingModule);
    };

    SolicitudelistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SolicitudelistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitudelist/solicitudelist.module.ts": function srcAppPagesSolicitudelistSolicitudelistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudelistPageModule", function () {
      return SolicitudelistPageModule;
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


    var _solicitudelist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solicitudelist-routing.module */
    "./src/app/pages/solicitudelist/solicitudelist-routing.module.ts");
    /* harmony import */


    var _solicitudelist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solicitudelist.page */
    "./src/app/pages/solicitudelist/solicitudelist.page.ts");
    /* harmony import */


    var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../time-ago.pipe */
    "./src/app/time-ago.pipe.ts");
    /* harmony import */


    var ionic_long_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ionic-long-press */
    "./node_modules/ionic-long-press/fesm2015/ionic-long-press.js");

    var SolicitudelistPageModule = function SolicitudelistPageModule() {
      _classCallCheck(this, SolicitudelistPageModule);
    };

    SolicitudelistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [ionic_long_press__WEBPACK_IMPORTED_MODULE_8__["LongPressModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitudelist_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudelistPageRoutingModule"]],
      declarations: [_solicitudelist_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudelistPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })], SolicitudelistPageModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitudelist/solicitudelist.page.scss": function srcAppPagesSolicitudelistSolicitudelistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-background-color {\n  --ion-item-background:rgba(0,0,0,0.5);\n}\n\nion-tab-bar {\n  --background:none !important;\n}\n\nion-tab-button {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZWxpc3QvQzpcXFVzZXJzXFxJdmFuY2hvXFxEb2N1bWVudHNcXFBSWV9RUFJJQ0VcXFFQUklDRS9zcmNcXGFwcFxccGFnZXNcXHNvbGljaXR1ZGVsaXN0XFxzb2xpY2l0dWRlbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVsaXN0L3NvbGljaXR1ZGVsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFDQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGVsaXN0L3NvbGljaXR1ZGVsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcbmlvbi10YWItYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcclxufVxyXG5pb24tdGFiLWJ1dHRvbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59IiwiLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7XG59XG5cbmlvbi10YWItYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOm5vbmUgIWltcG9ydGFudDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/solicitudelist/solicitudelist.page.ts": function srcAppPagesSolicitudelistSolicitudelistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudelistPage", function () {
      return SolicitudelistPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var SolicitudelistPage = /*#__PURE__*/function () {
      function SolicitudelistPage(menuController, apiService, router, busyService) {
        _classCallCheck(this, SolicitudelistPage);

        this.menuController = menuController;
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.items = [];
        this.working = false;
        this.selecctedItems = [];
        this.color = 'white';
        this.color2 = 'white';
        this.color3 = 'white';
      }

      _createClass(SolicitudelistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuController.enable(true);

          if (window.localStorage.getItem("pv") == null) {
            this.busyService.presentAlert("¡Mensaje Informativo!", "En esta sección se mostrarán las solicitudes que usted hará durante el transcurso del día.");
          }

          window.localStorage.setItem("pv", "1");
        }
      }, {
        key: "filter",
        value: function filter(e) {
          localStorage.removeItem("filter");
          localStorage.setItem("filter", e);
          this.solicitudes();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.solicitudes();
        }
      }, {
        key: "detail",
        value: function detail(id) {
          window.localStorage.removeItem("solicitudeId");
          window.localStorage.setItem("solicitudeId", id);
          this.router.navigate(['/solicitude-detail']);
        }
      }, {
        key: "responses",
        value: function responses(id) {
          window.localStorage.removeItem("solicitudeId");
          window.localStorage.setItem("solicitudeId", id);
          this.router.navigate(['/response-list']);
        }
      }, {
        key: "pressed",
        value: function pressed(item) {
          var exits = this.selecctedItems.filter(function (s) {
            return s.id == item.id;
          });

          if (exits.length == 0) {
            this.selecctedItems.push(item);
            var myDiv = document.getElementById(item.id);
            myDiv.classList.add("item-background-color");
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.selecctedItems.forEach(function (obj) {
            var myDiv = document.getElementById(obj.id);
            myDiv.classList.remove("item-background-color");
          });
          this.selecctedItems = [];
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
                    return this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar los ítems seleccionados?");

                  case 2:
                    yes = _context.sent;

                    if (yes) {
                      this.working = true;
                      this.apiService.Post(this.selecctedItems, "Solicitudes/DeleteList").then(function (res) {
                        _this.working = true;
                        _this.selecctedItems = [];

                        _this.solicitudes();
                      }, function (err) {
                        _this.working = false;

                        _this.busyService.presentAlert("¡Información!", "Algo salió mal, intente de nuevo");
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
        key: "click",
        value: function click(item) {
          if (this.selecctedItems.length == 0) {
            window.localStorage.removeItem("solicitudeId");
            window.localStorage.setItem("solicitudeId", item.id);
            this.router.navigate(['/response-list']);
          } else {
            var exits = this.selecctedItems.filter(function (s) {
              return s.id == item.id;
            });

            if (exits.length == 0) {
              this.selecctedItems.push(item);
              var myDiv = document.getElementById(item.id);
              myDiv.classList.add("item-background-color");
            } else {
              this.selecctedItems = this.selecctedItems.filter(function (s) {
                return s.id != item.id;
              });
              var myDiv = document.getElementById(item.id);
              myDiv.classList.remove("item-background-color");
            }
          }
        }
      }, {
        key: "solicitudes",
        value: function solicitudes() {
          var _this2 = this;

          var filter = "f1";

          if (window.localStorage.getItem("filter") != null) {
            filter = window.localStorage.getItem("filter");
          }

          this.color = 'white';
          this.color2 = 'white';
          this.color3 = 'white';

          if (filter == "f1") {
            this.color = 'yellow';
          } else if (filter == "f2") {
            this.color2 = 'yellow';
          } else {
            this.color3 = 'yellow';
          }

          this.items = [];
          this.working = true;
          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.apiService.Get("Solicitudes/CustomerSolicitude/" + userinfo.id + "/" + filter).then(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.working = false;
                      this.items = res;

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }, function (err) {
            _this2.working = false;
          });
        }
      }]);

      return SolicitudelistPage;
    }();

    SolicitudelistPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"]
      }];
    };

    SolicitudelistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solicitudelist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./solicitudelist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitudelist/solicitudelist.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./solicitudelist.page.scss */
      "./src/app/pages/solicitudelist/solicitudelist.page.scss"))["default"]]
    })], SolicitudelistPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-solicitudelist-solicitudelist-module-es5.js.map