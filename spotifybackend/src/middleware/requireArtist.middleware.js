
const requireArtist = async (req,res,next)=>
{
            if(req.user.role !== "artist"){
            return res.status(403).send("Only artists can access this route")
        }
        next()
}
module.exports = requireArtist