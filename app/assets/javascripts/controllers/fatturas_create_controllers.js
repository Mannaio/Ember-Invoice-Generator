// Fattura creation form controller
App.FatturasCreateController=Ember.ObjectController.extend({

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

  updateTotal: function() {

    // get the reference to the values of fare and quantity
    var quantita = this.get('quantita'),
        tariffa =  this.get('selectContentTariffa.value');

    // message them to make sure your stuff is not gonna break
    if (isNaN(tariffa))  { tariffa  = 0; }
    if (isNaN(quantita)) { quantita = 0; }

    // calculate
    var total = tariffa * quantita;

    // set the total
    this.set('total', total);

  }.observes('quantita', 'selectContentTariffa'),

  // newTransaction:function(){
  //    return this.initializeNewTransaction();
  // }.property(),


  // initializeNewTransaction:function(){
    
  //   var aNewTransaction= Em.Object.create({
  //     selectContentTariffa:null,
  //     quantita:null,
  //     total:null,
  //     selectContentIva:null,
  //     ivamount:null,
  //     risultatofinale:null,
  //     somma:null,
  //     weight:null
  //    });
      
  //    aNewTransaction.reopen({
  //     calcTotal:function(){
  //           this.set("total",this.get("quantita")*this.get("selectContentTariffa"));
  //        }.observes("quantita","selectContentTariffa"),
  //     percTotal:function(){
  //         this.set("ivamount",this.get("total")*this.get("selectContentIva"));
  //        }.observes("total","selectContentIva"),
  //     totatResult:function(){
  //         this.set("risultatofinale",this.get("total")+this.get("ivamount"));
  //        }.observes("total","ivamount"),
  //   //    sumTotal:function(){
  //   //       var sum = function(s1,s2){ return s1 + s2;}
  //   //       return
  //     // this.get("controller").getEach("total").reduce(sum);
  //   //     }.property("controller.@each.total"),
  //     });      
      
  //     return aNewTransaction;
      
  // },

  actions: {

    add: function() {
 
      var transactionRecord = this.store.createRecord('transaction', {
        name: 'new transaction',
        isChecked: false
      });
      
      return this.get("model.transactions").addObject(transactionRecord);
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






