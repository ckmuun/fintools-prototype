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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entrypoint/entrypoint.component */ 2050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    { path: '', redirectTo: 'get-started', pathMatch: 'full' },
    { path: 'get-started', component: _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_0__.EntrypointComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entrypoint/entrypoint.component */ 2050);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findash/findash.component */ 8382);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-charts */ 6178);
/* harmony import */ var _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skillradar/skillradar.component */ 3728);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ 4929);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./strat-details/strat-details.component */ 2306);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ 5830);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strat-feedback/strat-feedback.component */ 8761);
/* harmony import */ var ngx_stars__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-stars */ 4426);
/* harmony import */ var _explanation_explanation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explanation/explanation.component */ 2292);
/* harmony import */ var _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./discovery/discovery.component */ 7653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
























const routes = [
    { path: 'get-started', component: _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__.EntrypointComponent },
    { path: 'dashboard', component: _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__.FindashComponent },
    { path: 'radar', component: _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__.SkillradarComponent },
    { path: 'discover', component: _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_9__.DiscoveryComponent },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forRoot(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_19__.ChartsModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule,
            ngx_stars__WEBPACK_IMPORTED_MODULE_22__.NgxStarsModule,
        ], _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_2__.EntrypointComponent,
        _findash_findash_component__WEBPACK_IMPORTED_MODULE_3__.FindashComponent,
        _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_4__.SkillradarComponent,
        _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_5__.StratcompareComponent,
        _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_6__.StratDetailsComponent,
        _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_7__.StratFeedbackComponent,
        _explanation_explanation_component__WEBPACK_IMPORTED_MODULE_8__.ExplanationComponent,
        _discovery_discovery_component__WEBPACK_IMPORTED_MODULE_9__.DiscoveryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, ng2_charts__WEBPACK_IMPORTED_MODULE_19__.ChartsModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__.MatGridListModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__.FlexLayoutModule,
        ngx_stars__WEBPACK_IMPORTED_MODULE_22__.NgxStarsModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../strat-details/strat-details.component */ 2306);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strat-feedback/strat-feedback.component */ 8761);








