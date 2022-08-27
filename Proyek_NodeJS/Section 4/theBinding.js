const event = {
    name : "birthday Party",
    guestlist : ["Benny","Yoga","Suhardi"],
    printGuestList(){
        console.log("Guest List For " + this.name);
        this.guestlist.forEach((props) =>{
            console.log(props + " is Attending " + this.name);
        })
    }
}

event.printGuestList();