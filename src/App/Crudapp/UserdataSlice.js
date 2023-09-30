import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";



// Create data or with the help of p[ost data fetch dat from post bbody
export const Createlibdata = createAsyncThunk("Createlibdata", async (data, { isRejectedWithValue }) => {
    const response = await fetch("https://6517cbdf582f58d62d35211d.mockapi.io/Librarydata",
        {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    try {

        const result = await response.json()
        console.log("Post data ", result);
        return result
    } catch (error) {
        console.log(error)
        return isRejectedWithValue(error)
    }
})


// Read data or get data
export const Readdata = createAsyncThunk("Readdata", async (data, { isRejectedWithValue }) => {
    const response = await fetch('https://6517cbdf582f58d62d35211d.mockapi.io/Librarydata',
        {
            // This is by deafault this object is not mandary for getting data
            method: "GET"
        }
    )
    try {
        const result = await response.json();
        console.log("get data ", result)
        return result

    } catch (error) {
        return isRejectedWithValue(error)
    }
})


// edit data or Update data
export const Updatedata = createAsyncThunk("Updatedata", async ( data,{ isRejectedWithValue }) => {
    const res = await fetch(`https://6517cbdf582f58d62d35211d.mockapi.io/Librarydata/${data.id}`, {
        method: "PUT",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
    })
    try {
        const result = await res.json()
        console.log("UPDAte data", result)
        return result

    } catch (error) {
        return isRejectedWithValue(error)

    }
})

// Delete data from database

export const Deletedata = createAsyncThunk("Delatedata", async (id, { isRejectedWithValue }) => {
    const res = await fetch(`https://6517cbdf582f58d62d35211d.mockapi.io/Librarydata/${id}`, {
        method: "DELETE"
    })
    try {
        const result = await res.json()
        console.log("deletes data", result)
        return result

    } catch (error) {

    }
})

export const UserdataSlice = createSlice({
    name: "userdata",
    initialState: {
        user: [],
        loading: false,
        error: null,
        searchData:[]
    },

    reducers:{
        searchUser:(state,action)=>{
            state.searchData=action.payload
        }
    },
    extraReducers: {
        [Createlibdata.pending]: (state) => {
            state.loading = true
        },
        [Createlibdata.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        [Createlibdata.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [Readdata.pending]: (state) => {
            state.loading = true
        },
        [Readdata.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        [Readdata.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [Deletedata.pending]: (state) => {
            state.loading = false
        },
        [Deletedata.fulfilled]: (state, action) => {
            state.loading = false
            const { id } = action.payload
            state.user = state.user.filter((ele) => ele.id !== id)
        },
        [Deletedata.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }, [Updatedata.pending]: (state) => {
            state.loading = true;
          },
          [Updatedata.fulfilled]: (state, action) => {
            console.log("updated user fulfilled", action.payload);
            state.loading = false;
            state.user = state.user.map((ele) =>
              ele.id === action.payload.id ? action.payload : ele
            );
          },
          [Updatedata.rejected]: (state, action) => {
            state.loading = false;    
            state.error = action.payload.message;
          },




    }

});

// export const{remove}=UserdataSlice.actions
export default UserdataSlice.reducer

export const {searchUser} =UserdataSlice.actions;