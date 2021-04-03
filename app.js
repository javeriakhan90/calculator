function getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
}
function clearResult(){
    result = document.getElementById("result");
    result.value = " "

}
function equal(){
    var result = document.getElementById("result")

    result.value= eval(result.value)
}