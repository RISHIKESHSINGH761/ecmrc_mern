const express=require("express");
const cors=require('cors');
const dotenv=require("dotenv").config();
const PORT=5000;
const dbConnect=require("./config/db.js");
const app=express();
const authRouter=require("./routes/auth.routes.js");
const userRouter=require("./routes/user.routes.js");
const productRouter=require("./routes/product.routes.js");
const cartRouter=require("./routes/cart.routes.js");
const cartItemRouter=require("./routes/cartItem.routes.js");
const orderRouter=require("./routes/order.routes.js");
const reviewRouter=require("./routes/review.routes.js");
const ratingRouter=require("./routes/rating.routes.js");
const adminOrderRoutes=require("./routes/adminOrder.routes.js");


dbConnect();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})


app.use("/auth",authRouter);
app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/cart_items",cartItemRouter);
app.use("/api/orders",orderRouter);
app.use("/api/reviews",reviewRouter);
app.use("/api/ratings",ratingRouter);
app.use("/api/admin/orders",adminOrderRoutes);


app.listen(PORT,()=>{
    console.log(`Serveer is running at PORT ${PORT}`);
});


module.exports={app};