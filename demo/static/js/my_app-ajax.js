$(document).ready(function() {
    $('#like_btn').click(function() {
        var category_id_var;
        category_id_var = $(this).attr("data-categoryid");
        
        $.get('/my_app/like_category/',
              {'category_id': category_id_var},
              function(data) {
                  $('#like_count').html(data);
                  $('#like_btn').hide();
              })
    });
    
    $('#suggestion').keyup(function() {
        var query;
        query = $(this).val();
        
        $.get('/my_app/suggest/',
              {'suggestion': query},
              function(data) {
                  $('#categories-listing').html(data);
              })
    });
    
    /* Code added for handling page add clicks */
    $('.my_app-page-add').click(function() {
        alert('hello');
        var categoryid = $(this).attr('data-categoryid');
        var title = $(this).attr('data-title');
        var url = $(this).attr('data-url');
        var clickedButton = $(this);
        
        $.get('/my_app/search_add_page/',
              {'category_id': categoryid, 'title': title, 'url': url},
              function(data) {
                  $('#page-listing').html(data);
                  clickedButton.hide();
              })
        
    });
    /* End code addition */
    
});