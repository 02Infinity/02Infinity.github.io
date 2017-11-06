webpackJsonp([8,16],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_translation_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_component__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_routing__ = __webpack_require__(777);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { Angular2SocialLoginModule } from 'angular2-social-login';
var providers = {
    'google': {
        'clientId': '630840335450-7coi9qk86al5v5trr4t460fjjr5evp10.apps.googleusercontent.com',
    },
    'facebook': {
        'clientId': '484437471916159',
        'apiVersion': 'v2.10',
    },
    'linkedin': {
        'clientId': '75fi1k6tzhnboa',
    },
};
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_translation_module__["a" /* AppTranslationModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_6__login_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__login_component__["a" /* Login */],
        ],
    })
], LoginModule);

// Angular2SocialLoginModule.loadProvidersScripts(providers);
//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var takeWhile_1 = __webpack_require__(676);
Observable_1.Observable.prototype.takeWhile = takeWhile_1.takeWhile;
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(7);
/**
 * Emits values emitted by the source Observable so long as each value satisfies
 * the given `predicate`, and then completes as soon as this `predicate` is not
 * satisfied.
 *
 * <span class="informal">Takes values from the source only while they pass the
 * condition given. When the first value does not satisfy, it completes.</span>
 *
 * <img src="./img/takeWhile.png" width="100%">
 *
 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
 * emitted on the source is given to the `predicate` function which returns a
 * boolean, representing a condition to be satisfied by the source values. The
 * output Observable emits the source values until such time as the `predicate`
 * returns false, at which point `takeWhile` stops mirroring the source
 * Observable and completes the output Observable.
 *
 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.takeWhile(ev => ev.clientX > 200);
 * result.subscribe(x => console.log(x));
 *
 * @see {@link take}
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link skip}
 *
 * @param {function(value: T, index: number): boolean} predicate A function that
 * evaluates a value emitted by the source Observable and returns a boolean.
 * Also takes the (zero-based) index as the second argument.
 * @return {Observable<T>} An Observable that emits the values from the source
 * Observable so long as each value satisfies the condition defined by the
 * `predicate`, then completes.
 * @method takeWhile
 * @owner Observable
 */
