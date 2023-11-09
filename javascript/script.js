function quicksort(array) {
	if (array.length <= 1) {
	  return array;
	}
  
	var pivot = array[0];
	
	var left = []; 
	var right = [];
  
	for (var i = 1; i < array.length; i++) {
	  array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
	}
  
	return quicksort(left).concat(pivot, quicksort(right));
  };
 
  function sort() {
  var unsorted = document.getElementById('array').value;
  unsorted = JSON.parse("[" + unsorted + "]");  
  var sorted = quicksort(unsorted);
  document.getElementById('sorted').value = sorted;
}

function validateFields() {
    var unsorted = document.getElementById('array').value;
    if(unsorted == "") {                                        
        alert('Campul este gol!');
        return;
    }

    var isValid = /^[0-9,]*$/.test(unsorted);                   
    if(!isValid) {
        alert('Sirul nu contine doar cifre si caracterul virgula!');
        return;
    }

    sort();
}


