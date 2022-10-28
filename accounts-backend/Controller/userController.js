const db= require('../Model/DbSetup')

const {UserData}=db
const getHomePage=async(req, res)=>{
    console.log('root-page');
    res.send('Welcome Shaik')
}

const createUserData=async(req,res)=>{
    // const list={name:'shaik',email:'abc@gmail.com',mobileNo:'9876543210'}
    try{
        const record=await UserData.create(req.body);
        if(record){
            console.log(record);
            res.status(200).send(record)
        }else{
            res.status(404).send('smtg went wrong')
        }
    }catch(err){
        console.log('error->',err)
    }
}
const getUsersList=async(req, res)=>{
    try{
        const list = await UserData.findAll()
        // {
        //     where:{name:search},
        //     attributes: { exclude: ['createdAt', 'updatedAt'] },
        //     raw:true,
    
        // })
        if(list){
            console.log(list)
            res.status(200).json(list)
        }
        else{
            res.status(404).send('smtg went wrong')
        }
    }
    catch(err){
        console.log(err)
    }

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
    getUsersList,
    getUserDetails,
    createUserData
}