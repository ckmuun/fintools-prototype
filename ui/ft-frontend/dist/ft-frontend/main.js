(self["webpackChunkft_frontend"] = self["webpackChunkft_frontend"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrypoint/entrypoint.component */ 2050);
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landingpage/landingpage.component */ 1476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'get-started', component: _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_0__.EntrypointComponent },
    { path: 'home', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_1__.LandingpageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
    constructor() {
        this.title = 'ft-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["color", "primary", 1, "toolbar", "mat-elevation-z2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fintools Prototype");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrypoint/entrypoint.component */ 2050);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findash/findash.component */ 8382);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-charts */ 6178);
/* harmony import */ var _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skillradar/skillradar.component */ 3728);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strat-details/strat-details.component */ 2306);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strat-feedback/strat-feedback.component */ 8761);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-stars */ 4426);
/* harmony import */ var _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./discovery/discovery.component */ 7653);
/* harmony import */ var _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./landingpage/landingpage.component */ 1476);
/* harmony import */ var _generic_radarchart_generic_radarchart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generic-radarchart/generic-radarchart.component */ 8870);
/* harmony import */ var _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explanation-dialog/explanation-dialog.component */ 512);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./next-page-dialog/next-page-dialog.component */ 8348);
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./finish/finish.component */ 2898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);





























const routes = [
    { path: '', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_9__.LandingpageComponent },
    { path: 'home', component: _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_9__.LandingpageComponent },
    { path: 'get-started', component: _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__.EntrypointComponent },
    { path: 'dashboard', component: _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__.FindashComponent },
    { path: 'radar', component: _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__.SkillradarComponent },
    { path: 'discover', component: _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_8__.DiscoveryComponent },
    { path: 'finish', component: _finish_finish_component__WEBPACK_IMPORTED_MODULE_13__.FinishComponent },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_23__.ChartsModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
            ngx_stars__WEBPACK_IMPORTED_MODULE_26__.NgxStarsModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__.EntrypointComponent,
        _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__.FindashComponent,
        _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__.SkillradarComponent,
        _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_5__.StratcompareComponent,
        _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_6__.StratDetailsComponent,
        _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_7__.StratFeedbackComponent,
        _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_8__.DiscoveryComponent,
        _landingpage_landingpage_component__WEBPACK_IMPORTED_MODULE_9__.LandingpageComponent,
        _generic_radarchart_generic_radarchart_component__WEBPACK_IMPORTED_MODULE_10__.GenericRadarchartComponent,
        _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_11__.ExplanationDialogComponent,
        _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_12__.NextPageDialogComponent,
        _finish_finish_component__WEBPACK_IMPORTED_MODULE_13__.FinishComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule, ng2_charts__WEBPACK_IMPORTED_MODULE_23__.ChartsModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_25__.FlexLayoutModule,
        ngx_stars__WEBPACK_IMPORTED_MODULE_26__.NgxStarsModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] }); })();


/***/ }),

/***/ 7653:
/*!**************************************************!*\
  !*** ./src/app/discovery/discovery.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiscoveryComponent": () => (/* binding */ DiscoveryComponent)
/* harmony export */ });
/* harmony import */ var _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explanation-dialog/explanation-dialog.component */ 512);
/* harmony import */ var _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-page-dialog/next-page-dialog.component */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strat-details/strat-details.component */ 2306);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../strat-feedback/strat-feedback.component */ 8761);











function DiscoveryComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "app-stratcompare", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-strat-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-strat-feedback", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("stratRatedEmitter", function DiscoveryComponent_ul_7_Template_app_strat_feedback_stratRatedEmitter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.collectFeedback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("userScores", ctx_r0.userScoreArr)("strategyScores", ctx_r0.stratArrs[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("strategy", ctx_r0.strats[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("strategy", ctx_r0.strats[i_r2])("strategyIndex", i_r2);
} }
class DiscoveryComponent {
    constructor(strategySvc, dialog) {
        this.strategySvc = strategySvc;
        this.dialog = dialog;
        // dirty initializer hack
        this.data = {};
        this.strats = [];
        this.stratArrs = [];
        this.userScoreArr = [];
        this.feedback = [-1, -1, -1];
        this.allRated = false;
    }
    ngOnInit() {
        this.strategySvc.data$.subscribe(resp => {
            this.userScoreArr = this.getNumberArray(resp.user_scores);
            this.data = resp;
            console.log("DEBUG OUTPUT");
            this.strats.forEach(strat => {
                console.log("strategy: " + strat.name);
                console.log("has scores: " + this.getNumberArrayFromStrategy(strat));
            });
        });
        this.strategySvc.getRandomStrategySample().subscribe(resp => {
            this.strats = resp;
            this.extractStrategyScores(this.strats);
        });
        this.openDialog();
    }
    openNextPageDialog() {
        this.dialog.open(_next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NextPageDialogComponent, {
            data: {
                text: "",
                redirectUri: "/finish"
            }
        });
    }
    // abusing array with two slots as a tuplem, 0 is the rating, 1 is the strategy index
    collectFeedback(tuple) {
        console.log("saving feedback");
        this.feedback[tuple[1]] = tuple[0];
        console.log("strategy nr. " + tuple[1] + " got rating: " + tuple[0]);
        this.allRated = this.checkIfFeedbackComplete();
        if (this.allRated) {
            this.openNextPageDialog();
        }
    }
    checkIfFeedbackComplete() {
        for (let i = 0; i < this.feedback.length; i++) {
            if (this.feedback[i] === -1) {
                return false;
            }
        }
        return true;
    }
    openDialog() {
        this.dialog.open(_explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ExplanationDialogComponent, {
            data: {
                text: "This page displays random strategies which were not explicitly selected for you. These serve as a contrast" +
                    "to the recommendations you just saw. \n Please also rate these strategies."
            }
        });
    }
    extractStrategyScores(scs) {
        scs.forEach(strategy => {
            this.stratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge]);
        });
    }
    /*
      Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];
     */
    getNumberArray(sc) {
        return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge];
    }
    getNumberArrayFromStrategy(strat) {
        return [strat.time_flexibility, strat.fin_risk_tolerance, strat.psy_risk_tolerance, strat.cog_bias_resistance, strat.financial_knowledge];
    }
}
DiscoveryComponent.ɵfac = function DiscoveryComponent_Factory(t) { return new (t || DiscoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_2__.StrategyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
DiscoveryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DiscoveryComponent, selectors: [["app-discovery"]], decls: 8, vars: 2, consts: [["fxLayout", "column"], ["fxLayoutGap", "32px", 2, "margin-bottom", "35px"], ["fxFlex", "75"], [4, "ngFor", "ngForOf"], ["fxLayout.xl", "row", "fxLayoutGap", "32px"], ["fxFlex", "33", 3, "userScores", "strategyScores"], ["fxFlex", "33", 3, "strategy"], ["fxFlex", "33", 3, "strategy", "strategyIndex", "stratRatedEmitter"]], template: function DiscoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DiscoveryComponent_ul_7_Template, 6, 5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Displaying other strategies for user id: ", ctx.data.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.strats);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_3__.StratcompareComponent, _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_4__.StratDetailsComponent, _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_5__.StratFeedbackComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3ZlcnkuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 2050:
/*!****************************************************!*\
  !*** ./src/app/entrypoint/entrypoint.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrypointComponent": () => (/* binding */ EntrypointComponent)
/* harmony export */ });
/* harmony import */ var _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explanation-dialog/explanation-dialog.component */ 512);
/* harmony import */ var _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-page-dialog/next-page-dialog.component */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questionnaire.service */ 1498);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profiles.service */ 4934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 1095);












