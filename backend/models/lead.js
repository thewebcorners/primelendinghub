const  mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
     leadtype:{
         type:String,
         required:[true,'Provide Leadtype']
     },
     loantype:{
        type:String,
        required:[true,'Provide Loan Type']
     },
     loanamount:{
        type:Number,
        required:[true,'Provide Loan Amount']
     },
     loanTenure:{
        type:String,
        default:""
     },
     panNumber:{
        type:String,
        default:""
     },
     firstName:{
        type:String,
        required:[true,'Provide First Name']
     },
     lastName:{
        type:String,
        required:[true,'Provide Last Name']
     },
     gender:{
        type:String,
        required:[true,'Provide Gender']
     },
     mobile:{
        type:String,
        required:[true,'Provide Mobile No.']
     },
     email:{
        type:String,
        required:[true,'Provide Email']
     },
     dob:{
      type:Date,
      required:[true,'Provide DOB']
   },
     pincode:{
        type:String,
        required:[true,'Provide Pincode']
     },
     anualIncome:{
      type:String,
      default:""
     },
     cobAnualIncome:{
        type:Number,
        default:""
     },
     exitingEmi:{
         type:Number,
         default:""
      },
      profession:{
         type:String,
         default:""
      },
      salaryMode:{
         type:String,
         default:""
      },
      companyName:{
         type:String,
         default:""
      },
      companyType:{
         type:String,
         default:""
      }

},{
    timestamps:true
})

const leadModal = mongoose.model('addlead',leadSchema)
module.exports = leadModal