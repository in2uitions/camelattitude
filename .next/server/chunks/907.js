"use strict";
exports.id = 907;
exports.ids = [907];
exports.modules = {

/***/ 9907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T9": () => (/* binding */ getAllRecords),
/* harmony export */   "FO": () => (/* binding */ getById),
/* harmony export */   "h6": () => (/* binding */ createsmoker)
/* harmony export */ });
/* unused harmony exports updatesmoker, getQuestions */
/* harmony import */ var _directus_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8816);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2033);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_directus_sdk__WEBPACK_IMPORTED_MODULE_0__]);
_directus_sdk__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const directus = new _directus_sdk__WEBPACK_IMPORTED_MODULE_0__.Directus(_global__WEBPACK_IMPORTED_MODULE_1__/* .URL */ .Jx);
// export const fetchData = async(collection) => {
//     const res = await directus.items(collection).readMany({ fields:['*']});
//     return res.data;
// }
const getAllRecords = async (collection)=>{
    const annonces = directus.items(collection);
    const annoncesPublished = await annonces.readByQuery({
        filter: {
            status: {
                _eq: 'published'
            }
        }
    });
    return annoncesPublished.data;
};
const getById = async (collection, id)=>{
    console.log(id);
    const annonces = directus.items(collection);
    const annoncesPublished = await annonces.readByQuery({
        filter: {
            status: {
                _eq: 'published'
            },
            id: {
                _eq: id !== null && id !== void 0 ? id : 1
            }
        }
    });
    return annoncesPublished.data;
};
const createsmoker = async (data)=>{
    const smokers = directus.items("smokers");
    // var zIdToUse = localStorage.getItem('zId');
    var zQstToUse = localStorage.getItem('zQst');
    var zAnsToUse = localStorage.getItem('zAns');
    var zNameToUse = localStorage.getItem('zName');
    var zAgeToUse = localStorage.getItem('zAge');
    var zGenderToUse = localStorage.getItem('zGender');
    var zEmailToUse = localStorage.getItem('zEmail');
    var zIsSmokerToUse = localStorage.getItem('zIsSmoker');
    var zPhoneToUse = localStorage.getItem('zPhone');
    var zColToUse = localStorage.getItem('zCol');
    var zAttToUse = localStorage.getItem('zAtt');
    console.log(zIsSmokerToUse);
    console.log(zGenderToUse);
    const annoncesPublished = await smokers.createOne({
        name: zNameToUse,
        age: zAgeToUse,
        gender: zGenderToUse,
        email: zEmailToUse,
        is_smoker: zIsSmokerToUse,
        phone: zPhoneToUse,
        selected_question: zQstToUse,
        selected_answer: zAnsToUse,
        selected_color: zColToUse,
        selected_attitude: zAttToUse
    });
    console.log(annoncesPublished.id);
    localStorage.setItem('zId', annoncesPublished.id);
    console.log(localStorage.getItem('zId'));
    return annoncesPublished;
};
const updatesmoker = async (data)=>{
    const smokers = directus.items("smokers");
    var zIdToUse = localStorage.getItem('zId');
    var zQstToUse = localStorage.getItem('zQst').toString;
    var zAnsToUse = localStorage.getItem('zAns').toString;
    const annoncesPublished = await smokers.updateOne({
        id: zIdToUse
    }, {
        selected_question: zQstToUse,
        selected_answer: zAnsToUse
    });
    return 'DONE';
};
const getQuestions = async ()=>{
    const comp_questions = directus.items('questions');
    const comp_questionsPublished = await comp_questions.readMany({
        filter: {
            status: {
                _eq: 'published'
            }
        },
        fields: [
            '*,*.*'
        ]
    });
    console.log(comp_questionsPublished.data);
    return comp_questionsPublished.data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jx": () => (/* binding */ URL),
/* harmony export */   "BU": () => (/* binding */ image_url)
/* harmony export */ });
/* unused harmony export URL_FRONT */
const URL = "https://camel.businessexchange.me/";
const URL_FRONT = "https://camelattitude.vercel.app/";
const image_url = "https://camel.businessexchange.me/assets/";


/***/ })

};
;