function EntrypointComponent_ol_6_ol_7_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EntrypointComponent_ol_6_ol_7_ul_5_Template_mat_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const iii_r8 = restoredCtx.index; const ii_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.setAnswerIndex(i_r2, ii_r5, iii_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r7 = ctx.$implicit;
    const iii_r8 = ctx.index;
    const ii_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r6.getSelected(i_r2, ii_r5, iii_r8) ? "rgba(79, 221, 79, 0.36)" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("textContent", answer_r7.answer_text);
} }
function EntrypointComponent_ol_6_ol_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, EntrypointComponent_ol_6_ol_7_ul_5_Template, 4, 3, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("textContent", question_r4.question_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", question_r4.answers_to_show);
} }
function EntrypointComponent_ol_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, EntrypointComponent_ol_6_ol_7_Template, 6, 2, "ol", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questionnaire_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](questionnaire_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](questionnaire_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", questionnaire_r1.questions);
} }
class EntrypointComponent {
    constructor(qSvc, stratSvc, profilesSvc, route, router, dialog) {
        this.qSvc = qSvc;
        this.stratSvc = stratSvc;
        this.profilesSvc = profilesSvc;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.showSubmitModal = false;
        this.qCategories = [];
        this.questionnaires = [];
    }
    getTitle() {
        return "Questionnaires:";
    }
    getSelected(questionnaireIndex, questionIndex, answerIndex) {
        return this.questionnaires[questionnaireIndex]
            .questions[questionIndex]
            .chosen_answer_index === answerIndex;
    }
    ngOnInit() {
        console.log("init entrypoint component");
        this.qSvc.getQuestionnaires().subscribe(q => {
            this.questionnaires = q;
        });
        this.qSvc.getQuestionnaireList().subscribe(categories => this.qCategories = categories);
        this.openDialog();
    }
    openDialog() {
        this.dialog.open(_explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ExplanationDialogComponent, {
            data: {
                text: "This page displays various questions which we use to further narrow down recommendations for you." +
                    "Please answer them correctly to optimize your results. You may be surprised at the 'non-financial' questions. " +
                    "This is on purpose and a major aspect of why this recommendation site is different from other, sales-driven ones."
            }
        });
    }
    openNextPageDialog() {
        let matDialogRef = this.dialog.open(_next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NextPageDialogComponent, {
            data: {
                text: "",
                redirectUri: "/dashboard"
            }
        });
        const sub = matDialogRef.componentInstance.buttonClicked.subscribe(() => {
            this.uploadFilledQuestionnaires();
        });
        matDialogRef.afterClosed().subscribe(sub.unsubscribe);
    }
    navigateToFindash() {
        this.router.navigateByUrl('/dashboard');
    }
    uploadFilledQuestionnaires() {
        return this.stratSvc.postFilledQuestionnaires(this.questionnaires, this.profilesSvc.chosenProfile).subscribe(response => {
            console.log("received upload response, routing to dashboard component");
            console.log("response:" + response.id);
            this.navigateToFindash();
        });
    }
    setAnswerIndex(questionnaireIndex, questionIndex, answerIndex) {
        console.log("setting chosen answer in questionnaire: " + questionnaireIndex + "\n question: " + questionIndex + "\n to answer at index: " + answerIndex);
        this.questionnaires[questionnaireIndex]
            .questions[questionIndex]
            .chosen_answer_index = answerIndex;
        if (this.allQuestionnairesFilled()) {
            this.openNextPageDialog();
        }
    }
    allQuestionnairesFilled() {
        if (this.questionnaires.length === 0) {
            return false;
        }
        for (let i = 0; i < this.questionnaires.length; i++) {
            let q = this.questionnaires[i];
            for (let ii = 0; ii < q.questions.length; ii++) {
                let qq = q.questions[ii];
                // -1 is the default index set by backend
                if (qq.chosen_answer_index === -1) {
                    return false;
                }
            }
        }
        return true;
    }
    // DEBUG ONLY
    fillQuestionnairesWithDefault() {
        for (let i = 0; i < this.questionnaires.length; i++) {
            let q = this.questionnaires[i];
            for (let ii = 0; ii < q.questions.length; ii++) {
                let qq = q.questions[ii];
                this.questionnaires[i].questions[ii].chosen_answer_index = 1;
            }
        }
        if (this.allQuestionnairesFilled()) {
            this.openNextPageDialog();
        }
        // this.uploadFilledQuestionnaires()
    }
}
EntrypointComponent.ɵfac = function EntrypointComponent_Factory(t) { return new (t || EntrypointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_questionnaire_service__WEBPACK_IMPORTED_MODULE_2__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_3__.StrategyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_profiles_service__WEBPACK_IMPORTED_MODULE_4__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog)); };
EntrypointComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EntrypointComponent, selectors: [["app-entrypoint"]], decls: 9, vars: 2, consts: [[3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [3, "textContent"], [4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "click"], [1, "questionnaire-card"], [1, "question-card"], ["fxLayout", "column", "fxLayoutGap", "35px"]], template: function EntrypointComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EntrypointComponent_Template_button_click_0_listener() { return ctx.fillQuestionnairesWithDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "DEBUG SAMPLE ANSWERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EntrypointComponent_ol_6_Template, 8, 3, "ol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EntrypointComponent_Template_button_click_7_listener() { return ctx.uploadFilledQuestionnaires(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Submit Questionnaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("textContent", ctx.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.questionnaires);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective], styles: [".question-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  border-color: aqua;\n  background-color: rgba(63, 63, 191, 0.19) ;\n  margin-bottom: 50px;\n}\n\n.questionnaire-card[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  background-color: rgba(63, 63, 191, 0.38);\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJ5cG9pbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImVudHJ5cG9pbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgMTkxLCAwLjE5KSA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5xdWVzdGlvbm5haXJlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDE5MSwgMC4zOCk7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 512:
/*!********************************************************************!*\
  !*** ./src/app/explanation-dialog/explanation-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplanationDialogComponent": () => (/* binding */ ExplanationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);




class ExplanationDialogComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
}
ExplanationDialogComponent.ɵfac = function ExplanationDialogComponent_Factory(t) { return new (t || ExplanationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ExplanationDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplanationDialogComponent, selectors: [["app-explanation-dialog"]], decls: 5, vars: 1, consts: [["fxFlexAlign", "center center", 2, "max-width", "800px"], ["mat-dialog-title", ""], ["mat-dialog-content", ""]], template: function ExplanationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "How to use this page:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBsYW5hdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8382:
/*!**********************************************!*\
  !*** ./src/app/findash/findash.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindashComponent": () => (/* binding */ FindashComponent)
/* harmony export */ });
/* harmony import */ var _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explanation-dialog/explanation-dialog.component */ 512);
/* harmony import */ var _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-page-dialog/next-page-dialog.component */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../skillradar/skillradar.component */ 3728);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../strat-details/strat-details.component */ 2306);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../strat-feedback/strat-feedback.component */ 8761);














function FindashComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-stratcompare", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "app-strat-details", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "app-strat-feedback", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("stratRatedEmitter", function FindashComponent_ul_12_Template_app_strat_feedback_stratRatedEmitter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.collectFeedback($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("userScores", ctx_r0.userScoreArr)("strategyScores", ctx_r0.goodStratArrs[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("strategy", ctx_r0.data.good_recommendation.recommended_components[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("strategy", ctx_r0.data.good_recommendation.recommended_components[i_r2])("strategyIndex", i_r2);
} }
class FindashComponent {
    constructor(strategySvc, route, router, dialog) {
        this.strategySvc = strategySvc;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        // dirty initializer hack
        this.data = {};
        this.userScoreArr = [];
        this.goodRecomStrats = [];
        this.goodStratArrs = [];
        this.feedback = [];
        this.allRated = false;
        this.feedback = [-1, -1, -1];
    }
    // abusing array with two slots as a tuplem, 0 is the rating, 1 is the strategy index
    collectFeedback(tuple) {
        console.log("saving feedback");
        this.feedback[tuple[1]] = tuple[0];
        console.log("strategy nr. " + tuple[1] + " got rating: " + tuple[0]);
        this.allRated = this.checkIfFeedbackComplete();
        if (this.allRated) {
            this.openNextPageDialog();
        }
    }
    checkIfFeedbackComplete() {
        for (let i = 0; i < this.feedback.length; i++) {
            if (this.feedback[i] === -1) {
                return false;
            }
        }
        return true;
    }
    ngOnInit() {
        this.strategySvc.data$.subscribe(resp => {
            this.data = resp;
            this.userScoreArr = this.getNumberArray(resp.user_scores);
            this.goodRecomStrats = this.data.good_recommendation.recommended_components;
            this.extractStrategyScores(this.goodRecomStrats);
            /*
                DEBUG LOG OUTPUT
             */
            this.goodRecomStrats.forEach(strat => {
                console.log("strategy: " + strat.name);
                console.log("has scores: " + this.getNumberArrayFromStrategy(strat));
                // init feedback array
            });
        });
        this.openDialog();
    }
    extractStrategyScores(scs) {
        scs.forEach(strategy => {
            this.goodStratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge]);
        });
    }
    openDialog() {
        this.dialog.open(_explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ExplanationDialogComponent, {
            data: {
                text: "This page displays personal finance strategies which were  selected based on your questionnaire answers for you." +
                    " \n Please also rate these strategies. by clicking on the stars on the right"
            }
        });
    }
    openNextPageDialog() {
        this.dialog.open(_next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NextPageDialogComponent, {
            data: {
                text: "",
                redirectUri: "/discover"
            }
        });
    }
    navigateToDiscovery() {
        this.router.navigateByUrl('/discover');
    }
    /*
      Based on: export const radarchartLabels: string[] = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];
     */
    getNumberArray(sc) {
        return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge];
    }
    getNumberArrayFromStrategy(strat) {
        return [strat.time_flexibility, strat.fin_risk_tolerance, strat.psy_risk_tolerance, strat.cog_bias_resistance, strat.financial_knowledge];
    }
}
FindashComponent.ɵfac = function FindashComponent_Factory(t) { return new (t || FindashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_2__.StrategyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog)); };
FindashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FindashComponent, selectors: [["app-findash"]], decls: 17, vars: 3, consts: [["fxLayout", "column"], ["fxLayoutGap", "32px", 2, "margin-bottom", "35px"], ["fxLayoutAlign", "center", "fxFlex", "25"], [2, "height", "600px", "width", "1200px", 3, "userScores"], ["fxFlex", "75"], [4, "ngFor", "ngForOf"], ["fxFlex", "center center"], ["mat-raised-button", "", 3, "click"], ["fxLayout.xl", "row", "fxLayoutGap", "32px"], ["fxFlex", "33", 3, "userScores", "strategyScores"], ["fxFlex", "33", 3, "strategy"], ["fxFlex", "33", 3, "strategy", "strategyIndex", "stratRatedEmitter"]], template: function FindashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Your Results from the Survey you just completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-skillradar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, FindashComponent_ul_12_Template, 6, 5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FindashComponent_Template_button_click_15_listener() { return ctx.navigateToDiscovery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Displaying Results for user id: ", ctx.data.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("userScores", ctx.userScoreArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.goodRecomStrats);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardSubtitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_3__.SkillradarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_4__.StratcompareComponent, _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_5__.StratDetailsComponent, _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_6__.StratFeedbackComponent], styles: [".outerContainer[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #b6b6b6;\n  box-sizing: content-box;\n}\n.datahheader[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\ndiv.container[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  margin-bottom: 10px;\n}\ndiv.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImZpbmRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlckNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uZGF0YWhoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgY29sb3I6ICNlZWVlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmRpdi5jb250YWluZXIgPiBkaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuIl19 */"] });


/***/ }),

/***/ 2898:
/*!********************************************!*\
  !*** ./src/app/finish/finish.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishComponent": () => (/* binding */ FinishComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);



class FinishComponent {
    constructor() { }
    ngOnInit() {
    }
}
FinishComponent.ɵfac = function FinishComponent_Factory(t) { return new (t || FinishComponent)(); };
FinishComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinishComponent, selectors: [["app-finish"]], decls: 3, vars: 0, consts: [["fxFlexAlign", "center center"]], template: function FinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank you for your participation!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexAlignDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaW5pc2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1723:
/*!********************************!*\
  !*** ./src/app/ftconstants.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radarchartLabels": () => (/* binding */ radarchartLabels)
/* harmony export */ });
const radarchartLabels = ['TimeFlexibility', 'Financial Risk Tolerance', 'Psychological Risk Tolerance', 'Cognitive Bias Resistance', 'Finance Knowledge'];


/***/ }),

/***/ 8870:
/*!********************************************************************!*\
  !*** ./src/app/generic-radarchart/generic-radarchart.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericRadarchartComponent": () => (/* binding */ GenericRadarchartComponent)
/* harmony export */ });
/* harmony import */ var _ftconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ftconstants */ 1723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 6178);



