const student = {
    name: "shradha",
    age: 23,
    eng: 98,
    math: 98,
    phy: 95,

    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(this);

        
console.log(`${this.name} got avg marks = ${avg}`);
    }
}
console.log(student.getAvg());
