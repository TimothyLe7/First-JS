var main_button = document.getElementById("input_button");
var box = document.getElementById("input_box");
var list = document.getElementById("my_list");
var finish_button = document.getElementById("finish_button");
var items_arr = [];

function myFunction() {
	var new_entry = box.value;
	items_arr.push(new_entry);
}

function finalPrint() {
	list.innerHTML = '';
	items_arr.sort();
	var arr_len = items_arr.length;
	var i;
	for (i = 0; i < arr_len; i++) {
		var entry = document.createElement('li');
		entry.appendChild(document.createTextNode(items_arr[i]));
		list.appendChild(entry);
	}
}

main_button.addEventListener("click", myFunction);
finish_button.addEventListener("click", finalPrint)