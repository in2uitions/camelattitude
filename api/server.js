import { Directus } from '@directus/sdk';
import { URL } from '../global'

const directus = new Directus(URL);


// export const fetchData = async(collection) => {
//     const res = await directus.items(collection).readMany({ fields:['*']});
//     return res.data;
// }

export const getAllRecords = async(collection) =>{
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
export const getById = async(collection,id) =>{
    console.log(id);
    const annonces = directus.items(collection);
    const annoncesPublished = await annonces.readByQuery({
        filter: {
            status: {
                _eq: 'published',
            },
            id:{
                _eq: id??7
            }
        },
    });
    return annoncesPublished.data;
}

export const getQuestions = async() =>{ 
    const comp_questions = directus.items('questions');
    const comp_questionsPublished = await comp_questions.readMany({
        filter: {
            status: {
                _eq: 'published',
            },
        },
        fields:['*,*.*']
    });
    
    
    console.log(comp_questionsPublished.data);
    
    return comp_questionsPublished.data;
}
