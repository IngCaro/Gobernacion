Ext.define('myapp.view.avance.WinAsignarUsuario', {
extend: 'Ext.window.Window',
  alias: 'widget.gridbuscar',
  itemId: 'gridbuscar',
  title:'Usuarios',
  height: 410,
  width: 490,
  modal:true,
  requires: [
   'myapp.view.avance.ListaAsignarUsuario'
  ],
  layout: {
   	type: 'fit'
  },
  initComponent: function() {
    var me = this;
    me.items = me.buildItem();
    me.dockedItems = me.buildDockedItems();
    me.callParent();
  },
  buildItem : function(){
    return [{
      xtype: 'listaAsignarUsuario',
    }]
  },
  buildDockedItems : function(){
    return [{
      xtype : 'toolbar',
      flex  : 1,
      dock  : 'bottom',
      items: [
          
      ]
    }]
  }
});




      