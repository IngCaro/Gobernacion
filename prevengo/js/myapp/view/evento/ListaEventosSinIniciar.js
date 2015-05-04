Ext.define('myapp.view.evento.ListaSinIniciarEventos', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.listaSinIniciarEventos',
	
	requires: [
        'Ext.selection.CellModel', 
        'Ext.selection.CheckboxModel',
        'Ext.ux.ajax.SimManager',
        'Ext.ux.grid.FiltersFeature',
    ],
    features:[{
        ftype: 'filters',
        local: true
	}], 
    

     store: Ext.create('myapp.store.evento.EventoSinIniciarStore'),
     emptyText: 'No hay Eventos registrados',
	viewConfig: {
    	 		
    },
	
	columnLines: true,
	initComponent : function(){
	    var me = this;
	    me.columns= me.buildColumns();
	    me.dockedItems = me.buildDockedItems();
	    me.callParent();
	 },
	 
	buildColumns: function(){
		return [
       {
			dataIndex: 'id',
			flex: 1.5,
			text: 'id',
			hidden:true,
			items    : {
				xtype: 'textfield',
				flex : 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
				    keyup: function() {
			           	var store = this.up('grid').store;
			           	store.clearFilter();
			            if (this.value) {
		                   	store.filter({
		                        property     : 'id',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
		},
		{			
			dataIndex: 'titulo',
			flex: 1,
			text: 'Evento',
			items    : {
				xtype: 'textfield',
				flex : 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
				    keyup: function() {
			           	var store = this.up('grid').store;
			           	store.clearFilter();
			            if (this.value) {
		                   	store.filter({
		                        property     : 'titulo',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
		},
     {			
			dataIndex: 'descripcion',
			flex: 1.5,
			text: 'Descripcion',
			items    : {
				xtype: 'textfield',
				flex : 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
				    keyup: function() {
			           	var store = this.up('grid').store;
			           	store.clearFilter();
			            if (this.value) {
		                   	store.filter({
		                        property     : 'descripcion',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
		},

		{ 
			dataIndex: 'fechaEvento',
			flex: 0.5,
			text: 'Fecha:',
			items    : {
				xtype: 'textfield',
				flex : 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
				    keyup: function() {
			           	var store = this.up('grid').store;
			           	store.clearFilter();
			            if (this.value) {
		                   	store.filter({
		                        property     : 'fechaEvento',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
		},{
			flex: 0.5,
			dataIndex: 'estatus',
			text: 'Estado',
			items    : {
				xtype: 'textfield',
				flex : 1,
				margin: 2,
				enableKeyEvents: true,
				listeners: {
				    keyup: function() {
			           	var store = this.up('grid').store;
			           	store.clearFilter();
			            if (this.value) {
		                   	store.filter({
		                        property     : 'estatus',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
		}]
	},
	buildDockedItems : function(){
		  return [{
	                xtype: 'pagingtoolbar',
	                dock: 'bottom',
	                store: this.store,
	                displayInfo: true,
	                items: [
	                    ]
                  },
                  {       
	                xtype: 'toolbar',
	                dock: 'top',
	                store: this.store,
	                displayInfo: true,
	                items: [
	                     {
	                        xtype: 'button',
	                        name: 'btnNuevo',
	                        text: 'Asignar Ejecutor',
	                        iconCls: 'useradd'
	                    }
	                    ]
                }];
	}
});