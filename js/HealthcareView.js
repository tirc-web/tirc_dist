/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktirc_official_web"] = self["webpackChunktirc_official_web"] || []).push([["HealthcareView"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-i18n */ \"./node_modules/vue-i18n/dist/vue-i18n.cjs.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  setup() {\n    const listData = [{\n      healthcareList: \"healthcareList1\"\n    }, {\n      healthcareList: \"healthcareList2\"\n    }, {\n      healthcareList: \"healthcareList3\"\n    }, {\n      healthcareList: \"healthcareList4\"\n    }];\n    const productData = [{\n      robot: \"cma1\",\n      productImg: __webpack_require__(/*! @/assets/products/healthcare/Bio Array Analyzer.webp */ \"./src/assets/products/healthcare/Bio Array Analyzer.webp\"),\n      url: \"/cma1Description\"\n    }, {\n      robot: \"ama1\",\n      productImg: __webpack_require__(/*! @/assets/products/healthcare/Laser-Guided Positioning and Automated Scanning Analyzer.webp */ \"./src/assets/products/healthcare/Laser-Guided Positioning and Automated Scanning Analyzer.webp\"),\n      url: \"/ama1Description\"\n    }, {\n      robot: \"mma1\",\n      productImg: __webpack_require__(/*! @/assets/products/healthcare/Robotic Microbiology Exam System.webp */ \"./src/assets/products/healthcare/Robotic Microbiology Exam System.webp\"),\n      url: \"/mma1Description\"\n    }];\n    const {\n      locale\n    } = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_0__.useI18n)();\n    return {\n      locale,\n      listData,\n      productData\n    };\n  }\n\n});\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-3109c76c\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\n\nconst _hoisted_1 = {\n  class: \"textColumn setFlex\"\n};\nconst _hoisted_2 = {\n  class: \"myH3\"\n};\nconst _hoisted_3 = {\n  class: \"myH5\"\n};\nconst _hoisted_4 = {\n  class: \"setImgBg\"\n};\nconst _hoisted_5 = [\"src\"];\nconst _hoisted_6 = {\n  class: \"textBlock\"\n};\nconst _hoisted_7 = {\n  class: \"setContent h4\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-link\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(\"healthcare\")), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(\"healthcareC1\")), 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({\n      setZhC2: $setup.locale == 'zh',\n      setEnC2: $setup.locale == 'en'\n    }),\n    style: {\n      \"width\": \"100%\",\n      \"margin\": \"30px 0\"\n    }\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(\"healthcareC2\")) + \" \", 1\n  /* TEXT */\n  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"setList\", {\n      setZhWidth: $setup.locale == 'zh',\n      setEnWidth: $setup.locale == 'en'\n    }]),\n    style: {\n      \"margin\": \"8px auto 8px auto\"\n    }\n  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.listData, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"li\", {\n      key: item.id\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(item.healthcareList)), 1\n    /* TEXT */\n    );\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))], 2\n  /* CLASS */\n  )], 2\n  /* CLASS */\n  ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.productData, item => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      key: item.id,\n      class: \"tableStyle\"\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n      class: \"setImg\",\n      src: item.productImg,\n      style: {\n        \"max-height\": \"100%\",\n        \"max-width\": \"100%\"\n      }\n    }, null, 8\n    /* PROPS */\n    , _hoisted_5)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(item.robot)), 1\n    /* TEXT */\n    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {\n      to: item.url,\n      class: \"readMore\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$t(\"more\")), 1\n      /* TEXT */\n      )]),\n      _: 2\n      /* DYNAMIC */\n\n    }, 1032\n    /* PROPS, DYNAMIC_SLOTS */\n    , [\"to\"])])]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use%5B0%5D!./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B3%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\na[data-v-3109c76c] {\\n  text-decoration: none;\\n  color: var(--bs-secondary);\\n}\\na[data-v-3109c76c]:hover {\\n  color: var(--bs-primary);\\n}\\n.setFlex[data-v-3109c76c] {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.setZhC2[data-v-3109c76c] {\\n  font-size: 1rem;\\n  line-height: 1.8;\\n  text-align: center;\\n}\\n.setEnC2[data-v-3109c76c] {\\n  font-size: 1rem;\\n  line-height: 1.8;\\n  text-align: justify;\\n}\\n.setList[data-v-3109c76c] {\\n  font-size: 1rem;\\n  text-align: start;\\n}\\n.setZhWidth[data-v-3109c76c] {\\n  width: 45%;\\n}\\n.setEnWidth[data-v-3109c76c] {\\n  width: 100%;\\n}\\n.textBlock[data-v-3109c76c] {\\n  flex-wrap: wrap;\\n  width: 50%;\\n  margin: 10px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.tableStyle[data-v-3109c76c] {\\n  width: 100%;\\n  min-height: 200px;\\n  margin: 20px 0;\\n  padding: 20px;\\n  align-items: center;\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n}\\n.setImgBg[data-v-3109c76c] {\\n  /* height: 246px; */\\n  width: 357px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  margin: 10px;\\n}\\n.setContent[data-v-3109c76c] {\\n  text-align: start;\\n  line-height: 1.8em;\\n  margin-bottom: 20px;\\n}\\n.readMore[data-v-3109c76c] {\\n  text-align: justify;\\n  font-size: 1rem;\\n  line-height: 1.8;\\n}\\n@media (max-width: 575.98px) {\\n.setContent[data-v-3109c76c] {\\n    width: 100%;\\n    text-align: center;\\n}\\n.setImgBg[data-v-3109c76c] {\\n    width: 100%;\\n}\\n.setFlex[data-v-3109c76c] {\\n    align-items: center;\\n}\\n.textBlock[data-v-3109c76c] {\\n    width: 100%;\\n}\\n.readMore[data-v-3109c76c] {\\n    text-align: center;\\n}\\n.setImgBg[data-v-3109c76c] {\\n    margin-left: 12%;\\n}\\n.setZhWidth[data-v-3109c76c] {\\n    width: 100%;\\n}\\n.setZhC2[data-v-3109c76c] {\\n    text-align: justify;\\n}\\n}\\n@media (min-width: 576px) and (max-width: 991.98px) {\\n.textBlock[data-v-3109c76c] {\\n    width: 60%;\\n}\\n.setContent[data-v-3109c76c] {\\n    text-align: center;\\n}\\n.readMore[data-v-3109c76c] {\\n    text-align: center;\\n}\\n.setImgBg[data-v-3109c76c] {\\n    margin-left: 10%;\\n}\\n.setZhWidth[data-v-3109c76c] {\\n    width: 100%;\\n}\\n.setZhC2[data-v-3109c76c] {\\n    text-align: justify;\\n}\\n}\\n@media (min-width: 992px) and (max-width: 1289.98px) {\\n.textBlock[data-v-3109c76c] {\\n    width: 40%;\\n}\\n}\\n@media (min-width: 1290px) {\\n.textBlock[data-v-3109c76c] {\\n    width: 40%;\\n}\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/HealthcareView.vue":
/*!**************************************!*\
  !*** ./src/views/HealthcareView.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HealthcareView_vue_vue_type_template_id_3109c76c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true */ \"./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true\");\n/* harmony import */ var _HealthcareView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HealthcareView.vue?vue&type=script&lang=js */ \"./src/views/HealthcareView.vue?vue&type=script&lang=js\");\n/* harmony import */ var _HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css */ \"./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css\");\n/* harmony import */ var _Users_lian_tirc_project_tirc_official_web_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\n\n\nconst __exports__ = /*#__PURE__*/(0,_Users_lian_tirc_project_tirc_official_web_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_HealthcareView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_HealthcareView_vue_vue_type_template_id_3109c76c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',\"data-v-3109c76c\"],['__file',\"src/views/HealthcareView.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?");

