function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/home/home.component */
    "./src/app/core/home/home.component.ts");
    /* harmony import */


    var _core_album_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/album/album.component */
    "./src/app/core/album/album.component.ts");
    /* harmony import */


    var _core_zen_zen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/zen/zen.component */
    "./src/app/core/zen/zen.component.ts");
    /* harmony import */


    var _core_journal_journal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/journal/journal.component */
    "./src/app/core/journal/journal.component.ts");

    var routes = [{
      path: 'zen',
      component: _core_zen_zen_component__WEBPACK_IMPORTED_MODULE_4__["ZenComponent"]
    }, {
      path: 'home',
      component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'album',
      component: _core_album_album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"]
    }, {
      path: 'journal',
      component: _core_journal_journal_component__WEBPACK_IMPORTED_MODULE_5__["JournalComponent"]
    }, {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Ancient Laboratory';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 17,
      vars: 0,
      consts: [["color", "primary", 1, "mat-elevation-z4", 2, "min-height", "56px", "max-height", "56px"], ["mat-icon-button", ""], [2, "padding", "0 40px"], ["mat-tab-nav-bar", "", 1, "mat-border-primary", 2, "z-index", "2", "position", "sticky", "top", "0"], ["mat-button", "", "routerLink", "zen", "routerLinkActive", "active", 2, "padding", "0 48px"], ["mat-button", "", "routerLink", "home", "routerLinkActive", "active", 2, "padding", "0 48px"], ["mat-button", "", "routerLink", "album", "routerLinkActive", "active", 2, "padding", "0 48px"], ["mat-button", "", "routerLink", "journal", "routerLinkActive", "active", 2, "padding", "0 48px"], [1, "w3-container", "mat-border-primary"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " menu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ancient Laboratory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Journal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabNav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/album/album-card/album-card.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/album/album-card/album-card.component.ts ***!
    \***************************************************************/

  /*! exports provided: AlbumCardComponent */

  /***/
  function srcAppCoreAlbumAlbumCardAlbumCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumCardComponent", function () {
      return AlbumCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var AlbumCardComponent = /*#__PURE__*/function () {
      function AlbumCardComponent() {// this.albumCard = new AlbumCard(123, '123.png', 'Henry',
        //   '2020', '12:00', true, 'comment', 'description');

        _classCallCheck(this, AlbumCardComponent);
      }

      _createClass(AlbumCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCard",
        value: function setCard(albumCard) {
          this.albumCard = albumCard;
          return this;
        }
      }, {
        key: "toggleSelected",
        value: function toggleSelected() {
          this.albumCard.active = !this.albumCard.active;
        }
      }]);

      return AlbumCardComponent;
    }();

    AlbumCardComponent.ɵfac = function AlbumCardComponent_Factory(t) {
      return new (t || AlbumCardComponent)();
    };

    AlbumCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumCardComponent,
      selectors: [["app-album-card"]],
      inputs: {
        albumCard: "albumCard"
      },
      decls: 34,
      vars: 9,
      consts: [[1, "mat-elevation-z4", 3, "ngClass", "click"], [2, "width", "70%", "margin", "auto", "overflow-x", "auto", "font-weight", "bold", "font-size", "14pt"], ["mat-fab", "", 2, "position", "relative", "left", "80%", "top", "80%"], ["mat-fab", "", 2, "position", "relative", "left", "85%", "top", "80%"], ["mat-fab", "", 2, "position", "relative", "left", "90%", "top", "80%"]],
      template: function AlbumCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumCardComponent_Template_mat_card_click_0_listener() {
            return ctx.toggleSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Start:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Stop:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Quality:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.albumCard.active ? "active" : "inactive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"]("", ctx.albumCard.weekday, ", ", ctx.albumCard.day, ". ", ctx.albumCard.month, " ", ctx.albumCard.year, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.albumCard.start);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.albumCard.stop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.albumCard.total);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.albumCard.quality);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 700px;\n  height: 400px;\n  display: flex;\n}\n\n.active[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 4px 4px rebeccapurple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tsaS93b3Jrc3BhY2UvYW5jaWVudC1sYWJvcmF0b3J5LW9uZS9mcm9udGVuZDEvc3JjL2FwcC9jb3JlL2FsYnVtL2FsYnVtLWNhcmQvYWxidW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9hbGJ1bS9hbGJ1bS1jYXJkL2FsYnVtLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUVFLHVDQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2FsYnVtL2FsYnVtLWNhcmQvYWxidW0tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vdGFibGUsIHRoLCB0ZCB7XG4vLyAgbWFyZ2luOiBhdXRvO1xuLy8gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuLy8gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4vL31cblxubWF0LWNhcmQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFjdGl2ZSB7XG4gIC8vYmFja2dyb3VuZDogcmViZWNjYXB1cnBsZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDRweCByZWJlY2NhcHVycGxlO1xufVxuXG4vLy5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXo0XSkge1xuLy8gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMjAwLCAxMDAsIDEwMCwgMSksXG4vLyAgMCAxcHggMXB4IDAgcmdiYSgyMDAsIDEwMCwgMTAwLCAxKSxcbi8vICAwIDFweCAzcHggMCByZ2JhKDIwMCwgMTAwLCAxMDAsIDEpO1xuLy99XG5cbi8vLm1hdC1jYXJkIHtcbi8vICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHJnYmEoMjAwLCAxMDAsIDEwMCwgMSksXG4vLyAgMCAxcHggMXB4IDAgcmdiYSgyMDAsIDEwMCwgMTAwLCAxKSxcbi8vICAwIDFweCAzcHggMCByZ2JhKDIwMCwgMTAwLCAxMDAsIDEpO1xuLy99XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IDRweCByZWJlY2NhcHVycGxlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-card',
          templateUrl: './album-card.component.html',
          styleUrls: ['./album-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        albumCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/album/album-card/album-card.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/album/album-card/album-card.service.ts ***!
    \*************************************************************/

  /*! exports provided: AlbumCardService */

  /***/
  function srcAppCoreAlbumAlbumCardAlbumCardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumCardService", function () {
      return AlbumCardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../env */
    "./src/app/env.ts");
    /* harmony import */


    var _album_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./album-card */
    "./src/app/core/album/album-card/album-card.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AlbumCardService = /*#__PURE__*/function () {
      function AlbumCardService(http) {
        _classCallCheck(this, AlbumCardService);

        this.http = http;
        this.url = _env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + '/chronicles';
      }

      _createClass(AlbumCardService, [{
        key: "getCards",
        value: function getCards() {
          return this.http.get(this.url + '/get');
        }
      }, {
        key: "deleteCards",
        value: function deleteCards() {
          return this.http["delete"](this.url + '/delete');
        }
      }, {
        key: "addCards",
        value: function addCards() {
          var card = new _album_card__WEBPACK_IMPORTED_MODULE_2__["AlbumCard"]();
          return this.http.post(this.url + '/add', card);
        }
      }]);

      return AlbumCardService;
    }();

    AlbumCardService.ɵfac = function AlbumCardService_Factory(t) {
      return new (t || AlbumCardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AlbumCardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlbumCardService,
      factory: AlbumCardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumCardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/album/album-card/album-card.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/album/album-card/album-card.ts ***!
    \*****************************************************/

  /*! exports provided: AlbumCard */

  /***/
  function srcAppCoreAlbumAlbumCardAlbumCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumCard", function () {
      return AlbumCard;
    });

    var AlbumCard = function AlbumCard() {
      _classCallCheck(this, AlbumCard);
    }; // export class AlbumCard {
    //
    //   id: number;
    //   url: string;
    //   name: string;
    //   date: string;
    //   time: string;
    //   active: boolean;
    //   comment: string;
    //   description: string;
    //
    //   constructor(id: number, url: string, name: string,
    //               date: string, time: string, active: boolean, comment: string, description: string) {
    //     this.id = id;
    //     this.url = url;
    //     this.name = name;
    //     this.active = active;
    //     this.comment = comment;
    //     this.description = description;
    //   }
    // }

    /***/

  },

  /***/
  "./src/app/core/album/album-dialog/album-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/core/album/album-dialog/album-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AlbumDialogComponent */

  /***/
  function srcAppCoreAlbumAlbumDialogAlbumDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumDialogComponent", function () {
      return AlbumDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var AlbumDialogComponent = /*#__PURE__*/function () {
      function AlbumDialogComponent(fb, dialogRef, data) {
        _classCallCheck(this, AlbumDialogComponent);

        this.fb = fb;
        this.dialogRef = dialogRef;
        this.description = data.description;
      }

      _createClass(AlbumDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.dialogRef.close(this.form.value);
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return AlbumDialogComponent;
    }();

    AlbumDialogComponent.ɵfac = function AlbumDialogComponent_Factory(t) {
      return new (t || AlbumDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    AlbumDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumDialogComponent,
      selectors: [["app-album-dialog"]],
      decls: 18,
      vars: 1,
      consts: [[3, "formGroup"], ["matInput", "", "placeholder", "Course Description", "formControlName", "description"], ["placeholder", "Select category", "formControlName", "category"], ["value", "BEGINNER"], ["value", "INTERMEDIATE"], ["value", "ADVANCED"], ["mat-stroked-button", "", "color", "primary"], ["mat-stroked-button", "", "color", "primary", 3, "click"]],
      template: function AlbumDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Beginner ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Intermediate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Advanced ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Ok");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumDialogComponent_Template_button_click_16_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWxidW0vYWxidW0tZGlhbG9nL2FsYnVtLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-dialog',
          templateUrl: './album-dialog.component.html',
          styleUrls: ['./album-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/album/album-files/album-files.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/core/album/album-files/album-files.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AlbumFilesComponent */

  /***/
  function srcAppCoreAlbumAlbumFilesAlbumFilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumFilesComponent", function () {
      return AlbumFilesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlbumFilesComponent = /*#__PURE__*/function () {
      function AlbumFilesComponent() {
        _classCallCheck(this, AlbumFilesComponent);
      }

      _createClass(AlbumFilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlbumFilesComponent;
    }();

    AlbumFilesComponent.ɵfac = function AlbumFilesComponent_Factory(t) {
      return new (t || AlbumFilesComponent)();
    };

    AlbumFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumFilesComponent,
      selectors: [["app-album-files"]],
      decls: 2,
      vars: 0,
      template: function AlbumFilesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "album-files works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWxidW0vYWxidW0tZmlsZXMvYWxidW0tZmlsZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumFilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-files',
          templateUrl: './album-files.component.html',
          styleUrls: ['./album-files.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/album/album.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/album/album.component.ts ***!
    \***********************************************/

  /*! exports provided: AlbumComponent */

  /***/
  function srcAppCoreAlbumAlbumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumComponent", function () {
      return AlbumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _album_card_album_card_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./album-card/album-card.service */
    "./src/app/core/album/album-card/album-card.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _album_card_album_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./album-card/album-card.component */
    "./src/app/core/album/album-card/album-card.component.ts");

    function AlbumComponent_mat_grid_tile_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-album-card", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("albumCard", card_r1);
      }
    }

    var AlbumComponent = /*#__PURE__*/function () {
      function AlbumComponent(service, dialog) {
        _classCallCheck(this, AlbumComponent);

        this.service = service;
        this.dialog = dialog;
        this.albumCardsList = [];
      }

      _createClass(AlbumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
        } // toggleSelected(i): void {
        //   this.albumCards[i].active = !this.albumCards[i].active;
        //   // for (let k = 0; k < 6; k++) {
        //   //   this.selected[k] = false;
        //   // }
        //   // this.selected[i] = true;
        // }

      }, {
        key: "addData",
        value: function addData() {
          var _this = this;

          // const dialogRef = this.dialog.open(AlbumDialogComponent, {
          //   width: '300px',
          //   data: {id: 1, url: '1234.png', description: 'Hello man!'}
          // });
          //
          // dialogRef.afterClosed().subscribe(result => {
          //   console.log('Closed the dialog - result: ' + result);
          //   // this.url = result;
          // });
          this.service.addCards().subscribe(function (response) {
            _this.albumCardsList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this2 = this;

          this.service.getCards().subscribe(function (response) {
            _this2.albumCardsList = response;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "deleteData",
        value: function deleteData() {
          this.service.deleteCards().subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return AlbumComponent;
    }();

    AlbumComponent.ɵfac = function AlbumComponent_Factory(t) {
      return new (t || AlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_album_card_album_card_service__WEBPACK_IMPORTED_MODULE_1__["AlbumCardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumComponent,
      selectors: [["app-album"]],
      decls: 18,
      vars: 1,
      consts: [[2, "position", "fixed", "width", "20%", "left", "75%", "display", "flex", "justify-content", "space-between", "z-index", "2"], ["mat-raised-button", "", "color", "primary", 2, "width", "100px"], ["cols", "2", "rowHeight", "16:9"], [4, "ngFor", "ngForOf"], ["mat-fab", "", 2, "position", "fixed", "right", "260px", "bottom", "60px", 3, "click"], ["mat-fab", "", 2, "position", "fixed", "right", "160px", "bottom", "60px", 3, "click"], ["mat-fab", "", 2, "position", "fixed", "right", "60px", "bottom", "60px", 3, "click"], [2, "width", "100%", "height", "100%", "margin", "auto", 3, "albumCard"]],
      template: function AlbumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Stop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AlbumComponent_mat_grid_tile_8_Template, 2, 1, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_Template_button_click_9_listener() {
            return ctx.addData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_Template_button_click_12_listener() {
            return ctx.getData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "get_app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumComponent_Template_button_click_15_listener() {
            return ctx.deleteData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumCardsList);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _album_card_album_card_component__WEBPACK_IMPORTED_MODULE_7__["AlbumCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYWxidW0vYWxidW0uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album',
          templateUrl: './album.component.html',
          styleUrls: ['./album.component.scss']
        }]
      }], function () {
        return [{
          type: _album_card_album_card_service__WEBPACK_IMPORTED_MODULE_1__["AlbumCardService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _album_album_files_album_files_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./album/album-files/album-files.component */
    "./src/app/core/album/album-files/album-files.component.ts");
    /* harmony import */


    var _album_album_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./album/album.component */
    "./src/app/core/album/album.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/core/home/home.component.ts");
    /* harmony import */


    var _home_home_dialog_home_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home-dialog/home-dialog.component */
    "./src/app/core/home/home-dialog/home-dialog.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _album_album_dialog_album_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./album/album-dialog/album-dialog.component */
    "./src/app/core/album/album-dialog/album-dialog.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _album_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./album/album-card/album-card.component */
    "./src/app/core/album/album-card/album-card.component.ts");
    /* harmony import */


    var _zen_zen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./zen/zen.component */
    "./src/app/core/zen/zen.component.ts");
    /* harmony import */


    var _journal_journal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./journal/journal.component */
    "./src/app/core/journal/journal.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)();
      },
      providers: [// AlbumCardService,
        // JournalService,
      ],
      imports: [[_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_2__["AlbumComponent"], _home_home_dialog_home_dialog_component__WEBPACK_IMPORTED_MODULE_4__["HomeDialogComponent"], _album_album_files_album_files_component__WEBPACK_IMPORTED_MODULE_1__["AlbumFilesComponent"], _album_album_dialog_album_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AlbumDialogComponent"], _album_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_17__["AlbumCardComponent"], _zen_zen_component__WEBPACK_IMPORTED_MODULE_18__["ZenComponent"], _journal_journal_component__WEBPACK_IMPORTED_MODULE_19__["JournalComponent"]],
        imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _album_album_component__WEBPACK_IMPORTED_MODULE_2__["AlbumComponent"], _home_home_dialog_home_dialog_component__WEBPACK_IMPORTED_MODULE_4__["HomeDialogComponent"], _album_album_files_album_files_component__WEBPACK_IMPORTED_MODULE_1__["AlbumFilesComponent"], _album_album_dialog_album_dialog_component__WEBPACK_IMPORTED_MODULE_15__["AlbumDialogComponent"], _album_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_17__["AlbumCardComponent"], _zen_zen_component__WEBPACK_IMPORTED_MODULE_18__["ZenComponent"], _journal_journal_component__WEBPACK_IMPORTED_MODULE_19__["JournalComponent"]],
          imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]],
          providers: [// AlbumCardService,
            // JournalService,
          ],
          bootstrap: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/home/home-dialog/home-dialog.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/home/home-dialog/home-dialog.component.ts ***!
    \****************************************************************/

  /*! exports provided: HomeDialogComponent */

  /***/
  function srcAppCoreHomeHomeDialogHomeDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeDialogComponent", function () {
      return HomeDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _home_files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../home-files.service */
    "./src/app/core/home/home-files.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["fileInput"];

    var HomeDialogComponent = /*#__PURE__*/function () {
      function HomeDialogComponent(service, dialogRef, data) {
        _classCallCheck(this, HomeDialogComponent);

        this.service = service;
        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(HomeDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "readDialog",
        value: function readDialog() {
          console.log(this.data);
        }
      }, {
        key: "fileChanged",
        value: function fileChanged(fileChangedEvent) {
          this.fileData = fileChangedEvent.target.files[0];
          this.data.url = this.fileData.name;
          console.log(this.fileData);
          console.log(this.data);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          var files = this.fileInput.nativeElement.files;

          if (files.length === 0) {
            return;
          }

          return this.service.sendFiles(files).subscribe(function (response) {
            console.log(response);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return HomeDialogComponent;
    }();

    HomeDialogComponent.ɵfac = function HomeDialogComponent_Factory(t) {
      return new (t || HomeDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_files_service__WEBPACK_IMPORTED_MODULE_2__["HomeFilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    HomeDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeDialogComponent,
      selectors: [["app-home-dialog"]],
      viewQuery: function HomeDialogComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 21,
      vars: 0,
      consts: [["mat-dialog-title", ""], ["matInput", ""], ["mat-raised-button", "", "color", "primary", 3, "click"], ["hidden", "true", "type", "file", "onclick", "this.value=null", 3, "change"], ["fileInput", ""], ["mat-raised-button", "", 3, "click"]],
      template: function HomeDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lab entry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeDialogComponent_Template_button_click_10_listener() {
            return ctx.uploadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Upload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeDialogComponent_Template_input_change_12_listener($event) {
            return ctx.fileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeDialogComponent_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return _r0.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select file ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-dialog-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeDialogComponent_Template_button_click_17_listener() {
            return ctx.readDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeDialogComponent_Template_button_click_19_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLWRpYWxvZy9ob21lLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-dialog',
          templateUrl: './home-dialog.component.html',
          styleUrls: ['./home-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _home_files_service__WEBPACK_IMPORTED_MODULE_2__["HomeFilesService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/home/home-files.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/home/home-files.service.ts ***!
    \*************************************************/

  /*! exports provided: HomeFilesService */

  /***/
  function srcAppCoreHomeHomeFilesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeFilesService", function () {
      return HomeFilesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../env */
    "./src/app/env.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var HomeFilesService = /*#__PURE__*/function () {
      function HomeFilesService(http) {
        _classCallCheck(this, HomeFilesService);

        this.http = http;
      }

      _createClass(HomeFilesService, [{
        key: "sendFiles",
        value: function sendFiles(files) {
          var formData = new FormData();
          formData.append('file', files[0], files[0].name);
          console.log(formData);
          return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + '/files/upload', formData);
        }
      }]);

      return HomeFilesService;
    }();

    HomeFilesService.ɵfac = function HomeFilesService_Factory(t) {
      return new (t || HomeFilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    HomeFilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HomeFilesService,
      factory: HomeFilesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFilesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCoreHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_dialog_home_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-dialog/home-dialog.component */
    "./src/app/core/home/home-dialog/home-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(dialog) {
        _classCallCheck(this, HomeComponent);

        this.dialog = dialog;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this3 = this;

          var dialogRef = this.dialog.open(_home_dialog_home_dialog_component__WEBPACK_IMPORTED_MODULE_1__["HomeDialogComponent"], {
            width: '300px',
            data: {
              id: 1,
              url: '1234.png',
              description: 'Hello man!'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            console.log('Closed the dialog - result: ' + result);
            _this3.url = result;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "w3-display-container"], ["mat-fab", "", "aria-label", "Add another element", 2, "position", "absolute", "right", "60px", "bottom", "60px", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() {
            return ctx.openDialog();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "publish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "snack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/journal/journal.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/journal/journal.component.ts ***!
    \***************************************************/

  /*! exports provided: JournalComponent */

  /***/
  function srcAppCoreJournalJournalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JournalComponent", function () {
      return JournalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _journal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./journal.service */
    "./src/app/core/journal/journal.service.ts");

    function JournalComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Week");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.Week, " ");
      }
    }

    function JournalComponent_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.Mon, " ");
      }
    }

    function JournalComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.Tue, " ");
      }
    }

    function JournalComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r21.Wed, " ");
      }
    }

    function JournalComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Thu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r22.Thu, " ");
      }
    }

    function JournalComponent_th_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fri");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r23 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.Fri, " ");
      }
    }

    function JournalComponent_th_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sat");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.Sat, " ");
      }
    }

    function JournalComponent_th_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sun");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function JournalComponent_td_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.Sun, " ");
      }
    }

    function JournalComponent_tr_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
      }
    }

    function JournalComponent_tr_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
      }
    }

    var JournalComponent = /*#__PURE__*/function () {
      function JournalComponent(service) {
        _classCallCheck(this, JournalComponent);

        this.service = service; // this.monthTable = [
        //   {Week: 36, Mon: 1234, Tue: 1.0, Wed: 2.0, Thu: 3.0, Fri: 4.0, Sat: 5.0, Sun: 6.0},
        //   {Week: 37, Mon: 7.0, Tue: 8.0, Wed: 9.0, Thu: 10.0, Fri: 11.0, Sat: 12.0, Sun: 13.0},
        // ];
      }

      _createClass(JournalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMonth();
        }
      }, {
        key: "getMonth",
        value: function getMonth() {
          var _this4 = this;

          this.service.getMonth().subscribe(function (response) {
            _this4.monthTable = response.data;
            _this4.displayedColumns = response.header;
            _this4.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this4.monthTable);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return JournalComponent;
    }();

    JournalComponent.ɵfac = function JournalComponent_Factory(t) {
      return new (t || JournalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_journal_service__WEBPACK_IMPORTED_MODULE_2__["JournalService"]));
    };

    JournalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JournalComponent,
      selectors: [["app-journal"]],
      decls: 29,
      vars: 3,
      consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Week"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Mon"], ["matColumnDef", "Tue"], ["matColumnDef", "Wed"], ["matColumnDef", "Thu"], ["matColumnDef", "Fri"], ["matColumnDef", "Sat"], ["matColumnDef", "Sun"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
      template: function JournalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Material table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JournalComponent_th_4_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, JournalComponent_td_5_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JournalComponent_th_7_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, JournalComponent_td_8_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, JournalComponent_th_10_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JournalComponent_td_11_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, JournalComponent_th_13_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JournalComponent_td_14_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, JournalComponent_th_16_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JournalComponent_td_17_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JournalComponent_th_19_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, JournalComponent_td_20_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, JournalComponent_th_22_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, JournalComponent_td_23_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, JournalComponent_th_25_Template, 2, 0, "th", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, JournalComponent_td_26_Template, 2, 1, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, JournalComponent_tr_27_Template, 1, 0, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, JournalComponent_tr_28_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.monthTable);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
      styles: [".mat-badge-content[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.83)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.67)/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px;\n}\n.mat-body-strong[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%] {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%] {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.05em;\n  margin: 0 0 56px;\n}\n.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%] {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.02em;\n  margin: 0 0 64px;\n}\n.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%] {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: -0.005em;\n  margin: 0 0 64px;\n}\n.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%] {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n}\n.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-checkbox[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  line-height: 24px;\n}\n.mat-chip[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.mat-table[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-calendar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-calendar-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400;\n}\n.mat-expansion-panel-content[_ngcontent-%COMP%] {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.34375em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 150%;\n  line-height: 1.125;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  height: 1.5em;\n  width: 1.5em;\n}\n.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 1.125em;\n  line-height: 1.125;\n}\n.mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent;\n}\n.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.34374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-label-wrapper[_ngcontent-%COMP%] {\n  top: -0.84375em;\n  padding-top: 0.84375em;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.34375em;\n}\n.mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.34375em;\n}\n.mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  font-size: 75%;\n  margin-top: 0.6666666667em;\n  top: calc(100% - 1.7916666667em);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.4375em 0;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.3333533333%;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.28125em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  bottom: 1.25em;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%] {\n  margin-top: 0.5416666667em;\n  top: calc(100% - 1.6666666667em);\n}\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28122em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.28121em) scale(0.75);\n  }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n    transform: translateY(-1.2812em) scale(0.75);\n  }\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 0.25em 0 0.75em 0;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.09375em;\n  margin-top: -0.5em;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-0.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  padding: 1em 0 1em 0;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  top: 1.84375em;\n  margin-top: -0.25em;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59375em) scale(0.75);\n  width: 133.3333333333%;\n}\n.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown)    + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  transform: translateY(-1.59374em) scale(0.75);\n  width: 133.3333433333%;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\ninput.mat-input-element[_ngcontent-%COMP%] {\n  margin-top: -0.0625em;\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n}\n.mat-radio-button[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-select-trigger[_ngcontent-%COMP%] {\n  height: 1.125em;\n}\n.mat-slide-toggle-content[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-stepper-vertical[_ngcontent-%COMP%], .mat-stepper-horizontal[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-step-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.mat-step-sub-label-error[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.mat-step-label-error[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.mat-step-label-selected[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-tab-group[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n  margin: 0;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n.mat-tooltip-handset[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.mat-list-item[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 14px;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  box-sizing: border-box;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2) {\n  font-size: 12px;\n}\n.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500;\n}\n.mat-option[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  letter-spacing: normal;\n}\n.mat-simple-snackbar[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n.mat-tree[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n}\n.mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media screen and (-ms-high-contrast: active) {\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n    opacity: 0.6;\n  }\n}\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n@-webkit-keyframes cdk-text-field-autofill-start {\n  \n}\n@keyframes cdk-text-field-autofill-start {\n  \n}\n@-webkit-keyframes cdk-text-field-autofill-end {\n  \n}\n@keyframes cdk-text-field-autofill-end {\n  \n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  -webkit-animation: cdk-text-field-autofill-start 0s 1ms;\n          animation: cdk-text-field-autofill-start 0s 1ms;\n}\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  -webkit-animation: cdk-text-field-autofill-end 0s 1ms;\n          animation: cdk-text-field-autofill-end 0s 1ms;\n}\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n.mat-border-primary[_ngcontent-%COMP%] {\n  border-left: solid 8px #00695c;\n  border-right: solid 8px #00695c;\n}\n.mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.mat-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option[_ngcontent-%COMP%]:hover:not(.mat-option-disabled), .mat-option[_ngcontent-%COMP%]:focus:not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple):not(.mat-option-disabled) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-option.mat-active[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.04);\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-option.mat-option-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #00695c;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #e040fb;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-disabled) {\n  color: #f44336;\n}\n.mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-optgroup-disabled[_ngcontent-%COMP%]   .mat-optgroup-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-pseudo-checkbox[_ngcontent-%COMP%]::after {\n  color: #fafafa;\n}\n.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  color: #b0b0b0;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #00695c;\n}\n.mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #e040fb;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-checked[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-pseudo-checkbox-indeterminate[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%], .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled[_ngcontent-%COMP%] {\n  background: #b0b0b0;\n}\n.mat-elevation-z0[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z1[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z2[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z3[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z4[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z5[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z7[_ngcontent-%COMP%] {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z9[_ngcontent-%COMP%] {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z10[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z11[_ngcontent-%COMP%] {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z12[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z13[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z14[_ngcontent-%COMP%] {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z15[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z16[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z17[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z18[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z19[_ngcontent-%COMP%] {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z20[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z21[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z22[_ngcontent-%COMP%] {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z23[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-elevation-z24[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n}\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-theme-loaded-marker[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover) {\n  background: white;\n}\n.mat-autocomplete-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #00695c;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  outline: solid 1px;\n  border-radius: 0;\n}\n.mat-badge-accent[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #e040fb;\n  color: white;\n}\n.mat-badge-warn[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  color: white;\n  background: #f44336;\n}\n.mat-badge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-badge-hidden[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  display: none;\n}\n.mat-badge-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-badge-content[_ngcontent-%COMP%] {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: transform 200ms ease-in-out;\n  transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none;\n}\n.ng-animate-disabled[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%], .mat-badge-content._mat-animation-noopable[_ngcontent-%COMP%] {\n  transition: none;\n}\n.mat-badge-content.mat-badge-active[_ngcontent-%COMP%] {\n  transform: none;\n}\n.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  line-height: 16px;\n}\n.mat-badge-small.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -8px;\n}\n.mat-badge-small.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -8px;\n}\n.mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -16px;\n}\n.mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -16px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -16px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -8px;\n}\n.mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -8px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-small.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -8px;\n}\n.mat-badge-medium[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n}\n.mat-badge-medium.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -11px;\n}\n.mat-badge-medium.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -11px;\n}\n.mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -22px;\n}\n.mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -22px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -11px;\n}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -11px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-medium.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -11px;\n}\n.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  line-height: 28px;\n}\n.mat-badge-large.mat-badge-above[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  top: -14px;\n}\n.mat-badge-large.mat-badge-below[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  bottom: -14px;\n}\n.mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -28px;\n}\n.mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -28px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -28px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-before[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  left: auto;\n  right: -14px;\n}\n.mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: -14px;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-badge-large.mat-badge-overlap.mat-badge-after[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%] {\n  right: auto;\n  left: -14px;\n}\n.mat-bottom-sheet-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%] {\n  color: inherit;\n  background: transparent;\n}\n.mat-button.mat-primary[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-button[disabled][disabled][_ngcontent-%COMP%], .mat-icon-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-icon-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-icon-button[disabled][disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-stroked-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-stroked-button[disabled][disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-primary[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-accent[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button.mat-warn[_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%], .mat-stroked-button[disabled][_ngcontent-%COMP%]   .mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  background-color: currentColor;\n}\n.mat-button-focus-overlay[_ngcontent-%COMP%] {\n  background: black;\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([disabled]) {\n  border-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white;\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-flat-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-flat-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-flat-button[disabled][disabled][_ngcontent-%COMP%], .mat-raised-button.mat-primary[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-accent[disabled][_ngcontent-%COMP%], .mat-raised-button.mat-warn[disabled][_ngcontent-%COMP%], .mat-raised-button[disabled][disabled][_ngcontent-%COMP%], .mat-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-fab[disabled][disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-primary[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-accent[disabled][_ngcontent-%COMP%], .mat-mini-fab.mat-warn[disabled][_ngcontent-%COMP%], .mat-mini-fab[disabled][disabled][_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-flat-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-flat-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-raised-button.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-mini-fab.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-stroked-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-flat-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.mat-raised-button[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]), .mat-mini-fab[_ngcontent-%COMP%]:not([disabled]):active:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]), .mat-mini-fab[disabled][_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone[_ngcontent-%COMP%], .mat-button-toggle-group[_ngcontent-%COMP%] {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-button-toggle[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  background: white;\n}\n.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle-focus-overlay[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]    + .mat-button-toggle[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-button-toggle-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee;\n}\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-button-toggle-disabled.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n}\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%] {\n  border: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-card[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card.mat-card-flat[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox-checkmark[_ngcontent-%COMP%] {\n  fill: #fafafa;\n}\n.mat-checkbox-checkmark-path[_ngcontent-%COMP%] {\n  stroke: #fafafa !important;\n}\n.mat-checkbox-mixedmark[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n}\n.mat-checkbox-indeterminate.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-primary[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-checkbox-indeterminate.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-accent[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-checkbox-indeterminate.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-checked.mat-warn[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-checkbox-disabled.mat-checkbox-checked[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-disabled.mat-checkbox-indeterminate[_ngcontent-%COMP%]   .mat-checkbox-background[_ngcontent-%COMP%] {\n  background-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]:not(.mat-checkbox-checked)   .mat-checkbox-frame[_ngcontent-%COMP%] {\n  border-color: #b0b0b0;\n}\n.mat-checkbox-disabled[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-checkbox[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-primary   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #00695c;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-accent   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #e040fb;\n}\n.mat-checkbox-checked[_ngcontent-%COMP%]:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%], .mat-checkbox[_ngcontent-%COMP%]:active:not(.mat-checkbox-disabled).mat-warn   .mat-ripple-element[_ngcontent-%COMP%] {\n  background: #f44336;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled):active {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]:not(.mat-chip-disabled)   .mat-chip-remove[_ngcontent-%COMP%]:hover {\n  opacity: 0.54;\n}\n.mat-chip.mat-standard-chip.mat-chip-disabled[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip[_ngcontent-%COMP%]::after {\n  background: black;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-chip-remove[_ngcontent-%COMP%] {\n  color: white;\n  opacity: 0.4;\n}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.mat-table[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-calendar-arrow[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.54);\n}\n.mat-datepicker-toggle[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-next-button[_ngcontent-%COMP%], .mat-datepicker-content[_ngcontent-%COMP%]   .mat-calendar-previous-button[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-table-header[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-table-header-divider[_ngcontent-%COMP%]::after {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-calendar-body-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-calendar-body-cell-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-cell[_ngcontent-%COMP%]:not(.mat-calendar-body-disabled):hover    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-keyboard-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected), .cdk-program-focused[_ngcontent-%COMP%]   .mat-calendar-body-active[_ngcontent-%COMP%]    > .mat-calendar-body-cell-content[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-today[_ngcontent-%COMP%]:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18);\n}\n.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n.mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 105, 92, 0.4);\n}\n.mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(224, 64, 251, 0.4);\n}\n.mat-datepicker-content.mat-accent[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-disabled[_ngcontent-%COMP%]    > .mat-calendar-body-selected[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.4);\n}\n.mat-datepicker-content.mat-warn[_ngcontent-%COMP%]   .mat-calendar-body-today.mat-calendar-body-selected[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px white;\n}\n.mat-datepicker-content-touch[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-datepicker-toggle-active[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-datepicker-toggle-active.mat-accent[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-datepicker-toggle-active.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-dialog-container[_ngcontent-%COMP%] {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-divider[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-divider-vertical[_ngcontent-%COMP%] {\n  border-right-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%] {\n  background: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-action-row[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-keyboard-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]   .mat-expansion-panel-header.cdk-program-focused[_ngcontent-%COMP%]:not([aria-disabled=true]), .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded)   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover:not([aria-disabled=true]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded):not([aria-disabled=true])   .mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\n    background: white;\n  }\n}\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-indicator[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.26);\n}\n.mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .mat-expansion-panel-header[aria-disabled=true][_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-label.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-focused[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid)   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #00695c;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-accent   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #e040fb;\n}\n.mat-form-field-type-mat-native-select.mat-focused[_ngcontent-%COMP%]:not(.mat-form-field-invalid).mat-warn   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label.mat-accent[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]   .mat-form-field-required-marker[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-form-field.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-ripple.mat-accent[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-error[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-hint[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-legacy.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-standard[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-standard.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: rgba(0, 0, 0, 0.42);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-fill.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]::before {\n  background-color: transparent;\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-form-field-appearance-outline.mat-focused[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-form-field-appearance-outline.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-outline-thick[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-form-field-appearance-outline.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-outline[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.06);\n}\n.mat-icon.mat-primary[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-icon.mat-accent[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-icon.mat-warn[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field-type-mat-native-select[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-input-element[_ngcontent-%COMP%]:disabled, .mat-form-field-type-mat-native-select.mat-form-field-disabled[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #00695c;\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-moz-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-input-element[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #e040fb;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%], .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: #f44336;\n}\n.mat-form-field-type-mat-native-select.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]::after {\n  color: #f44336;\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-list-item-disabled[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n}\n.mat-list-option[_ngcontent-%COMP%]:hover, .mat-list-option[_ngcontent-%COMP%]:focus, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-nav-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover, .mat-action-list[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-list-single-selected-option[_ngcontent-%COMP%], .mat-list-single-selected-option[_ngcontent-%COMP%]:hover, .mat-list-single-selected-option[_ngcontent-%COMP%]:focus {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-menu-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-menu-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-menu-item[_ngcontent-%COMP%] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-menu-item[disabled][_ngcontent-%COMP%], .mat-menu-item[disabled][_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-menu-item[_ngcontent-%COMP%]   .mat-icon-no-color[_ngcontent-%COMP%], .mat-menu-item-submenu-trigger[_ngcontent-%COMP%]::after {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-menu-item[_ngcontent-%COMP%]:hover:not([disabled]), .mat-menu-item.cdk-program-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item.cdk-keyboard-focused[_ngcontent-%COMP%]:not([disabled]), .mat-menu-item-highlighted[_ngcontent-%COMP%]:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04);\n}\n.mat-paginator[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-decrement[_ngcontent-%COMP%], .mat-paginator-increment[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-paginator-first[_ngcontent-%COMP%], .mat-paginator-last[_ngcontent-%COMP%] {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n}\n.mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-decrement[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-increment[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-first[_ngcontent-%COMP%], .mat-icon-button[disabled][_ngcontent-%COMP%]   .mat-paginator-last[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #b2dfdb;\n}\n.mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n}\n.mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #00695c;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #ea80fc;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #ea80fc;\n}\n.mat-progress-bar.mat-accent[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #e040fb;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-background[_ngcontent-%COMP%] {\n  fill: #ffcdd2;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-buffer[_ngcontent-%COMP%] {\n  background-color: #ffcdd2;\n}\n.mat-progress-bar.mat-warn[_ngcontent-%COMP%]   .mat-progress-bar-fill[_ngcontent-%COMP%]::after {\n  background-color: #f44336;\n}\n.mat-progress-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #00695c;\n}\n.mat-progress-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-accent[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #e040fb;\n}\n.mat-progress-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .mat-spinner.mat-warn[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #f44336;\n}\n.mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.54);\n}\n.mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #00695c;\n}\n.mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-primary.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-primary[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #e040fb;\n}\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-accent[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #f44336;\n}\n.mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]:not(.mat-radio-persistent-ripple), .mat-radio-button.mat-warn.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-persistent-ripple[_ngcontent-%COMP%], .mat-radio-button.mat-warn[_ngcontent-%COMP%]:active   .mat-radio-persistent-ripple[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-radio-button.mat-radio-disabled.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-ripple[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button.mat-radio-disabled[_ngcontent-%COMP%]   .mat-radio-label-content[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-radio-button[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-select-placeholder[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-select-panel[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-select-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-select-panel[_ngcontent-%COMP%]   .mat-option.mat-selected[_ngcontent-%COMP%]:not(.mat-option-multiple) {\n  background: rgba(0, 0, 0, 0.12);\n}\n.mat-form-field.mat-focused.mat-primary[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #00695c;\n}\n.mat-form-field.mat-focused.mat-accent[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-form-field.mat-focused.mat-warn[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-invalid[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-form-field[_ngcontent-%COMP%]   .mat-select.mat-select-disabled[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-drawer-container[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-drawer.mat-drawer-push[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-drawer[_ngcontent-%COMP%]:not(.mat-drawer-side) {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side[_ngcontent-%COMP%] {\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%] {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none;\n}\n[dir=rtl][_ngcontent-%COMP%]   .mat-drawer-side.mat-drawer-end[_ngcontent-%COMP%] {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12);\n}\n.mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(224, 64, 251, 0.54);\n}\n.mat-slide-toggle.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 105, 92, 0.54);\n}\n.mat-slide-toggle.mat-primary.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(244, 67, 54, 0.54);\n}\n.mat-slide-toggle.mat-warn.mat-checked[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-slide-toggle[_ngcontent-%COMP%]:not(.mat-checked)   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: black;\n}\n.mat-slide-toggle-thumb[_ngcontent-%COMP%] {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa;\n}\n.mat-slide-toggle-bar[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-primary[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-accent[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-warn[_ngcontent-%COMP%]   .mat-slider-thumb-label-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(224, 64, 251, 0.2);\n}\n.mat-slider[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%], .cdk-focused[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-background[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-track-fill[_ngcontent-%COMP%], .mat-slider-disabled[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-disabled[_ngcontent-%COMP%]:hover   .mat-slider-track-background[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]   .mat-slider-focus-ring[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.87);\n}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused[_ngcontent-%COMP%]   .mat-slider-thumb-label[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing)   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%], .mat-slider-min-value[_ngcontent-%COMP%]:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled   .mat-slider-thumb[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n.mat-slider-has-ticks[_ngcontent-%COMP%]   .mat-slider-wrapper[_ngcontent-%COMP%]::after {\n  border-color: rgba(0, 0, 0, 0.7);\n}\n.mat-slider-horizontal[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-slider-vertical[_ngcontent-%COMP%]   .mat-slider-ticks[_ngcontent-%COMP%] {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n}\n.mat-step-header.cdk-keyboard-focused[_ngcontent-%COMP%], .mat-step-header.cdk-program-focused[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n@media (hover: none) {\n  .mat-step-header[_ngcontent-%COMP%]:hover {\n    background: none;\n  }\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-optional[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-selected[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-error[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #f44336;\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-active[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-step-header[_ngcontent-%COMP%]   .mat-step-label.mat-step-label-error[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-stepper-vertical-line[_ngcontent-%COMP%]::before {\n  border-left-color: rgba(0, 0, 0, 0.12);\n}\n.mat-horizontal-stepper-header[_ngcontent-%COMP%]::before, .mat-horizontal-stepper-header[_ngcontent-%COMP%]::after, .mat-stepper-horizontal-line[_ngcontent-%COMP%] {\n  border-top-color: rgba(0, 0, 0, 0.12);\n}\n.mat-sort-header-arrow[_ngcontent-%COMP%] {\n  color: #757575;\n}\n.mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-nav-bar[_ngcontent-%COMP%], .mat-tab-group-inverted-header[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none;\n}\n.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.38);\n}\n.mat-tab-group[class*=mat-background-][_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar[class*=mat-background-][_ngcontent-%COMP%] {\n  border-bottom: none;\n  border-top: none;\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(178, 223, 219, 0.3);\n}\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-tab-group.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-primary.mat-background-primary[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(234, 128, 252, 0.3);\n}\n.mat-tab-group.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-tab-group.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-accent.mat-background-accent[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-warn.mat-background-warn[_ngcontent-%COMP%]   .mat-ink-bar[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(178, 223, 219, 0.3);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #00695c;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-primary[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(234, 128, 252, 0.3);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-accent[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-keyboard-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.cdk-program-focused[_ngcontent-%COMP%]:not(.mat-tab-disabled) {\n  background-color: rgba(255, 205, 210, 0.3);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-links[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%] {\n  color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-label.mat-tab-disabled[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-link.mat-tab-disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: white;\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-tab-header-pagination-disabled[_ngcontent-%COMP%]   .mat-tab-header-pagination-chevron[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.4);\n}\n.mat-tab-group.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%], .mat-tab-nav-bar.mat-background-warn[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n.mat-toolbar[_ngcontent-%COMP%] {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  background: #00695c;\n  color: white;\n}\n.mat-toolbar.mat-accent[_ngcontent-%COMP%] {\n  background: #e040fb;\n  color: white;\n}\n.mat-toolbar.mat-warn[_ngcontent-%COMP%] {\n  background: #f44336;\n  color: white;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%] {\n  background-color: currentColor;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-focused[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-value[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   .mat-form-field.mat-focused[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  caret-color: currentColor;\n}\n.mat-tooltip[_ngcontent-%COMP%] {\n  background: rgba(97, 97, 97, 0.9);\n}\n.mat-tree[_ngcontent-%COMP%] {\n  background: white;\n}\n.mat-tree-node[_ngcontent-%COMP%], .mat-nested-tree-node[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n}\n.mat-snack-bar-container[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n.mat-simple-snackbar-action[_ngcontent-%COMP%] {\n  color: #e040fb;\n}\n.mat-table[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.mat-header-row[_ngcontent-%COMP%] {\n  height: 50px;\n  background: #00695c;\n  border-bottom: solid 2px gray;\n}\n.mat-header-cell[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 50px;\n  color: white;\n  font-weight: bold;\n  text-align: center;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n}\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: auto;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  border: solid 0.5px gray;\n}\n.mat-cell[_ngcontent-%COMP%]:first-of-type, .mat-header-cell[_ngcontent-%COMP%]:first-of-type {\n  width: 50px;\n  color: white;\n  font-weight: bold;\n  background: #00695c;\n}\n.mat-cell[_ngcontent-%COMP%]:first-of-type, .mat-cell[_ngcontent-%COMP%]:last-of-type, .mat-header-cell[_ngcontent-%COMP%]:first-of-type, .mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n  padding: 0;\n}\n.mat-cell[_ngcontent-%COMP%]:not(:first-of-type):hover {\n  color: white;\n  background: darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tsaS93b3Jrc3BhY2UvYW5jaWVudC1sYWJvcmF0b3J5LW9uZS9mcm9udGVuZDEvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL190aGVtaW5nLnNjc3MiLCJzcmMvYXBwL2NvcmUvam91cm5hbC9qb3VybmFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUva2xpL3dvcmtzcGFjZS9hbmNpZW50LWxhYm9yYXRvcnktb25lL2Zyb250ZW5kMS9zcmMvdGhlbWUuc2NzcyIsIi9ob21lL2tsaS93b3Jrc3BhY2UvYW5jaWVudC1sYWJvcmF0b3J5LW9uZS9mcm9udGVuZDEvc3JjL2FwcC9jb3JlL2pvdXJuYWwvam91cm5hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvNkNBLGtDQUFBO0FBdWlEQSwyQ0FBQTtBQXdDQSxxQkFBQTtBQWwvQkU7RUFDRSxnQkFyTG9CO0VBc0xwQixlQXZMa0I7RUF3TGxCLGlEQUFBO0FDNy9ESjtBRGdnRUU7RUFFRSxjQUFBO0FDOS9ESjtBRGlnRUU7RUFDRSxlQUFBO0FDOS9ESjtBRG1zREU7RUE5TkUsd0RBQUE7RUFZRixzQkFBQTtFQW9ORSxnQkFBQTtBQy9yREo7QURrc0RFO0VBbk9FLHdEQUFBO0VBWUYsc0JBQUE7RUF5TkUsZ0JBQUE7QUM5ckRKO0FEaXNERTtFQXhPRSx3REFBQTtFQVlGLHNCQUFBO0VBOE5FLGdCQUFBO0FDN3JESjtBRGdzREU7RUE3T0Usd0RBQUE7RUFZRixzQkFBQTtFQW1PRSxnQkFBQTtBQzVyREo7QURrc0RFO0VBclBFLHFFQUFBO0VBOFBBLGdCQUFBO0FDdHNESjtBRHlzREU7RUFqUUUscUVBQUE7RUEwUUEsZ0JBQUE7QUM3c0RKO0FEZ3RERTtFQTdRRSx3REFBQTtFQVlGLHNCQUFBO0FDMThDRjtBRCtzREU7RUFqUkUsd0RBQUE7RUFZRixzQkFBQTtBQ3I4Q0Y7QUQ2c0RJO0VBQ0UsZ0JBQUE7QUMzc0ROO0FEK3NERTtFQXpSRSx3REFBQTtFQVlGLHNCQUFBO0FDNzdDRjtBRDhzREU7RUE3UkUsMERBQUE7RUFZRix1QkFBQTtFQW1SRSxnQkFBQTtBQzFzREo7QUQ2c0RFO0VBbFNFLHdEQUFBO0VBWUYsdUJBQUE7RUF3UkUsZ0JBQUE7QUN6c0RKO0FENHNERTtFQXZTRSx3REFBQTtFQVlGLHdCQUFBO0VBNlJFLGdCQUFBO0FDeHNESjtBRDJzREU7RUE1U0Usd0RBQUE7RUFZRixzQkFBQTtFQWtTRSxnQkFBQTtBQ3ZzREo7QURzOERFO0VBN2lCRSx3REFBQTtFQVlGLHNCQUFBO0FDaDZDRjtBRHVtRUU7O0VBR0ksaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNybUVOO0FENnJFRTtFQUNFLGlEQUFBO0FDMXJFSjtBRHl0RUU7RUFDRSxpREFBQTtBQ3R0RUo7QUR5dEVFO0VBRUksZUFBQTtFQUNBLGdCQUFBO0FDdnRFTjtBRDJ0RUU7RUFDRSxlQUFBO0FDeHRFSjtBRDJ0RUU7O0VBRUUsZUFBQTtBQ3h0RUo7QUQ2ekVFO0VBQ0UsaURBQUE7QUMxekVKO0FEOHpFRTtFQUNFLGlCQUFBO0FDM3pFSjtBRHU1RUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNwNUVKO0FEczVFSTs7RUFFRSxlQXpGc0I7QUMzekU1QjtBRDI3RUU7RUFDRSxpREFBQTtBQ3g3RUo7QUQyN0VFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDeDdFSjtBRDI3RUU7RUFDRSxlQUFBO0FDeDdFSjtBRHFrRkU7RUFDRSxpREFBQTtBQ2xrRko7QURxa0ZFO0VBQ0UsZUFySTBCO0FDNzdFOUI7QURxa0ZFOztFQUdJLGVBQUE7RUFDQSxnQkFBQTtBQ25rRk47QUR1a0ZFO0VBRUksZUFqSmlDO0VBa0pqQyxnQkFBQTtBQ3JrRk47QUQ0bEZFO0VBdHhDRSx3REFBQTtFQVlGLHNCQUFBO0FDNzBDRjtBRHNwRkU7RUFFSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BwRk47QUR3cEZFO0VBNzFDRSx3REFBQTtFQVlGLHNCQUFBO0FDbDBDRjtBRDBsSkU7RUE3eUdFLGtCQWVVO0VBZFYsZ0JBZVk7RUFkWixrQkFlWTtFQWRaLGlEQWVZO0VBR2Qsc0JBQUE7QUMxekNGO0FEc2xKRTtFQUNFLHlCQVB1QjtBQzVrSjNCO0FEeWxKSTs7RUFDRSxlQXZCMkI7RUF3QjNCLGtCQXRDVTtBQy9pSmhCO0FEeWxKSTs7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ3RsSk47QUR3bEpNOztFQUNFLGVBQUE7RUFDQSxrQkFoRFE7QUNyaUpoQjtBRDBsSkU7RUFDRSxnQkFBQTtFQUVBLHVDQUFBO0FDeGxKSjtBRDRsSkk7O0VBckVGLDZDQUFBO0VBRUEsc0JBQUE7QUNuaEpGO0FEOGxKSTtFQTdFRiw2Q0FBQTtFQUVBLHNCQUFBO0FDL2dKRjtBRGltSkU7RUFDRSxlQUFBO0VBQ0Esc0JBbkVpQjtBQzNoSnJCO0FEaW1KRTtFQUNFLGNBQUE7QUM5bEpKO0FEaW1KRTtFQUdFLGlCQWhFdUI7QUNoaUozQjtBRG1tSkU7RUFDRSxjQS9Fb0I7RUFnRnBCLDBCQXpFcUI7RUE2RXJCLGdDQUFBO0FDbm1KSjtBRDBwSUk7RUFDRSxzQkFKcUI7QUNucEkzQjtBRDBwSUk7RUFDRSxtQkFBQTtBQ3hwSU47QUQ0cElNOztFQXpESixvRkFBQTtFQUlBLGlEQUFBO0VBR0Esc0JBQUE7QUNwbUlGO0FENnBJTTtFQWhFSixzRkFBQTtFQUlBLGlEQUFBO0VBR0Esc0JBQUE7QUMvbElGO0FEZ3FJTTtFQXhFSixzRkFBQTtFQUlBLGlEQUFBO0VBR0Esc0JBQUE7QUMxbElGO0FEa3FJSTtFQUNFLGNBQUE7QUNocUlOO0FEbXFJSTtFQUdFLGNBekNxQjtBQzFuSTNCO0FEc3FJSTtFQUNFLDBCQWpEbUI7RUFxRG5CLGdDQUFBO0FDdnFJTjtBRDZxSUU7RUFHTTs7SUF2Rk4sNkNBQUE7RUNubElBO0VEaXJJTTtJQTlGTiw2Q0FBQTtFQ2hsSUE7RURzcklNO0lBdEdOLDRDQUFBO0VDN2tJQTtBQUNGO0FEaS9ISTtFQUNFLDBCQUFBO0FDLytITjtBRGsvSEk7RUFDRSxjQUFBO0VBQ0Esa0JBVDJCO0FDditIakM7QURvL0hNOztFQWhDSiw2Q0FBQTtFQUVBLHNCQUFBO0FDajlIRjtBRHcvSE07RUF6Q0osNkNBQUE7RUFFQSxzQkFBQTtBQzc4SEY7QURreElJO0VBQ0Usb0JBQUE7QUMvd0lOO0FEa3hJSTtFQUNFLGNBQUE7RUFDQSxtQkFUOEI7QUN2d0lwQztBRG94SU07O0VBdkNKLDZDQUFBO0VBRUEsc0JBQUE7QUMxdUlGO0FEd3hJTTtFQWhESiw2Q0FBQTtFQUVBLHNCQUFBO0FDdHVJRjtBRHNrRkU7O0VBR0UsZUFBQTtBQ3BrRko7QURvaEZFOztFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBQy9nRko7QURraEZJOztFQUNFLGVBd0NxQjtBQ3ZqRjNCO0FEeXRGRTtFQUNFLHFCQUFBO0FDdHRGSjtBRGkyRkU7RUFFSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQy8xRk47QUQ0NEZFOztFQUdJLGlEQUFBO0VBQ0EsZUFBQTtBQzE0Rk47QURtaUdFO0VBQ0UsaURBQUE7QUNoaUdKO0FEd21HRTtFQUNFLGlEQUFBO0FDcm1HSjtBRHdtR0U7RUFDRSxlQUFBO0FDcm1HSjtBRGd3R0U7RUFDRSxpREFBQTtBQzd2R0o7QURzNkdFO0VBRUksaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNwNkdOO0FEcy9HRTtFQUNFLGlEQUFBO0FDbi9HSjtBRHMvR0U7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUNwL0dOO0FEdy9HRTtFQUNFLG1CQUFBO0FDci9HSjtBRHcvR0U7RUFDRSxlQUFBO0FDci9HSjtBRHcvR0U7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7QUN0L0dOO0FEcXBIRTtFQUNFLGlEQUFBO0FDbHBISjtBRHFwSEU7RUFFSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ25wSE47QURrdEhFOzs7Ozs7O0VBaG9GRSx3REFBQTtFQVlGLHNCQUFBO0VBNG5GRSxTQUFBO0FDOXNISjtBRHd1SEU7RUFDRSxpREFBQTtFQUNBLGVBbkJvQjtFQW9CcEIsZ0JBbkIyQjtFQW9CM0IsbUJBcEIyQjtBQ2p0SC9CO0FEd3VIRTtFQUNFLGVBckI0QjtFQXNCNUIsZ0JBcEJBO0VBcUJBLG1CQXJCQTtBQ2h0SEo7QUQ2cUZFO0VBQ0UsaURBSFk7QUN2cUZoQjtBRDZxRkU7RUFDRSxpREFQWTtBQ25xRmhCO0FEK3FGSTtFQUNFLGVBQUE7QUM1cUZOO0FENjVFRTtFQVJBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQVFFLGNBQUE7RUFDQSxzQkFBQTtBQ3o1RUo7QUQ0NUVJO0VBQ0UsZUF5UXVCO0FDbnFGN0I7QURzcUZJO0VBQ0UsZUFBQTtBQ3BxRk47QURnNUVFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FDNTRFSjtBRCs0RUk7RUFDRSxlQThRdUI7QUMzcEY3QjtBRDhwRkk7RUFDRSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzVwRk47QURrcUZJO0VBQ0UsZUFBQTtBQy9wRk47QUQ2M0VFO0VBUkEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBUUUsY0FBQTtFQUNBLHNCQUFBO0FDejNFSjtBRDQzRUk7RUFDRSxlQTRSdUI7QUN0cEY3QjtBRHlwRkk7RUFDRSxlQUFBO0FDdnBGTjtBRGczRUU7RUFSQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFRRSxjQUFBO0VBQ0Esc0JBQUE7QUM1MkVKO0FEKzJFSTtFQUNFLGVBaVN1QjtBQzlvRjdCO0FEaXBGSTtFQUNFLGlEQTFDVTtFQTJDVixlQUFBO0VBQ0EsZ0JBQUE7QUMvb0ZOO0FENmlDRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtBQzNpQ047QURpa0NFO0VBckZFLHdEQUFBO0VBWUYsc0JBQUE7QUNuL0JGO0FEOHFIRTtFQUVJLGlEQUFBO0VBQ0EsZUFBQTtBQzVxSE47QURnckhFO0VBQ0UsY0FBQTtFQUVFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQzlxSE47QURrMklFO0VBQ0UsaURBQUE7QUMvMUlKO0FEazJJRTs7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUMvMUlKO0FENjFCRTtFQUNFLGdCQUFBO0VBSUEsa0JBQUE7QUM3MUJKO0FEbzJCSTtFQUNFLHdCQUFBO0FDbDJCTjtBRHMyQkU7RUFDRSxpQkFBQTtBQ24yQko7QURzMkJFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFDQSxtQkFBQTtBQ3AyQko7QUQ1WUk7RUFvdkNFLGFBQUE7QUNyMkJOO0FEMWFFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFHQSxVQUFBO0VBR0Esd0JBQUE7RUFDQSxxQkFBQTtBQ3lhSjtBRHZqQkU7RUFFRSxvQkFBQTtFQUdBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN1akJKO0FEbmpCRTtFQUNFLGVBQUE7RUFDQSxhQTNCNEI7QUNpbEJoQztBRHBqQkk7RUFHRSxhQUFBO0FDb2pCTjtBRDVpQkU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQTFDa0I7QUN5bEJ0QjtBRDNpQkU7RUFHRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQXBEa0I7RUF3RGxCLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN5aUJKO0FEdGlCRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGFBcEUyQjtFQXFFM0Isb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsVUFBQTtBQ3VpQko7QURyaUJJO0VBQ0UsVUFBQTtBQ3VpQk47QURqaUJNO0VBUEY7SUFRSSxZQUFBO0VDb2lCTjtBQUNGO0FEaGlCRTtFQUNFLCtCQXJGbUM7QUN3bkJ2QztBRDNoQkk7RUFDRSxVQUFBO0FDOGhCTjtBRHhoQkU7RUFDRSxrQkFBQTtFQUNBLGFBMUdrQjtFQStHbEIsYUFBQTtFQUlBLHNCQUFBO0VBR0EsY0FBQTtFQUNBLGVBQUE7QUNraEJKO0FEOWdCRTtFQUNFLGVBQUE7RUFLQSxXQUFBO0VBS0Esa0JBQUE7QUN5Z0JKO0FEaGJFO0VBQTBDLElBQUE7QUNvYjVDO0FEcGJFO0VBQTBDLElBQUE7QUNvYjVDO0FEbmJFO0VBQXdDLElBQUE7QUNzYjFDO0FEdGJFO0VBQXdDLElBQUE7QUNzYjFDO0FEcGJFO0VBRUUsdURBQUE7VUFBQSwrQ0FBQTtBQ3FiSjtBRGxiRTtFQUVFLHFEQUFBO1VBQUEsNkNBQUE7QUNvYko7QUQvYUU7RUFDRSxZQUFBO0FDa2JKO0FENWFFO0VBcUJBLHlCQUFBO0VBQ0Esa0NBQUE7RUFwQkUsdUJBQUE7RUFDQSwyQkFBQTtBQ2diSjtBRHZhRTtFQVNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFSRSxvQkFBQTtBQzJhSjtBQzVwQkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUQrcEJKO0FDNXBCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBRCtwQko7QUM1cEJFO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBRCtwQko7QUR1dUJFO0VBSUksb0NBQUE7QUN2dUJOO0FEcTBCRTtFQUNFLDBCQUFBO0FDbDBCSjtBRG8wQkk7RUFFRSwrQkFBQTtBQ24wQk47QUR1MEJJO0VBQ0UsK0JBQUE7QUNyMEJOO0FEdzBCSTtFQUNFLCtCQUFBO0VBQ0EsMEJBQUE7QUN0MEJOO0FEeTBCSTtFQUNFLDBCQUFBO0FDdjBCTjtBRDIwQkU7RUFDRSxjQUFBO0FDeDBCSjtBRDIwQkU7RUFDRSxjQUFBO0FDeDBCSjtBRDIwQkU7RUFDRSxjQUFBO0FDeDBCSjtBRDQxQkU7RUFDRSwwQkFBQTtBQ3oxQko7QUQ0MUJFO0VBQ0UsMEJBQUE7QUN6MUJKO0FEbzNCRTtFQUNFLDBCQUFBO0FDajNCSjtBRG0zQkk7RUFDRSxjQUFBO0FDajNCTjtBRHEzQkU7RUFDRSxjQVplO0FDdDJCbkI7QURxM0JFOztFQUVFLG1CQUFBO0FDbDNCSjtBRDAzQkU7Ozs7RUFJRSxtQkFBQTtBQ3YzQko7QUQwM0JFOztFQUVFLG1CQUFBO0FDdjNCSjtBRDQzQkk7O0VBQ0UsbUJBeENhO0FDaDFCbkI7QUQ2cklJO0VBajlJRix3SEFBQTtBQ3dSRjtBRHlySUk7RUFqOUlGLHlIQUFBO0FDNFJGO0FEcXJJSTtFQWo5SUYseUhBQUE7QUNnU0Y7QURpcklJO0VBajlJRix5SEFBQTtBQ29TRjtBRDZxSUk7RUFqOUlGLDBIQUFBO0FDd1NGO0FEeXFJSTtFQWo5SUYsMEhBQUE7QUM0U0Y7QURxcUlJO0VBajlJRiwySEFBQTtBQ2dURjtBRGlxSUk7RUFqOUlGLDJIQUFBO0FDb1RGO0FENnBJSTtFQWo5SUYsMkhBQUE7QUN3VEY7QUR5cElJO0VBajlJRiwySEFBQTtBQzRURjtBRHFwSUk7RUFqOUlGLDRIQUFBO0FDZ1VGO0FEaXBJSTtFQWo5SUYsNEhBQUE7QUNvVUY7QUQ2b0lJO0VBajlJRiw0SEFBQTtBQ3dVRjtBRHlvSUk7RUFqOUlGLDRIQUFBO0FDNFVGO0FEcW9JSTtFQWo5SUYsNEhBQUE7QUNnVkY7QURpb0lJO0VBajlJRiw0SEFBQTtBQ29WRjtBRDZuSUk7RUFqOUlGLDZIQUFBO0FDd1ZGO0FEeW5JSTtFQWo5SUYsNkhBQUE7QUM0VkY7QURxbklJO0VBajlJRiw2SEFBQTtBQ2dXRjtBRGluSUk7RUFqOUlGLDZIQUFBO0FDb1dGO0FENm1JSTtFQWo5SUYsOEhBQUE7QUN3V0Y7QUR5bUlJO0VBajlJRiw4SEFBQTtBQzRXRjtBRHFtSUk7RUFqOUlGLDhIQUFBO0FDZ1hGO0FEaW1JSTtFQWo5SUYsOEhBQUE7QUNvWEY7QUQ2bElJO0VBajlJRiw4SEFBQTtBQ3dYRjtBRGltSUU7RUFJRSx5QkFBQTtFQUNBLDBCQUFBO0FDam1JSjtBRHNtSUk7RUFDRSxhQUFBO0FDbm1JTjtBRG83QkU7RUFFRSxpQkFBQTtFQUNBLDBCQUFBO0FDbDdCSjtBRG5YRTtFQW5CQSwwSEFBQTtBQ3lZRjtBRHM3Qkk7RUFDRSxpQkFBQTtBQ3A3Qk47QURzN0JNO0VBQ0UsMEJBQUE7QUNwN0JSO0FENmhDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQzFoQ0o7QURqdUJJO0VBOHZERSxrQkFBQTtFQUNBLGdCQUFBO0FDMWhDTjtBRCtoQ0k7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUM1aENOO0FEaWlDSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQzloQ047QURraUNFO0VBQ0Usa0JBQUE7QUMvaENKO0FEbWlDSTtFQUNFLGFBQUE7QUNoaUNOO0FEcWlDSTtFQVdJLG1CQUFBO0VBTUYsMEJBQUE7QUNqakNOO0FEcWpDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDbGpDSjtBRHFqQ0U7O0VBRUUsZ0JBQUE7QUNsakNKO0FEdWpDRTtFQUVFLGVBQUE7QUNyakNKO0FEdTVCRTtFQUNFLFdBTm1CO0VBT25CLFlBUG1CO0VBUW5CLGlCQVJtQjtBQzU0QnZCO0FEdzVCSTtFQUNFLFNBQUE7QUN0NUJOO0FEMjVCSTtFQUNFLFlBQUE7QUN6NUJOO0FEODVCSTtFQUNFLFdBQUE7QUM1NUJOO0FEaTZCSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDLzVCTjtBRG82Qkk7RUFDRSxZQUFBO0FDbDZCTjtBRHU2Qkk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ3I2Qk47QUQyNkJNO0VBQ0UsVUFBQTtBQ3o2QlI7QUQ4NkJNO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUM1NkJSO0FEaTdCTTtFQUNFLFdBQUE7QUMvNkJSO0FEbzdCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDbDdCUjtBRCsyQkU7RUFDRSxXQVBxQjtFQVFyQixZQVJxQjtFQVNyQixpQkFUcUI7QUNuMkJ6QjtBRGczQkk7RUFDRSxVQUFBO0FDOTJCTjtBRG0zQkk7RUFDRSxhQUFBO0FDajNCTjtBRHMzQkk7RUFDRSxXQUFBO0FDcDNCTjtBRHkzQkk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ3YzQk47QUQ0M0JJO0VBQ0UsWUFBQTtBQzEzQk47QUQrM0JJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUM3M0JOO0FEbTRCTTtFQUNFLFdBQUE7QUNqNEJSO0FEczRCTTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDcDRCUjtBRHk0Qk07RUFDRSxZQUFBO0FDdjRCUjtBRDQ0Qk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQzE0QlI7QUR1MEJFO0VBQ0UsV0FMbUI7RUFNbkIsWUFObUI7RUFPbkIsaUJBUG1CO0FDN3pCdkI7QUR3MEJJO0VBQ0UsVUFBQTtBQ3QwQk47QUQyMEJJO0VBQ0UsYUFBQTtBQ3owQk47QUQ4MEJJO0VBQ0UsV0FBQTtBQzUwQk47QURpMUJJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUMvMEJOO0FEbzFCSTtFQUNFLFlBQUE7QUNsMUJOO0FEdTFCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDcjFCTjtBRDIxQk07RUFDRSxXQUFBO0FDejFCUjtBRDgxQk07RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQzUxQlI7QURpMkJNO0VBQ0UsWUFBQTtBQy8xQlI7QURvMkJNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNsMkJSO0FEbytCRTtFQWppREEsNkhBQUE7RUFtaURFLGlCQUFBO0VBQ0EsMEJBQUE7QUNqK0JKO0FEc2tDRTtFQUtFLGNBQUE7RUFDQSx1QkFBQTtBQ3ZrQ0o7QUR3aUNFO0VBQ0UsY0FBQTtBQ3RpQ0o7QUR3aUNFO0VBQ0UsY0FBQTtBQ3RpQ0o7QUR3aUNFO0VBQ0UsY0FBQTtBQ3RpQ0o7QUQwaUNJO0VBRUUsMEJBQUE7QUN6aUNOO0FEcytCRTtFQUNFLHlCQUFBO0FDcCtCSjtBRHUrQkU7RUFDRSx5QkFBQTtBQ3IrQko7QUR3K0JFO0VBQ0UseUJBQUE7QUN0K0JKO0FEeStCRTtFQUNFLDZCQUFBO0FDditCSjtBRHVqQ0k7RUFDRSxZQXRHdUI7RUF1R3ZCLDhCQUFBO0FDcmpDTjtBRHlqQ0U7RUFDRSxpQkFBQTtBQ3RqQ0o7QUQyakNFO0VBQ0UsaUNBQUE7QUN4akNKO0FEMmpDRTtFQUVFLDBCQUFBO0VBQ0EsdUJBQUE7QUN6akNKO0FEKy9CRTtFQUNFLFlBQUE7QUM3L0JKO0FEKy9CRTtFQUNFLFlBQUE7QUM3L0JKO0FEKy9CRTtFQUNFLFlBQUE7QUM3L0JKO0FEaWdDSTtFQUVFLDBCQUFBO0FDaGdDTjtBRG0vQkU7RUFDRSx5QkFBQTtBQ2ovQko7QURtL0JFO0VBQ0UseUJBQUE7QUNqL0JKO0FEbS9CRTtFQUNFLHlCQUFBO0FDai9CSjtBRHEvQkk7RUFFRSxxQ0FBQTtBQ3AvQk47QURrOUJFO0VBWEEsMENBRG1CO0FDbjhCckI7QURtOUJFO0VBZkEsMENBRG1CO0FDaDhCckI7QURvOUJFO0VBbkJBLDBDQURtQjtBQzc3QnJCO0FEL25CRTtFQW5CQSx3SEFBQTtBQ3NwQkY7QURub0JFO0VBbkJBLHlIQUFBO0FDMHBCRjtBRHZvQkU7RUFuQkEsMkhBQUE7QUM2cEJGO0FEMW9CRTtFQW5CQSx3SEFBQTtBQ2dxQkY7QUQ3b0JFO0VBbkJBLDJIQUFBO0FDb3FCRjtBRGpwQkU7RUFuQkEsNEhBQUE7QUN1cUJGO0FEcHBCRTtFQW5CQSx3SEFBQTtBQzBxQkY7QUR5akNFOztFQW51REEseUhBQUE7QUMrcUJGO0FEeWpDRTs7RUFFRSxnQkFBQTtBQ3RqQ0o7QUR5akNFO0VBQ0UsMEJBQUE7QUN0akNKO0FEd2pDSTtFQUNFLHFDQUFBO0FDdGpDTjtBRDBqQ0U7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDdmpDSjtBRHlqQ0k7RUFDRSx1QkFBQTtBQ3ZqQ047QUQyakNFO0VBQ0UsMENBQUE7QUN4akNKO0FEMmpDRTtFQUNFLGlCQUFBO0VBQ0EsMkNBQUE7QUN4akNKO0FENGpDSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ3pqQ047QUQ2akNFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQzFqQ0o7QUQ0akNJO0VBQ0UsMEJBQUE7QUMxakNOO0FEOGpDRTtFQUNFLDBCQUFBO0VBQ0EseUJBQUE7QUMzakNKO0FENmpDSTtFQUNFLGlCQUFBO0FDM2pDTjtBRDhqQ0k7RUFDRSx5QkFBQTtBQzVqQ047QURna0NFOztFQUVFLHFDQUFBO0FDN2pDSjtBRGlsQ0U7RUFFRSxpQkFBQTtFQUNBLDBCQUFBO0FDL2tDSjtBRDV0QkU7RUFuQkEseUhBQUE7QUNrdkJGO0FEL3RCRTtFQW5CQSx3SEFBQTtBQ3F2QkY7QURpbENFO0VBQ0UsMEJBQUE7QUM5a0NKO0FEK25DRTtFQUNFLGlDQUFBO0FDNW5DSjtBRCtuQ0U7RUFDRSxhQWRvQjtBQzltQ3hCO0FEK25DRTtFQUdFLDBCQUFBO0FDOW5DSjtBRGlvQ0U7RUFDRSx5QkF4Qm9CO0FDdG1DeEI7QURrb0NJO0VBQ0UseUJBQUE7QUMvbkNOO0FEa29DSTtFQUNFLHlCQUFBO0FDaG9DTjtBRG1vQ0k7RUFDRSx5QkFBQTtBQ2pvQ047QUR3b0NNO0VBQ0UseUJBdENXO0FDL2xDbkI7QUQwb0NNO0VBQ0UscUJBNUNXO0FDNWxDbkI7QUQ0b0NJO0VBQ0UsMEJBQUE7QUMxb0NOO0FEZ3BDRTtFQUNFLHVCQUFBO0FDN29DSjtBRGtwQ0k7O0VBQ0UsbUJBQUE7QUM5b0NOO0FEaXBDSTs7RUFDRSxtQkFBQTtBQzlvQ047QURpcENJOztFQUNFLG1CQUFBO0FDOW9DTjtBRGd0Q0U7RUExQ0EseUJBdUN3QjtFQXRDeEIsMEJBdUN3QjtBQ3pzQzFCO0FEb3FDRTtFQUNFLDBCQW9Dc0I7RUFuQ3RCLFlBQUE7QUNscUNKO0FEMnNDTTtFQWxnRUoseUhBQUE7QUMwekJGO0FENHNDTTtFQUNFLGFBQUE7QUMxc0NSO0FEOHNDSTtFQUNFLFlBQUE7QUM1c0NOO0FEK3NDSTtFQUNFLGlCQUFBO0FDN3NDTjtBRGt0Q0k7RUFqRUYseUJBd0JnRTtFQXZCaEUsWUF1QnlCO0FDcHFDM0I7QUQrb0NFO0VBQ0UsWUFvQnVCO0VBbkJ2QixZQUFBO0FDN29DSjtBRGtxQ0U7RUFUQSwwQ0FEbUI7QUNycENyQjtBRDBzQ0k7RUFyRUYseUJBd0JnRTtFQXZCaEUsWUF1QnlCO0FDenBDM0I7QURvb0NFO0VBQ0UsWUFvQnVCO0VBbkJ2QixZQUFBO0FDbG9DSjtBRHVwQ0U7RUFUQSwwQ0FEbUI7QUMxb0NyQjtBRG1zQ0k7RUF6RUYseUJBd0JnRTtFQXZCaEUsWUF1QnlCO0FDOW9DM0I7QUR5bkNFO0VBQ0UsWUFvQnVCO0VBbkJ2QixZQUFBO0FDdm5DSjtBRDRvQ0U7RUFUQSwwQ0FEbUI7QUMvbkNyQjtBRGt0Q0U7RUFDRSxpQkFBQTtBQy9zQ0o7QURrdENFOzs7O0VBSUUsbUJBQUE7QUMvc0NKO0FEa3RDRTs7RUFFRSx3Q0FBQTtBQy9zQ0o7QURrdENFO0VBQ0UsMEJBQUE7QUMvc0NKO0FEa3RDRTtFQUNFLDBCQUFBO0FDL3NDSjtBRDJ3Q0U7RUFDRSxxQ0FBQTtBQ3h3Q0o7QUQ2d0NFOzs7RUFHRSwwQkFBQTtBQzF3Q0o7QUQ2d0NFO0VBQ0UsMEJBQUE7QUMxd0NKO0FENndDRTtFQUNFLCtCQUFBO0FDMXdDSjtBRDZ3Q0U7RUFDRSwwQkFBQTtBQzF3Q0o7QUQ2d0NFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQzF3Q0o7QUQ2d0NFO0VBQ0UsMEJBQUE7QUMxd0NKO0FEZ3hDSTs7O0VBQ0UscUNBQUE7QUMzd0NOO0FEK3dDRTtFQUdFLGlDQUFBO0FDOXdDSjtBRGl4Q0U7RUFJSSxpQ0FBQTtBQ2p4Q047QURrc0NFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDL3JDSjtBRGtzQ0U7RUFJSSx1Q0FBQTtBQ2xzQ047QUQyc0NFO0VBQ0UsaUNBQUE7QUN4c0NKO0FEaXhDRTtFQXhzRUEsMEhBQUE7RUEwc0VFLHVCQUFBO0VBQ0EsMEJBQUE7QUM5d0NKO0FEK3FDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQzdxQ0o7QURnckNFO0VBSUkseUNBQUE7QUNqckNOO0FEMHJDRTtFQUNFLGlDQUFBO0FDeHJDSjtBRHFxQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNucUNKO0FEc3FDRTtFQUlJLHdDQUFBO0FDdnFDTjtBRGdyQ0U7RUFDRSxpQ0FBQTtBQzlxQ0o7QURxd0NFO0VBdHRFQSx3SEFBQTtBQ3E5QkY7QURxd0NFO0VBQ0UsY0FBQTtBQ2x3Q0o7QURvd0NJO0VBQ0UsY0FBQTtBQ2x3Q047QURxd0NJO0VBQ0UsY0FBQTtBQ253Q047QUQyeUNFO0VBMXdFQSw4SEFBQTtFQTR3RUUsaUJBQUE7RUFDQSwwQkFBQTtBQ3h5Q0o7QURzaEhFO0VBQ0UscUNBQUE7QUNuaEhKO0FEc2hIRTtFQUNFLHVDQUFBO0FDbmhISjtBRG16Q0U7RUFFRSxpQkFBQTtFQUNBLDBCQUFBO0FDanpDSjtBRC85QkU7RUFuQkEseUhBQUE7QUNxL0JGO0FEaXpDRTtFQUNFLHFDQUFBO0FDOXlDSjtBRHF6Q007RUFDRSwrQkFBQTtBQ2x6Q1I7QUR5ekNFO0VBQ0U7SUFFRSxpQkFBQTtFQ3Z6Q0o7QUFDRjtBRDB6Q0U7RUFDRSwwQkFBQTtBQ3h6Q0o7QUQyekNFOztFQUVFLDBCQUFBO0FDeHpDSjtBRDJ6Q0U7RUFDRSwwQkFBQTtBQ3h6Q0o7QUQwekNJOztFQUVFLGNBQUE7QUN4ekNOO0FEOG9HRTtFQUNFLHlCQVhZO0FDaG9HaEI7QUQ4b0dFO0VBQ0UseUJBZlk7QUM1bkdoQjtBRDhvR0U7RUFDRSxjQWxCb0I7QUN6bkd4QjtBRDZvR0k7RUFDRSxjQWhCcUI7QUMzbkczQjtBRDhvR0k7RUFDRSxjQW5CbUI7QUN6bkd6QjtBRGdwR0U7RUFDRSxjQTdCcUI7QUNobkd6QjtBRGdwR0U7RUFDRSxxQ0E5QnFCO0FDL21HekI7QURpcEdJO0VBQ0UseUJBaENzQjtBQzltRzVCO0FEZ3BHTTtFQUNFLHlCQXJDbUI7QUN6bUczQjtBRGlwR007RUFDRSx5QkF4Q2lCO0FDdm1HekI7QURxcEdJO0VBQ0UsY0E5Q3NCO0FDcG1HNUI7QURxcEdJO0VBQ0UsY0FwRHFCO0FDL2xHM0I7QURzcEdJO0VBQ0UsY0F2RG1CO0FDN2xHekI7QUQ0cEdJO0VBQ0UsY0FoRW1CO0FDemxHekI7QUQycEdNOztFQUVFLGNBcEVpQjtBQ3JsR3pCO0FENnBHSTs7RUFFRSx5QkExRW1CO0FDamxHekI7QUQrcEdFO0VBQ0UsY0EvRXFCO0FDN2tHekI7QUQrdkZJO0VBQ0UsMEJBTFU7QUN2dkZoQjtBRCt2Rkk7RUFDRSwwQkFUVTtBQ3B2RmhCO0FEZ3dGSTtFQUNFLHFDQVpjO0FDbHZGcEI7QURpd0ZJO0VBeDVDRiw0R0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUN0MkNGO0FEZ2lHSTtFQUNFLHFDQUpjO0FDemhHcEI7QURnaUdJO0VBaHNERiw0R0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUM3MUNGO0FEb29GSTtFQUNFLHFDQVBjO0FDMW5GcEI7QURvb0ZJO0VBQ0UscUNBVnVCO0FDeG5GN0I7QURxb0ZJO0VBQ0UscUNBYmM7QUN0bkZwQjtBRHVvRk07RUFDRSwwQkFqQmlCO0FDcG5GekI7QUR3b0ZNO0VBQ0UsNkJBQUE7QUN0b0ZSO0FENjRGSTtFQUNFLDBCQVRZO0FDajRGbEI7QUQ2NEZJO0VBQ0UsMEJBWmtCO0FDLzNGeEI7QUQrNEZNO0VBQ0UsY0FoQmtCO0FDNzNGMUI7QURnNUZNO0VBQ0UsY0FuQmlCO0FDMzNGekI7QURpNUZNO0VBQ0UsY0F0QmU7QUN6M0Z2QjtBRHE1Rk07RUFDRSxjQTdCZTtBQ3QzRnZCO0FEdzVGTTtFQUNFLDBCQXhDaUI7QUM5MkZ6QjtBRHk1Rk07RUFDRSwwQkF0Q21CO0FDajNGM0I7QUQweENJO0VBQ0UsY0FBQTtBQ3Z4Q047QUQweENJO0VBQ0UsY0FBQTtBQ3h4Q047QUQyeENJO0VBQ0UsY0FBQTtBQ3p4Q047QUR5MkNFO0VBQ0UsMEJBQUE7QUN0MkNKO0FEeTJDRTs7RUFFRSwwQkFBQTtBQ3QyQ0o7QUR5MkNFO0VBQ0Usb0JBQUE7QUN0MkNKO0FEbXpDRTtFQXNESSwwQkFBQTtBQ3QyQ047QURnekNFO0VBc0RJLDBCQUFBO0FDdDJDTjtBRGd6Q0U7RUFzREksMEJBQUE7QUN0MkNOO0FEb3pDRTtFQWtESSwwQkFBQTtBQ24yQ047QURxekNFO0VBOENJLDBCQUFBO0FDaDJDTjtBRHN6Q0U7RUEwQ0ksMEJBQUE7QUM3MUNOO0FEZzNDRTtFQUNFLG9CQUFBO0FDNzJDSjtBRGczQ0U7O0VBRUUsb0JBQUE7QUM3MkNKO0FEZzNDRTtFQUNFLGNBQUE7QUM3MkNKO0FEMjRDSTtFQUNFLDBCQUFBO0FDeDRDTjtBRDI0Q0k7RUFDRSwwQkFBQTtBQ3o0Q047QUQ0NENJO0VBQ0UsMEJBQUE7QUMxNENOO0FEODRDRTtFQUNFLHlCQUFBO0FDMzRDSjtBRGk1Q0k7Ozs7O0VBQ0UsK0JBQUE7QUMxNENOO0FEKzRDSTtFQUNFLCtCQUFBO0FDNTRDTjtBRDY4Q0U7RUFFRSxpQkFBQTtBQzM4Q0o7QUQ3c0NFO0VBbkJBLDBIQUFBO0FDbXVDRjtBRDI4Q0U7RUFDRSx1QkFBQTtFQUNBLDBCQUFBO0FDeDhDSjtBRDI4Q007RUFDRSwwQkFBQTtBQ3o4Q1I7QUQ4OENFOztFQUVFLDBCQUFBO0FDMzhDSjtBRGs5Q0k7Ozs7RUFDRSwrQkFBQTtBQzU4Q047QURvK0NFO0VBQ0UsaUJBQUE7QUNqK0NKO0FEbytDRTs7RUFFRSwwQkFBQTtBQ2orQ0o7QURvK0NFOztFQUVFLHlDQUFBO0VBQ0EsMkNBQUE7QUNqK0NKO0FEbytDRTs7RUFFRSx5Q0FBQTtBQ2orQ0o7QURxK0NJOzs7O0VBSUUsaUNBQUE7QUNsK0NOO0FEMC9DRTtFQUNFLGFBQUE7QUN2L0NKO0FEMC9DRTtFQUNFLHlCQUFBO0FDdi9DSjtBRDAvQ0U7RUFDRSx5QkFBQTtBQ3YvQ0o7QUQyL0NJO0VBQ0UsYUFBQTtBQ3gvQ047QUQyL0NJO0VBQ0UseUJBQUE7QUN6L0NOO0FENC9DSTtFQUNFLHlCQUFBO0FDMS9DTjtBRCsvQ0k7RUFDRSxhQUFBO0FDNS9DTjtBRCsvQ0k7RUFDRSx5QkFBQTtBQzcvQ047QURnZ0RJO0VBQ0UseUJBQUE7QUM5L0NOO0FEZ2hESTtFQUNFLGVBQUE7QUM3Z0ROO0FEZ2hESTtFQUNFLGVBQUE7QUM5Z0ROO0FEaWhESTtFQUNFLGVBQUE7QUMvZ0ROO0FEOGlERTtFQUNFLGlDQUFBO0FDM2lESjtBRHVoREU7RUFDRSxxQkFBQTtBQ3BoREo7QUR1aERFOztFQUlFLHlCQUFBO0FDdmhESjtBRCtnREU7RUFDRSxxQkFBQTtBQzdnREo7QURnaERFOztFQUlFLHlCQUFBO0FDaGhESjtBRHdnREU7RUFDRSxxQkFBQTtBQ3RnREo7QUR5Z0RFOztFQUlFLHlCQUFBO0FDemdESjtBRHlpRE07O0VBRUUsaUNBQUE7QUN2aURSO0FEMGlETTs7RUFFRSxxQ0FBQTtBQ3hpRFI7QUQyaURNO0VBQ0UsMEJBQUE7QUN6aURSO0FEK2lESTtFQUNFLHVCQUFBO0FDN2lETjtBRHNrREU7RUFDRSwwQkFBQTtBQ25rREo7QURza0RFO0VBQ0UsMEJBQUE7QUNua0RKO0FEc2tERTtFQUNFLDBCQUFBO0FDbmtESjtBRHNrREU7RUFDRSwwQkFBQTtBQ25rREo7QURza0RFO0VBQ0UsaUJBQUE7QUNua0RKO0FEcjJDRTtFQW5CQSwwSEFBQTtBQzIzQ0Y7QURta0RJO0VBQ0UsK0JBQUE7QUNqa0ROO0FEdWtETTtFQUNFLGNBQUE7QUNwa0RSO0FEdWtETTtFQUNFLGNBQUE7QUNya0RSO0FEd2tETTtFQUNFLGNBQUE7QUN0a0RSO0FEMGtESTtFQUNFLGNBQUE7QUN4a0ROO0FEMmtESTtFQUNFLDBCQUFBO0FDemtETjtBRDRtREU7RUFDRSx5QkFMbUM7RUFNbkMsMEJBQUE7QUN6bURKO0FENG1ERTtFQUNFLHVCQVh3QjtFQVl4QiwwQkFBQTtBQ3ptREo7QUQybURJO0VBQ0UsdUJBYjJCO0FDNWxEakM7QUQ0bURJO0VBdmdHRiw2SEFBQTtBQzg1Q0Y7QURnbkRFO0VBQ0UsMkNBdkJtQjtBQ3RsRHZCO0FEK21ESTtFQUNFLDBDQTFCaUI7RUEyQmpCLGtCQUFBO0FDN21ETjtBRGluREU7RUFDRSwwQ0FoQ21CO0VBaUNuQixrQkFBQTtBQzltREo7QURnbkRJO0VBQ0UsaUJBQUE7RUFDQSwyQ0FyQ2lCO0FDemtEdkI7QURrbkRFO0VBUUksb0NBQUE7QUN0bkROO0FEMG9ESTtFQUNFLHlCQUFBO0FDdm9ETjtBRDBvREk7RUFHRSwwQ0FBQTtBQzFvRE47QUQ2b0RJO0VBR0UseUJBQUE7QUM3b0ROO0FEZ29ESTtFQUNFLHlCQUFBO0FDOW5ETjtBRGlvREk7RUFHRSx3Q0FBQTtBQ2pvRE47QURvb0RJO0VBR0UseUJBQUE7QUNwb0ROO0FEdW5ESTtFQUNFLHlCQUFBO0FDcm5ETjtBRHduREk7RUFHRSx5Q0FBQTtBQ3huRE47QUQybkRJO0VBR0UseUJBQUE7QUMzbkROO0FEK3BESTtFQUdFLHVCQWhCcUI7QUMvb0QzQjtBRG1xREU7RUFybkdBLHlIQUFBO0VBdW5HRSx5QkFBQTtBQ2hxREo7QURtcURFO0VBQ0UscUNBM0JvQjtBQ3JvRHhCO0FEMHNERTtFQUNFLHFDQVZxQjtBQzdyRHpCO0FEMnFERTs7O0VBR0UseUJBQUE7QUN4cURKO0FEMnFERTtFQUNFLFlBQUE7QUN6cURKO0FEa3FERTs7O0VBR0UseUJBQUE7QUMvcERKO0FEa3FERTtFQUNFLFlBQUE7QUNocURKO0FEeXBERTs7O0VBR0UseUJBQUE7QUN0cERKO0FEeXBERTtFQUNFLFlBQUE7QUN2cERKO0FEMnJERTtFQUdFLHlDQURRO0FDenJEWjtBRHFzREk7O0VBQ0UscUNBdkMyQjtBQzFwRGpDO0FEc3NESTs7O0VBR0UscUNBOUN3QjtBQ3JwRDlCO0FEdXNETTtFQUNFLHFDQW5Ec0I7QUNscEQ5QjtBRDJzREk7RUFHRSxxQ0FEUTtBQ3pzRGQ7QURvdERNOztFQUVFLHFDQXZFcUM7QUMzb0Q3QztBRHN0RFE7O0VBRUUscUNBNUV5QztBQ3hvRG5EO0FEMHRETTtFQUNFLGlDQXZGaUI7RUF3RmpCLDZCQUFBO0FDeHREUjtBRDZ0RFE7RUFDRSxpQ0E3RnVCO0FDOW5EakM7QUQ4dERRO0VBQ0UsaUNBaEdvQjtBQzVuRDlCO0FEa3VERTtFQUNFLGdDQW5Hc0I7QUM1bkQxQjtBRHd1REU7RUFDRSw2SEFBQTtFQUlBLG1JQUFBO0FDeHVESjtBRGt2REU7RUFDRSw4SEFBQTtBQy91REo7QUQrd0RJO0VBR0UscUNBQUE7QUM5d0ROO0FEb3hESTtFQUNFO0lBQ0UsZ0JBQUE7RUNseEROO0FBQ0Y7QURxeERJOztFQUlFLDBCQUFBO0FDcnhETjtBRHd4REk7RUFHRSxxQ0FBQTtFQUNBLFlBQUE7QUN4eEROO0FEMnhESTs7O0VBR0UseUJBQUE7RUFDQSxZQUFBO0FDenhETjtBRDR4REk7RUFDRSw2QkFBQTtFQUNBLGNBQUE7QUMxeEROO0FENnhESTtFQUNFLDBCQUFBO0FDM3hETjtBRDh4REk7RUFDRSxjQUFBO0FDNXhETjtBRGd5REU7RUFDRSx1QkFBQTtBQzd4REo7QURneURFO0VBQ0Usc0NBQUE7QUM3eERKO0FEZ3lERTs7O0VBR0UscUNBQUE7QUM3eERKO0FEaTBERTtFQVlJLGNBQUE7QUN6MEROO0FEKzFERTs7RUFFRSw0Q0FKYztBQ3gxRGxCO0FEZzJESTs7RUFFRSx5Q0FWWTtFQVdaLG1CQUFBO0FDNzFETjtBRGkyREU7RUFDRSwwQkFBQTtBQzkxREo7QURnMkRJO0VBQ0UsMEJBQUE7QUM5MUROO0FEazJERTtFQUNFLGlDQUFBO0FDLzFESjtBRGsyREU7RUFDRSxpQ0FBQTtBQy8xREo7QURtMkRFOztFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNoMkRKO0FENDRETTs7Ozs7RUFDRSwwQ0FBQTtBQ3I0RFI7QUQwM0RFO0VBQ0UseUJBQUE7QUN4M0RKO0FEdTNERTtFQUNFLHVCQUFBO0FDcjNESjtBRDgzRE07Ozs7O0VBQ0UsMENBQUE7QUN4M0RSO0FENjJERTtFQUNFLHlCQUFBO0FDMzJESjtBRDAyREU7RUFDRSx1QkFBQTtBQ3gyREo7QURpM0RNOzs7OztFQUNFLDBDQUFBO0FDMzJEUjtBRGcyREU7RUFDRSx5QkFBQTtBQzkxREo7QUQ2MURFO0VBQ0UsdUJBQUE7QUMzMURKO0FEbzJETTs7Ozs7RUFDRSwwQ0FBQTtBQzkxRFI7QURzMkRFO0VBQ0UseUJBQUE7QUNwMkRKO0FEdzJERTtFQUNFLFlBQUE7QUN0MkRKO0FEdzJESTtFQUNFLCtCQUFBO0FDdDJETjtBRDIyREU7RUFDRSxtQkFBQTtBQ3oyREo7QUQ0MkRFO0VBQ0Usc0NBQUE7QUMxMkRKO0FEKzJERTtFQUNFLDJDQUFBO0FDNzJESjtBRDIwRE07Ozs7O0VBQ0UsMENBQUE7QUNyMERSO0FENjBERTtFQUNFLHlCQUFBO0FDMzBESjtBRCswREU7RUFDRSxZQUFBO0FDNzBESjtBRCswREk7RUFDRSwrQkFBQTtBQzcwRE47QURrMURFO0VBQ0UsbUJBQUE7QUNoMURKO0FEbTFERTtFQUNFLHNDQUFBO0FDajFESjtBRHMxREU7RUFDRSwyQ0FBQTtBQ3AxREo7QURrekRNOzs7OztFQUNFLDBDQUFBO0FDNXlEUjtBRG96REU7RUFDRSx5QkFBQTtBQ2x6REo7QURzekRFO0VBQ0UsWUFBQTtBQ3B6REo7QURzekRJO0VBQ0UsK0JBQUE7QUNwekROO0FEeXpERTtFQUNFLG1CQUFBO0FDdnpESjtBRDB6REU7RUFDRSxzQ0FBQTtBQ3h6REo7QUQ2ekRFO0VBQ0UsMkNBQUE7QUMzekRKO0FEazNERTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7QUMvMkRKO0FEaTNESTtFQW5DRixtQkFBQTtFQUNBLFlBQUE7QUMzMERGO0FEaTNESTtFQXZDRixtQkFBQTtFQUNBLFlBQUE7QUN2MERGO0FEaTNESTtFQTNDRixtQkFBQTtFQUNBLFlBQUE7QUNuMERGO0FEdTBERTs7O0VBR0UsOEJBQUE7QUNyMERKO0FEdzBERTs7Ozs7RUFLRSxjQUFBO0FDdDBESjtBRHkwREU7RUFDRSx5QkFBQTtBQ3YwREo7QURtNERFO0VBQ0UsaUNBQUE7QUNoNERKO0FEK2xGRTtFQUNFLGlCQUFBO0FDNWxGSjtBRCtsRkU7O0VBRUUsMEJBQUE7QUM1bEZKO0FEazVERTtFQUdFLCtCQUFBO0VBQ0EsbUJBQUE7RUF4ckhGLDJIQUFBO0FDd3lERjtBRHE1REU7RUFDRSxjQUFBO0FDbDVESjtBRTN4RUE7RUFDRSxZQUFBO0FGOHhFRjtBRTN4RUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBRjh4RUY7QUUzeEVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRjh4RUY7QUUzeEVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUY4eEVGO0FFM3hFQTs7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJEN0JRO0FEMnpFVjtBRTN4RUE7Ozs7RUFJRSxVQUFBO0FGOHhFRjtBRTN4RUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUY4eEVGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9qb3VybmFsL2pvdXJuYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgYWxsIHRoZSB0aGVtaW5nIGZ1bmN0aW9uYWxpdHkuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDAgIWRlZmF1bHQ7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8vIEVtaXRzIHRoZSBtaXhpbidzIGNvbnRlbnQgbmVzdGVkIHVuZGVyIGAkc2VsZWN0b3ItY29udGV4dGAgaWYgYCRzZWxlY3Rvci1jb250ZXh0YFxuLy8vIGlzIG5vbi1lbXB0eS5cbi8vLyBAcGFyYW0gc2VsZWN0b3ItY29udGV4dCBUaGUgc2VsZWN0b3IgdW5kZXIgd2hpY2ggdG8gbmVzdCB0aGUgbWl4aW4ncyBjb250ZW50LlxuQG1peGluIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuLy8vIEBwYXJhbSBlbmNhcHN1bGF0aW9uIFdoZXRoZXIgdG8gZW1pdCBzdHlsZXMgZm9yIHZpZXcgZW5jYXBzdWxhdGlvbi4gVmFsdWVzIGFyZTpcbi8vLyAgICAgKiBgb25gIC0gd29ya3MgZm9yIGBFbXVsYXRlZGAsIGBOYXRpdmVgLCBhbmQgYFNoYWRvd0RvbWBcbi8vLyAgICAgKiBgb2ZmYCAtIHdvcmtzIGZvciBgTm9uZWBcbi8vLyAgICAgKiBgYW55YCAtIHdvcmtzIGZvciBhbGwgZW5jYXBzdWxhdGlvbiBtb2RlcyBieSBlbWl0dGluZyB0aGUgQ1NTIHR3aWNlIChkZWZhdWx0KS5cbkBtaXhpbiBjZGstaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX2Nkay1vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gY2RrLXRleHQtZmllbGQge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG4gIH1cblxuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gdGhlIGBjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nYCBjbGFzcywgYnV0IG9ubHkgYXBwbGllZCBvbiBGaXJlZm94LiBXZSBuZWVkXG4gIC8vIHRvIHVzZSB0aGlzIGNsYXNzLCBiZWNhdXNlIEZpcmVmb3ggaGFzIGEgYnVnIHdoZXJlIGNoYW5naW5nIHRoZSBgb3ZlcmZsb3dgIGJyZWFrcyB0aGUgdXNlcidzXG4gIC8vIGFiaWxpdHkgdG8gdW5kby9yZWRvIHdoYXQgdGhleSB3ZXJlIHR5cGluZyAoc2VlICMxNjYyOSkuIFRoaXMgY2xhc3MgaXMgb25seSBzY29wZWQgdG8gRmlyZWZveCxcbiAgLy8gYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnRzIHRoZXJlIGRvbid0IHNlZW0gdG8gYmUgYWZmZWN0ZWQgYnkgdGhlIGBoZWlnaHQ6IDBgLCB3aGVyZWFzIG9uIG90aGVyXG4gIC8vIGJyb3dzZXJzIHRoZXkgYXJlLCBlLmcuIENocm9tZSBkZXRlY3RzIGxvbmdlciB0ZXh0IGFuZCBJRSBkb2VzJ3QgcmVzaXplIGJhY2sgdG8gbm9ybWFsLlxuICAvLyBJZGVudGljYWwgaXNzdWUgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00NDg3ODRcbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgICBAaW5jbHVkZSBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtaXhpbiBfY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbiAgdG9vbHRpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCwgJHRleHQ6ICRkZWZhdWx0KSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuICAgIHRleHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJHRleHQpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLiBBbHNvIG5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIGJlIGJlbG93IGAubWF0LXByaW1hcnlgXG4gIC8vIGluIG9yZGVyIHRvIGFsbG93IGZvciB0aGUgY29sb3IgdG8gYmUgb3ZlcndyaXR0ZW4gaWYgdGhlIGNoZWNrYm94IGlzIGluc2lkZSBhIHBhcmVudCB0aGF0XG4gIC8vIGhhcyBgbWF0LWFjY2VudGAgYW5kIGlzIHBsYWNlZCBpbnNpZGUgYW5vdGhlciBwYXJlbnQgdGhhdCBoYXMgYG1hdC1wcmltYXJ5YC5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG4vLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZXMgaGVyZSBjb21lIGZyb21cbi8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogICAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAkZGlzcGxheS00OiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTEycHgsIDExMnB4LCAzMDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDVlbSksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDJlbSksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW0pLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjgzKSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC42NyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAubWF0LWRpc3BsYXktNCwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS00IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS00KTtcbiAgICBtYXJnaW46IDAgMCA1NnB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTMsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0yLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTIpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUuIElmIHRoZSB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS4gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZ1xuLy8gb24gYSBDU1MgdmFyaWFibGUsIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgYmFzZSk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLFxuICAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlIGVsZW1lbnQuXG4vLyBJZiB0aGUgY29sb3IgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuXG4vLyBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nIG9uIGEgQ1NTIHZhcmlhYmxlLFxuLy8gd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgQGluY2x1ZGUgX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24ge1xuICAgICYsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTogMC43O1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eSk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsICRvcGFjaXR5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICAkb3BhY2l0eTogMC4xMjtcbiAgICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkb3BhY2l0eSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdG9vbHRpcCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSB7XG4gIGZvbnQ6IDQwMCAyNHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIG1hcmdpbjogMCAwIDE2cHg7XG59XG5cbi5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAubWF0LXR5cG9ncmFwaHkgaDMge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBtYXJnaW46IDAgMCAxNnB4O1xufVxuXG4ubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgLm1hdC10eXBvZ3JhcGh5IGg0IHtcbiAgZm9udDogNDAwIDE1cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbn1cblxuLm1hdC1oNSwgLm1hdC10eXBvZ3JhcGh5IGg1IHtcbiAgZm9udDogNDAwIGNhbGMoMTRweCAqIDAuODMpLzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7XG59XG5cbi5tYXQtaDYsIC5tYXQtdHlwb2dyYXBoeSBoNiB7XG4gIGZvbnQ6IDQwMCBjYWxjKDE0cHggKiAwLjY3KS8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG4ubWF0LWJvZHkgcCwgLm1hdC1ib2R5LTEgcCwgLm1hdC10eXBvZ3JhcGh5IHAge1xuICBtYXJnaW46IDAgMCAxMnB4O1xufVxuXG4ubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWRpc3BsYXktNCwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS00IHtcbiAgZm9udDogMzAwIDExMnB4LzExMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgbWFyZ2luOiAwIDAgNTZweDtcbn1cblxuLm1hdC1kaXNwbGF5LTMsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMyB7XG4gIGZvbnQ6IDQwMCA1NnB4LzU2cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMiwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0yIHtcbiAgZm9udDogNDAwIDQ1cHgvNDhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtO1xuICBtYXJnaW46IDAgMCA2NHB4O1xufVxuXG4ubWF0LWRpc3BsYXktMSwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0xIHtcbiAgZm9udDogNDAwIDM0cHgvNDBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbn1cblxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUsXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubWF0LWNoaXAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4ubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWF0LWNhbGVuZGFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbi5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE1MCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci10b3A6IDAuODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gIHRvcDogLTAuODQzNzVlbTtcbiAgcGFkZGluZy10b3A6IDAuODQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjM0Mzc1ZW07XG59XG5cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMzQzNzVlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIG1hcmdpbi10b3A6IDAuNjY2NjY2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjY2NjY2N2VtKTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyM2VtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNTMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMjgxMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYm90dG9tOiAxLjI1ZW07XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMC41NDE2NjY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS42NjY2NjY2NjY3ZW0pO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSk7XG4gIH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyZW0pIHNjYWxlKDAuNzUpO1xuICB9XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuNzVlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMDkzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzMzMlO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjU5Mzc0ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM0MzMzMzMlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDFlbSAwIDFlbSAwO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuODQzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMzMzJTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMzMzJTtcbn1cblxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZSxcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMC4wNjI1ZW07XG59XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgaGVpZ2h0OiAxLjEyNWVtO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC10b29sYmFyLFxuLm1hdC10b29sYmFyIGgxLFxuLm1hdC10b29sYmFyIGgyLFxuLm1hdC10b29sYmFyIGgzLFxuLm1hdC10b29sYmFyIGg0LFxuLm1hdC10b29sYmFyIGg1LFxuLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubWF0LXRvb2x0aXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbn1cblxuLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5tYXQtdHJlZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLCAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7XG4gIC8qISovXG59XG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7XG4gIC8qISovXG59XG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbn1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1ib3JkZXItcHJpbWFyeSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCA4cHggIzAwNjk1YztcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCA4cHggIzAwNjk1Yztcbn1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1hdC1vcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksIC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG4ubWF0LW9wdGlvbi5tYXQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LW9wdGlvbi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjMDA2OTVjO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZTA0MGZiO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5tYXQtcHNldWRvLWNoZWNrYm94OjphZnRlciB7XG4gIGNvbG9yOiAjZmFmYWZhO1xufVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gIGNvbG9yOiAjYjBiMGIwO1xufVxuXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogIzAwNjk1Yztcbn1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gIGJhY2tncm91bmQ6ICNlMDQwZmI7XG59XG5cbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYjBiMGIwO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXozIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo3IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejkge1xuICBib3gtc2hhZG93OiAwcHggNXB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDlweCAxMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggM3B4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMCB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMiB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxMyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNSB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggOXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTVweCAyMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDI4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxNiB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejE4IHtcbiAgYm94LXNoYWRvdzogMHB4IDlweCAxMXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMThweCAyOHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggN3B4IDM0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoxOSB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyMSB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMXB4IDMzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejIyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZWxldmF0aW9uLXoyNCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMDY5NWM7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2UwNDBmYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWJhZGdlLXdhcm4gLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWF0LWJhZGdlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNiOWI5Yjk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5uZy1hbmltYXRlLWRpc2FibGVkIC5tYXQtYmFkZ2UtY29udGVudCxcbi5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE2cHg7XG59XG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE2cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNnB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC04cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtOHB4O1xufVxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC04cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC04cHg7XG59XG5cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTExcHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtMTFweDtcbn1cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTIycHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTIycHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0yMnB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTIycHg7XG59XG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xMXB4O1xufVxuW2Rpcj1ydGxdIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xMXB4O1xufVxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTFweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xMXB4O1xufVxuXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTRweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLTE0cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTI4cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjhweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjhweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTI4cHg7XG59XG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTE0cHg7XG59XG5bZGlyPXJ0bF0gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTRweDtcbn1cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTRweDtcbn1cbltkaXI9cnRsXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE0cHg7XG59XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkge1xuICBjb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICNlMDQwZmI7XG59XG4ubWF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbi5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uW2Rpc2FibGVkXSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4ubWF0LWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWljb24tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIG9wYWNpdHk6IDAuMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuXG4ubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MGZiO1xufVxuLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG4ubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSwgLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSksIC5tYXQtbWluaS1mYWI6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdC1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pLCAubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5bZGlyPXJ0bF0gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cbi5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWNhcmQubWF0LWNhcmQtZmxhdDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgZmlsbDogI2ZhZmFmYTtcbn1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogI2ZhZmFmYSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG59XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MGZiO1xufVxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7XG59XG4ubWF0LWNoZWNrYm94LWRpc2FibGVkOm5vdCgubWF0LWNoZWNrYm94LWNoZWNrZWQpIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICNiMGIwYjA7XG59XG4ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtY2hlY2tib3g6YWN0aXZlOm5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZDogIzAwNjk1Yztcbn1cbi5tYXQtY2hlY2tib3gtY2hlY2tlZDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1jaGVja2JveDphY3RpdmU6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICNlMDQwZmI7XG59XG4ubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC40O1xufVxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxubWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuLm1hdC10YWJsZS1zdGlja3kge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG5tYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLFxuLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLFxuLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1YztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEwNSwgOTIsIDAuNCk7XG59XG5cbi5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MGZiO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCA2NCwgMjUxLCAwLjQpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NCwgNjcsIDU0LCAwLjQpO1xufVxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlO1xufVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICBjb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4ubWF0LWRpdmlkZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBib3JkZXItcmlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWFjdGlvbi1yb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWwgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSwgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3Zlcjpub3QoW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0pIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cblxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPXRydWVdKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG59XG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCB7XG4gIGNvbG9yOiAjZTA0MGZiO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZTA0MGZiO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG59XG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50LFxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZTA0MGZiO1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7XG59XG5cbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC1pY29uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtaWNvbi5tYXQtd2FybiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICMwMDY5NWM7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cbi5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogI2UwNDBmYjtcbn1cblxuLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogI2Y0NDMzNjtcbn1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtbGlzdC1pdGVtLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLm1hdC1saXN0LW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LW9wdGlvbjpmb2N1cyxcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzLFxuLm1hdC1hY3Rpb24tbGlzdCAubWF0LWxpc3QtaXRlbTpob3Zlcixcbi5tYXQtYWN0aW9uLWxpc3QgLm1hdC1saXN0LWl0ZW06Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWF0LWxpc3Qtc2luZ2xlLXNlbGVjdGVkLW9wdGlvbiwgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb246aG92ZXIsIC5tYXQtbGlzdC1zaW5nbGUtc2VsZWN0ZWQtb3B0aW9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9bWF0LWVsZXZhdGlvbi16XSkge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF0sIC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXTo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1wYWdpbmF0b3ItZGVjcmVtZW50LFxuLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjYjJkZmRiO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZmRiO1xufVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNlYTgwZmM7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTgwZmM7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNmZmNkZDI7XG59XG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZGQyO1xufVxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMDA2OTVjO1xufVxuLm1hdC1wcm9ncmVzcy1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUge1xuICBzdHJva2U6ICNlMDQwZmI7XG59XG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZjQ0MzM2O1xufVxuXG4ubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMwMDY5NWM7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTA0MGZiO1xufVxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSwgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudDphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG59XG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cbi5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbn1cblxuLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxuLm1hdC1zZWxlY3QtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXNlbGVjdC1wYW5lbCAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtZHJhd2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LWRyYXdlci1zaWRlLm1hdC1kcmF3ZXItZW5kIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbltkaXI9cnRsXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5bZGlyPXJ0bF0gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNCwgNjQsIDI1MSwgMC41NCk7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTA1LCA5MiwgMC41NCk7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ0LCA2NywgNTQsIDAuNTQpO1xufVxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXNsaWRlLXRvZ2dsZTpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcbn1cblxuLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG5cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG59XG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI0LCA2NCwgMjUxLCAwLjIpO1xufVxuXG4ubWF0LXNsaWRlcjpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xufVxuXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cbi5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xufVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG59XG5cbi5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xufVxuXG4ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgY29sb3I6ICNmNDQzMzY7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gIGNvbG9yOiAjNzU3NTc1O1xufVxuXG4ubWF0LXRhYi1uYXYtYmFyLFxuLm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLFxuLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XG59XG5cbi5tYXQtdGFiLWdyb3VwW2NsYXNzKj1tYXQtYmFja2dyb3VuZC1dIC5tYXQtdGFiLWhlYWRlcixcbi5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPW1hdC1iYWNrZ3JvdW5kLV0ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc4LCAyMjMsIDIxOSwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2OTVjO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM0LCAxMjgsIDI1MiwgMC4zKTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNSwgMjEwLCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2Fybi5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzgsIDIyMywgMjE5LCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk1Yztcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzQsIDEyOCwgMjUyLCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDBmYjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNSwgMjEwLCAwLjMpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwNjk1YztcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdC10b29sYmFyLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kOiAjZTA0MGZiO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRvb2xiYXIubWF0LXdhcm4ge1xuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbi5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuLm1hdC10b29sYmFyIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xufVxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVlLFxuLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LWFycm93LFxuLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi5tYXQtdG9vbHRpcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTcsIDk3LCA5NywgMC45KTtcbn1cblxuLm1hdC10cmVlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYXQtdHJlZS1ub2RlLFxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgY29sb3I6ICNlMDQwZmI7XG59XG5cbi5tYXQtdGFibGUge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogIzAwNjk1YztcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGdyYXk7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWF0LWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDAuNXB4IGdyYXk7XG59XG5cbi5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxuLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICMwMDY5NWM7XG59XG5cbi5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxuLm1hdC1jZWxsOmxhc3Qtb2YtdHlwZSxcbi5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbi5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1jZWxsOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGRhcmtyZWQ7XG59IiwiQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuXG5AaW5jbHVkZSBtYXQtY29yZSgpO1xuXG4vLyRhcHAtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1kZWVwLXB1cnBsZSk7XG4vLyRhcHAtYWNjZW50OiAgbWF0LXBhbGV0dGUoJG1hdC1hbWJlciwgQTIwMCwgQTEwMCwgQTQwMCk7XG4vLyRhcHAtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1ncmVlbiwgODAwLCA1MDAsIDkwMCk7XG4vLyRhcHAtYWNjZW50OiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCwgQTcwMCwgQTEwMCwgQTIwMCk7XG4vLyRhcHAtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1pbmRpZ28pO1xuLy8kYXBwLWFjY2VudDogbWF0LXBhbGV0dGUoJG1hdC1waW5rLCBBMjAwLCBBMTAwLCBBNDAwKTtcbiRhcHAtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC10ZWFsLCA4MDApO1xuJGFwcC1hY2NlbnQ6IG1hdC1wYWxldHRlKCRtYXQtcHVycGxlLCBBMjAwLCBBMTAwLCBBNDAwKTtcbiRhcHAtd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQsIEEyMDAsIEExMDAsIEE0MDApO1xuJGFwcC10aGVtZTogbWF0LWxpZ2h0LXRoZW1lKCRhcHAtcHJpbWFyeSwgJGFwcC1hY2NlbnQpO1xuXG4kcHJpbWFyeTogbWF0LWNvbG9yKCRhcHAtcHJpbWFyeSk7XG4kYWNjZW50OiBtYXQtY29sb3IoJGFwcC1hY2NlbnQpO1xuJHdhcm46IG1hdC1jb2xvcigkYXBwLXdhcm4pO1xuXG5AbWl4aW4gbWl4LWFwcC10aGVtZSgkYXBwLXRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCRhcHAtdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCRhcHAtdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1ib3JkZXItcHJpbWFyeSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDhweCBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgOHB4IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cbn1cblxuLy8gSW5jbHVkZSB0aGUgbWl4aW5cbkBpbmNsdWRlIG1peC1hcHAtdGhlbWUoJGFwcC10aGVtZSk7XG5AaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCRhcHAtdGhlbWUpO1xuXG4vLy8vIEFsdGVybmF0ZSBBbmd1bGFyIE1hdGVyaWFsIFRoZW1lXG4vLy5teS1hbHRlcm5hdGUtdGhlbWUge1xuLy8gICRteS1hbHRlcm5hdGUtcHJpbWFyeTogbWF0LXBhbGV0dGUoJG1hdC1yZWQpO1xuLy8gICRteS1hbHRlcm5hdGUtYWNjZW50OiBtYXQtcGFsZXR0ZSgkbWF0LWdyZWVuLCA0MDApO1xuLy8gICRteS1hbHRlcm5hdGUtd2FybjogbWF0LXBhbGV0dGUoJG1hdC1ncmV5KTtcbi8vXG4vLyAgJG15LWFsdGVybmF0ZS10aGVtZTogbWF0LWxpZ2h0LXRoZW1lKCRteS1hbHRlcm5hdGUtcHJpbWFyeSwgJG15LWFsdGVybmF0ZS1hY2NlbnQsICRteS1hbHRlcm5hdGUtd2Fybik7XG4vL1xuLy8gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJG15LWFsdGVybmF0ZS10aGVtZSk7XG4vL31cbiIsIi8vQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnO1xuXG4vL0BpbmNsdWRlIG1hdC1jb3JlKCk7XG5cbkBpbXBvcnQgXCJzcmMvdGhlbWUuc2Nzc1wiO1xuLy8gSW5jbHVkZSB0aGUgbWl4aW5cbi8vQGluY2x1ZGUgbWl4LWFwcC10aGVtZSgkYXBwLXRoZW1lKTtcbi8vQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkYXBwLXRoZW1lKTtcblxuLm1hdC10YWJsZSB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1hdC1oZWFkZXItcm93IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IGdyYXk7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubWF0LWNlbGwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IHNvbGlkIDAuNXB4IGdyYXk7XG59XG5cbi5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxuLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xufVxuXG4ubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbi5tYXQtY2VsbDpsYXN0LW9mLXR5cGUsXG4ubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUsXG4ubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtY2VsbDpub3QoOmZpcnN0LW9mLXR5cGUpOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBkYXJrcmVkO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JournalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-journal',
          templateUrl: './journal.component.html',
          styleUrls: ['./journal.component.scss']
        }]
      }], function () {
        return [{
          type: _journal_service__WEBPACK_IMPORTED_MODULE_2__["JournalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/journal/journal.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/journal/journal.service.ts ***!
    \*************************************************/

  /*! exports provided: JournalService */

  /***/
  function srcAppCoreJournalJournalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JournalService", function () {
      return JournalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../env */
    "./src/app/env.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var JournalService = /*#__PURE__*/function () {
      // url: string = API_URL + '/chronicles';
      function JournalService(http) {
        _classCallCheck(this, JournalService);

        this.http = http;
        this.url = _env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + '/journal';
      } // getMonth(): JournalModel {
      //   return new JournalModel(100, 'Hello!');
      // }


      _createClass(JournalService, [{
        key: "getMonth",
        value: function getMonth() {
          // return this.http.get<AlbumCard[]>(this.url + '/get');
          return this.http.get(this.url + '/month');
        }
      }]);

      return JournalService;
    }();

    JournalService.ɵfac = function JournalService_Factory(t) {
      return new (t || JournalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    JournalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JournalService,
      factory: JournalService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JournalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/zen/zen.component.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/zen/zen.component.ts ***!
    \*******************************************/

  /*! exports provided: ZenComponent */

  /***/
  function srcAppCoreZenZenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZenComponent", function () {
      return ZenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ZenComponent = /*#__PURE__*/function () {
      function ZenComponent() {
        _classCallCheck(this, ZenComponent);
      }

      _createClass(ZenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ZenComponent;
    }();

    ZenComponent.ɵfac = function ZenComponent_Factory(t) {
      return new (t || ZenComponent)();
    };

    ZenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ZenComponent,
      selectors: [["app-zen"]],
      decls: 2,
      vars: 0,
      consts: [[2, "position", "absolute", "top", "0", "right", "0", "bottom", "0", "left", "0", "background", "gainsboro", "z-index", "1"]],
      template: function ZenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zen works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvemVuL3plbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-zen',
          templateUrl: './zen.component.html',
          styleUrls: ['./zen.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/env.ts":
  /*!************************!*\
    !*** ./src/app/env.ts ***!
    \************************/

  /*! exports provided: API_URL */

  /***/
  function srcAppEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    }); // export const API_URL = 'http://localhost:5000';


    var API_URL = 'https://ancient-laboratory.herokuapp.com:443';
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/kli/workspace/ancient-laboratory-one/frontend1/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map