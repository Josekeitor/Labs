$(".agregar").on("click", function(e){
   e.preventDefault()
   let listItem = $("<li>")
   let checkButton = $("<button>")
   let textInput = $("#newText")
   checkButton.text("check")
   checkButton.addClass("checar")

   let deleteButton = $("<button>")
   deleteButton.text("delete")
   deleteButton.addClass("del")

   let itemText = $("<p>")
   itemText.text(textInput.val())
   itemText.addClass("itemShop")
   textInput.val("")

   listItem.append(itemText)
   listItem.append(checkButton)
   listItem.append(deleteButton)
   listItem.addClass("lis")

   $(".Lista").prepend(listItem)
});

function erase(){
   $(this).parent().remove();
}

function check() {
   $(this).prev().toggleClass("check");
}

$(".Lista").on("click", ".checar", check);
$(".Lista").on("click", ".del", erase);
