const router = require("express").Router();

//add new listings
router.post("/",(req,res)=>{
    res.send("add new  listings")
});


//get all listings
router.get("/",(req,res)=>{
    res.send("All listings")
});

//single listing

router.get("/:listingId",(req,res)=>{
    res.send("single listing")
});

//Update listing

router.put("/:listingId",(req,res)=>{
    res.send("Update listing")
});

//delete listing

router.delete("/:listingId",(req,res)=>{
    res.send("delete listing")
});

module.exports=router;