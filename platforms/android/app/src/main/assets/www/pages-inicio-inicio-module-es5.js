function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesInicioInicioPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border backgeneral\">\r\n  <ion-toolbar color=\"secondary\">\r\n    <ion-title class=\"ion-text-center\" >\r\n      <p style=\"color: white; font-size: 20px; font-weight: bold;\" >¡BIENVENIDO - QPRICE!</p>\r\n    </ion-title>           \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"backgeneral\">\r\n<!--   <div id=\"logodiv\" style=\"text-align: center;\">\r\n    <img src=\"../../../assets/images/qprice.png\" style=\"width: 200px; height: 200px;\" alt=\"Qprice\">\r\n  </div> -->\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <ion-text>\r\n          <span style=\"font-size: 14px;color:yellow;font-weight:lighter;font-family: Verdana, Geneva, Tahoma, sans-serif;\">{{result}}</span>          \r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>  \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-right\">\r\n        <ion-button  class=\"btntam\" (click)=\"iniciar_sesion()\" shape=\"round\" color=\"btnfav\" ><ion-icon slot=\"start\" name=\"enter-outline\"></ion-icon><p style=\"color: #000; font-size: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Iniciar Sesión</p></ion-button>        \r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <hr style=\"background-color: white;\">\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-left\">\r\n        <ion-text color=\"warning\" >\r\n          <span style=\"font-size: 16px;color:yellow;font-weight: bold;font-family: Verdana, Geneva, Tahoma, sans-serif;\">¿ERES USUARIO NUEVO?</span>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-align-items-center\">     \r\n      <ion-col size=\"12\" class=\"ion-text-right\">\r\n        <ion-button class=\"btntam\"  (click)=\"company()\" shape=\"round\" color=\"btnfav\" ><ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon><p style=\"color: #000; font-size: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >REGÍSTRATE PARA OFRECER</p></ion-button>\r\n      </ion-col>     \r\n    </ion-row> \r\n   \r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-right\">\r\n        <i class=\"bi bi-arrow-bar-right\"></i>\r\n        <ion-button class=\"btntam\" (click)=\"customer()\" shape=\"round\" color=\"btnfav\" ><ion-icon slot=\"start\" name=\"search-circle-outline\" ></ion-icon><p style=\"color: #000; font-size: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >REGÍSTRATE PARA BUSCAR</p></ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n</ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio-routing.module.ts": function srcAppPagesInicioInicioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
      return InicioPageRoutingModule;
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


    var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var routes = [{
      path: '',
      component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
    }];

    var InicioPageRoutingModule = function InicioPageRoutingModule() {
      _classCallCheck(this, InicioPageRoutingModule);
    };

    InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InicioPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.module.ts": function srcAppPagesInicioInicioModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
      return InicioPageModule;
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


    var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inicio-routing.module */
    "./src/app/pages/inicio/inicio-routing.module.ts");
    /* harmony import */


    var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inicio.page */
    "./src/app/pages/inicio/inicio.page.ts");

    var InicioPageModule = function InicioPageModule() {
      _classCallCheck(this, InicioPageModule);
    };

    InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
      declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
    })], InicioPageModule);
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.scss": function srcAppPagesInicioInicioPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#logodiv img {\n  width: 390px;\n  height: 340px;\n  margin-block: -65px;\n}\n\n#ion-button {\n  font-size: 20px;\n  line-height: 50px;\n  text-align: left;\n  width: 100px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5pY2lvL0M6XFxVc2Vyc1xcSXZhbmNob1xcRG9jdW1lbnRzXFxQUllfUVBSSUNFXFxRUFJJQ0Uvc3JjXFxhcHBcXHBhZ2VzXFxpbmljaW9cXGluaWNpby5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5pY2lvL2luaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb2RpdiBpbWcgIHtcclxuICAgIHdpZHRoOiAzOTBweDtcclxuICAgIGhlaWdodDogMzQwcHg7XHJcbiAgICBtYXJnaW4tYmxvY2s6IC02NXB4O1xyXG59XHJcbiNpb24tYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9IiwiI2xvZ29kaXYgaW1nIHtcbiAgd2lkdGg6IDM5MHB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW4tYmxvY2s6IC02NXB4O1xufVxuXG4jaW9uLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/inicio/inicio.page.ts": function srcAppPagesInicioInicioPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
      return InicioPage;
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


    var _services_busy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/busy.service */
    "./src/app/services/busy.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var InicioPage = /*#__PURE__*/function () {
      function InicioPage(router, busyService, apiService) {
        _classCallCheck(this, InicioPage);

        this.router = router;
        this.busyService = busyService;
        this.apiService = apiService;
        this.result = '....';
      }

      _createClass(InicioPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var texto = "";
          var ahora = new Date();
          var hora = ahora.getHours();

          if (hora >= 0 && hora < 12) {
            texto = "Hola, Buenos Días.";
          } else if (hora >= 12 && hora < 18) {
            texto = "Hola, Buenas Tardes.";
          } else {
            texto = "Hola, Buenas Noches.";
          }

          this.result = texto;
        }
      }, {
        key: "customer",
        value: function customer() {
          window.localStorage.removeItem("iscustomer");
          window.localStorage.setItem("iscustomer", "si");
          this.router.navigate(['/customer']);
        }
      }, {
        key: "company",
        value: function company() {
          window.localStorage.removeItem("iscustomer");
          window.localStorage.setItem("iscustomer", "no");
          this.router.navigate(['/company']);
        }
      }, {
        key: "iniciar_sesion",
        value: function iniciar_sesion() {
          window.localStorage.removeItem("iscustomer");
          window.localStorage.setItem("iscustomer", "no");
          this.router.navigate(['/login']);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.autologin();
        }
      }, {
        key: "autologin",
        value: function autologin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var userinfo, res, data;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // alert(localStorage.getItem("notifications"));
                    userinfo = window.localStorage.getItem("userinfo");

                    if (!(userinfo != null)) {
                      _context.next = 9;
                      break;
                    }

                    if (!(localStorage.getItem("notifications") == "true")) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 5;
                    return this.busyService.presentAlertYesNo("¡Notificaciones Desactivadas!", "¿Desea activar las notificaciones?");

                  case 5:
                    res = _context.sent;

                    if (res) {
                      localStorage.removeItem("notifications");
                      this.apiService.Get("Companies/activar_notificaciones/" + JSON.parse(userinfo).id);
                    }

                  case 7:
                    data = JSON.parse(window.localStorage.getItem("userinfo"));

                    if (data.role == "Customer") {
                      document.getElementById("pedidos").style.display = 'none';
                      this.router.navigate(['/solicitudelist']);
                    } else {
                      this.router.navigate(['/companysol']);
                    }

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return InicioPage;
    }();

    InicioPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }];
    };

    InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inicio.page.scss */
      "./src/app/pages/inicio/inicio.page.scss"))["default"]]
    })], InicioPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map