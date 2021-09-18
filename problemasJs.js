function validar(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
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
    let p, s, t, c, pr, sr, tr, cr;
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
    pr = pasar(p);
    sr = pasar(s);
    tr = pasar(t);
    cr = pasar(c);
    document.uno.pr.value = pr;
    document.uno.sr.value = sr;
    document.uno.tr.value = tr;
    document.uno.cr.value = cr;
}