var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        reset_counter();
        
        var h = $( window ).height() - 44;
        
        $(".clicking_area").height( h );

    },

    onResume : function(){

        reset_counter();

    }
};

app.initialize();


$("#refresh").click(function(){    
        reset_counter();    
});


var counter = 0;
var last_click = 0;


function reset_counter(){
    $("#counter").html(get_name(0));
    counter = 0;
    last_click = 0;        
} 

$("#reset").click(function(){
    reset_counter();
});


$(".clicking_area").click(function(){

        var now = Math.floor(Date.now() / 1000);

        if( (now - last_click) > 20 && counter < 4){

            counter++;

            $("#counter").html(get_name(counter));

            last_click = now;

        }

});


function get_name(id){

    switch(id) {
        case 1:
            return "الأولى<br>[ 1 ] ";
            break;
        case 2:
            return "الثانية<br>[ 2 ] ";
            break;
        case 3:
            return "الثالثة<br>[ 3 ] ";
            break;
        case 4:
            return "الرابعة<br>[ 4 ] ";
            break;                                    
        case 0:
            return "لا يوجد سجدات";
            break;                                    
    }     
}




/// to open all _blank urls in browser
$("a[target='_blank'] , .copyrights").click(function(e){
        e.preventDefault();
        window.open($(e.currentTarget).attr('href'), '_system', '');
});


