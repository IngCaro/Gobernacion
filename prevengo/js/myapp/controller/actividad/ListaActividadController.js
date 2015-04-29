Ext.define('myapp.controller.actividad.ListaActividadController', {
    extend: 'Ext.app.Controller',
    views: ['actividad.ListaActividad',
             'actividad.WinPlanEvento'
             
            ],
     requires: [
        'myapp.util.Util'
        
    ],
   
    refs: [
           {
              ref: 'ListaActividad',
              selector: 'listaActividad'
             },
              {
              ref: 'ListaPlanEvento',
              selector: 'listaPlanEvento'
             },
             
            
           ],
    
    init: function(application) {
        this.control({
            "listaActividad":{
                itemdblclick: this.editarUsuario
            },
            "winActividad checkbox[name=cbfDepende]":{
                selection: this.cargarActividad
            }
        }); 
    },   

    onClickVerPlan:function (button, e, options) {
         var grid = this.getListaActividad();
         record = grid.getSelectionModel().getSelection();
        // record = Ext.util.JSON.encode(record);
        if(record[0]){
            
            record[0].get('id');
            
                              
        }else{
            Ext.MessageBox.show({ title: 'Informaci&oacute;n',
            msg: 'Debe seleccionar por lo menos un Evento',
            buttons: Ext.MessageBox.OK, icon: Ext.MessageBox.INFO });
        }
       },// fin de la function



 editarUsuario: function (record, item, index, e, eOpts ){
    
    var win = Ext.create('myapp.view.actividad.WinPlanEvento'); 
         
     newGrid=this.getListaPlanEvento();
     
      store= newGrid.getStore();      
      store.proxy.extraParams.id=item.data.id;
      store.load();
      newGrid.down("label[name=lblIdEvento]").setText(item.data.id);
      win.show();
      
  },
  
  
  
});



