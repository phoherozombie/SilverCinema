import baseApi from './baseApi';

// Fetch all features
export const getAllFeatures = async () => {
  const response = await baseApi.get('/features');
  return response.data;
};

// Create a feature
export const createFeature = async (featureData) => {
  const response = await baseApi.post('/features', featureData);
  return response.data;
};

// Update a feature
export const updateFeature = async (id, featureData) => {
  const response = await baseApi.put(`/features/${id}`, featureData);
  return response.data;
};

// Delete a feature
export const deleteFeature = async (id) => {
  const response = await baseApi.delete(`/features/${id}`);
  return response.data;
};
