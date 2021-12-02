import Axios from "axios";

const url = "http://localhost:5000";
// const url = "http://ce6d-103-68-219-34.ngrok.io";

export const getAllSuppliers = async () => {
  const suppliers = await Axios.get(`${url}/supplier/data`);
  return suppliers;
};
export const getSupplierDetails = async (id) => {
  const data = await Axios.get(`${url}/supplier/${id}`);
  return data;
};

export const handleCreateNewBranch = (formData) => {
  const data = Axios.post(`${url}/new/branch`, formData);
  return data;
};

export const getCategories = async () => {
  const data = await Axios.get(`${url}/data/category`);
  return data;
};

export const getSpecificCategory = async (id) => {
  const data = await Axios.get(`${url}/category/${id}`);

  return data;
};

export const createNewSupplier = async (formData) => {
  const data = await Axios.post(`${url}/new/supplier`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};
