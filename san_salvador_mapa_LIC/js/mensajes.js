
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="mensaje"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEL){
    return new bootstrap.Tooltip(tooltipTriggerEL)
})