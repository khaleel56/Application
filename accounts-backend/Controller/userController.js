const db= require('../Model/DbSetup')

const {UserData}=db
const getHomePage=async(req, res)=>{
    console.log('root-page');
    res.send('Welcome Shaik')
}

const createUserData=async(req,res)=>{
    // const list={name:'shaik',email:'abc@gmail.com',mobileNo:'9876543210'}
    console.log(req.data)
    // console.log(req)

    // try{
    //     const record=await UserData.create(list);
    //     console.log(record);
    //     res.send(record)
    // }catch(err){
    //     console.log('error->',err)
    // }
    res.send('creation')
}

const getUserDetails=async(req,res)=>{
     console.log(req.params.search);
        let {search}=req.params;
     const details = await UserData.findOne({
        where:{name:search},
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        raw:true,

    })
     console.log(details)
     res.status(200).json(details)
}

module.exports={
    getHomePage,
    getUserDetails,
    createUserData
}