export const log= async (stack, level, module, message)=>{
    try {
        const response  = await fetch (`http://localhost:5000/middle/loggs`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({stack,
                level,
                module,
                message,} )

        })
        const data = await response.json()
        console.log(data);
        
        
    } catch (error) {
         console.error("Log Error:", error);

        return {
            success: false,
            message: error.message,
        };
        
    }
}