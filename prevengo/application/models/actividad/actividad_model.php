<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Actividad_model extends CI_Model{

	public function __construct(){
		parent::__construct();
	}
    
        public function guardarActividad($dataActividad){
        return $this->db->insert('actividad',$dataActividad);
    }
        
        
	 public function cargarPlandeAccion(){
     
            $query = $this->db->query("select actividad.id, actividad.descripcion from actividad 
                                        inner join avance on actividad.id=avance.actividad
                                        inner join evento on evento.id=actividad.evento
                                        where (evento.estatus in (1,2)) and (actividad.estatus in (1,2)) and (avance.usuario=3)
                                        order by actividad.estatus, actividad.id ");
                $resultado = array();
                $resultdb=array();  
                if ($query->num_rows() > 0){
                foreach ($query->result() as $row){
                    $resultado[] = $row;
                }
                return $resultado;
                $query->free-result();
              } 
    
    }


 public function  buscarUnPlandeAccion($idUsuario,$idActividad){

    $sql=" SELECT ava.id as avance, ava.actividad,ava.fechaasignacion, act.estatus 
              FROM avance AS ava 
              INNER JOIN actividad AS act ON ava.actividad=act.id 
              WHERE ava.usuario=$idUsuario and ava.actividad=$idActividad group by act.id";

    $query = $this->db->query($sql);
       return $query;

    }

public function  cambiarEstatus($data){         
         $this->db->set('estatus',$data['estatus']);
         $this->db->where('id',$data['id']);
         return  $this->db->update('actividad');
    }
 
 public function cargarEventosConPlandeAccion(){
      
    
        $sql="SELECT ev.id AS id,
                     ev.titulo AS evento,
                     ev.descripcion AS descripcion,
                     ev.fechatope AS fecha
                         
                FROM evento AS ev 
                
                WHERE ev.estatus IN (1,2)
                      
                       
                      
                ORDER BY fecha, ev.estatus  ASC";

          $query = $this->db->query($sql);
                $resultado = array();
                $resultdb=array();  
                if ($query->num_rows() > 0){
                foreach ($query->result() as $row){
                    $resultado[] = $row;
                }
                return $resultado;
                $query->free-result();
              } 
    
 }

 public function cargarPlandeAccionDeEvento($id){
  
        $sql="SELECT ac.id AS id,
                     ac.descripcion AS descripcion, 
                     ac.fechatope AS fecha
                FROM actividad AS ac 
                WHERE
                      ac.estatus IN (1,2) 
                      AND ac.usuario=1  
                      AND ac.evento=$id";

          $query = $this->db->query($sql);
                $resultado = array();
                $resultdb=array();  
                if ($query->num_rows() > 0){
                foreach ($query->result() as $row){
                    $resultado[] = $row;
                }
                return $resultado;
                $query->free-result();
              } 
    
 }
 
 
  public function cargarActividadDependiente($id){
  
        $sql="SELECT ac.id AS id,
                     ac.descripcion AS descripcion 
                 FROM actividad AS ac 
                 WHERE ac.estatus in (1,2) AND 
                        ac.evento=$id";

          $query = $this->db->query($sql);
                $resultado = array();
                $resultdb=array();  
                if ($query->num_rows() > 0){
                foreach ($query->result() as $row){
                    $resultado[] = $row;
                }
                return $resultado;
                $query->free-result();
              } 
    
 }
}// fin de la clase