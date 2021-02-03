let myVue = new Vue({
    el : '#myApp',
    data : {
        state : "edit",
        title : 'Product Registeration',
        subTitle : "Add product to list",
        myModel : "",
        price : "",
        icon : "",
        myList : [],
},
methods : {

// function pushs an object created by the form to a list 
// to later be displayed
 
    saveItem(){
        
        let category = document.getElementById(this.icon).innerHTML
        this.myList.push({label : this.myModel, price :this.price, icon : this.icon, category : category});
        this.myModel = "";
        this.icon = "";
        this.price = "";

    },
    changeState(newState){
        this.state = newState
    },
    removeItem(name){
        let newIndex = this.myList.length - name-1;

        this.myList.splice(newIndex,1);
    }

},
computed :{
    // function that reverse list order to be displayed 
    // in data this way the data enters from th
    sortedItems(){
       return this.myList.slice(0).reverse();
    }
}
})

document.getElementById("output").innerHTML = 
myVue.$data.subTitle;
