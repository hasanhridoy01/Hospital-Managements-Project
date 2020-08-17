(function($){
   $(document).ready(function(){

    //Add Form Modal
    $(document).on('click','a#modal-btn', function(e){
        e.preventDefault();

        $('#modal-show').modal('show');
        return false;
        

    });




   });
})(jQuery)