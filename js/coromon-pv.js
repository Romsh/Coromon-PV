var theme = sessionStorage.getItem('theme');

if(theme === null){
    theme = 'light';
    sessionStorage.setItem('theme','light');
}else if(theme === 'dark'){
    $('link[href="css/coromon-pv-light.css"]').attr('href','css/coromon-pv-dark.css');
}


$(document).ready(function(){
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
    })
});