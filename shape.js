class shape{
    constructor(drawShape,calculateArea,color){
        this.drawShape=drawShape;
        this.calculateArea=calculateArea;
        this.color="red";
    }

    drawingList = [];

    present(){
        return {drawShape:this.drawShape,calculateArea:this.calculateArea,color:this.calculateArea};
    }
    enrollDrawing(color){
        this.color.push("red")
    }
    getDrawingList(){
        return this.drawingList;
    }
}


module.exports = shape;
