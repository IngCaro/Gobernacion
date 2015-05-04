Ext.define('myapp.view.avance.ListaAsignarUsuario', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.listaAsignarUsuario',
    itemId: 'listaAsignarUsuario',
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
    //store: Ext.create('myapp.store.avance.PlanEmpleadosStore'),
    emptyText: 'No hay empleado(s) asignado(s) a esta actividad',
    columnLines: true,
    initComponent: function () {
        var me = this;
        me.columns = me.buildColumns();
        me.dockedItems = me.buildDockedItems();
        me.callParent();
    },
    buildColumns: function () {
        return [ 
             {
			text:'',
			dataIndex:'id',
			flex: 0.3,
			
		},
            {
			text:'Foto',
			dataIndex:'foto',
			flex: 0.3,
			renderer: function(value, metadata, record){
				return '<img width="50" height="50" src="../../empleados/_DSC'+ value +'">';
		   }
		},{
			flex: 1,
			dataIndex: 'cedula',
			text: 'Nro. de Cedula',
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
		                        property     : 'cedula',
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
			flex: 1,
			dataIndex: 'nombrecompleto',
			text: 'Nombre y apellido',
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
		                        property     : 'nombrecompleto',
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
			flex: 0.5,
			dataIndex: 'ente',
			text: 'Ente',
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
		                        property     : 'ente',
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
			flex: 0.5,
			dataIndex: 'division',
			text: 'Division',
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
		                        property     : 'division',
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
			flex: 0.5,
			dataIndex: 'tipousuario',
			text: 'Tipo de Usuario',
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
		                        property     : 'tipousuario',
		                        value         : this.value,
		                        anyMatch      : true,
		                        caseSensitive : false
		                    });
			            }
				    },
				    buffer: 500
				}
			}
			
		}
            ]
    },
    buildDockedItems: function () {
        return [{
                xtype: 'toolbar',
                dock: 'top',
                store: this.store,
                displayInfo: true,
                  items:[
                      
                       {
                        xtype: 'label',
                        name: 'lblMensaje',
                        text: 'Buscar Por:',
                        hidden:true
                 
                       
                    },
                       {
                                xtype: 'combobox',
                                x: 200,
                                y: 10,
                                fieldLabel: 'Tipo de Usuario:',
                                name:'cmbTipoUsuario',
                                editable      : false,
                                //store         : Ext.create('myapp.store.actividad.ActividadDependienteStore'),
                                valueField    : 'id',
                                displayField  : 'nombre',
                                emptyText     :'Seleccione',
                                queryMode     : 'local',
                                disabled       :true,
                                forceSelection: true,
                                triggerAction : 'all'
                                
                                
                            },  
                        {
                           
                                xtype: 'combobox',
                                x: 200,
                                y: 10,
                                fieldLabel: 'Ente:',
                                name:'cmbEnte',
                                editable      : false,
                                //store         : Ext.create('myapp.store.actividad.ActividadDependienteStore'),
                                valueField    : 'id',
                                displayField  : 'nombre',
                                emptyText     :'Seleccione',
                                queryMode     : 'local',
                                disabled       :true,
                                forceSelection: true,
                                triggerAction : 'all'
                                
                                
                            },  
                            {   xtype: 'combobox',
                                x: 200,
                                y: 10,
                                fieldLabel: 'Actividad:',
                                name:'cmbDivision',
                                editable      : false,
                               // store         : Ext.create('myapp.store.actividad.ActividadDependienteStore'),
                                valueField    : 'id',
                                displayField  : 'descripcion',
                                emptyText     :'Seleccione',
                                queryMode     : 'local',
                                disabled       :true,
                                forceSelection: true,
                                triggerAction : 'all'
                                
                                
                            },
                             
                    
                     {
                        xtype: 'label',
                        name: 'lblIdActividad',
                        text: '',
                        //hidden:true
     
                     
                    }
                ]
            }];
    }
});