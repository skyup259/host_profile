(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Saurabh Sunny Portfolio | sks.in';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main");
    } }, directives: [_component_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/projects/projects.component */ "./src/app/component/projects/projects.component.ts");
/* harmony import */ var _component_games_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/games/games.component */ "./src/app/component/games/games.component.ts");
/* harmony import */ var _component_art_art_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/art/art.component */ "./src/app/component/art/art.component.ts");
/* harmony import */ var _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/blog/blog.component */ "./src/app/component/blog/blog.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/main/main.component */ "./src/app/component/main/main.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/resume/resume.component */ "./src/app/component/resume/resume.component.ts");
/* harmony import */ var _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _component_print_print_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/print/print.component */ "./src/app/component/print/print.component.ts");
/* harmony import */ var _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/menu/menu.component */ "./src/app/component/menu/menu.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _component_slidingcard_slidingcard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/slidingcard/slidingcard.component */ "./src/app/component/slidingcard/slidingcard.component.ts");
/* harmony import */ var _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/skills/skills.component */ "./src/app/component/skills/skills.component.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm2015/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_19__["NgxPageScrollCoreModule"].forRoot({ duration: 1500 }),
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_20__["NgxPageScrollModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__["NgCircleProgressModule"].forRoot({
                // set defaults here
                "radius": 60,
                "space": -10,
                "outerStrokeGradient": true,
                "outerStrokeWidth": 10,
                "outerStrokeColor": "#4882c2",
                "outerStrokeGradientStopColor": "#53a9ff",
                "innerStrokeColor": "#e7e8ea",
                "innerStrokeWidth": 10,
                "title": "UI",
                "animateTitle": false,
                "animationDuration": 300,
                "showUnits": false,
                "showBackground": false,
                "clockwise": false,
                "startFromZero": false
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
        _component_games_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"],
        _component_art_art_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"],
        _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
        _component_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _component_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
        _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
        _component_print_print_component__WEBPACK_IMPORTED_MODULE_13__["PrintComponent"],
        _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
        _component_slidingcard_slidingcard_component__WEBPACK_IMPORTED_MODULE_16__["SlidingcardComponent"],
        _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_19__["NgxPageScrollCoreModule"], ngx_page_scroll__WEBPACK_IMPORTED_MODULE_20__["NgxPageScrollModule"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__["NgCircleProgressModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _component_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"],
                    _component_games_games_component__WEBPACK_IMPORTED_MODULE_4__["GamesComponent"],
                    _component_art_art_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"],
                    _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"],
                    _component_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _component_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _component_resume_resume_component__WEBPACK_IMPORTED_MODULE_11__["ResumeComponent"],
                    _component_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
                    _component_print_print_component__WEBPACK_IMPORTED_MODULE_13__["PrintComponent"],
                    _component_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                    _component_slidingcard_slidingcard_component__WEBPACK_IMPORTED_MODULE_16__["SlidingcardComponent"],
                    _component_skills_skills_component__WEBPACK_IMPORTED_MODULE_17__["SkillsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                    ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_19__["NgxPageScrollCoreModule"].forRoot({ duration: 1500 }),
                    ngx_page_scroll__WEBPACK_IMPORTED_MODULE_20__["NgxPageScrollModule"],
                    ng_circle_progress__WEBPACK_IMPORTED_MODULE_18__["NgCircleProgressModule"].forRoot({
                        // set defaults here
                        "radius": 60,
                        "space": -10,
                        "outerStrokeGradient": true,
                        "outerStrokeWidth": 10,
                        "outerStrokeColor": "#4882c2",
                        "outerStrokeGradientStopColor": "#53a9ff",
                        "innerStrokeColor": "#e7e8ea",
                        "innerStrokeWidth": 10,
                        "title": "UI",
                        "animateTitle": false,
                        "animationDuration": 300,
                        "showUnits": false,
                        "showBackground": false,
                        "clockwise": false,
                        "startFromZero": false
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/art/art.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/art/art.component.ts ***!
  \************************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ArtComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArtComponent.ɵfac = function ArtComponent_Factory(t) { return new (t || ArtComponent)(); };
ArtComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtComponent, selectors: [["app-art"]], decls: 2, vars: 0, template: function ArtComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "art works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hcnQvYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-art',
                templateUrl: './art.component.html',
                styleUrls: ['./art.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/blog/blog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/blog/blog.component.ts ***!
  \**************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 2, vars: 0, template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 0, vars: 0, template: function FooterComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/games/games.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/games/games.component.ts ***!
  \****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function GamesComponent_9_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r5.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GamesComponent_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GamesComponent_9_ng_template_0_div_2_Template, 4, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.data.slice(i_r2, i_r2 + ctx_r3.numberOfGames));
} }
function GamesComponent_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GamesComponent_9_ng_template_0_Template, 3, 1, "ng-template", 8);
} }
class GamesComponent {
    constructor() {
        this.data = [
            {
                title: 'Carrom',
                path: 'assets/carrom.svg'
            },
            {
                title: 'tableTennies',
                path: 'assets/ping-pong.svg'
            },
            {
                title: 'Football',
                path: 'assets/football.svg'
            },
            {
                title: 'Badminton',
                path: 'assets/sports_tennis-black-18dp.svg'
            },
            {
                title: 'Cricket',
                path: 'assets/cricket.svg'
            }
        ];
        this.numberOfGames = 5;
    }
    onResize(event) {
        if (event.target.innerWidth < 450) {
            this.numberOfGames = 3;
            this.dataLen = this.data.length - this.numberOfGames;
            this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
        }
        else if (event.target.innerWidth < 750) {
            this.numberOfGames = 5;
        }
        else {
            this.numberOfGames = 5;
        }
    }
    ngOnInit() {
        this.dataLen = 1;
        this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
        if (window.innerWidth < 450) {
            this.numberOfGames = 3;
            this.dataLen = this.data.length - this.numberOfGames;
            this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
        }
        else if (window.innerWidth < 750) {
            this.numberOfGames = 5;
        }
        else {
            this.numberOfGames = 5;
        }
    }
}
GamesComponent.ɵfac = function GamesComponent_Factory(t) { return new (t || GamesComponent)(); };
GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GamesComponent, selectors: [["app-games"]], hostBindings: function GamesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function GamesComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 3, consts: [[1, "rounded"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "px-5", "mt-2", "rounded"], ["interval", "5000", 1, "bgColor", 3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "px-5", "mt-1", "align-center"], ["class", "col-4 col-md-2 pl-2 p-bottom-40", 4, "ngFor", "ngForOf"], [1, "col-4", "col-md-2", "pl-2", "p-bottom-40"], [1, "card", "bgColor"], [1, "card-title", "ml-1"], [1, "svg-icon", 3, "src"]], template: function GamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GamesComponent_9_Template, 1, 0, undefined, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.p-bottom-40[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.bgColor[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.svg-icon[_ngcontent-%COMP%] {\r\n  height: 6rem;\r\n  fill: #007bff;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  z-index: 1;\r\n  position: absolute;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.carousel-item.active[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .svg-icon[_ngcontent-%COMP%] {\r\n    height: 4.5rem;\r\n  }\r\n\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 1rem !important;\r\n    padding-right: 1rem !important;\r\n  }\r\n\r\n  .ruler[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 450px) and (max-width: 800px) {\r\n  .svg-icon[_ngcontent-%COMP%] {\r\n    height: 5rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUdBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ucnVsZXIge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXRvcDogMXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5wLWJvdHRvbS00MCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmJnQ29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbn1cclxuXHJcbi5zdmctaWNvbiB7XHJcbiAgaGVpZ2h0OiA2cmVtO1xyXG4gIGZpbGw6ICMwMDdiZmY7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwtaXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzeS1pbi1vdXQsIHZpc2liaWxpdHkgMXM7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXN5LWluLW91dCwgdmlzaWJpbGl0eSAxcztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnN2Zy1pY29uIHtcclxuICAgIGhlaWdodDogNC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLnB4LTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucnVsZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnN2Zy1pY29uIHtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-games',
                templateUrl: './games.component.html',
                styleUrls: ['./games.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    hamburger(x) {
        x.classList.toggle('change');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 10, vars: 0, consts: [[1, "row", "justify-content-md-center", "pt-3"], [1, "col-6", "col-md-6"], [1, "navbar", "navbar-light"], ["href", "#", 1, "navbar-brand", "checking"], [1, "col-6", "col-md-6", "float-right"], [1, "container", 3, "click"], [1, "bar1"], [1, "bar2"], [1, "bar3"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " SKS.in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_6_listener() { return ctx.hamburger(ctx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: [".container[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  text-align: -webkit-right;\r\n}\r\n\r\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n  height: 5px;\r\n  background-color: #333;\r\n  margin: 6px 0;\r\n  transition: 0.4s;\r\n}\r\n\r\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\r\n  transform: rotate(-45deg) translate(-9px, 6px);\r\n}\r\n\r\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {opacity: 0;}\r\n\r\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\r\n  transform: rotate(45deg) translate(-8px, -8px);\r\n}\r\n\r\n.checking[_ngcontent-%COMP%] {\r\n  text-shadow : 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #04741d, 0 0 30px #04741d, 0 0 40px #04741d, 0 0 50px #04741d, 0 0 75px #04741d;\r\nletter-spacing : 5px;\r\n}\r\n\r\n@media (min-width: 380px) and (max-width: 450px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    float: right;\r\n    padding: 0.5rem 3.6rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 380px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    padding: 0.5rem 2rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUVFLDhDQUE4QztBQUNoRDs7QUFFQSxlQUFlLFVBQVUsQ0FBQzs7QUFFMUI7RUFFRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxrSkFBa0o7QUFDcEosb0JBQW9CO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1yaWdodDtcclxufVxyXG5cclxuLmJhcjEsIC5iYXIyLCAuYmFyMyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBtYXJnaW46IDZweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5jaGFuZ2UgLmJhcjEge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xyXG59XHJcblxyXG4uY2hhbmdlIC5iYXIyIHtvcGFjaXR5OiAwO31cclxuXHJcbi5jaGFuZ2UgLmJhcjMge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xyXG59XHJcblxyXG4uY2hlY2tpbmcge1xyXG4gIHRleHQtc2hhZG93IDogMCAwIDVweCAjZmZmLCAwIDAgMTBweCAjZmZmLCAwIDAgMTVweCAjZmZmLCAwIDAgMjBweCAjMDQ3NDFkLCAwIDAgMzBweCAjMDQ3NDFkLCAwIDAgNDBweCAjMDQ3NDFkLCAwIDAgNTBweCAjMDQ3NDFkLCAwIDAgNzVweCAjMDQ3NDFkO1xyXG5sZXR0ZXItc3BhY2luZyA6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDM4MHB4KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAzLjZyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/main/main.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/main/main.component.ts ***!
  \**************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/component/profile/profile.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../resume/resume.component */ "./src/app/component/resume/resume.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../print/print.component */ "./src/app/component/print/print.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/component/menu/menu.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../projects/projects.component */ "./src/app/component/projects/projects.component.ts");
/* harmony import */ var _slidingcard_slidingcard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slidingcard/slidingcard.component */ "./src/app/component/slidingcard/slidingcard.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../skills/skills.component */ "./src/app/component/skills/skills.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../games/games.component */ "./src/app/component/games/games.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/component/footer/footer.component.ts");












class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 19, vars: 0, consts: [[1, "container", 2, "z-index", "1"], [1, "row"], [1, "col-12", "col-md-6"], ["id", "projects", 1, "p-2"], ["id", "books"], ["id", "skills"], ["id", "games"], [1, "mt-5"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-slidingcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"], _print_print_component__WEBPACK_IMPORTED_MODULE_4__["PrintComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"], _slidingcard_slidingcard_component__WEBPACK_IMPORTED_MODULE_7__["SlidingcardComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"], _games_games_component__WEBPACK_IMPORTED_MODULE_9__["GamesComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], styles: ["html[_ngcontent-%COMP%] {\r\n  scroll-behavior: smooth;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/menu/menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/menu/menu.component.ts ***!
  \**************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/__ivy_ngcc__/fesm2015/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/__ivy_ngcc__/fesm2015/ngx-page-scroll.js");






class MenuComponent {
    constructor(pageScrollService, document) {
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    ngOnInit() {
        this.pageScrollService.scroll({
            document: this.document,
            scrollTarget: '.theEnd',
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 36, vars: 0, consts: [[1, "row", "justify-content-md-center", "bg-success", "rounded", "p-3", "m-2"], [1, "col-sm", "border", "border-primary", "border-left-0", "border-top-0", "border-left-0", "border-bottom-0"], [1, "row"], [1, "col-2"], ["pageScroll", "", "href", "#projects", 1, "fa", "fa-laptop"], [1, "col-10"], ["pageScroll", "", "href", "#skills", 1, "fa", "fa-pencil-square-o"], ["pageScroll", "", "href", "#books", 1, "fa", "fa-book"], ["pageScroll", "", "href", "#books", 1, "fa", "fa-rss-square"], [1, "col-sm"], ["pageScroll", "", "pageScroll", "", "href", "#games", 1, "fa", "fa-gamepad"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_page_scroll__WEBPACK_IMPORTED_MODULE_3__["NgxPageScrollDirective"]], styles: ["@media (max-width: 450px) {\r\n  .col-sm[_ngcontent-%COMP%] {\r\n    border-right: 0 !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5jb2wtc20ge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return [{ type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/print/print.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/print/print.component.ts ***!
  \****************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrintComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(); };
PrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 3, vars: 0, consts: [[1, "card-body", "border-0"], ["src", "assets/printInc.PNG", 1, "img-fluid", "rounded", "print-bw"], ["src", "assets/printCol.PNG", 1, "img-fluid", "rounded", "print-col"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-body[_ngcontent-%COMP%]:hover   .print-bw[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]:hover   .print-col[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n\r\n.print-col[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ByaW50L3ByaW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcmludC9wcmludC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keTpob3ZlciAucHJpbnQtYnd7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQtYm9keTpob3ZlciAucHJpbnQtY29sIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5wcmludC1jb2wge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print',
                templateUrl: './print.component.html',
                styleUrls: ['./print.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 33, vars: 0, consts: [[1, "justify-content-md-center"], [1, "row", "profile-title"], [1, "col-12", "col-md-2", "img-div"], ["src", "assets/profile.svg", 1, "img-fluid", "rounded", "img-style"], [1, "col-12", "col-md-10"], [1, "card", "border-0"], [1, "card-body", "global-bg-color", "profile-detail"], [1, "card-title"], [1, "card-text", "tech-detail"], ["href", "https://www.linkedin.com/in/saurabhksunny/", 1, "fa", "fa-linkedin", "px-2"], ["href", "https://github.com/skyup259", 1, "fa", "fa-github", "px-2"], ["href", "https://twitter.com/Kumar259Saurabh", 1, "fa", "fa-twitter", "px-2"], ["href", "http://instagram.com/saurabh_ksunny?igshid=1lm6ej4rqui8i", 1, "fa", "fa-instagram", "px-2"], ["href", "https://www.facebook.com/people/Saurabh-K-Sunny/100002708935041", 1, "fa", "fa-facebook", "px-2"], ["href", "#/", 1, "fa", "fa-codepen", "px-2"], ["href", "#/", 1, "fa", "fa-quora", "px-2"], [1, "row", "profile-subtitle"], [1, "col"], [1, "card-body"], [1, "card-title", "align-left", "outline-dashed"], ["href", "#", 1, "btn", "global-bg-color"], [1, "fa", "fa-play"], [1, "card-text", "pt-0"], [1, "fa", "fa-star"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi ! I'm Saurabh.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I Code, Teach and Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "whoami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "I am Saurabh Kumar Sunny, a young creative mind from India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Scroll on to learn more about my creations and interests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".profile-subtitle[_ngcontent-%COMP%], .profile-title[_ngcontent-%COMP%]{\r\n  padding: 20px 0;\r\n}\r\n\r\n.global-bg-color[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding: 0rem;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding-left: 0;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n}\r\n\r\n.tech-detail[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n.fa-play[_ngcontent-%COMP%]{\r\n  color: transparent;\r\n  -webkit-text-stroke-width: 2px;\r\n  -webkit-text-stroke-color: black;\r\n  margin-right: 0.7rem;\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.fa-star[_ngcontent-%COMP%]{\r\n  color: orange\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .img-style[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    max-width: 100px;\r\n  }\r\n\r\n  .img-div[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .profile-subtitle[_ngcontent-%COMP%]{\r\n    padding: 0px 0;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 28px;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n  }\r\n\r\n  .card-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .card-title[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n  }\r\n\r\n  .align-left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding-left: 26px;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .align-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n  }\r\n\r\n  .profile-title[_ngcontent-%COMP%] {\r\n    padding-bottom: 0;\r\n  }\r\n\r\n  .fa-play[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .outline-dashed[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    padding-left: 5px;\r\n    outline: 1px dashed;\r\n    padding-top: 0px;\r\n  }\r\n\r\n  .profile-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 0 !important;\r\n  }\r\n\r\n}\r\n\r\n@media (min-width: 450px) and (max-width: 1050px) {\r\n  .profile-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-top: 1rem !important;\r\n  }\r\n}\r\n\r\np[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n}\r\n\r\n.profile-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1zdWJ0aXRsZSwgLnByb2ZpbGUtdGl0bGV7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG59XHJcblxyXG4uZ2xvYmFsLWJnLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAwcmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSBhe1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnRlY2gtZGV0YWlsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uZmEtcGxheXtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMnB4O1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xyXG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG59XHJcblxyXG4uZmEtc3RhcntcclxuICBjb2xvcjogb3JhbmdlXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5pbWctc3R5bGUge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1zdWJ0aXRsZXtcclxuICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IGgye1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLXRleHQgcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmFsaWduLWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdDogMjZweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLmFsaWduLWxlZnQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtdGl0bGUge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAuZmEtcGxheSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAub3V0bGluZS1kYXNoZWQgaDJ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIG91dGxpbmU6IDFweCBkYXNoZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2ZpbGUtZGV0YWlsIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NTBweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gIC5wcm9maWxlLWRldGFpbCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbnAgLmZhIHtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWRldGFpbCBwIHtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/projects/projects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/projects/projects.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 67, vars: 0, consts: [[1, "rounded"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "px-5", "mt-2"], [1, "card", "card-flip", "rounded", "border-left-0", "border-right-0", "global-bg-color"], [1, "row", "card-front", "rounded"], [1, "card-body"], [1, "card-title"], [1, "card-text", "opacity-6"], [1, "row", "card-back", "rounded", "border-left-0", "border-right-0"], [1, "card-text"], [1, "px-5"], [1, "card", "card-flip", "rounded", "border-left-0", "border-right-0", "global-bg-color", "border-top-0"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Provider Lookup Online - 09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Oct, 2019 - Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis voluptatum magni. Earum non delectus officiis accusantium, autem aliquid repellat! Quod quibusdam quaerat fugiat odit explicabo dolor sint voluptas harum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hytrust");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "March, 2019 - Sep, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis voluptatum magni. Earum non delectus officiis accusantium, autem aliquid repellat! Quod quibusdam quaerat fugiat odit explicabo dolor sint voluptas harum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Armor Scientific");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nov, 2018 - March, 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis voluptatum magni. Earum non delectus officiis accusantium, autem aliquid repellat! Quod quibusdam quaerat fugiat odit explicabo dolor sint voluptas harum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Apptus - Config Price Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Feb, 2018 - Oct, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis voluptatum magni. Earum non delectus officiis accusantium, autem aliquid repellat! Quod quibusdam quaerat fugiat odit explicabo dolor sint voluptas harum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ifusion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sep, 2018 - Feb, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis voluptatum magni. Earum non delectus officiis accusantium, autem aliquid repellat! Quod quibusdam quaerat fugiat odit explicabo dolor sint voluptas harum!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.opacity-6[_ngcontent-%COMP%] {\r\n  opacity: .6;\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transition: transform 300ms;\r\n  transition-timing-function: linear;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%] {\r\n  transform: rotateX(180deg);\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(-180deg);\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.global-bg-color[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n@media (max-width: 450px) {\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 1rem !important;\r\n    padding-right: 1rem !important;\r\n  }\r\n\r\n  .card-body[_ngcontent-%COMP%] {\r\n    padding: 0.25rem;\r\n  }\r\n\r\n  .ruler[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n\r\n  h4[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3Qiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJ1bGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ub3BhY2l0eS02IHtcclxuICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuLmNhcmQtZmxpcCA+IGRpdiB7XHJcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmQtZnJvbnQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxufVxyXG5cclxuLmNhcmQtYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDE4MGRlZyk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmNhcmQtZmxpcDpob3ZlciAuY2FyZC1mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1mbGlwOmhvdmVyIC5jYXJkLWJhY2sge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxufVxyXG5cclxuLmdsb2JhbC1iZy1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnB4LTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAucnVsZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/resume/resume.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/resume/resume.component.ts ***!
  \******************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResumeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 3, vars: 0, consts: [[1, "card-body", "border-0"], ["src", "assets/interactiveBW.PNG", 1, "img-fluid", "rounded", "interactive-bw"], ["src", "assets/interactiveCol.PNG", 1, "img-fluid", "rounded", "interactive-col"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card-body[_ngcontent-%COMP%]:hover   .interactive-bw[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%]:hover   .interactive-col[_ngcontent-%COMP%] {\r\n  display: inline;\r\n}\r\n\r\n.interactive-col[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Jlc3VtZS9yZXN1bWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHk6aG92ZXIgLmludGVyYWN0aXZlLWJ3e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHk6aG92ZXIgLmludGVyYWN0aXZlLWNvbCB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4uaW50ZXJhY3RpdmUtY29sIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/skills/skills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/skills/skills.component.ts ***!
  \******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/__ivy_ngcc__/fesm2015/ng-circle-progress.js");





function SkillsComponent_9_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle-progress", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("percent", data_r5.percentage)("radius", 55)("outerStrokeWidth", 10)("innerStrokeWidth", 8)("animation", true)("backgroundGradient", true)("title", data_r5.title)("subtitle", data_r5.percentage + " %")("subtitleColor", "green")("subtitleFontSize", 15)("titleFontSize", 15);
} }
function SkillsComponent_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkillsComponent_9_ng_template_0_div_2_Template, 4, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.data.slice(i_r2, i_r2 + ctx_r3.numberOfSkills));
} }
function SkillsComponent_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkillsComponent_9_ng_template_0_Template, 3, 1, "ng-template", 8);
} }
class SkillsComponent {
    constructor() {
        this.data = [
            {
                title: 'Angular',
                percentage: '70',
                experience: '3'
            },
            {
                title: 'AngularJS',
                percentage: '60',
                experience: '3'
            },
            {
                title: 'HTML',
                percentage: '85',
                experience: '3'
            },
            {
                title: 'CSS',
                percentage: '70',
                experience: '3'
            },
            {
                title: 'TypeScript',
                percentage: '70',
                experience: '3'
            },
            {
                title: 'Kibana',
                percentage: '85',
                experience: '1'
            },
            {
                title: 'AWS',
                percentage: '35',
                experience: '.5'
            },
            {
                title: 'C',
                percentage: '60',
                experience: '5'
            },
            {
                title: 'C++',
                percentage: '70',
                experience: '5'
            }
        ];
        this.numberOfSkills = 6;
    }
    onResize(event) {
        if (event.target.innerWidth < 450) {
            this.numberOfSkills = 2;
        }
        else if (event.target.innerWidth < 750) {
            this.numberOfSkills = 3;
        }
        else {
            this.numberOfSkills = 6;
        }
    }
    ngOnInit() {
        this.dataLen = this.data.length - 5;
        this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
        if (window.innerWidth < 450) {
            this.numberOfSkills = 2;
        }
        else if (window.innerWidth < 750) {
            this.numberOfSkills = 3;
        }
        else {
            this.numberOfSkills = 6;
        }
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], hostBindings: function SkillsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SkillsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 3, consts: [[1, "rounded", 3, "resize"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "px-5", "mt-2", "rounded"], ["interval", "5000", 1, "bgColor", 3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "px-5", "mt-1", "align-center"], ["class", "col-6 col-md-2 pl-2 p-bottom-40", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-2", "pl-2", "p-bottom-40"], [1, "card", "bgColor", 2, "width", "9rem"], [1, "card-title", "ml-1"], [3, "percent", "radius", "outerStrokeWidth", "innerStrokeWidth", "animation", "backgroundGradient", "title", "subtitle", "subtitleColor", "subtitleFontSize", "titleFontSize"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SkillsComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SkillsComponent_9_Template, 1, 0, undefined, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], ng_circle_progress__WEBPACK_IMPORTED_MODULE_3__["CircleProgressComponent"]], styles: [".card-flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transition: transform 300ms;\r\n  transition-timing-function: linear;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(-180deg);\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.p-bottom-40[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.bgColor[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.fontSize-10[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  z-index: 1;\r\n  position: absolute;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.carousel-item.active[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 0.5rem !important;\r\n    padding-right: 0.5rem !important;\r\n  }\r\n\r\n  .ruler[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 450px)and (max-width: 800px) {\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 1rem !important;\r\n    padding-right: 1rem !important;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%] {\r\n    height: 110px !important;\r\n    width: 110px !important;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLGtDQUFrQztFQUNsQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVDO0VBQ0MseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRTtJQUNFLCtCQUErQjtJQUMvQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qix1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mbGlwID4gZGl2IHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1mbGlwOmhvdmVyIC5jYXJkLWZyb250IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkLWZsaXA6aG92ZXIgLmNhcmQtYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWw6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtYm90dG9tLTQwIHtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uYmdDb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG5cclxuLmZvbnRTaXplLTEwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbiAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzeS1pbi1vdXQsIHZpc2liaWxpdHkgMXM7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pdGVtLmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS41cyBlYXN5LWluLW91dCwgdmlzaWJpbGl0eSAxcztcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5ydWxlciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItdG9wOiAxcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gIC5weC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ydWxlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MHB4KWFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5weC01IHtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/component/slidingcard/slidingcard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/slidingcard/slidingcard.component.ts ***!
  \****************************************************************/
/*! exports provided: SlidingcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidingcardComponent", function() { return SlidingcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SlidingcardComponent_9_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", data_r5.event, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.descripation);
} }
function SlidingcardComponent_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SlidingcardComponent_9_ng_template_0_div_2_Template, 12, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.data.slice(i_r2, i_r2 + ctx_r3.numberOfCard));
} }
function SlidingcardComponent_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SlidingcardComponent_9_ng_template_0_Template, 3, 1, "ng-template", 8);
} }
class SlidingcardComponent {
    constructor() {
        this.data = [
            {
                event: 'assets/book1.jpg',
                caption: '07/14/20 - 07/19/20',
                descripation: 'Meluha is a near perfect empire, created many centuries earlier by Lord Ram, one of the greatest Hindu kings that ever lived. However, the once proud empire and its Suryavanshi rulers face severe crisis as its primary river, Saraswati, is slowly drying to extinction.'
            },
            {
                event: 'assets/book2.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
            },
            {
                event: 'assets/book3.jpg',
                caption: '08/12/20 - 08/30/20',
                descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
            },
            {
                event: 'assets/book2.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
            },
            {
                event: 'assets/book3.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
            },
            {
                event: 'assets/book3.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
            },
            {
                event: 'assets/book3.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
            },
            {
                event: 'assets/book1.jpg',
                caption: '07/14/20 - 07/19/20',
                descripation: 'Meluha is a near perfect empire, created many centuries earlier by Lord Ram, one of the greatest Hindu kings that ever lived. However, the once proud empire and its Suryavanshi rulers face severe crisis as its primary river, Saraswati, is slowly drying to extinction.'
            },
            {
                event: 'assets/book2.jpg',
                caption: '07/22/20 - 08/3/20',
                descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
            }
        ];
        this.numberOfCard = 6;
    }
    onResize(event) {
        if (event.target.innerWidth < 450) {
            this.numberOfCard = 2;
        }
        else if (event.target.innerWidth < 750) {
            this.numberOfCard = 3;
        }
        else {
            this.numberOfCard = 6;
        }
    }
    ngOnInit() {
        this.dataLen = this.data.length - 6;
        this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
        if (window.innerWidth < 450) {
            this.numberOfCard = 2;
        }
        else if (window.innerWidth < 750) {
            this.numberOfCard = 3;
        }
        else {
            this.numberOfCard = 6;
        }
    }
}
SlidingcardComponent.ɵfac = function SlidingcardComponent_Factory(t) { return new (t || SlidingcardComponent)(); };
SlidingcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SlidingcardComponent, selectors: [["app-slidingcard"]], hostBindings: function SlidingcardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SlidingcardComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 3, consts: [[1, "rounded"], [1, "row", "px-5", "mt-4", "rounded"], [1, "col-12", "ruler", "rounded"], [1, "row"], [1, "col-12", "px-5"], [1, "px-5", "rounded"], ["interval", "5000", 1, "bgColor", 3, "showNavigationArrows", "showNavigationIndicators"], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "px-5", "mt-1", "align-center"], ["class", "col-6 col-md-2 pl-2 p-bottom-40", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-2", "pl-2", "p-bottom-40"], [1, "card", "card-flip", "rounded", "border-1", 2, "width", "7rem"], [1, "row", "card-front", "rounded"], [1, "card-body", "p-2"], [1, "card-title", "mb-0"], [1, "img-fluid", "rounded", 3, "src"], [1, "card-text", "opacity-6", "font-style"], [1, "row", "card-back", "rounded", "border-0"], [1, "card-body"], [1, "card-text", "fontSize-10", "backCard"]], template: function SlidingcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ngb-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SlidingcardComponent_9_Template, 1, 0, undefined, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", false)("showNavigationIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.numbers);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".card-flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transition: transform 300ms;\r\n  transition-timing-function: linear;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%] {\r\n  transform: rotateX(180deg);\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\r\n  transform: rotateX(-180deg);\r\n}\r\n\r\n.card-flip[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\r\n  transform: rotateX(0deg);\r\n}\r\n\r\n.carousel[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n}\r\n\r\n.ruler[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1rem solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.p-bottom-40[_ngcontent-%COMP%] {\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.bgColor[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.fontSize-10[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n}\r\n\r\n.backCard[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 10; \r\n  -webkit-box-orient: vertical;\r\n }\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  display: block !important;\r\n  z-index: 1;\r\n  position: absolute;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n.carousel-item.active[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  transition: opacity 1.5s easy-in-out, visibility 1s;\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.font-style[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  font-weight: 600;\r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 1rem !important;\r\n    padding-right: 1rem !important;\r\n  }\r\n\r\n  .ruler[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 450px)and (max-width: 800px) {\r\n  .px-5[_ngcontent-%COMP%] {\r\n    padding-left: 0rem !important;\r\n    padding-right: 0rem !important;\r\n  }\r\n}\r\n\r\n  .carousel-indicators li {\r\n  background-color: #5d4f4f;\r\n}\r\n\r\n.rounded[_ngcontent-%COMP%] {\r\n  border-radius: .75rem !important;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: 1px solid;\r\n  background-color: #ebebeb;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NsaWRpbmdjYXJkL3NsaWRpbmdjYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixNQUFNO0FBQ1I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsc0JBQXNCLEVBQUUsNEJBQTRCO0VBQ3BELDRCQUE0QjtDQUM3Qjs7QUFFQTtFQUNDLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1EQUFtRDtFQUNuRCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1EQUFtRDtFQUNuRCxtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsNkJBQTZCO0lBQzdCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NsaWRpbmdjYXJkL3NsaWRpbmdjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mbGlwID4gZGl2IHtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZC1mcm9udCB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uY2FyZC1mbGlwOmhvdmVyIC5jYXJkLWZyb250IHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVgoLTE4MGRlZyk7XHJcbn1cclxuXHJcbi5jYXJkLWZsaXA6aG92ZXIgLmNhcmQtYmFjayB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWw6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJ1bGVyIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci10b3A6IDFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ucC1ib3R0b20tNDAge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5iZ0NvbG9yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG59XHJcblxyXG4uZm9udFNpemUtMTAge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmJhY2tDYXJkIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMTA7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuIH1cclxuXHJcbiAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNXMgZWFzeS1pbi1vdXQsIHZpc2liaWxpdHkgMXM7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0uYWN0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxLjVzIGVhc3ktaW4tb3V0LCB2aXNpYmlsaXR5IDFzO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmZvbnQtc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgLnB4LTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucnVsZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA0NTBweClhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAucHgtNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDByZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNGY0ZjtcclxufVxyXG5cclxuLnJvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IC43NXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlidingcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-slidingcard',
                templateUrl: './slidingcard.component.html',
                styleUrls: ['./slidingcard.component.css']
            }]
    }], function () { return []; }, { onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\skumar\Documents\GMK\sks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map