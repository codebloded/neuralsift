import Axios from "axios";

const url = "http://localhost:5000";

export const getAllSuppliers = async () => {
  try {
    const suppliers = await Axios.get(`${url}/supplier/data`);

    if (suppliers) {
      return suppliers;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
export const getSupplierDetails = async (id) => {
  try {
    const data = await Axios.get(`${url}/supplier/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const handleCreateNewBranch = (formData) => {
  try {
    const data = Axios.post(`${url}/new/branch`, formData);
    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getCategory = async () => {
  try {
    const data = await Axios.get(`${url}/category`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export const getSpecificCategory = async (id) => {
  try {
    const data = await Axios.get(`${url}/category/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
