//By jquery

//$(document).ready(function(){
//    $('.but').click(function(){
//       const name = $('#name').val();
//       $('#imgid').attr('src', `https://joeschmoe.io/api/v1/${name}`);
//    });
//});

// By javascript

function fun(){
    var name = document.getElementById('name').value;
    var apii = document.getElementById('imgid').setAttribute('src',`https://joeschmoe.io/api/v1/${name}` );
    
}
