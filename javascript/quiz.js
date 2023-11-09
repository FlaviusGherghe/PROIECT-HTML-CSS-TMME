function quiz(){
    var intrebari = [
        {
              prompt: "Ce tip de algoritm e Quicksort?\n(a) divide et impera\n\ (b) backtracking\n (c) de cautare",
              answer: "a"
        },
        {
             prompt: "Ai de sortat 1gb de data cu 100MB memorie valabila. Care algortim e potrivit? \n(a) QuickSort\n\ (b) Heap Sort\n(c) MergeSort",
             answer: "c"
        },
        {
             prompt: "In ce an a fost dezvoltat algoritmul QuickSort?\n(a) 1960\n\ (b) 1970\n(c) 1950",
             answer: "a"
        }
   ];
   var score = 0;
   
   for(var i = 0; i < intrebari.length; i++){
        var raspuns = window.prompt(intrebari[i].prompt);
        if(raspuns == intrebari[i].answer){
             score++;
             alert("Corect!");
        } else {
             alert("Gresit!");
        }
   }
   alert("Ai raspuns la " + score + "/" + intrebari.length);
}