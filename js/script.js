$(document).ready(() => {

    var scroll_start = 0;
    var startchange = $('#navbar');
    var offset = startchange.offset();
    if (startchange.length) {
        $(document).scroll(() => {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('#navbar').css('background-color', '#2c3e50');
                $('.color-buff').css('color', 'white');
            }
            else {
                $('#navbar').css('background-color', 'white');
                $('.color-buff').css('color', 'black');
            }
        })
    }

    var defaultCode =
    "<!DOCTYPE html>\n" +
    "<!-- Please insert a div with class of \"foo\" and id of \"bar\"-->\n";

    var errorMsg = "<h1 style='color:red'>Have to use h1 tags</h1>";
    var editor = ace.edit("editor");

    var sendScript = document.getElementById('send-script');
    var preview = document.getElementById('preview');

    editor.resize();
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    var currentCode = (localStorage.code)? localStorage.code : defaultCode;

    $(window).keydown(function(e) {
      if (e.ctrlKey && e.keyCode == 13) {
        var frameDoc = preview.contentDocument || preview.contentWindow.document;
        var buttonNext = document.getElementById('button-next');
        editorContent = editor.getValue();

        frameDoc.getElementById("user-html").innerHTML = editorContent;
        localStorage.code = editorContent;


        if (frameDoc.getElementById('errorMsg').innerHTML == 'Bener') {
            setTimeout(() => buttonNext.className = '', 10);
            buttonNext.childNodes[1].disabled = false;
        }
        else {
            setTimeout(() => buttonNext.className = 'wrong', 10);
            buttonNext.childNodes[1].disabled = true;
        }
      }
    })
  editor.setValue(defaultCode);

})