class GenericRadarchartComponent {
    constructor() {
        this.userScores = [];
        this.label = "Your Answers"; // default value
        this.radarChartData = {};
        this.options = {
            responsive: true,
            scales: {
                radial: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        };
        this.radarChartType = 'radar';
    }
    ngOnChanges(changes) {
        console.log("on changes ...");
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    ngOnInit() {
        console.log("initializing radar chart data");
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    initRadarChartData() {
        if (null === this.userScoreContainer || undefined === this.userScoreContainer) {
            return {
                labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
                datasets: [
                    { data: this.userScores, label: this.label },
                ]
            };
        }
        return {
            labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
            datasets: [
                { data: this.getNumberArray(this.userScoreContainer), label: this.label }
            ]
        };
    }
    recolor() {
        this.radarChartData.datasets[0].backgroundColor = 'rgba(90, 123, 170, 0.17)';
        this.radarChartData.datasets[0].borderColor = '#507783';
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    getNumberArray(sc) {
        return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge];
    }
}
GenericRadarchartComponent.ɵfac = function GenericRadarchartComponent_Factory(t) { return new (t || GenericRadarchartComponent)(); };
GenericRadarchartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GenericRadarchartComponent, selectors: [["app-generic-radarchart"]], inputs: { userScores: "userScores", label: "label", userScoreContainer: "userScoreContainer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [["baseChart", "", 3, "data", "options", "type"]], template: function GenericRadarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.radarChartData)("options", ctx.options)("type", ctx.radarChartType);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmljLXJhZGFyY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1476:
/*!******************************************************!*\
  !*** ./src/app/landingpage/landingpage.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingpageComponent": () => (/* binding */ LandingpageComponent)
/* harmony export */ });
/* harmony import */ var _explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../explanation-dialog/explanation-dialog.component */ 512);
/* harmony import */ var _next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../next-page-dialog/next-page-dialog.component */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profiles.service */ 4934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _generic_radarchart_generic_radarchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generic-radarchart/generic-radarchart.component */ 8870);











function LandingpageComponent_ul_10_ul_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.prettifyProfileTag(tag_r4));
} }
function LandingpageComponent_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingpageComponent_ul_10_Template_mat_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const i_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.selectProfile(i_r2, ctx_r5.profiles[i_r2]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Attributes this profile is associated with:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LandingpageComponent_ul_10_ul_10_Template, 3, 1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-generic-radarchart", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.profiles[i_r2].reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.profiles[i_r2].tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("userScoreContainer", ctx_r0.profiles[i_r2].score_container);
} }
class LandingpageComponent {
    constructor(profilesService, router, dialog) {
        this.profilesService = profilesService;
        this.router = router;
        this.dialog = dialog;
        this.profiles = [];
        this.selectedProfileIndex = -1;
        this.showRedirectDialog = false;
    }
    ngOnInit() {
        this.profilesService.getQuestionnaires().subscribe(profiles => {
            this.profiles = profiles;
        });
        this.openDialog();
    }
    openDialog() {
        this.dialog.open(_explanation_dialog_explanation_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ExplanationDialogComponent, {
            data: {
                text: "This is the entrypoint page to our personal finance strategy recommendation and exploration tool.\n" +
                    "Before we can look at actual strategies, we need some input first.\n" +
                    "On this page, please read through the list of predefined profiles and select one  you find most fitting for yourself by clicking on it.\n" +
                    "The page will then redirect to our questionnaire site which will display the next help text."
            }
        });
    }
    openNextPageDialog() {
        this.dialog.open(_next_page_dialog_next_page_dialog_component__WEBPACK_IMPORTED_MODULE_1__.NextPageDialogComponent, {
            data: {
                text: "",
                redirectUri: "/get-started"
            }
        });
    }
    prettifyProfileTag(tag) {
        if (tag === "etf") {
            return tag.toUpperCase();
        }
        let dashReplaceRegex = /[_\-]/gi;
        return tag.replace(dashReplaceRegex, " ");
    }
    selectProfile(index, profile) {
        console.log("profile selected");
        this.selectedProfileIndex = index;
        this.profilesService.cacheChosenProfile(profile);
        this.openNextPageDialog();
    }
    redirect() {
        this.router.navigateByUrl("/get-started");
    }
}
LandingpageComponent.ɵfac = function LandingpageComponent_Factory(t) { return new (t || LandingpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_profiles_service__WEBPACK_IMPORTED_MODULE_2__.ProfilesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog)); };
LandingpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LandingpageComponent, selectors: [["app-landingpage"]], decls: 13, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 2, "margin-top", "150px"], [2, "height", "1200px", "width", "1100px", "margin-bottom", "50px", "margin-top", "50px"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [2, "margin-top", "50px", "margin-bottom", "50px", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "15px", "fxLayoutAlign", "space-between none"], ["fxFlex", "50"], ["label", "Profile Stats", 3, "userScoreContainer"]], template: function LandingpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Which of these statements best describes why you are viewing this page? (Scroll down to view all) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "These profiles act as a starting point for your recommendation so please choose carefully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LandingpageComponent_ul_10_Template, 14, 3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LandingpageComponent_Template_button_click_11_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Go to next page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.profiles);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _generic_radarchart_generic_radarchart_component__WEBPACK_IMPORTED_MODULE_3__.GenericRadarchartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5kaW5ncGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8348:
/*!****************************************************************!*\
  !*** ./src/app/next-page-dialog/next-page-dialog.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NextPageDialogComponent": () => (/* binding */ NextPageDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2238);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 1095);






