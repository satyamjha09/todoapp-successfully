const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {
    try {
        // fetch all todo items from database
        const todos = await Todo.find({});
        // response ko update kar data ha
        res.status(200)
        .json({
            success: true,
            data: todos,
            message:"Entire Todo data fetched",
        });

    }

    catch(error) {

        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:'Server Error',
        });
    }
}

exports.getTodoById = async(req, res) => {

    try {

        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // data forgiven id not found

        if(!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data Found worth Given Id",
            })
        }
        // data for given id Found
        res.status(200).json({
            success:true,
            data:todo,
            message: `Todo ${id} data successfully fetched`,
        })
       
    }

    catch(error) {

        console.error(err);
        res.status(500)
        .json({
            success: false,
            error:err.message,
            message:'Server Error',
        });

       
    }

}