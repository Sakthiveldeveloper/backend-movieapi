const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true},
  creator: { type: String, required: true }
});

module.exports = mongoose.model('Movie', userSchema);
// CREATE MOVIE 
const createMovie = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) 
       return res.status(400).json({ errors: errors.array() });

    const { title, description, creator } = req.body;
    let  existingUser = await User.findOne({ _id: creator });
    if (!existingUser)
       return res.status(400).json({error : 'invalid user'});

    const movie = new Movie({
        title,
        description,
        creator
    });

    try {
        await movie.save();
        res.status(200).json({
        message: "movie created successfully",
        movie: movie
      })
    } catch (error) {
         res.status(500).json(error.message);
    }
};