class NextPageDialogComponent {
    constructor(data, router, dialogRef) {
        this.data = data;
        this.router = router;
        this.dialogRef = dialogRef;
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    redirect() {
        this.router.navigateByUrl(this.data.redirectUri);
        this.buttonClicked.emit();
        this.dialogRef.close();
    }
}
NextPageDialogComponent.ɵfac = function NextPageDialogComponent_Factory(t) { return new (t || NextPageDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef)); };
NextPageDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NextPageDialogComponent, selectors: [["app-next-page-dialog"]], decls: 4, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function NextPageDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All finished?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NextPageDialogComponent_Template_button_click_2_listener() { return ctx.redirect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Go to next page!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXh0LXBhZ2UtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4934:
/*!*************************************!*\
  !*** ./src/app/profiles.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilesService": () => (/* binding */ ProfilesService),
/* harmony export */   "UserProfile": () => (/* binding */ UserProfile)
/* harmony export */ });
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategy.service */ 7601);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class ProfilesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.chosenProfile = new UserProfile("default", "default", ["default"], "default", new _strategy_service__WEBPACK_IMPORTED_MODULE_0__.ScoreContainer(0, 0, 0, 0, 0));
    }
    getQuestionnaires() {
        return this.httpClient.get("http://localhost:8080/api/profiles");
    }
    cacheChosenProfile(profile) {
        this.chosenProfile = profile;
    }
    getChosenProfile() {
        return this.chosenProfile;
    }
}
ProfilesService.ɵfac = function ProfilesService_Factory(t) { return new (t || ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProfilesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfilesService, factory: ProfilesService.ɵfac, providedIn: 'root' });
// public fields for JSON SerDes
class UserProfile {
    constructor(name, description, tags, reason, score_container) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.reason = reason;
        this.score_container = score_container;
    }
}


/***/ }),

/***/ 1498:
/*!******************************************!*\
  !*** ./src/app/questionnaire.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireService": () => (/* binding */ QuestionnaireService),
/* harmony export */   "McQuestionnaire": () => (/* binding */ McQuestionnaire),
/* harmony export */   "Metadata": () => (/* binding */ Metadata),
/* harmony export */   "McQuestion": () => (/* binding */ McQuestion),
/* harmony export */   "McAnswer": () => (/* binding */ McAnswer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class QuestionnaireService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.dataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
        this.data$ = this.dataSubject.asObservable();
    }
    getQuestionnaires() {
        return this.httpClient.get("http://localhost:8080/api/questionnaires/all");
    }
    getQuestionnaireList() {
        return this.httpClient.get("http://localhost:8080/api/questionnaires");
    }
}
QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) { return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
QuestionnaireService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionnaireService, factory: QuestionnaireService.ɵfac, providedIn: 'root' });
class McQuestionnaire {
    constructor(category, description, questions) {
        this.category = category;
        this.description = description;
        this.questions = questions;
    }
}
class Metadata {
    constructor(category) {
        this.category = category;
    }
}
class McQuestion {
    constructor(metadata, answersToShow, questionText, chosenAnswerIndex) {
        this.metadata = metadata;
        this.answers_to_show = answersToShow;
        this.question_text = questionText;
        this.chosen_answer_index = chosenAnswerIndex;
    }
}
class McAnswer {
    constructor(answerText, value) {
        this.answer_text = answerText;
        this.value = value;
    }
}


/***/ }),

/***/ 3728:
/*!****************************************************!*\
  !*** ./src/app/skillradar/skillradar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillradarComponent": () => (/* binding */ SkillradarComponent)
/* harmony export */ });
/* harmony import */ var _ftconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ftconstants */ 1723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ 6178);





