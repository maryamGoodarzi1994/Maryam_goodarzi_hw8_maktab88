function getUserInfo (fname,last,cb){
    let user ={
        fname ,
        last
    }
    cb(user)
}
getUserInfo('mary','goody',function(user){
    console.log( user.fname +' '+user.last);
})
getUserInfo('ali','alaei',function(user){
    console.log(`hi ${user.fname}`);
})
