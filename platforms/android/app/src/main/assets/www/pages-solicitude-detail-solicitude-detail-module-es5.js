function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-solicitude-detail-solicitude-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude-detail/solicitude-detail.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesSolicitudeDetailSolicitudeDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center\">\n      <p style=\"color: white; font-size: 16px; font-weight: bold;\" >DETALLE SOLICITUD</p>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n  <ion-item class=\"itemcolor1\">\n    <ion-label>Categoría</ion-label>\n    <p style=\"color:yellow\">{{item?.category.name}}</p>\n  </ion-item>\n  <ion-item >\n    <label *ngIf=\"role=='Company'\" style=\"color:white;font-weight: bold;\">Alguién solicita:</label>\n    <label *ngIf=\"role!='Company'\" style=\"color:white;font-weight: bold;\">Estás buscando:</label>\n  </ion-item>\n  <ion-item class=\"itemcolor1\" *ngIf=\"item?.note!='' && item?.note!='null' \">\n    <ion-text style=\"color:yellow\">\n      <p >{{item?.note}}</p>\n     </ion-text>\n    </ion-item>\n  <ion-item  *ngIf=\"item?.fileUrl!=null && item?.fileUrl!=''\"  >\n    <img src=\"{{item?.fileUrl}}\" (click)=\"photoview(item?.fileUrl)\" style=\"width:100%;height: 300px;\">  \n  </ion-item>\n  <ion-grid *ngIf=\"role=='Company'  && responId==0\">\n    <ion-row class=\"ion-align-items-center\">\n  <ion-col size=\"12\" class=\"ion-text-center\">\n    <ion-button shape=\"round\" color=\"secondary\" (click)=\"response()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Responder</ion-button>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<ion-grid *ngIf=\"role=='Company' && responId!=0\">\n  <ion-row class=\"ion-align-items-center\">\n<ion-col size=\"12\" class=\"ion-text-center\">\n  <ion-button shape=\"round\" color=\"secondary\" (click)=\"response()\" ><ion-icon slot=\"start\" name=\"send\"></ion-icon>Ver Respuesta</ion-button>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/solicitude-detail/solicitude-detail-routing.module.ts": function srcAppPagesSolicitudeDetailSolicitudeDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPageRoutingModule", function () {
      return SolicitudeDetailPageRoutingModule;
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


    var _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./solicitude-detail.page */
    "./src/app/pages/solicitude-detail/solicitude-detail.page.ts");

    var routes = [{
      path: '',
      component: _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_3__["SolicitudeDetailPage"]
    }];

    var SolicitudeDetailPageRoutingModule = function SolicitudeDetailPageRoutingModule() {
      _classCallCheck(this, SolicitudeDetailPageRoutingModule);
    };

    SolicitudeDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SolicitudeDetailPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitude-detail/solicitude-detail.module.ts": function srcAppPagesSolicitudeDetailSolicitudeDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPageModule", function () {
      return SolicitudeDetailPageModule;
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


    var _solicitude_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./solicitude-detail-routing.module */
    "./src/app/pages/solicitude-detail/solicitude-detail-routing.module.ts");
    /* harmony import */


    var _solicitude_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./solicitude-detail.page */
    "./src/app/pages/solicitude-detail/solicitude-detail.page.ts");

    var SolicitudeDetailPageModule = function SolicitudeDetailPageModule() {
      _classCallCheck(this, SolicitudeDetailPageModule);
    };

    SolicitudeDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _solicitude_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["SolicitudeDetailPageRoutingModule"]],
      declarations: [_solicitude_detail_page__WEBPACK_IMPORTED_MODULE_6__["SolicitudeDetailPage"]]
    })], SolicitudeDetailPageModule);
    /***/
  },

  /***/
  "./src/app/pages/solicitude-detail/solicitude-detail.page.scss": function srcAppPagesSolicitudeDetailSolicitudeDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  font-weight: bold !important;\n}\n\nion-item {\n  margin-top: 3px !important;\n  margin-bottom: 3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29saWNpdHVkZS1kZXRhaWwvQzpcXFVzZXJzXFxJdmFuY2hvXFxzb3VyY2VcXHJlcG9zXFxDb3RpemFWZW5kRnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxzb2xpY2l0dWRlLWRldGFpbFxcc29saWNpdHVkZS1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zb2xpY2l0dWRlLWRldGFpbC9zb2xpY2l0dWRlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksMEJBQUE7RUFDQSw2QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc29saWNpdHVkZS1kZXRhaWwvc29saWNpdHVkZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbXtcclxuICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcbn0iLCJpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAzcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/solicitude-detail/solicitude-detail.page.ts": function srcAppPagesSolicitudeDetailSolicitudeDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudeDetailPage", function () {
      return SolicitudeDetailPage;
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


    var _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/photo-viewer/ngx */
    "./node_modules/@ionic-native/photo-viewer/__ivy_ngcc__/ngx/index.js");

    var SolicitudeDetailPage = /*#__PURE__*/function () {
      function SolicitudeDetailPage(photoViewer, apiService, router) {
        _classCallCheck(this, SolicitudeDetailPage);

        this.photoViewer = photoViewer;
        this.apiService = apiService;
        this.router = router;
        this.item = null;
        this.apifile = '';
        this.working = false;
        this.userid = null;
        this.role = null;
        this.responId = 0;
      }

      _createClass(SolicitudeDetailPage, [{
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
          var _this = this;

          this.responId = 0;
          this.item = null;
          var userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
          this.userid = userinfo.id;
          this.role = userinfo.role;
          this.apifile = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].fileurl + "solicitudefiles/";
          this.working = true;
          this.apiService.Get("Solicitudes/" + window.localStorage.getItem("solicitudeId")).then(function (res) {
            _this.working = false;

            if (res.fileUrl != null && res.fileUrl != '') {
              res.fileUrl = _this.apifile + res.fileUrl;
            }

            _this.item = res;
            var filter = res.responses.filter(function (s) {
              return s.company.userId == userinfo.id;
            });

            if (filter.length > 0) {
              _this.responId = filter[0].id;
            }
          }, function (err) {
            _this.working = false;
          });
        }
      }, {
        key: "response",
        value: function response() {
          if (this.responId != 0) {
            window.localStorage.removeItem('solicitudeId');
            window.localStorage.setItem('solicitudeId', this.item.id);
            window.localStorage.removeItem('responseId');
            window.localStorage.setItem('responseId', this.responId.toString());
            this.router.navigate(['/response-detail']);
          } else {
            window.localStorage.removeItem('responseId');
            window.localStorage.removeItem('solicitudeId');
            window.localStorage.setItem('solicitudeId', this.item.id);
            this.router.navigate(['/response']);
          }
        }
      }]);

      return SolicitudeDetailPage;
    }();

    SolicitudeDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_native_photo_viewer_ngx__WEBPACK_IMPORTED_MODULE_5__["PhotoViewer"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SolicitudeDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solicitude-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./solicitude-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/solicitude-detail/solicitude-detail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./solicitude-detail.page.scss */
      "./src/app/pages/solicitude-detail/solicitude-detail.page.scss"))["default"]]
    })], SolicitudeDetailPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-solicitude-detail-solicitude-detail-module-es5.js.map