class SkillradarComponent {
    constructor() {
        this.userScores = [];
        this.label = "Your Answers"; // default value
        this.radarChartData = {};
        this.options = {
            responsive: true,
            scales: {
                radial: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        };
        this.radarChartType = 'radar';
    }
    ngOnChanges(changes) {
        console.log("on changes ...");
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    ngOnInit() {
        console.log("initializing radar chart data");
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    initRadarChartData() {
        if (null === this.userScoreContainer || undefined === this.userScoreContainer) {
            return {
                labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
                datasets: [
                    { data: this.userScores, label: this.label },
                ]
            };
        }
        return {
            labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
            datasets: [
                { data: this.getNumberArray(this.userScoreContainer), label: this.label }
            ]
        };
    }
    recolor() {
        this.radarChartData.datasets[0].backgroundColor = 'rgba(90, 123, 170, 0.17)';
        this.radarChartData.datasets[0].borderColor = '#507783';
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
    getNumberArray(sc) {
        return [sc.time_flexibility, sc.fin_risk_tolerance, sc.psy_risk_tolerance, sc.cog_bias_resistance, sc.financial_knowledge];
    }
}
SkillradarComponent.ɵfac = function SkillradarComponent_Factory(t) { return new (t || SkillradarComponent)(); };
SkillradarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillradarComponent, selectors: [["app-skillradar"]], inputs: { userScores: "userScores", label: "label", userScoreContainer: "userScoreContainer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 8, consts: [[2, "width", "1500px", "height", "800px"], ["fxLayout", "row", "fxLayoutGap", "50px"], ["fxFlex", "50"], ["baseChart", "", 3, "data", "options", "type"]], template: function SkillradarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "canvas", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Your Results:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "You scored the following average values in these categories:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.radarChartData)("options", ctx.options)("type", ctx.radarChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Time & Flexibility: ", ctx.userScores[0], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Finance Knowledge: ", ctx.userScores[4], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Cognitive Bias Resistance: ", ctx.userScores[3], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Financial Risk Tolerance: ", ctx.userScores[1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Psychological Risk Tolerance: ", ctx.userScores[2], "");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, ng2_charts__WEBPACK_IMPORTED_MODULE_4__.BaseChartDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHJhZGFyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2306:
/*!**********************************************************!*\
  !*** ./src/app/strat-details/strat-details.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StratDetailsComponent": () => (/* binding */ StratDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function StratDetailsComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pro_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", pro_r2, "");
} }
function StratDetailsComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const con_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("- ", con_r3, "");
} }
class StratDetailsComponent {
    constructor() {
        this.strategy = {};
    }
    ngOnInit() {
    }
}
StratDetailsComponent.ɵfac = function StratDetailsComponent_Factory(t) { return new (t || StratDetailsComponent)(); };
StratDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StratDetailsComponent, selectors: [["app-strat-details"]], inputs: { strategy: "strategy" }, decls: 16, vars: 4, consts: [[4, "ngFor", "ngForOf"]], template: function StratDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Major advantages of this strategy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StratDetailsComponent_ul_8_Template, 3, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Major drawbacks of this strategy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StratDetailsComponent_ul_12_Template, 3, 1, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strategy.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.strategy.major_pros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.strategy.major_cons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.strategy.description, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8761:
/*!************************************************************!*\
  !*** ./src/app/strat-feedback/strat-feedback.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StratFeedbackComponent": () => (/* binding */ StratFeedbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-stars */ 4426);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);





function StratFeedbackComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Feedback saved ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StratFeedbackComponent {
    constructor() {
        this.strategy = {};
        this.strategyIndex = -1;
        this.rating = 2.5;
        this.rated = false;
        this.stratRatedEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    onRatingSet(rating) {
        this.rated = true;
        this.rating = rating;
        this.stratRatedEmitter.emit([this.rating, this.strategyIndex]);
    }
}
StratFeedbackComponent.ɵfac = function StratFeedbackComponent_Factory(t) { return new (t || StratFeedbackComponent)(); };
StratFeedbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StratFeedbackComponent, selectors: [["app-strat-feedback"]], inputs: { strategy: "strategy", strategyIndex: "strategyIndex" }, outputs: { stratRatedEmitter: "stratRatedEmitter" }, decls: 11, vars: 6, consts: [[3, "readonly", "size", "initialStars", "color", "ratingOutput"], [4, "ngIf"]], template: function StratFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Feedback for the strategy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please enter your feedback for this recommendation here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngx-stars", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ratingOutput", function StratFeedbackComponent_Template_ngx_stars_ratingOutput_9_listener($event) { return ctx.onRatingSet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StratFeedbackComponent_div_10_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.strategy.name, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", false)("size", 4)("initialStars", 2.5)("color", "#F1E978");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rated);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, ngx_stars__WEBPACK_IMPORTED_MODULE_2__.NgxStarsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdC1mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9574:
/*!********************************************************!*\
  !*** ./src/app/stratcompare/stratcompare.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StratcompareComponent": () => (/* binding */ StratcompareComponent)
/* harmony export */ });
/* harmony import */ var _ftconstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ftconstants */ 1723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 6178);




/*
    This component serves a comparison chart between the user's answers and a given strategy
    in practice, these strategies are returned from the backend.
 */
