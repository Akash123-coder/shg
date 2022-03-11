const Seller = require("../schema/SellerSchema");
const fs=require('fs');
const formidable = require('formidable');
var certificate="",sghname="",sghfoundername="",sghaddress="",productdetails="",accountno="",bankname="",ifsccode="",branch="",phone="",email="";
exports.postData = async (req, res) => {
 
  try {
    let form=new formidable.IncomingForm();
    form.keepExtensions=true;
    form.parse(req,async(err,fields,file)=>{
      if(!fields)
      {
          return res.status(400).json({
              success:false,
              error:'Fields are Empty',
          })
      }
      if(err)
      {
          return res.status(400).json({
              success:false,
              error:err,
          })
      }
     
     console.log(fields)
          if(file[Object.keys(file)[0]])
          {
              certificate={
                  "data":fs.readFileSync(file[Object.keys(file)[0]].path),
              "contentType":file[Object.keys(file)[0]].type,
              }
              //console.log("hers is",certificate);
          }
          
           sghname=fields.sghname;
           sghfoundername=fields.sghfoundername;
           sghaddress=fields.sghaddress;
           productdetails=fields.productdetails;
           accountno=fields.accountno;
           bankname=fields.bankname;
           ifsccode=fields.ifsccode;
           branch=fields.branch;
           phone=fields.phone;
           email=fields.email;
           const result = await Seller.create({sghname:sghname,sghfoundername:sghfoundername,sghaddress:sghaddress,productdetails:productdetails,
            accountno:accountno,bankname:bankname,ifsccode:ifsccode,branch:branch,phone:phone,certificate:certificate,
            email:email});       
  })
    res.status(200).json({ data: "successful IAnsertion" });
  } catch (err) {
    console.log(err);
    res.status(409).json({
      status: "Failure in  Insertion.",
    });
  }
};

exports.busAdd = async (req, res) => {
  try {
    // const { useId } = fields;
    console.log(req.useId);
    if (req.useId === undefined) {
      res.status(200).json({ message: "Not auth", status: 1 });
    }
    console.log(fields);
    res.status(200).json({ message: "bus add auth", status: 0 });
  } catch (error) {
    console.log(error);
  }
};
