import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedServices: [],
  selectedCenter: '',
  startDate: '',
  time: '',
  plateNo: '',
  brand: '',
  name: '',
  email:'',
  carModel: '',
  year:'',
  userLocation:'',
  phoneNum:''
};

export const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService: (state, action) => {
      // Add the selected service if not already present
      if (!state.selectedServices.includes(action.payload)) {
        state.selectedServices.push(action.payload);
      }
    },
    removeService: (state, action) => {
      // Remove the selected service
      state.selectedServices = state.selectedServices.filter(
        (service) => service !== action.payload
      );
    },
    setSelectedCenter: (state, action) => {
        state.selectedCenter = action.payload;
      },
      setStartDate: (state, action) => {
        state.startDate = action.payload;
      },
      setTime: (state, action) => {
        state.time = action.payload;
      },
      setPlateNo: (state, action) => {
        state.plateNo = action.payload;
      },
      setBrand: (state, action) => {
        state.brand = action.payload;
      },
      setName: (state, action) => {
        state.name = action.payload;
      },
      setEmail: (state, action) => {
        state.email = action.payload;
      },
      setModel: (state, action) => {
        state.carModel = action.payload;
      },
      setYear: (state, action) => {
        state.year = action.payload;
      },
      setUserLocation: (state, action) => {
        state.userLocation = action.payload;
      },
      setPhoneNum: (state, action) => {
        state.phoneNum = action.payload;
      },
  },
});

// Export the actions
export const { addService, removeService, setPlateNo , setSelectedCenter, setStartDate,
    setTime, setBrand, setName, setEmail, setModel, setYear, setUserLocation, setPhoneNum} = serviceSlice.actions;

// Export the reducer to include in the store
export default serviceSlice.reducer;
