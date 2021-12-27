var url = new URL(location);
var content = url.searchParams.get("content");

if(content){
    var div = document.getElementById( 'container' );
    div.insertAdjacentHTML( 'beforeend', content );
}

var builder = new ContentBuilder({
    container: '.container',
    row: 'row',
    cols: ['col-md-1', 'col-md-2', 'col-md-3', 'col-md-4', 'col-md-5', 'col-md-6', 'col-md-7', 'col-md-8', 'col-md-9', 'col-md-10', 'col-md-11', 'col-md-12'],
    snippetAddTool: false,
    snippetOpen: false,
    sourceEditor: false
});