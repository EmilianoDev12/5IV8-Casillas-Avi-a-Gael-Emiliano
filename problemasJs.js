let m, salto;

function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function limpiar(){
    location.reload();
}

function pasar(n){
    let rs = "";
    while(n != 0){
        if(n % 2 == 0){
            rs += "0";
        }else{
            rs += "1";
        }
        n = parseInt(n / 2);
    }
    while(rs.length < 8){
        rs += "0";
    }
    return rs.split('').reverse().join('');
}

function traducir(){
    let p, s, t, c
    let pr, sr, tr, cr;
    p = document.uno.p.value;
    s = document.uno.s.value;
    t = document.uno.t.value;
    c = document.uno.c.value;
    pr = "";
    sr = "";
    tr = "";
    cr = "";
    if(p == "") p = 0;
    if(s == "") s = 0;
    if(t == "") t = 0;
    if(c == "") c = 0;
    if(p > 255 || s > 255 || t > 255 || c > 255){
        alert("Valor de ip incorrecto")
    }else{

    }
    pr = pasar(p);
    sr = pasar(s);
    tr = pasar(t);
    cr = pasar(c);
    document.uno.pr.value = pr;
    document.uno.sr.value = sr;
    document.uno.tr.value = tr;
    document.uno.cr.value = cr;
}

function calcular(){
    document.getElementById("data").remove;
    let p, s, t, c
    let pr, sr, tr, cr;
    let n, sub, hosts;
    let m1, m2, m3, m4;
    let w = 0;
    let tipo;
    p = document.dos.p.value;
    s = document.dos.s.value;
    t = document.dos.t.value;
    c = document.dos.c.value;
    sub = document.dos.subredes.value;
    salto = 0;
    pr = "";
    sr = "";
    tr = "";
    cr = "";
    if(p == "") p = 0;
    if(s == "") s = 0;
    if(t == "") t = 0;
    if(c == "") c = 0;
    pr = pasar(p);
    sr = pasar(s);
    tr = pasar(t);
    cr = pasar(c);

    if(p <= 127){
        m1 = "11111111";
        m2 = "00000000";
        m3 = "00000000";
        m4 = "00000000";
        tipo = "a";
        m = 16;
    }
    if(p > 127 && p <= 191){
        m1 = "11111111";
        m2 = "11111111";
        m3 = "00000000";
        m4 = "00000000";
        tipo = "b";
        m = 8;
    }
    if(p > 191&& p <= 223){
        m1 = "11111111";
        m2 = "11111111";
        m3 = "11111111";
        m4 = "00000000";
        tipo = "c";
        m = 0;
    }

    sub = parseInt(sub);
    n = 0, salto = 0;
    while(Math.pow(2, n) < sub){
        n++;
    }
    if(tipo == "a"){
        m2 = procesar(n);

        for(let i=0;i<sub;i++){
            let a = "";
            a += "<tr><td>"+pr+"."+ pasar(w) + "." + tr + "." + cr + "</td></tr>";
            w += salto;
            let ntb = document.createElement("tr");
            ntb.innerHTML = a;
            document.getElementById("sub").appendChild(ntb);
        }
    }else if(tipo == "b"){
        m3 = procesar(n);

        for(let i=0;i<sub;i++){
            let a = "";
            a += "<tr><td>"+pr+"."+ sr + "." + pasar(w) + "." + cr + "</td></tr>";
            w += salto;
            let ntb = document.createElement("tr");
            ntb.innerHTML = a;
            document.getElementById("sub").appendChild(ntb);
        }
    }else{
        m4 = procesar(n);

        let a = "";
        for(let i=0;i<sub;i++){
            let a = "";
            a += "<tr><td>"+pr+"."+ sr + "." + tr + "." + pasar(w) + "</td></tr>";
            w += salto;
            let ntb = document.createElement("tr");
            ntb.innerHTML = a;
            document.getElementById("sub").appendChild(ntb);
        }
    }
    hosts = Math.pow(2, m) - 2;

    let imprimir = "<tr><td>"+pr+"."+sr+"."+tr+"."+cr+"</td><td>"+
    m1+"."+m2+"."+m3+"."+m4+"</td><td>"+hosts+"</td><td>"+salto+"</td></tr>";
    let btn = document.createElement("tr");
    btn.innerHTML = imprimir;
    document.getElementById("data").appendChild(btn);

}

function procesar(n){
    let res = "", potencia = 7;
    for(let i=0;i<n;i++){
        res += "1";
        salto += Math.pow(2, potencia);
        potencia--;
    }
    salto = 256 - salto;
    while(res.length < 8){
        res += "0";
        m++;
    }
    return res;
}

