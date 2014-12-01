// single fattura edit form controller
App.FatturaEditController = Ember.ObjectController.extend({

  // selectContentTariffa: null,
  // selectContentIva: null,

  selectContentTariffa: [
   {label: "180", value: "180"},
   {label: "200", value: "200"},
   {label: "300", value: "300"}
  ],

  selectContentIva: [
   {label: "4%",  value: "0.04"},
   {label: "10%", value: "0.1"},
   {label: "22%", value: "0.22"}
  ],

  newTransaction:function(){
     return this.initializeNewTransaction();
  }.property(),


  initializeNewTransaction:function(){
    
   var aNewTransaction= Em.Object.create({
      selectContentTariffa:null,
      quantita:null,
      total:null,
      selectContentIva:null,
      ivamount:null,
      risultatofinale:null,
      somma:null,
      weight:null
   });
  
   aNewTransaction.reopen({
    calcTotal:function(){
          this.set("total",this.get("quantita")*this.get("selectContentTariffa"));
       }.observes("quantita","selectContentTariffa"),
    percTotal:function(){
        this.set("ivamount",this.get("total")*this.get("selectContentIva"));
       }.observes("total","selectContentIva"),
    totatResult:function(){
        this.set("risultatofinale",this.get("total")+this.get("ivamount"));
       }.observes("total","ivamount"),
 //    sumTotal:function(){
 //       var sum = function(s1,s2){ return s1 + s2;}
 //       return
    // this.get("controller").getEach("total").reduce(sum);
 //     }.property("controller.@each.total"),
    });      
  
    return aNewTransaction;
  
  },

  actions: {

    add: function() {
      this.addObject(this.get('newTransaction'));
      this.set('newTransaction', this.initializeNewTransaction());
    }, 

    save: function () {
      // save and commit
      var newFattura = this.get('model');
      newFattura.save();
      // redirects to the fattura itself
      this.transitionToRoute('fattura', newFattura);
    },
  }
});
