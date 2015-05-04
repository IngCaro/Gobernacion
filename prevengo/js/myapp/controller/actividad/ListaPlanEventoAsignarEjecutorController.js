Ext.define('myapp.controller.actividad.ListaPlanEventoAsignarEjecutorController', {
    extend: 'Ext.app.Controller',
    views: ['actividad.ListaPlanEventoAsignarEjecutor',
             
            ],
     requires: [
        'myapp.util.Util'
    ],
    refs: [
           {
             ref: 'ListaPlanEventoAsignarEjecutor',
              selector: 'listaPlanEventoAsignarEjecutor'
             },
             {
              ref: 'ListaEmpleadoPlan',
              selector: 'listaEmpleadoPlan'
             },
           ],
    
    init: function(application) {
        this.control({
            "listaPlanEventoAsignarEjecutor":{
                itemdblclick: this.onClickNuevaAsignacion
            }, 
 
        }); 
    },   

     onClickNuevaAsignacion:function (record, item, index, e, eOpts ) {
         var win = Ext.create('myapp.view.actividad.WinAsignarEjecutorAPlan'); 
          
      newGrid=this.getListaEmpleadoPlan();
      store= newGrid.getStore();      
      store.proxy.extraParams.id=item.data.idAct;
      store.load();
      newGrid.down("label[name=lblIdActividad]").setText(item.data.idAct);
      win.setTitle("Asignar Empleados al plan de accion: "+ item.data.actividad);
      win.show();
              
    },// fin de la function 
    


});