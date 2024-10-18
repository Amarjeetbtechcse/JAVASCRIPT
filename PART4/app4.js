let fruits =['mango','apple','banana','litchi','orange']

for(let i = 0 ;i<=fruits.length;i++){
    console.log(i, fruits[i])
}

//NOTE:NESTED LOOP
let heroes = [ ['ironman','spiderman','thor'],['superman','wondr','flash',]];

for(let i=0; i<heroes.length; i++){
    console.log(heroes[i],heroes[i].length)
for(let j=0; j<heroes[i].length; j++){
    console.log(heroes[i])
}

}
//NOTE:NESTED LOOP 
let students = [["amarjeet", 100], ["rahul", 90], ["aryan", 80],["anandi", 654], ["jhonny", 90], ["abhisekh", 564]];
console.log(students);
for (let i = 0; i < students.length; i++) {  
    console.log(`info of students #${i+1}`)
    for (let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}



//NOTE:   FOR OF loop
let fruits = ["mango","apple","banana","litchi","orange"];

for (fruit of fruits){
    console.log(fruit);
}











//NOTE: NESTED FOR OF loop
let heroes = [["superman","batman","wander"],["spider","ironman","thor"]];

for(list of heroes){
    for(name of list){
        console.log(name);
    }
}

