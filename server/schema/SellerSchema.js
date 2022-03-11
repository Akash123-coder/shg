const mongoose=require('mongoose');

const SellerSchema = new mongoose.Schema({
  sghname: {
    type: String,
    required:true,
  }, 
  sghfoundername:{
    type: String,
    required:true
  },
  sghaddress:{
    type: String,
    required:true
  },
  productdetails:{
   type:[String]
  },
  phone:{
type:String,
required:true
  },
  email:{
    type:String,
required:true
  },
  certificate:{
    data:Buffer,
    contentType:String
  },
  accountno:
  {
    type:String
  },
  bankname:{
    type:String
  },
  ifsccode:{
    type:String
  },
  branch:{
    type:String
  }
});

const Seller = mongoose.model('Seller', SellerSchema);
module.exports=Seller;
