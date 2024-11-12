
function addClass (){$("h1").addClass("curly-title")}

function remclass (){$("h1").removeClass("curly-title")}

$("button").html("<em>Don't Click ME</em>");

// $("img").attr("src","https://img.freepik.com/premium-vector/web-design-development_23785-222.jpg");
// $("a").attr("href","https://www.bing.com")
// $("h1").attr("class","curly-title")
$("h1").click(function(){
   // $("h1").removeClass("curly-title")
    
});


$("html").on("click",function (event){
    // $("h1").removeClass("curly-title");
    // setTimeout(addClass,200)
    $("h1").slideToggle();
})

$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")

// $("h1 button").remove();