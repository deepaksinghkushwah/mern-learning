const {events} = require("./data.json");
export default (req, res) => {
    const slug = req.query.slug;
    const evt = events.filter(item => item.slug === slug);
    res.status(200).json(evt);
}