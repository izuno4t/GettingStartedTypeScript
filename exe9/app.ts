class Person {
        firstName: string;
        lastName: string;
        get fullName() {
                return this.lastName + this.firstName;
        }
}

class Place {
        countryName: string;
        areaName: string;
        get fullName(){
                return this.countryName + this.areaName;
        }
}

var p = new Person();
p.firstName = "太郎";
p.lastName = "山田";
var l = new Place();
l.countryName = "日本";
l.areaName = "東京都";

console.log(p.fullName);
console.log(l.fullName);
