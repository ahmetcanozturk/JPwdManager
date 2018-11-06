/*
    description: user interface on window load methods
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
*/

var windowUtil = require("./windowUtil");
var th = require("./templateHelper");

$(() => {
    $('#filterKey').bind('input propertychange', function() {
      const text = this.value;
      if(text && text.length > 2) {
        $(".key").each(function(index) {
            if(!$(this).val().includes(text))
                $(this).parent().parent(".pwditem").hide();
            else
                $(this).parent().parent(".pwditem").show();
        });
        $(".newpwditem *").prop('disabled', true);
      }
      else {
        $(".pwditem:hidden").show();
        $(".newpwditem *").prop('disabled', false);
      }
    });

    $("#resetFilter").bind("click", function() {
        $("#filterKey").val("");
        $(".pwditem").show();
        $(".newpwditem *").prop('disabled', false);
    });

    // load password items from the data file to UI
    windowUtil.loadItems(function(elements) {
        var passwordItems = $("#passwordItems");
        let index = 0;
        elements.forEach(element => {
            let content = th.templateContent(element, index);
            passwordItems.append(content);
            index++;
        });

        th.templateBinder(windowUtil);

        // new item
        $(".addNew" ).bind("click", function() {
            windowUtil.addItem(this, function(element) {
                // refresh items list after add
                if(element != null) {
                    var passwordItems = $("#passwordItems");
                    let lastItemID = $("#passwordItems .pwditem").last().attr("id");
                    let index = (lastItemID != null) ? parseInt(lastItemID.replace("item_", "")) + 1 : 0;
                    let content = th.templateContent(element, index);
                    passwordItems.append(content);
    
                    th.templateBinder(windowUtil);
                }
            });
        });
    });
 
    $('#filterKey').focus();
});