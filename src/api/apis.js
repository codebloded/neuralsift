import Axios from "axios";

const url = "http://localhost:5000";

export const getAllSuppliers = async () => {
  try {
    const suppliers = await Axios.get(`${url}/supplier/data`);

    return suppliers;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
export const getSupplierDetails = async (id) => {
  try {
    const data = await Axios.get(`${url}/supplier/${id}`);

    return data;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
