var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        reset_counter();

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


$("#plus_one .btn").click(function(){

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
            return "الأولى";
            break;
        case 2:
            return "الثانية";
            break;
        case 3:
            return "الثالثة";
            break;
        case 4:
            return "الرابعة";
            break;                                    
        case 0:
            return "لا يوجد سجدات";
            break;                                    
    }     
}




/// to open all _blank urls in browser
$("a[target='_blank']").click(function(e){
        e.preventDefault();
        window.open($(e.currentTarget).attr('href'), '_system', '');
});