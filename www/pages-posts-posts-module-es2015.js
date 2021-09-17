(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-posts-posts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" >\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-toggle menu=\"pages\">\n        <ion-button >\n          <ion-icon name=\"menu-outline\"></ion-icon>\n        </ion-button>\n      </ion-menu-toggle>\n    </ion-buttons>\n    <ion-title>\n     Publicaciones\n    </ion-title>\n    <ion-buttons slot=\"end\" >\n      <ion-button (click)=\"delete()\" *ngIf=\"selecctedItems.length > 0\">\n        <ion-icon name=\"trash-outline\"></ion-icon>\n        <ion-badge color=\"secondary\">{{selecctedItems.length}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgeneral\">\n  <ion-progress-bar *ngIf=\"working\" color=\"secondary\" type=\"indeterminate\"></ion-progress-bar>\n    <ion-list>\n      <ion-item button *ngFor=\"let item of items\" id=\"{{item.id}}\" ion-long-press [interval]=\"200\" (pressed)=\"pressed(item)\" (click)=\"click(item)\">\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 != null\">\n          <img  [src]=\"item.img1\"  >\n        </ion-thumbnail>\n        <ion-thumbnail slot=\"start\" *ngIf=\"item.img1 == null\">\n          <img  [src]=\"'/assets/images/empty.png'\"  >\n        </ion-thumbnail>\n        <ion-label>\n          <ion-text> <h3 style=\"font-weight: bold; text-transform: capitalize;color:white\">{{item.creationDate | timeAgo}}</h3></ion-text>\n          <p  style=\"color: yellow;\">{{item.description}}</p>\n          <p *ngIf=\"item.price!=null\" style=\"font-weight: bold;color: #0ae70a\" >{{item.price | currency:'USD':'symbol':'1.0-0'}}</p> \n        </ion-label>\n        <ion-icon slot=\"end\" style=\"color:white\" name=\"chevron-forward\"></ion-icon>\n      </ion-item>\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/posts/posts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/posts/posts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageRoutingModule", function() { return PostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");




const routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_3__["PostsPage"]
    }
];
let PostsPageRoutingModule = class PostsPageRoutingModule {
};
PostsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/pages/posts/posts-routing.module.ts");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");
/* harmony import */ var _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../time-ago.pipe */ "./src/app/time-ago.pipe.ts");
/* harmony import */ var ionic_long_press__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-long-press */ "./node_modules/ionic-long-press/__ivy_ngcc__/fesm2015/ionic-long-press.js");









let PostsPageModule = class PostsPageModule {
};
PostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            ionic_long_press__WEBPACK_IMPORTED_MODULE_8__["LongPressModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostsPageRoutingModule"]
        ],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"], _time_ago_pipe__WEBPACK_IMPORTED_MODULE_7__["TimeAgoPipe"]]
    })
], PostsPageModule);



/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".item-background-color {\n  --ion-item-background:rgba(0,0,0,0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9zdHMvQzpcXFVzZXJzXFxJdmFuY2hvXFxzb3VyY2VcXHJlcG9zXFxDb3RpemFWZW5kRnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxwb3N0c1xccG9zdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcG9zdHMvcG9zdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNSk7XHJcbn0iLCIuaXRlbS1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC41KTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/posts/posts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_busy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/busy.service */ "./src/app/services/busy.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let PostsPage = class PostsPage {
    constructor(apiService, router, busyService) {
        this.apiService = apiService;
        this.router = router;
        this.busyService = busyService;
        this.working = false;
        this.items = [];
        this.selecctedItems = [];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.activities();
    }
    activities() {
        this.working = true;
        let userinfo = JSON.parse(window.localStorage.getItem("userinfo"));
        this.apiService.Get("Posts/PostsByUser/" + userinfo.id).then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.working = false;
            this.items = res;
            this.items.forEach(element => {
                if (element.img1 != null) {
                    element.img1 = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fileurl + "postimages/" + element.img1;
                }
            });
        }), err => {
            this.working = false;
        });
    }
    details(item) {
        localStorage.removeItem("postid");
        localStorage.setItem("postid", item.id);
        if (item.type == 'A') {
            this.router.navigate(['/activityadd']);
        }
        else if (item.type == 'C') {
            this.router.navigate(['/classifiedadd']);
        }
        else {
            this.router.navigate(['/favoradd']);
        }
    }
    pressed(item) {
        var exits = this.selecctedItems.filter(s => s.id == item.id);
        if (exits.length == 0) {
            this.selecctedItems.push(item);
            var myDiv = document.getElementById(item.id);
            myDiv.classList.add("item-background-color");
        }
    }
    cancel() {
        this.selecctedItems.forEach(obj => {
            var myDiv = document.getElementById(obj.id);
            myDiv.classList.remove("item-background-color");
        });
        this.selecctedItems = [];
    }
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var yes = yield this.busyService.presentAlertYesNo("¡Información!", "¿Desea eliminar los ítems seleccionados?");
            if (yes) {
                this.working = true;
                this.apiService.Post(this.selecctedItems, "Posts/DeleteList").then(res => {
                    this.working = true;
                    this.selecctedItems = [];
                    this.activities();
                }, err => {
                    this.working = false;
                    this.busyService.presentAlert("¡Informe!", "Algo salió mal, intente de nuevo");
                });
            }
        });
    }
    click(item) {
        if (this.selecctedItems.length == 0) {
            localStorage.removeItem("postid");
            localStorage.setItem("postid", item.id);
            if (item.type == 'A') {
                this.router.navigate(['/activityadd']);
            }
            else if (item.type == 'C') {
                this.router.navigate(['/classifiedadd']);
            }
            else {
                this.router.navigate(['/favoradd']);
            }
        }
        else {
            var exits = this.selecctedItems.filter(s => s.id == item.id);
            if (exits.length == 0) {
                this.selecctedItems.push(item);
                var myDiv = document.getElementById(item.id);
                myDiv.classList.add("item-background-color");
            }
            else {
                this.selecctedItems = this.selecctedItems.filter(s => s.id != item.id);
                var myDiv = document.getElementById(item.id);
                myDiv.classList.remove("item-background-color");
            }
        }
    }
};
PostsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_busy_service__WEBPACK_IMPORTED_MODULE_4__["BusyService"] }
];
PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-posts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./posts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/posts/posts.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")).default]
    })
], PostsPage);



/***/ })

}]);
//# sourceMappingURL=pages-posts-posts-module-es2015.js.map