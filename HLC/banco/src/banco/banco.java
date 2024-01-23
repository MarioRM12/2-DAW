package banco;
import java.sql.*;
import java.util.Scanner;
public class banco {
        static Scanner sc = new Scanner(System.in);
        public static void main(String[] args) {
            String dni, consulta, nombre, apellidos;
            Connection connection;
            System.setProperty("jdbc.drivers", "com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://localhost:3306/cuentas_bancarias";
            String user = "root";
            String pass = "user";
        try{    
            System.out.print("Introduzca el DNI : ");
            dni=sc.nextLine();
            connection = DriverManager.getConnection(url ,user, pass);
            System.out.println("Connection success.");
            Statement st = connection.createStatement();
            ResultSet rs;
            consulta = "select nombre, apellidos from clientes where dni = ";
            consulta = consulta + "'" + dni + "'";
            rs=st.executeQuery(consulta);
            rs.next();
            nombre = rs.getString("nombre");
            apellidos = rs.getString("apellidos");
            System.out.println("NOMBRE    -> " + nombre);
            System.out.println("APElLIDOS -> " + apellidos);
            connection.close();
            System.out.println("Connection closed.");
            } catch (SQLException sqle){
            System.out.println(sqle.getMessage());
        }
    }
}
