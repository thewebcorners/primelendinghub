const backendDomin = "http://localhost:5000"

const SummaryApi = {
    signUP : {
        url : `${backendDomin}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomin}/api/login`,
        method : "post"
    },
    current_user : {
        url : `${backendDomin}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomin}/api/userLogout`,
        method : 'get'
    },
    allUser : {
        url : `${backendDomin}/api/getusers`,
        method : 'get'
    },
    updateUser : {
        url : `${backendDomin}/api/update-user`,
        method : "post"
    }
  
}


export default SummaryApi