function takeWhile(predicate) {
    return this.lift(new TakeWhileOperator(predicate));
}
exports.takeWhile = takeWhile;
var TakeWhileOperator = (function () {
    function TakeWhileOperator(predicate) {
        this.predicate = predicate;
    }
    TakeWhileOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
    };
    return TakeWhileOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeWhileSubscriber = (function (_super) {
    __extends(TakeWhileSubscriber, _super);
    function TakeWhileSubscriber(destination, predicate) {
        _super.call(this, destination);
        this.predicate = predicate;
        this.index = 0;
    }
    TakeWhileSubscriber.prototype._next = function (value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        }
        catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber.prototype.nextOrComplete = function (value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) {
            destination.next(value);
        }
        else {
            destination.complete();
        }
    };
    return TakeWhileSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=takeWhile.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_index__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AuthService } from 'angular2-social-login';
var Login = (function () {
    function Login(fb, route, router, alertService, authenticationService, userService) {
        this.route = route;
        this.router = router;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.submitted = false;
        this.isSubscribe = true;
        this.form = fb.group({
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(2)])],
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
    }
    ;
    Login.prototype.ngOnInit = function () {
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Login.prototype.ngOnDestroy = function () {
        // this.sub.unsubscribe();
        this.isSubscribe = false;
    };
    Login.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        if (this.form.valid) {
            this.userService.loginUser(this.email.value, this.password.value)
                .takeWhile(function () { return _this.isSubscribe; })
                .subscribe(function (resEmpData) {
                // this.currentUser = resEmpData;
                if (resEmpData !== null) {
                    localStorage.setItem('currentUser', JSON.stringify(resEmpData));
                    _this.returnUrl = '/pages/dashboard';
                    _this.router.navigate([_this.returnUrl]);
                }
            }, function (err) {
                if (err.status === 404) {
                    _this.isMessage = true;
                    _this.message = 'User id or password is incorrect';
                }
                else {
                    _this.isMessage = true;
                    _this.message = err.statusText;
                }
            });
        }
    };
    return Login;
}());
Login = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Component */])({
        selector: 'login',
        template: __webpack_require__(793),
        styles: [__webpack_require__(786)],
        providers: [__WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* UserService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["b" /* AuthenticationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_index__["c" /* UserService */]) === "function" && _f || Object])
], Login);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_component__ = __webpack_require__(751);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__login_component__["a" /* Login */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=login.routing.js.map

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".auth-main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\n.auth-block {\n  width: 540px;\n  margin: 0 auto;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  padding: 32px; }\n  .auth-block h1 {\n    font-weight: 300;\n    margin-bottom: 28px;\n    text-align: center; }\n  .auth-block p {\n    font-size: 16px; }\n  .auth-block a {\n    text-decoration: none;\n    outline: none;\n    transition: all 0.2s ease;\n    color: #00abff; }\n    .auth-block a:hover {\n      color: #0091d9; }\n  .auth-block .control-label {\n    padding-top: 11px;\n    color: #ffffff; }\n  .auth-block .form-group {\n    margin-bottom: 12px; }\n\n.auth-input {\n  width: 300px;\n  margin-bottom: 24px; }\n  .auth-input input {\n    display: block;\n    width: 100%;\n    border: none;\n    font-size: 16px;\n    padding: 4px 10px;\n    outline: none; }\n\na.forgot-pass {\n  display: block;\n  text-align: right;\n  margin-bottom: -20px;\n  float: right;\n  z-index: 2;\n  position: relative; }\n\n.auth-link {\n  display: block;\n  font-size: 16px;\n  text-align: center;\n  margin-bottom: 33px; }\n\n.auth-sep {\n  margin-top: 36px;\n  margin-bottom: 24px;\n  line-height: 20px;\n  font-size: 16px;\n  text-align: center;\n  display: block;\n  position: relative; }\n  .auth-sep > span {\n    display: table-cell;\n    width: 30%;\n    white-space: nowrap;\n    padding: 0 24px;\n    color: #ffffff; }\n    .auth-sep > span > span {\n      margin-top: -12px;\n      display: block; }\n  .auth-sep:before, .auth-sep:after {\n    border-top: solid 1px #ffffff;\n    content: \"\";\n    height: 1px;\n    width: 35%;\n    display: table-cell; }\n\n.al-share-auth {\n  text-align: center; }\n  .al-share-auth .al-share {\n    float: none;\n    margin: 0;\n    padding: 0;\n    display: inline-block; }\n    .al-share-auth .al-share li {\n      margin-left: 24px; }\n      .al-share-auth .al-share li:first-child {\n        margin-left: 0; }\n      .al-share-auth .al-share li i {\n        font-size: 24px; }\n\n.btn-auth {\n  color: #ffffff !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 793:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"auth-main\">\n  <div class=\"auth-block\">\n    <h1 translate>{{'login.title'}}</h1>\n    <a routerLink=\"/register\" class=\"auth-link\" translate>{{'login.signup_link'}}</a>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" class=\"form-horizontal\">\n\n      <div class=\"form-group row has-error\" *ngIf=\"message\"  >\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" translate></label>\n        <div class=\"col-sm-10\" >\n           <label  class=\"control-label\"> {{message}}</label>\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!email.valid && email.touched), 'has-success': (email.valid && email.touched)}\">\n        <!-- <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" translate>{{'login.email'}}</label> -->\n        <label for=\"inputEmail3\" class=\"col-sm-2 control-label\" >User</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"User Name\">\n        </div>\n      </div>\n      <div class=\"form-group row\" [ngClass]=\"{'has-error': (!password.valid && password.touched), 'has-success': (password.valid && password.touched)}\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 control-label\" translate>{{'login.password'}}</label>\n\n        <div class=\"col-sm-10\">\n          <input [formControl]=\"password\" type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"{{'login.password' | translate}}\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"offset-sm-2 col-sm-10\">\n          <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-default btn-auth\" translate>{{'login.sign_in'}}</button>\n          <a routerLink=\"/login\" class=\"forgot-pass\" translate>{{'login.forgot_password'}}</a>\n        </div>\n      </div>\n    </form>\n<!--\n    <div class=\"auth-sep\"><span><span translate>{{'login.sign_from_app_text'}}</span></span></div>\n\n    <div class=\"al-share-auth\">\n      <ul class=\"al-share clearfix\">\n        <li (click)=\"signIn('facebook')\" ><i class=\"socicon socicon-facebook\" title=\"{{'login.share_on_facebook' | translate}}\"></i></li>\n        <li (click)=\"signIn('linkedin')\" ><i class=\"socicon socicon-linkedin\" title=\"{{'login.share_on_linkedin' | translate}}\"></i></li>\n        <li (click)=\"signIn('google')\" ><i class=\"socicon socicon-google\" title=\"{{'login.share_on_google_plus' | translate}}\"></i></li>\n        \n      </ul>\n    </div>\n    \n  </div>\n   -->\n</div>\n"

/***/ })

});
//# sourceMappingURL=8.chunk.js.map