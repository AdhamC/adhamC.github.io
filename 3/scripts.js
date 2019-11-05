$("#food").click(function(){
    $("#petrol").hide(500);
    $("#gas").hide(500);
    $("#freedom").hide(500, function(){
        $("#food").animate({marginTop: "50px"},function(){
            $("#foodText").fadeIn(500);
        });
    });
})
$("#petrol").click(function(){
    $("#food").hide(500);
    $("#gas").hide(500);
    $("#freedom").hide(500, function(){
        $("#petrol").animate({marginTop: "50px"},function(){
            $("#petrolText").fadeIn(500);
        });
    });
})
$("#gas").click(function(){
    $("#food").hide(500);
    $("#petrol").hide(500);
    $("#freedom").hide(500, function(){
        $("#gas").animate({marginTop: "50px"},function(){
            $("#gasText").fadeIn(500);
        });
    });
})
$("#freedom").click(function(){
    $("#food").hide(500);
    $("#gas").hide(500);
    $("#petrol").hide(500, function(){
        $("#freedom").animate({marginTop: "50px"},function(){
            $("#freedomText").fadeIn(500);
        });
    });
})
