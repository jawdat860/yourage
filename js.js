let form = document.querySelector("form");
let date = document.querySelector("#date");
let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")
let d = document.querySelector(".d")
let mo = document.querySelector(".mo")
let y = document.querySelector(".y")
let dis = document.querySelector(".display")
form.onsubmit = function(e){
  e.preventDefault();
  
  s.innerHTML = "";
    m.innerHTML = "";
    h.innerHTML = "";
    d.innerHTML = "";
    mo.innerHTML = "";
    y.innerHTML= "";
  let yd = Date.parse(date.value)
  let dn = Date.now()
  let f=reg.test(date.value);
  if(date.value != "" && f && dn >= yd){
    let yo = new Date(date.value);
    let r = dn - yo;
    let ss = r/1000;
    let mm = r/1000/60;
    let hh = r/1000/60/60;
    let dd = r/1000/60/60/24;
    let moo = r/1000/60/60/24/30;
    let yy = r/1000/60/60/24/30/12;
    s.innerHTML =`${Number.parseInt(ss)}`
    m.innerHTML =`${Number.parseInt(mm)}`
    h.innerHTML =`${Number.parseInt(hh)}`
    d.innerHTML =`${Number.parseInt(dd)}`
    mo.innerHTML =`${Number.parseInt(moo)}`
    y.innerHTML= `${Number.parseInt(yy)}`
    dis.style.display="flex";
    
}else{
  dis.style.display="none";
}
date.value="0";
}
let reg = /(19\d+|20\d+)-\d{2}-\d{2}/g

  date.onfocus=function(){
    dis.style.display="none";
  }