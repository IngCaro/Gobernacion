<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class TipoEvento_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function cargarTipoEvento() {

        $query = $this->db->query("SELECT * 
                                 FROM tipo_evento where estatus=1");
        $resultado = array();
        $resultdb = array();
        if ($query->num_rows() > 0) {
            foreach ($query->result() as $row) {
                $resultado[] = $row;
            }
            return $resultado;
            $query->free - result();
        }
    }

}// fin de la clase