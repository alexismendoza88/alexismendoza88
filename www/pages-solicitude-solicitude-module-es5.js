function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-solicitude-solicitude-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude/solicitude.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesSolicitudeSolicitudePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"secondary\" >\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-center\">\r\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >NUEVA SOLICITUD</p>\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"backgeneral\">\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"12\" class=\"ion-text-center\">\r\n      <p style=\"color: yellow; font-size: 16px; font-weight: lighter; font-family: Verdana, Geneva, Tahoma, sans-serif;\" >Ingresa la siguiente Información</p>\r\n      <hr style=\"background-color: white;\">\r\n    </ion-col>\r\n  </ion-row>  \r\n\r\n  <ion-item class=\"itemcolor1\" >\r\n    <input type=\"hidden\" [(ngModel)]=\"categoryId\" >\r\n    <ion-input [(ngModel)]=\"categoryDescr\" placeholder=\"Seleccionar Categoría\" (click)=\"onFocus($event)\"></ion-input>\r\n    <!-- <ion-select-option  *ngFor=\"let item of items\" [value]=\"item.id\">{{item.name}}</ion-select-option> -->\r\n</ion-item>\r\n\r\n\r\n  <ion-auto-complete [(ngModel)]=\"provinceName\" (itemSelected)=\"selectedItem($event)\" (ionClear)=\"itemRemoved($event)\" [dataProvider]=\"autoprovinceService\" [options]=\"{ placeholder : 'Buscar Ciudad' }\" required></ion-auto-complete>\r\n  <ion-item style=\"display: none;\">\r\n    <ion-label position=\"floating\">Descripción</ion-label>\r\n    <ion-input [(ngModel)]=\"description\" placeholder=\"Describe lo que buscas ó deseas\"></ion-input>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\">\r\n    <ion-textarea [(ngModel)]=\"note\" rows=\"6\" cols=\"20\" placeholder=\"Describe lo que estás buscando\" (ngModelChange)=\"get($event)\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item *ngIf=\"note != '' && note !=null\" class=\"itemcolor1\">\r\n    <p>Usando {{leng}}</p><p>/800 Caracteres</p>\r\n  </ion-item>\r\n  <ion-item class=\"itemcolor1\"  button (click)=\"pickfile()\">\r\n    <ion-label>Adjuntar PDF o Foto</ion-label>\r\n    <ion-icon slot=\"end\" class=\"itemcolor1\" name=\"document-attach-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"itemcolor1\">\r\n    <!-- <div class=\"divide\" id=\"lgdomicilio\"></div> -->\r\n   <ion-label>¿Incluir Descuento?</ion-label>\r\n    <ion-toggle checked={checked} [(ngModel)]=\"descuento\" ></ion-toggle>\r\n  </ion-item> \r\n\r\n  <ion-item class=\"itemcolor1\">\r\n   <ion-label>¿Mostrar tu nombre al proveedor?</ion-label>\r\n    <ion-toggle [(ngModel)]=\"V_nombre\" ></ion-toggle>\r\n  </ion-item> \r\n\r\n  <ion-item  *ngIf=\"fileUrl!=''\" >\r\n    <ion-img *ngIf=\"ispdf==false\"  [src]=\"fileUrl\"></ion-img>\r\n    <a *ngIf=\"ispdf==true\"  ><img src=\"./../../.././assets/pdfLogo.png\" style=\"width:100%;height:50px;\">  </a>\r\n    <ion-button (click)=\"clearimg()\" color=\"danger\" ><ion-icon slot=\"icon-only\" name=\"trash-bin-outline\"></ion-icon></ion-button>\r\n  </ion-item>\r\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n  <ion-col size=\"12\" class=\"ion-text-center\">\r\n    <ion-button [disabled]=\"working\" shape=\"round\" color=\"secondary\" (click)=\"send()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Consultar Información</ion-button>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/solicitude/solicitude-routing.module.ts": function srcAppPagesSolicitudeSolicitudeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudePageRoutingModule", function () {
      return SolicitudePageRoutingModule;
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


    var _solicitude_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./solicitude.page */
    "./src/app/pages/solicitude/solicitude.page.ts");

    var routes = [{
      path: '',
      component: _solicitude_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudePage"]
    }];

    var SolicitudePageRoutingModule = function SolicitudePageRoutingModule() {
      _classCallCheck(this, SolicitudePageRoutingModule);
    };

    SolicitudePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SolicitudePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitude/solicitude.module.ts": function srcAppPagesSolicitudeSolicitudeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudePageModule", function () {
      return SolicitudePageModule;
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


    var _solicitude_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solicitude-routing.module */
    "./src/app/pages/solicitude/solicitude-routing.module.ts");
    /* harmony import */


    var _solicitude_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solicitude.page */
    "./src/app/pages/solicitude/solicitude.page.ts");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");

    var SolicitudePageModule = function SolicitudePageModule() {
      _classCallCheck(this, SolicitudePageModule);
    };

    SolicitudePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitude_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudePageRoutingModule"], ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"]],
      declarations: [_solicitude_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudePage"]]
    })], SolicitudePageModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitude/solicitude.page.scss": function srcAppPagesSolicitudeSolicitudePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-select {\n  --placeholder-opacity: 1 !important;\n  max-width: 100% !important;\n  width: 100% !important;\n  padding-left: 0 !important;\n}\n\nselect-icon-inner {\n  --opacity: 1 !important;\n}\n\nion-auto-complete {\n  width: 100%;\n  --placeholder-opacity: 1 !important;\n  --placeholder-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZS9DOlxcVXNlcnNcXEl2YW5jaG9cXERvY3VtZW50c1xcUFJZX1FQUklDRVxcUVBSSUNFL3NyY1xcYXBwXFxwYWdlc1xcc29saWNpdHVkZVxcc29saWNpdHVkZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZGUvc29saWNpdHVkZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRyxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ0FIOztBREVJO0VBQ0ksdUJBQUE7QUNDUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHFDQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlL3NvbGljaXR1ZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNlbGVjdCB7XHJcblxyXG4gICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0LWljb24taW5uZXIge1xyXG4gICAgICAgIC0tb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1hdXRvLWNvbXBsZXRlIHtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgXHJcblxyXG4gICAiLCJpb24tc2VsZWN0IHtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0LWljb24taW5uZXIge1xuICAtLW9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuaW9uLWF1dG8tY29tcGxldGUge1xuICB3aWR0aDogMTAwJTtcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/solicitude/solicitude.page.ts": function srcAppPagesSolicitudeSolicitudePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudePage", function () {
      return SolicitudePage;
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


    var _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/autoprovince.service */
    "./src/app/services/autoprovince.service.ts"); // import {Storage}from '@ionic/storage';


    var SolicitudePage = /*#__PURE__*/function () {
      function SolicitudePage(autoprovinceService, apiService, busyService, router) {
        _classCallCheck(this, SolicitudePage);

        this.autoprovinceService = autoprovinceService;
        this.apiService = apiService;
        this.busyService = busyService;
        this.router = router;
        this.items = [];
        this.description = null;
        this.file = null;
        this.note = null;
        this.categoryId = null;
        this.categoryDescr = null;
        this.userId = null;
        this.working = false;
        this.fileUrl = '';
        this.leng = 0;
        this.provinceId = 0;
        this.provinceName = '';
        this.descuento = null;
        this.V_nombre = null;
        this.ispdf = false;
      }

      _createClass(SolicitudePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.descuento = true;
          this.apiService.Get("Categories").then(function (res) {
            _this.items = res;
          });
        }
      }, {
        key: "get",
        value: function get(event) {
          this.leng = event.length;
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          if (localStorage.getItem("province") != null) {
            var province = JSON.parse(window.localStorage.getItem("province"));
            this.provinceId = province.id;
            this, this.provinceName = province.name;
          }

          if (localStorage.getItem("item") != null) {
            var objCat = JSON.parse(window.localStorage.getItem("item"));
            this.categoryId = objCat.id;
            this.categoryDescr = objCat.name;
          }
        }
      }, {
        key: "itemRemoved",
        value: function itemRemoved(event) {
          this.provinceId = 0;
          localStorage.removeItem("province");
        }
      }, {
        key: "send",
        value: function send() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var userinfo, formData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log(localStorage.getItem("province"));

                    if (!(this.categoryId == null)) {
                      _context.next = 5;
                      break;
                    }

                    _context.next = 4;
                    return this.busyService.presentAlert("¡Información!", "Debe seleccionar una Categoría.");

                  case 4:
                    return _context.abrupt("return");

                  case 5:
                    if (!(this.provinceId == 0)) {
                      _context.next = 9;
                      break;
                    }

                    _context.next = 8;
                    return this.busyService.presentAlert("¡Información!", "Debe escribir una Ciudad.");

                  case 8:
                    return _context.abrupt("return");

                  case 9:
                    if (!(this.file == null && this.note == null)) {
                      _context.next = 13;
                      break;
                    }

                    _context.next = 12;
                    return this.busyService.presentAlert("¡Información!", "¡Describa lo que busca o Adjunte un PDF / Imágen.");

                  case 12:
                    return _context.abrupt("return");

                  case 13:
                    this.working = true;
                    userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
                    formData = new FormData();
                    formData.append('upload', this.file);
                    formData.append("userId", userinfo.id);
                    formData.append("categoryId", this.categoryId);
                    formData.append("note", this.note);
                    formData.append("description", this.description);
                    formData.append("provinceId", this.provinceId.toString());
                    formData.append("descuento", this.descuento.toString());
                    formData.append("V_nombre", this.V_nombre);
                    this.apiService.upload("Solicitudes/Upload", formData).subscribe(function (event) {
                      if (event.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpEventType"].UploadProgress) {
                        var percentDone = Math.round(100 * event.loaded / event.total);
                      } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"]) {
                        if (event.body.ok) {
                          _this2.working = false;

                          _this2.busyService.presentAlert("¡Información", "Solicitud Enviada");

                          _this2.provinceId = 0;

                          _this2.router.navigate(['/solicitudelist']);
                        } else {
                          _this2.working = false;

                          _this2.busyService.presentAlert("¡Información!", "Solicitud no Enviada");
                        }
                      }
                    }, function (err) {
                      _this2.working = false;

                      _this2.busyService.presentAlert("¡Información!", "Error al  enviar la Solicitud");
                    }, function () {});

                  case 25:
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

            _this3.loadimg(_this3.file);
          };

          input.click();
        }
      }, {
        key: "loadimg",
        value: function loadimg(file) {
          var _this4 = this;

          // setting up the reader
          var reader = new FileReader();
          reader.readAsDataURL(file); // this is reading as data url
          // here we tell the reader what to do when it's done reading...

          reader.onload = function (event) {
            console.log(event.target.result);

            if (event.target.result.indexOf("data:application/pdf") >= 0) {
              _this4.ispdf = true;
              _this4.fileUrl = "PDF";
            } else {
              _this4.ispdf = false;
              var content = event.target.result; // capturo el contenido del content

              _this4.fileUrl = content;
            }
          };
        }
      }, {
        key: "clearimg",
        value: function clearimg() {
          this.fileUrl = '';
          this.file = null;
        }
      }, {
        key: "onFocus",
        value: function onFocus(event) {
          this.router.navigate(['/search-category']);
        }
      }]);

      return SolicitudePage;
    }();

    SolicitudePage.ctorParameters = function () {
      return [{
        type: _services_autoprovince_service__WEBPACK_IMPORTED_MODULE_6__["AutoprovinceService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_busy_service__WEBPACK_IMPORTED_MODULE_3__["BusyService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    SolicitudePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solicitude',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./solicitude.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude/solicitude.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./solicitude.page.scss */
      "./src/app/pages/solicitude/solicitude.page.scss"))["default"]]
    })], SolicitudePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-solicitude-solicitude-module-es5.js.map