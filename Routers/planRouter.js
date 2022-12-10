const express=require("express")
const planRouter=express.Router()
planRouter
.route()
.post(createPlan)
.patch(updatePlan)
.delete(deletePlan)
planRouter
.route()
.get(getPlan)
planRouter
.route()
.get(getAllPlans)
planRouter
.route()
.get(top3Plans)











module.exports=planRouter