/***/ }),

/***/ "./src/views/HealthcareView.vue?vue&type=script&lang=js":
/*!**************************************************************!*\
  !*** ./src/views/HealthcareView.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HealthcareView.vue?vue&type=script&lang=js */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?");

/***/ }),

/***/ "./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true":
/*!********************************************************************************!*\
  !*** ./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_template_id_3109c76c_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_template_id_3109c76c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=template&id=3109c76c&scoped=true\");\n\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?");

/***/ }),

/***/ "./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css":
/*!**********************************************************************************************!*\
  !*** ./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _node_modules_vue_style_loader_index_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HealthcareView_vue_vue_type_style_index_0_id_3109c76c_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HealthcareView.vue?vue&type=style&index=0&id=3109c76c&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.id, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = (__webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\")[\"default\"])\nvar update = add(\"f5c11104\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://tirc_official_web/./src/views/HealthcareView.vue?./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use%5B0%5D!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use%5B1%5D!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B0%5D.use%5B0%5D");

/***/ }),

/***/ "./src/assets/products/healthcare/Bio Array Analyzer.webp":
/*!****************************************************************!*\
  !*** ./src/assets/products/healthcare/Bio Array Analyzer.webp ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/Bio Array Analyzer.d043c766.webp\";\n\n//# sourceURL=webpack://tirc_official_web/./src/assets/products/healthcare/Bio_Array_Analyzer.webp?");

/***/ }),

/***/ "./src/assets/products/healthcare/Laser-Guided Positioning and Automated Scanning Analyzer.webp":
/*!******************************************************************************************************!*\
  !*** ./src/assets/products/healthcare/Laser-Guided Positioning and Automated Scanning Analyzer.webp ***!
  \******************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/Laser-Guided Positioning and Automated Scanning Analyzer.bdd759de.webp\";\n\n//# sourceURL=webpack://tirc_official_web/./src/assets/products/healthcare/Laser-Guided_Positioning_and_Automated_Scanning_Analyzer.webp?");

/***/ }),

/***/ "./src/assets/products/healthcare/Robotic Microbiology Exam System.webp":
/*!******************************************************************************!*\
  !*** ./src/assets/products/healthcare/Robotic Microbiology Exam System.webp ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"img/Robotic Microbiology Exam System.25e2c50a.webp\";\n\n//# sourceURL=webpack://tirc_official_web/./src/assets/products/healthcare/Robotic_Microbiology_Exam_System.webp?");

/***/ })

}]);