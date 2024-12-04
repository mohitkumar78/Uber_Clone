import mongoose from "mongoose";

const Db_Connect = async () => {

    try {
        await mongoose.connect("mongodb+srv://uber:uber123@cluster0.nnulh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("Connection estalbish")
    } catch (error) {
        console.log("Error while Ocuur during Connect to database", error)
    }

}

export default Db_Connect;