<?php
    class Conexion {
        $con="";
        $host="localhost";
        $user="root";
        $password="r0b3rt0l";
        $database="webanews";

        function Conexion(){
            $con = mysqli_connect($this->host, $this->user, $this->password, $this->database);
        }

        function Query($consulta){
            return mysqli_query($this->con, $consulta);
        }

        function ResultSet($query){
            while ($res[]= mysqli_fetch_assoc($query)){}
            return res;
        }
    }
?>
