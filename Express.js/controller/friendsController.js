const friends=require("../model/friends")



const getfriends=(req,res)=>{
    res.status(200).json(friends)
}

let getfriend= (req,res)=>{
    
    let friendId=+req.params.friendId
    let friend=friends[friendId]
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error:"Friend doesn't exists"
        })
    }
   

}


let addfriend=(req,res)=>{
    if (!req.body.name) {
        res.status(400).json({
            error:"not able to post"
        })
    }
    let newFriend={
        id:friends.length,
        "name":req.body.name
    }
    friends.push(newFriend)
    res.status(201).json(newFriend)
}

module.exports={
    getfriend,getfriends,addfriend
}