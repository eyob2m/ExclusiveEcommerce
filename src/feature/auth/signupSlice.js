import { Api } from "../../app/api";



const signUpSlice = Api.injectEndpoints({
    endpoints: (builder)=>({
        signUp: builder.mutation({
            query: (data)=> ({
                body: data,
                method: "POST",
                url: '/users'
            }),
         
       })
    })
})

export const { useSignUpMutation} = signUpSlice