
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => {
    console.log("Connected to Mongo Successfully")
})

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true

    },
    rating: {

        type: Number,
        require: [true, 'rating must be required for the tour'],
        default: 4.5
    },
    price: {

        type: Number,
        require: [true, 'price must be required for the tour']
    }
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;