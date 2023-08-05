const userModel=require('../Models/userinfo')
const addlocation=('/',async(req,res)=>{
    const {fname,age,phoneNumber,city,location}=req.body
    try {
        const data= await userModel({
            fname:fname,  
            phoneNumber:phoneNumber,
            city:city,
            location:location,
            age:age
        })


        const result= await data.save()
        if(result){
            res.send(result)
        }else{
            res.send("not sucess")
        }
    } catch (error) {
    console.log(error);
    res.send("not yet")
    }
})


const getNearestLocation=('/nearbylocations', async (req, res) => {
    try {
      const { latitude, longitude } = req.query;
  
      // Convert latitude and longitude to numbers
      const lat = parseFloat(latitude);
      console.log(lat);
      const lon = parseFloat(longitude);
  
      // Execute the aggregation pipeline
      const locationdata = await userModel.aggregate([
        {
          '$geoNear': {
            'near': {
              'type': 'Point', 
              'coordinates': [
                lat,lon
              ]
            }, 
            'distanceField': 'distance', 
            'spherical': true, 
            'distanceMultiplier': 0.001
          }
        }, {
          '$project': {
            'city': 1, 
            'distance': 1
          }
        }, {
          '$skip': 1
        }
      ]);
  if(locationdata){
    res.status(200).json({message:"Nearest Location found Sucessfully..!",status:true,sattusCode :200,data:locationdata})
  }else[
    res.status(400).json({message:"Something Wen Wrong..!",status:false,stausCode:400})
  ]
     
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"Something Wen Wrong..!",status:false,stausCode:400})
    }
  });

  module.exports={
    addlocation,
    getNearestLocation
  }