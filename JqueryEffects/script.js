$("#click").click(()=>{
    $(".box").hide(4000)
    //The display Must be None
    //$(".box").show(4000)
   //use for both show and hide
   //$(".box").toggle(4000)
   //$(".box").slideUp()
   //$(".box").slideToggle()
  // $(".box").animate({left: '600px'},4000)
})


// $("#stop").click(()=>{

//    $(".box").stop()
// })


// $("button").click(function(){
//     $("#div1").fadeTo("slow", 0.15);
//     $("#div2").fadeTo("slow", 0.4);
//     $("#div3").fadeTo("slow", 0.7);
//   });

// $(document).ready(function(){
//     $("button").click(function(){
//     $("#div1").fadeIn();
//     $("#div2").fadeIn("slow");
//     $("#div3").fadeIn(3000);
//   })
// });

//How to Show the users Name
// $.get({
//     url:"https://jsonplaceholder.typicode.com/users",
//     success:function(res){
//         let text=res.map((user)=>`<li>${user.name}</li>`)
//         $("#list").html(text)   
//     }
// })

// $.get({
//     url:"https://api.github.com/users/alaina98",
//     success:function(res){
//         let text=res.map((user)=>`<li>${user.avatar_url}</li>`)
//         $("#list").html(text)   
//     }
// })

//To show the Avtar in GitHub 
$("#click").click(()=>{
    let username=$("#username").val()
    let urlapi="https://api.github.com/users/"+username

    $.get({
        url:urlapi,
        success:function(res){
            $("#img").attr("src",res.avatar_url)
            console.log(res.avatar_url)
        }
    })

})