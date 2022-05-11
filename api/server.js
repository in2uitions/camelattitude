import { Directus } from '@directus/sdk';
import { URL } from '../global'

const directus = new Directus(URL);


// export const fetchData = async(collection) => {
//     const res = await directus.items(collection).readMany({ fields:['*']});
//     return res.data;
// }

export const getAllRecords = async (collection) => {
    const annonces = directus.items(collection);
    const annoncesPublished = await annonces.readByQuery({
        filter: {
            status: {
                _eq: 'published',
            },
        },
    });
    return annoncesPublished.data;
}
export const getById = async (collection, id) => {
    console.log(id);
    const annonces = directus.items(collection);
    const annoncesPublished = await annonces.readByQuery({
        filter: {
            status: {
                _eq: 'published',
            },
            id: {
                _eq: id ?? 1
            }
        },
    });
    return annoncesPublished.data;
}


export const createsmoker = async (data) => {
    const smokers = directus.items("smokers");
   // var zIdToUse = localStorage.getItem('zId');
    var zQstToUse = localStorage.getItem('zQst');
    var zAnsToUse = localStorage.getItem('zAns');
    var zBIDToUse = localStorage.getItem('zBID');
    var zNameToUse = localStorage.getItem('zName');
    var zAgeToUse = localStorage.getItem('zAge');
    var zGenderToUse = localStorage.getItem('zGender');
    var zRegionToUse = localStorage.getItem('zRegion');
    var zWilayaToUse = localStorage.getItem('zWilaya');
    var zIsSmokerToUse = localStorage.getItem('zIsSmoker');
    var zPhoneToUse = localStorage.getItem('zPhone'); 
    var zColToUse = localStorage.getItem('zCol');
    var zAttToUse = localStorage.getItem('zAtt');
console.log(zIsSmokerToUse);
console.log(zGenderToUse);
    const annoncesPublished = await smokers.createOne({
        ba_id: zBIDToUse,
        name: zNameToUse,
        age: zAgeToUse,
        gender: zGenderToUse,
        region: zRegionToUse,
        wilaya: zWilayaToUse,
        is_smoker: zIsSmokerToUse,
        phone: zPhoneToUse,
        selected_question: zQstToUse,
        selected_answer: zAnsToUse,
        selected_color: zColToUse,
        selected_attitude: zAttToUse
    });
console.log(annoncesPublished.id)
localStorage.setItem('zId', annoncesPublished.id)
console.log(localStorage.getItem('zId'))
    return annoncesPublished;
    
}

export const updatesmoker = async (data) => {
    const smokers = directus.items("smokers");
    var zIdToUse = localStorage.getItem('zId');
    var zQstToUse = localStorage.getItem('zQst').toString;
    var zAnsToUse = localStorage.getItem('zAns').toString;
    const annoncesPublished = await smokers.updateOne(
        { 
        id: zIdToUse},
        {
            selected_question: zQstToUse,
            selected_answer: zAnsToUse,
    });
    return 'DONE';
}


export const getQuestions = async () => {
    const comp_questions = directus.items('questions');
    const comp_questionsPublished = await comp_questions.readMany({
        filter: {
            status: {
                _eq: 'published',
            },
        },
        fields: ['*,*.*']
    });


    console.log(comp_questionsPublished.data);

    return comp_questionsPublished.data;
}
