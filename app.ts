class Cars{
    count:number;
    High_cars:string[];

    set_data(count:number,High_cars:string[]):void{
       this.count=count;
        this.High_cars=High_cars;
    }

    display():void{
        console.log("High Cars : "+ this.High_cars);
    }

    defect(name1:string | object):void{
        console.log("This car is "+name1);
    }
}

let c1=new Cars();
let c2=new Cars();

c1.set_data(89,['Rolls Royse','Martin','Bucati']);
c2.set_data(99,['Suzuki','TataNano','Ambastor']);
console.log("ALREADY INSERTED DATA");
c1.display();
c2.display();

//add
c1.High_cars.push("Ferrari");
c2.High_cars.push("Jaguar");
console.log("INSERTED DATA");
c1.display();
c2.display();


//defect
console.log("DEFECTED CAR");
let remove_name:string="Martin";
for(let rem_name in c1.High_cars){
    if(c1.High_cars[rem_name] === remove_name){
        console.log("The Location is "+rem_name+"  "+c1.High_cars[rem_name] )
    }
}


//update
console.log("UPDATION");
for(let rem_name in c1.High_cars){
    if(c1.High_cars[rem_name] === remove_name){
        c1.High_cars[rem_name]="Toyata";
        c1.display();
    }
}


//Delete
console.log("DELETION");
for(let delete_car in c1.High_cars)
{
    if(c1.High_cars[delete_car]==="Toyata"){
        delete c1.High_cars[delete_car];
        c1.display();
    }
}


//Threshold

console.log("THRESHOLD");
if(c2.count<100){
    console.log(c2.count);
    c2.defect(c2.High_cars);
}



