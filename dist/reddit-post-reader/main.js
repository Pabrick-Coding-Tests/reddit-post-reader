(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/list/list.component */ "./src/app/views/list/list.component.ts");
/* harmony import */ var _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/detail/detail.component */ "./src/app/views/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: _views_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
    },
    {
        path: 'detail',
        component: _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(service) {
        this.service = service;
        this.title = 'reddit-post-reader';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/list/list.component */ "./src/app/views/list/list.component.ts");
/* harmony import */ var _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/detail/detail.component */ "./src/app/views/detail/detail.component.ts");
/* harmony import */ var _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/list-element/list-element.component */ "./src/app/components/list-element/list-element.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _views_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"],
                _components_list_element_list_element_component__WEBPACK_IMPORTED_MODULE_7__["ListElementComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.getData().subscribe(function (data) {
            _this.list = data.data.children;
        });
    }
    AppService.prototype.getData = function () {
        return this.http.get("https://www.reddit.com/r/pics/new.json?sort=new");
    };
    AppService.prototype.setCurrent = function (id) {
        this.currentId = id;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/list-element/list-element.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-element/list-element.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-element\" >\n\n  <div class=\"thumbnail\" (click)=\"seeDetail()\">\n    <img *ngIf=\"data.thumbnail\" src=\"{{ data.thumbnail }}\">\n  </div>\n\n  <div class=\"info\">\n    <span class=\"title\">{{ data.title }}</span>\n\n    <div class=\"votes\">\n        <div class=\"ups\">\n          <button (click)=\"voteUp()\">UP</button>\n          <span>{{ data.ups }}</span>\n        </div>\n        <div class=\"downs\">\n          <button (click)=\"voteDown()\">DOWN</button>\n          <span>{{ data.downs }}</span>\n        </div>\n    </div>\n    \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/list-element/list-element.component.sass":
/*!*********************************************************************!*\
  !*** ./src/app/components/list-element/list-element.component.sass ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-element {\n  border-bottom: 1px solid #000000;\n  display: block;\n  padding: 10px 0; }\n  .list-element .thumbnail {\n    background-image: #DDDDDD;\n    cursor: pointer;\n    display: inline-block;\n    height: 60px;\n    width: 60px; }\n  .list-element .thumbnail img {\n      height: 100%;\n      width: 100%; }\n  .list-element .info {\n    display: inline-block;\n    padding: 0px 10px;\n    vertical-align: top; }\n  .list-element .info .title {\n      display: block; }\n  .list-element .info .votes {\n      display: block; }\n  .list-element .info .votes .ups,\n      .list-element .info .votes .downs {\n        display: block; }\n  .list-element .info .votes .ups span,\n        .list-element .info .votes .downs span {\n          display: inline-block;\n          padding: 0 10px; }\n  .list-element .info .votes .ups button,\n        .list-element .info .votes .downs button {\n          cursor: pointer;\n          display: inline-block;\n          width: 100px; }\n  .list-element .info .votes .ups button {\n        background-color: #9F9; }\n  .list-element .info .votes .downs button {\n        background-color: #F55; }\n"

/***/ }),

