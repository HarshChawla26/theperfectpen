import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'showtos',
  initialState: {
    value: false
  },
  reducers: {
    toggleTos: state => {
        if(state.value){
            state.value = false;
        }else{
            state.value = true;
        }
    }
  }
})

export const { toggleTos } = counterSlice.actions

export default counterSlice.reducer