class StratcompareComponent {
    constructor() {
        this.userScores = [];
        this.strategyScores = [];
        this.radarChartData = {};
        // Radar
        this.radarChartOptions = {
            responsive: true,
        };
        this.options = {
            responsive: true,
            scales: {
                radial: {
                    beginAtZero: true,
                    max: 10,
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        };
        this.refScores = [10, 10, 10, 10, 10];
        this.radarChartType = 'radar';
    }
    ngOnChanges(changes) {
        console.log("on changes ...");
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    ngOnInit() {
        this.radarChartData = this.initRadarChartData();
        this.recolor();
    }
    // public options: ChartOptions = {
    //   responsive: true,
    //
    //   scales: {
    //     ticks: {
    //       suggestedMin: 0,
    //       suggestedMax: 10,
    //     }
    //   }
    // };
    /*
      public radarChartData: ChartData<'radar'> = {
        labels: radarchartLabels,
        datasets: [
          {data: [65, 59, 10, 81, 15], label: 'Series A'},
          {data: [28, 48, 40, 19, 60], label: 'Series B'},
        ]
      };
     */
    initRadarChartData() {
        console.log("user scores: " + this.userScores);
        console.log("strategy scores: " + this.strategyScores);
        return {
            labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
            datasets: [
                { data: this.userScores, label: 'User Answers', spanGaps: true },
                { data: this.strategyScores, label: 'Strategy Values', spanGaps: true },
                //    {data: this.refScores, hidden: false, showLine: false, label: 'Theoretical Maximum'},
            ]
        };
    }
    recolor() {
        console.log("recoloring radar chart");
        this.radarChartData.datasets[0].backgroundColor = 'rgba(90, 123, 170, 0.17)';
        this.radarChartData.datasets[0].borderColor = '#507783';
        this.radarChartData.datasets[1].backgroundColor = 'rgba(231, 243, 11, 0.17)';
        this.radarChartData.datasets[1].borderColor = '#F1E978';
    }
    // events
    chartClicked({ event, active }) {
        console.log(event, active);
    }
    chartHovered({ event, active }) {
        console.log(event, active);
    }
}
StratcompareComponent.ɵfac = function StratcompareComponent_Factory(t) { return new (t || StratcompareComponent)(); };
StratcompareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StratcompareComponent, selectors: [["app-stratcompare"]], inputs: { userScores: "userScores", strategyScores: "strategyScores" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["baseChart", "", 3, "data", "options", "type"]], template: function StratcompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "canvas", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.radarChartData)("options", ctx.options)("type", ctx.radarChartType);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdGNvbXBhcmUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 7601:
/*!*************************************!*\
  !*** ./src/app/strategy.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyService": () => (/* binding */ StrategyService),
/* harmony export */   "FintoolRecomDto": () => (/* binding */ FintoolRecomDto),
/* harmony export */   "SubmitDto": () => (/* binding */ SubmitDto),
/* harmony export */   "FintoolRecom": () => (/* binding */ FintoolRecom),
/* harmony export */   "StrategyComponent": () => (/* binding */ StrategyComponent),
/* harmony export */   "ScoreContainer": () => (/* binding */ ScoreContainer)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1841);



class StrategyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this._data$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
    }
    postFilledQuestionnaires(questionnaires, profile) {
        this._data$ = this.httpClient.post("http://localhost:8080/api/questionnaires/submit", new SubmitDto(questionnaires, profile));
        return this._data$;
    }
    getRandomStrategySample() {
        return this.httpClient.get("http://localhost:8080/api/random");
    }
    get data$() {
        return this._data$;
    }
    set data$(value) {
        this._data$ = value;
    }
}
StrategyService.ɵfac = function StrategyService_Factory(t) { return new (t || StrategyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
StrategyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StrategyService, factory: StrategyService.ɵfac, providedIn: 'root' });
/*
    The DTO that is returned from backend, it encapsulates a recommendation and an id
 */
class FintoolRecomDto {
    constructor(good_recommendation, bad_recommendation, id, user_scores) {
        this.good_recommendation = good_recommendation;
        this.bad_recommendation = bad_recommendation;
        this.id = id;
        this.user_scores = user_scores;
    }
}
/*

 */
class SubmitDto {
    constructor(questionnaires, profile) {
        this.questionnaires = questionnaires;
        this.profile = profile;
    }
}
/*
    The actual recommendation, encapsulating the components#
    BAsed on:
    type FintoolRecom struct {
    RecommendedComponents [3]StrategyComponent `json:"recommended_components"`
    WildcardComponent     StrategyComponent    `json:"wildcard_component"`
}

 */
class FintoolRecom {
    constructor(recommended_components, wildcard_component) {
        this.recommended_components = recommended_components;
        this.wildcard_component = wildcard_component;
    }
}
/*
    An actual personal finance strategy component, this encapsulates the raw numerical category stores
 */
class StrategyComponent {
    constructor(description, name, time_flexibility, fin_risk_tolerance, psy_risk_tolerance, financial_knowledge, cog_bias_resistance, links, tags, major_pros, major_cons) {
        this.links = [];
        this.tags = [];
        this.major_pros = [];
        this.major_cons = [];
        this.description = description;
        this.time_flexibility = time_flexibility;
        this.fin_risk_tolerance = fin_risk_tolerance;
        this.psy_risk_tolerance = psy_risk_tolerance;
        this.financial_knowledge = financial_knowledge;
        this.cog_bias_resistance = cog_bias_resistance;
        this.name = name;
        this.links = links;
        this.tags = tags;
        this.major_cons = major_cons;
        this.major_pros = major_pros;
        this.score_container = new ScoreContainer(this.time_flexibility, this.fin_risk_tolerance, this.psy_risk_tolerance, this.financial_knowledge, this.cog_bias_resistance);
    }
}
/*
  type ScoreContainer struct {
    FinRiskTolerance  int `json:"fin_risk_tolerance"`
    PsyRiskTolerance  int `json:"psy_risk_tolerance"`
    TimeFlexibility   int `json:"time_flexibility"`
    CogBiasResistance int `json:"cog_bias_resistance"`
    FinanceKnowledge  int `json:"finance_knowledge"`
}
 */
class ScoreContainer {
    constructor(time_flexibility, fin_risk_tolerance, psy_risk_tolerance, financial_knowledge, cog_bias_resistance) {
        this.time_flexibility = time_flexibility;
        this.fin_risk_tolerance = fin_risk_tolerance;
        this.psy_risk_tolerance = psy_risk_tolerance;
        this.financial_knowledge = financial_knowledge;
        this.cog_bias_resistance = cog_bias_resistance;
    }
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map