function DiscoveryComponent_ul_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-stratcompare", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-strat-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-strat-feedback", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("userScores", ctx_r0.userScoreArr)("strategyScores", ctx_r0.badStratArrs[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("strategy", ctx_r0.data.bad_recommendation.recommended_components[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("strategy", ctx_r0.data.bad_recommendation.recommended_components[i_r2]);
} }
class DiscoveryComponent {
    constructor(strategySvc) {
        this.strategySvc = strategySvc;
        // dirty initializer hack
        this.data = {};
        this.userScoreArr = [];
        this.badRecomStrats = [];
        this.badStratArrs = [];
        this.randomSample = [];
    }
    ngOnInit() {
        this.strategySvc.data$.subscribe(resp => {
            this.data = resp;
            this.userScoreArr = this.getNumberArray(resp.user_scores);
            this.badRecomStrats = this.data.bad_recommendation.recommended_components;
            this.extractStrategyScores(this.badRecomStrats);
            console.log("DEBUG OUTPUT");
            this.badRecomStrats.forEach(strat => {
                console.log("strategy: " + strat.name);
                console.log("has scores: " + this.getNumberArrayFromStrategy(strat));
            });
        });
        this.strategySvc.stratSampleData$.subscribe(resp => {
            this.randomSample = resp;
            // todo extract data here more fine-grained.
        });
    }
    extractStrategyScores(scs) {
        scs.forEach(strategy => {
            this.badStratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge]);
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
DiscoveryComponent.ɵfac = function DiscoveryComponent_Factory(t) { return new (t || DiscoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_0__.StrategyService)); };
DiscoveryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DiscoveryComponent, selectors: [["app-discovery"]], decls: 8, vars: 2, consts: [["fxLayout", "column"], ["fxLayoutGap", "32px", 2, "margin-bottom", "35px"], ["fxFlex", "75"], [4, "ngFor", "ngForOf"], ["fxLayout.xl", "row", "fxLayoutGap", "32px"], ["fxFlex", "33", 3, "userScores", "strategyScores"], ["fxFlex", "33", 3, "strategy"]], template: function DiscoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, DiscoveryComponent_ul_7_Template, 6, 4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Displaying other strategies for user id: ", ctx.data.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.badRecomStrats);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_1__.StratcompareComponent, _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_2__.StratDetailsComponent, _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_3__.StratFeedbackComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNjb3ZlcnkuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _questionnaire_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questionnaire.service */ 1498);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 1095);








function EntrypointComponent_ol_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("category:", category_r2, "");
} }
function EntrypointComponent_ol_7_ol_7_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntrypointComponent_ol_7_ol_7_ul_5_Template_mat_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const iii_r10 = restoredCtx.index; const ii_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.setAnswerIndex(i_r4, ii_r7, iii_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-card-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r9 = ctx.$implicit;
    const iii_r10 = ctx.index;
    const ii_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx_r8.getSelected(i_r4, ii_r7, iii_r10) ? "rgba(79, 221, 79, 0.36)" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textContent", answer_r9.answer_text);
} }
function EntrypointComponent_ol_7_ol_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-card-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EntrypointComponent_ol_7_ol_7_ul_5_Template, 4, 3, "ul", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textContent", question_r6.question_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", question_r6.answers_to_show);
} }
function EntrypointComponent_ol_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EntrypointComponent_ol_7_ol_7_Template, 6, 2, "ol", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questionnaire_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](questionnaire_r3.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](questionnaire_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", questionnaire_r3.questions);
} }
class EntrypointComponent {
    constructor(qSvc, stratSvc, route, router) {
        this.qSvc = qSvc;
        this.stratSvc = stratSvc;
        this.route = route;
        this.router = router;
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
    }
    openSubmitModal() {
        if (this.allQuestionnairesFilled()) {
            this.showSubmitModal = true;
        }
        else {
            // todo display some "not all questionnnaires filled warning"
        }
        // todo open submit modal here
        return;
    }
    navigateToFindash() {
        this.router.navigateByUrl('/dashboard');
    }
    uploadFilledQuestionnaires() {
        return this.stratSvc.postFilledQuestionnaires(this.questionnaires).subscribe(response => {
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
        this.uploadFilledQuestionnaires();
    }
}
EntrypointComponent.ɵfac = function EntrypointComponent_Factory(t) { return new (t || EntrypointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_questionnaire_service__WEBPACK_IMPORTED_MODULE_0__.QuestionnaireService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_1__.StrategyService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
EntrypointComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EntrypointComponent, selectors: [["app-entrypoint"]], decls: 10, vars: 3, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [3, "textContent"], ["mat-raised-button", "", 3, "click"], [1, "questionnaire-card"], [1, "question-card"], ["fxLayout", "column", "fxLayoutGap", "35px"]], template: function EntrypointComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, EntrypointComponent_ol_0_Template, 4, 1, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntrypointComponent_Template_button_click_1_listener() { return ctx.fillQuestionnairesWithDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DEBUG SAMPLE ANSWERS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "mat-card-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EntrypointComponent_ol_7_Template, 8, 3, "ol", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EntrypointComponent_Template_button_click_8_listener() { return ctx.uploadFilledQuestionnaires(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Submit Questionnaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.qCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("textContent", ctx.getTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.questionnaires);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultLayoutGapDirective], styles: [".question-card[_ngcontent-%COMP%] {\n  max-width: 800px;\n  border-color: aqua;\n  background-color: rgba(63, 63, 191, 0.19) ;\n  margin-bottom: 50px;\n}\n\n.questionnaire-card[_ngcontent-%COMP%] {\n  max-width: 1000px;\n  background-color: rgba(63, 63, 191, 0.38);\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJ5cG9pbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImVudHJ5cG9pbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbi1jYXJkIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgYm9yZGVyLWNvbG9yOiBhcXVhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA2MywgMTkxLCAwLjE5KSA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi5xdWVzdGlvbm5haXJlLWNhcmQge1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgNjMsIDE5MSwgMC4zOCk7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2292:
/*!******************************************************!*\
  !*** ./src/app/explanation/explanation.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExplanationComponent": () => (/* binding */ ExplanationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ExplanationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ExplanationComponent.ɵfac = function ExplanationComponent_Factory(t) { return new (t || ExplanationComponent)(); };
ExplanationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExplanationComponent, selectors: [["app-explanation"]], decls: 2, vars: 0, template: function ExplanationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "explanation works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBsYW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _strategy_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../strategy.service */ 7601);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5618);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skillradar/skillradar.component */ 3728);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stratcompare/stratcompare.component */ 9574);
/* harmony import */ var _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../strat-details/strat-details.component */ 2306);
/* harmony import */ var _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../strat-feedback/strat-feedback.component */ 8761);











function FindashComponent_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-stratcompare", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-strat-details", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-strat-feedback", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("userScores", ctx_r0.userScoreArr)("strategyScores", ctx_r0.goodStratArrs[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("strategy", ctx_r0.data.good_recommendation.recommended_components[i_r2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("strategy", ctx_r0.data.good_recommendation.recommended_components[i_r2]);
} }
class FindashComponent {
    constructor(strategySvc, route, router) {
        this.strategySvc = strategySvc;
        this.route = route;
        this.router = router;
        // dirty initializer hack
        this.data = {};
        this.userScoreArr = [];
        this.goodRecomStrats = [];
        this.goodStratArrs = [];
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
            });
        });
    }
    extractStrategyScores(scs) {
        scs.forEach(strategy => {
            this.goodStratArrs.push([strategy.time_flexibility, strategy.fin_risk_tolerance, strategy.psy_risk_tolerance, strategy.cog_bias_resistance, strategy.financial_knowledge]);
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
FindashComponent.ɵfac = function FindashComponent_Factory(t) { return new (t || FindashComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_strategy_service__WEBPACK_IMPORTED_MODULE_0__.StrategyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
FindashComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FindashComponent, selectors: [["app-findash"]], decls: 17, vars: 3, consts: [["fxLayout", "column"], ["fxLayoutGap", "32px", 2, "margin-bottom", "35px"], ["fxLayoutAlign", "center", "fxFlex", "25"], [2, "height", "600px", "width", "1200px", 3, "userScores"], ["fxFlex", "75"], [4, "ngFor", "ngForOf"], ["fxFlex", "center center"], ["mat-raised-button", "", 3, "click"], ["fxLayout.xl", "row", "fxLayoutGap", "32px"], ["fxFlex", "33", 3, "userScores", "strategyScores"], ["fxFlex", "33", 3, "strategy"]], template: function FindashComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Your Results from the Survey you just completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-skillradar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, FindashComponent_ul_12_Template, 6, 4, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FindashComponent_Template_button_click_15_listener() { return ctx.navigateToDiscovery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Next Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Displaying Results for user id: ", ctx.data.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("userScores", ctx.userScoreArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.goodRecomStrats);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _skillradar_skillradar_component__WEBPACK_IMPORTED_MODULE_1__.SkillradarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _stratcompare_stratcompare_component__WEBPACK_IMPORTED_MODULE_2__.StratcompareComponent, _strat_details_strat_details_component__WEBPACK_IMPORTED_MODULE_3__.StratDetailsComponent, _strat_feedback_strat_feedback_component__WEBPACK_IMPORTED_MODULE_4__.StratFeedbackComponent], styles: [".outerContainer[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #b6b6b6;\n  box-sizing: content-box;\n}\n.datahheader[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\ndiv.container[_ngcontent-%COMP%] {\n  color: #eeeeee;\n  margin-bottom: 10px;\n}\ndiv.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmRhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImZpbmRhc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlckNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I2YjZiNjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uZGF0YWhoZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5kaXYuY29udGFpbmVyIHtcbiAgY29sb3I6ICNlZWVlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmRpdi5jb250YWluZXIgPiBkaXYge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxuIl19 */"] });


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
        return {
            labels: _ftconstants__WEBPACK_IMPORTED_MODULE_0__.radarchartLabels,
            datasets: [
                { data: this.userScores, label: 'Your Answers' },
                // {data: [10,10,10,10,10], hidden: false, showLine: false, label: 'Theoretical Maximum'},
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
SkillradarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillradarComponent, selectors: [["app-skillradar"]], inputs: { userScores: "userScores" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 8, consts: [[2, "width", "1500px", "height", "800px"], ["fxLayout", "row", "fxLayoutGap", "50px"], ["fxFlex", "50"], ["baseChart", "", 3, "data", "options", "type"]], template: function SkillradarComponent_Template(rf, ctx) { if (rf & 1) {
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



class StratFeedbackComponent {
    constructor() {
        this.strategy = {};
        this.ratingDisplay = 2.5;
        this.rated = false;
    }
    ngOnInit() {
    }
    onRatingSet(rating) {
        this.rated = true;
        this.ratingDisplay = rating;
    }
}
StratFeedbackComponent.ɵfac = function StratFeedbackComponent_Factory(t) { return new (t || StratFeedbackComponent)(); };
StratFeedbackComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StratFeedbackComponent, selectors: [["app-strat-feedback"]], inputs: { strategy: "strategy" }, decls: 10, vars: 5, consts: [[3, "readonly", "size", "initialStars", "color", "ratingOutput"]], template: function StratFeedbackComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.strategy.name, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", false)("size", 4)("initialStars", 2.5)("color", "#F1E978");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, ngx_stars__WEBPACK_IMPORTED_MODULE_2__.NgxStarsComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdC1mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */"] });


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
        this._stratSampleData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable();
    }
    postFilledQuestionnaires(questionnaires) {
        this._data$ = this.httpClient.post("http://localhost:8080/api/questionnaires/submit", questionnaires);
        return this._data$;
    }
    getRandomStrategySample() {
        this._stratSampleData$ = this.httpClient.get("http://localhost:8080/api/random");
        return this._stratSampleData$;
    }
    get data$() {
        return this._data$;
    }
    set data$(value) {
        this._data$ = value;
    }
    get stratSampleData$() {
        return this._stratSampleData$;
    }
    set stratSampleData$(value) {
        this._stratSampleData$ = value;
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