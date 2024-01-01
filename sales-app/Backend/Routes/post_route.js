const express = require("express");
const router = express.Router();
const { default: mongoose } = require("mongoose");
// Import and define the schema for the "PostModel"
const PostModel = require("../models/post_model");

//get all sales entry
router.get('/topSalesData', async (req, res) => {
    try {
      const posts = await PostModel.find({}).exec();
      if (!posts) {
        return res.status(404).send("404 Not Found");
      }
      res.status(200).json({ posts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Endpoint to get the total revenue (sum of all product amounts)
router.get('/totalRevenue', async (req, res) => {
    try {
      const products = await PostModel.find({}, 'amount');
      
      // Convert amount strings to numbers and calculate the total revenue
      const totalRevenue = products.reduce((sum, product) => sum + parseFloat(product.amount), 0);
  
      res.status(200).json({ totalRevenue });
    } catch (error) {
      console.error('Error calculating total revenue:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
//creating new entry in database
router.post("/add", (req, res) => {
  console.log(req.body);    
  const { productName, quantity, amount } = req.body;
  const postObj = new PostModel({
    productName: productName,
    quantity: quantity,
    amount: amount,
  });
  postObj
    .save()
    .then((newPost) => {
      res.status(201).json({ post: newPost });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
