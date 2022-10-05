$(document).ready(function(){
    var regex = /^\d*[.]?\d*$/;
    var helpM = false;

        $('#currentxp').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!($.inArray(k,a)>=0)){
            e.preventDefault();
        }
    });

    $('#xpnext').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!($.inArray(k,a)>=0)){
            e.preventDefault();
        }
    });

    $('#pl').keypress(function(e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
            a.push(i);

        if (!($.inArray(k,a)>=0)){
            e.preventDefault();
        }
    });


    $("#reset").click(function(){
        $("#currentxp").val("");
        $("#xpnext").val("");
        $("#pl").val("");
        $(".result").css("display","none");
        $("#messages").css("display","none")
    });

    $("#submit").click(function(){
        submit();
    });

    $("input").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode = 13){
            submit();
        }
    })

    $("#help").click(function(){
        $("#helpModal").css("display","flex");
    });

    $("body").click(function(e){
        var container = $(".container");
        if(!container.is(e.target)&&container.has(e.target).length === 0&&e.target.id != "helpModal"){
            $("#helpModal").css("display","none");
        }
    });
});

function isNumber(event){
    var keycode = event.keycode;
    if(keycode>48 && keycode<57){
        return true;
    }else{
        return false;
    }
}

function submit(){

    var link = "https://romsh.github.io/Coromon-PV/data/potentials.json";
    var currXp = parseInt($("#currentxp").val());
    var nextXp = parseInt($("#xpnext").val());
    var pl = parseInt($("#pl").val());
    if(Number.isInteger(currXp)&&Number.isInteger(nextXp)&&Number.isInteger(pl)){
        $("#messages").css("display","none");
        var xp = currXp+nextXp;
        $.getJSON(link,function(data){
            var nbCol = 21;
            var tab = [];
            var result = 0;
            var content;
            datas = data[pl+1]; //Getting the right row from the json
            //console.log(datas);
            for(var i=1;i<22;i++){
                if(datas[i] === xp){
                    result = i;
                }
            }

            if(result != 0){
                $("#pv").html(result);
                $(".result").css("display","block");
            }else{
                $("#messages span").html("Potential Value not found ! Some input are probably incorrect.")
                $("#messages").css("display","block");
                $(".result").css("display","none");
            }
        });
    }else{
        $("#messages span").html("Values must be integer.");
        $("#messages").css("display","block");

    }
}