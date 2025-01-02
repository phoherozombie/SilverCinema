import { get, post, put, del } from '../baseApi';

//get all features
export const getAllFeatures = async () => {
    try {
        const features = await get('/features');
        return features;
    } catch (error) {
        console.error('Error fetching features:', error);
        throw error;
    }
};  
//create a new feature
export const createFeature = async (featureData) => {
    try {
        const feature = await post('/features', featureData);
        return feature;
    } catch (error) {
        console.error('Error creating feature:', error);
        throw error;
    }
};  
//  update an existing feature  
export const updateFeature = async (id, featureData) => {
    try {
        const feature = await put(`/features/${id}`, featureData);
        return feature;
    } catch (error) {
        console.error(`Error updating feature with id ${id}:`, error);
        throw error;
    }
};
//delete a feature
export const deleteFeature = async (id) => {
    try {
        const feature = await del(`/features/${id}`);
        return feature;
    } catch (error) {
        console.error(`Error deleting feature with id ${id}:`, error);
        throw error;
    }
};  