/***/ "./src/app/components/list-element/list-element.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-element/list-element.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListElementComponent", function() { return ListElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListElementComponent = /** @class */ (function () {
    function ListElementComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    ListElementComponent.prototype.ngOnInit = function () {
    };
    ListElementComponent.prototype.voteUp = function () {
        this.data.ups++;
    };
    ListElementComponent.prototype.voteDown = function () {
        this.data.downs--;
    };
    ListElementComponent.prototype.seeDetail = function () {
        this.service.setCurrent(this.data.id);
        this.router.navigate(['detail']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ListElementComponent.prototype, "data", void 0);
    ListElementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-element',
            template: __webpack_require__(/*! ./list-element.component.html */ "./src/app/components/list-element/list-element.component.html"),
            styles: [__webpack_require__(/*! ./list-element.component.sass */ "./src/app/components/list-element/list-element.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ListElementComponent);
    return ListElementComponent;
}());



/***/ }),

/***/ "./src/app/views/detail/detail.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/detail/detail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail\">\n\n  <div  *ngIf=\"!current\">LOADING</div>\n\n    <div class=\"list-element\" *ngIf=\"current\">\n\n        <div class=\"thumbnail\" (click)=\"seeDetail()\">\n          <img *ngIf=\"current.thumbnail\" src=\"{{ current.thumbnail }}\">\n        </div>\n      \n        <div class=\"info\">\n          <span class=\"title\">{{ current.title }}</span>\n      \n          <div class=\"votes\">\n              <div class=\"ups\">\n                <button (click)=\"voteUp()\">UP</button>\n                <span>{{ current.ups }}</span>\n              </div>\n              <div class=\"downs\">\n                <button (click)=\"voteDown()\">DOWN</button>\n                <span>{{ current.downs }}</span>\n              </div>\n          </div>\n          \n        </div>\n\n        <img class=\"image\" *ngIf=\"current.url\" src=\"{{ current.url }}\">\n      \n      </div>\n  \n  <button class=\"button-list\" (click)=\"navigateToList()\">BACK TO LIST</button>\n\n</div>"

/***/ }),

/***/ "./src/app/views/detail/detail.component.sass":
/*!****************************************************!*\
  !*** ./src/app/views/detail/detail.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail .button-list {\n  display: block;\n  margin-top: 20px; }\n\n.detail .list-element {\n  border-bottom: 1px solid #000000;\n  display: block;\n  padding: 10px 0; }\n\n.detail .list-element .thumbnail {\n    background-image: #DDDDDD;\n    cursor: pointer;\n    display: inline-block;\n    height: 60px;\n    width: 60px; }\n\n.detail .list-element .thumbnail img {\n      height: 100%;\n      width: 100%; }\n\n.detail .list-element .image {\n    max-height: 50%;\n    max-width: 50%;\n    display: block; }\n\n.detail .list-element .info {\n    display: inline-block;\n    padding: 0px 10px;\n    vertical-align: top; }\n\n.detail .list-element .info .title {\n      display: block; }\n\n.detail .list-element .info .votes {\n      display: block; }\n\n.detail .list-element .info .votes .ups,\n      .detail .list-element .info .votes .downs {\n        display: block; }\n\n.detail .list-element .info .votes .ups span,\n        .detail .list-element .info .votes .downs span {\n          display: inline-block;\n          padding: 0 10px; }\n\n.detail .list-element .info .votes .ups button,\n        .detail .list-element .info .votes .downs button {\n          cursor: pointer;\n          display: inline-block;\n          width: 100px; }\n\n.detail .list-element .info .votes .ups button {\n        background-color: #9F9; }\n\n.detail .list-element .info .votes .downs button {\n        background-color: #F55; }\n"

/***/ }),

/***/ "./src/app/views/detail/detail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/detail/detail.component.ts ***!
  \**************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getData().subscribe(function () {
            _this.current = _this.service.list.find(function (elem) {
                return elem.data.id === _this.service.currentId;
            }).data;
        });
    };
    DetailComponent.prototype.navigateToList = function () {
        this.router.navigate(['list']);
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/views/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.sass */ "./src/app/views/detail/detail.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/views/list/list.component.html":
/*!************************************************!*\
  !*** ./src/app/views/list/list.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  *ngIf=\"service.list\">\n\n  <list-element *ngFor=\"let elem of service.list\" [(data)]=\"elem.data\"></list-element>\n\n</section>"

/***/ }),

/***/ "./src/app/views/list/list.component.sass":
/*!************************************************!*\
  !*** ./src/app/views/list/list.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = /** @class */ (function () {
    function ListComponent(service) {
        this.service = service;
    }
    ListComponent.prototype.ngOnInit = function () {
        // this.service.getData().subscribe(() => { console.log(this.service.list); });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/views/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.sass */ "./src/app/views/list/list.component.sass")]
        }),
        __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pabrick/Workspace/reddit-post-reader/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map