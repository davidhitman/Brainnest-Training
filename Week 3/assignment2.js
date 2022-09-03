function diagonal(){
    let side = 9;
    let square = ((Math.pow(side, 2)) + (Math.pow(side, 2)));
    let diag = Math.sqrt(square);
    console.log("The diagonal of the square is:"+diag);
}
function area(){
    let base = 5;
    let height = 6;
    let hipotenuose = 7;
    let area = (0.5*6*5);
    console.log("The area of the triangle is:"+area);
}
function circumference (){
    let radius = 4;
    const pie = 3.142;
    circum = (2 * pie * radius);
    console.log("The circumference of the circle is:"+ circum);
}
function surfaceArea (){
    let radius = 4;
    const pie = 3.142;
    SA = (pie * (Math.pow(radius, 2)));
    console.log("The Surface Area of the circle is:"+SA);
}
diagonal();
area();
circumference ();
surfaceArea ();
