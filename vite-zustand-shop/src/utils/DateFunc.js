/**
 * 
 * @param {yyyy-mm-dd} date 
 */
export function formatDate(date){
    let fDate = new Date(date);
    return fDate.getDay()+' '+fDate.getMonth()+" "+fDate.getFullYear();
}

export function currentYear(){
    let date = new Date();
    return date.getFullYear();
}

export function timeout(ms) {
    return new Promise(resolve => window.setTimeout(resolve, ms));
}