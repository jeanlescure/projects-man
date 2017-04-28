$(function(){
  $.getJSON( "/projects", function( data ) {
    var datatable = $('#datatable').DataTable({
      "data": data,
      "columns": [
          { "data": "name" },
          { "data": "created_at" },
          { "data": "updated_at" }
      ]
    });
  });
});