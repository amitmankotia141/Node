const express=require("express")
const { isAuthorised } = require("../Helper")
const planRouter=express.Router()
const {getAllPlans,getPlan,createPlan,updatePlan,deletePlan,top3Plans}=require("../Controller/planController")
planRouter
.route("/all")
.get(getAllPlans)
planRouter
.route("/top3")
.get(top3Plans)
planRouter.use(protectRoute)
planRouter
.route("/single/:id")
.get(getPlan)
planRouter.use(isAuthorised(["admin","restaurantowner"]))
planRouter
.route("/crud")
.post(createPlan)
.patch(updatePlan)
.delete(deletePlan)





module.exports=planRouter