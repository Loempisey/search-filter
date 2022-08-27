const db = require('./../models')

const createUser = async(req, res) =>{
    const body = req.body;
    if (Object.keys(body).length === 0){
        return res.status(400).send({
            message: "cannot empty body",
            statusCode: 400,
        })
    }
    const user = new db.user({
        title: body.title,
        author: body.author,
    })
    try{
        const response = await user.save()
        res.status(200).send({
            statusCode: 200,
            data: response,
        });
    }catch(error){
        res.status(500).send({
            statusCode: 500,
            message: error.message,
        })
        throw error;
    }
}
const getUser = async(req, res)=> {
    const response = await db.user.find();
    res.status(200).send({
        data: response,
        message: "Get success",
        statusCode: 200,
    })
}
const deleteUser = async(req, res)=>{
    const id = req.params.id;
    try{
        const response = await db.user.findByIdAndDelete(id);
        if(!response)
            return res.status(404).send({
                message:`Not found : ${id}`,
                statusCode: 404,
            });
        return res.status(200).send({
            message: `Delete id: ${id}`,
        })

    }catch(error){
        res.status(500).send({
            error: error,
            statusCode: 500,
        });

    }
}
const updateUser = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    try {
      const response = await db.user.findByIdAndUpdate(id, body);
      res.status(200).send({
        data: response,
        message: `Update id: ${id}`,
        statusCode: 200,
      });
    } catch (error) {
      res.status(500).send({
        error: error,
        statusCode: 500,
      });
    }
  };
  
module.exports={
    createUser,
    getUser,
    deleteUser,
    updateUser,
}
