document.body.innerHTML += '<dialog>This is a dialog.<br><button>Close</button></dialog>';
var dialog = document.querySelector("dialog")
dialog.querySelector("button").addEventListener("click", function () {
    dialog.close()
})
dialog.showModal()
