const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const UserModel = mongoose.model("UserModel");  

//this is API Register user data in database

router.post("/signup", (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ err: " one and more field are empty" });
  }
  UserModel.findOne({ email: email }).then((result) => {
    if (result) {
      return res.status(400).json({ err: "user already exists" });
    }
    const user = new UserModel({
      fullName,
      email,
      password,
    });
    user.save()
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(400).json({ err: err });
    });
  });
});



router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user with the given email
        const user = await UserModel.findOne({ email });

        // Check if the user exists and the password matches
        if (user && user.password === password) {
            res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });

            // Assuming you are within a component, use useNavigate here

        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// router.post("/login", (req, res) => {
//   const { fullName, email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ err: " one and more field are empty" });
//   }
//   UserModel.findOne({ email: email }).then((result) => {
//     if (!result) {
//       return res.status(401).json({ err: "Invalid Credentials" });
//     }
//     user.save()
//     .then((didMatch) => {
//        if(didMatch){
//         res.status(200).json({result: "user login successful!"})
//        }else{
//         return res.status(401).json({ err: "Invalid Credentials" });
//        }
//     })
//     .catch((err) => {
//         res.status(400).json({ err: err });
//     });
//   });
// });



module.exports = router;