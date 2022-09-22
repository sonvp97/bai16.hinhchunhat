function Rectangle(long, high) {
    this.long = long;
    this.high = high;
    this.getLong = function () {
        return long;
    }
    this.getHigh = function () {
        return high;
    }
    this.getArea = function () {
        return long*high;
    }
    this.getPerimeter = function () {
        return  (long+high)*2;
    }
}
function DrawARectangle (){
    var ctx = document.getElementById('myCanvas').getContext('2d');
    var x = Math.floor(Math.random()*60);
    var y = Math.floor(Math.random()*60);
    let Rec = new Rectangle(x,y);
    let area = Rec.getArea();
    let Perimeter = Rec.getPerimeter();
    document.getElementById('result').innerHTML='Diện tích hình chữ nhật là: '+area+"<br>"+'Chu vi hình nhữ nhật là: '+Perimeter;
    ctx.fillRect(20,20,x,y);
}
DrawARectangle();




// let Rec = new Rectangle(20,20);
// let area = Rec.getArea();
// let Perimeter = Rec.getPerimeter();
// alert('Diện tích hình chữ nhật là: '+area+"<br>"+'Chu vi hình nhữ nhật là: '+Perimeter);



