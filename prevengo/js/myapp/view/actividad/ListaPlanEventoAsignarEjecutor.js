Ext.define('myapp.view.actividad.ListaPlanEventoAsignarEjecutor', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.listaPlanEventoAsignarEjecutor',
	
	requires: [
        'Ext.selection.CellModel', 
        'Ext.selection.CheckboxModel',
        'Ext.ux.ajax.SimManager',
        'Ext.ux.grid.FiltersFeature',
    ],
    features:[{
        ftype: 'filters',
        local: true
	},{
    	id: 'group',
    	ftype: 'groupingsummary',
		summaryType: 'count',
    	groupHeaderTpl:'<font size=2><font size=2>{name}</font>',
    	hideGroupedHeader: true,
    	enableGroupingMenu: false
    }], 
    

	store: Ext.create('myapp.store.actividad.PlandeAccionStore'),
          
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
			dataIndex: 'actividad',
			flex: 1.5,
			text: 'Actividad',
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
		                        property     : 'actividad',
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
			dataIndex: 'fecha',
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
		                        property     : 'fecha',
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
			xtype:'pagingtoolbar',
			dock:'bottom',
			store:this.store,
			displayInfo:true,
			items: []
		}];
	}
});
        console.log(Ext.create('myapp.store.actividad.PlandeAccionStore'));