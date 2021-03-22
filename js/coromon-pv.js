﻿var theme = sessionStorage.getItem('theme');

if(theme === null){
    theme = 'light';
    sessionStorage.setItem('theme','light');
}else if(theme === 'dark'){
    $('link[href="css/coromon-pv-light.css"]').attr('href','css/coromon-pv-dark.css');
}


$(document).ready(function(){

    var link = "https://spreadsheets.google.com/feeds/cells/14tV5IOzdzhvVspUqfyUPmjf_hRN1Q9tuQY2P-KYap3w/1/public/full?alt=json";
    var regex = /^\d*[.]?\d*$/;

    $("#theme-btn").on('click',function(){     
        if(theme === 'dark'){
            $('link[href="css/coromon-pv-dark.css"]').attr('href','css/coromon-pv-light.css');
            theme = 'light';
            sessionStorage.setItem('theme','light');

        }else if(theme === 'light'){
            $('link[href="css/coromon-pv-light.css"]').attr('href','css/coromon-pv-dark.css');
            theme = 'dark';
            sessionStorage.setItem('theme','dark');
        }
    });
    
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
        var currXp = parseInt($("#currentxp").val());
        var nextXp = parseInt($("#xpnext").val());
        var pl = parseInt($("#pl").val());
        if(Number.isInteger(currXp)&&Number.isInteger(nextXp)&&Number.isInteger(pl)){
            $("#messages").css("display","none");
            var xp = currXp+nextXp;
            $.getJSON(link,function(data){
                var datas = data.feed.entry;
                var nbCol = 22;
                var tab = [];
                var result = 0;
                var content;
                for(var i = 1;i<22;i++){
                  content = datas[nbCol*(pl+1)+i].content.$t;
                  content = content.replace(/\s/g, "");
                  if(parseInt(content) === xp){
                      result = i;
                  }
                }
                
                if(result != 0){
                    $("#pv").html(result);
                    $(".result").css("display","block");
                }else{
                    $("#messages span").html("Potential Value introuvable !")
                    $("#messages").css("display","block");
                }
            });
        }else{
            $("#messages span").html("Les valeurs ne sont pas toutes entières.");
            $("#messages").css("display","block");

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