import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class Ejercicio_CRUD {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) throws SQLException {

        //Declaramos las Variables

            //bbdd
            String url = "jdbc:mysql://localhost:3306/people";
            String user = "root";
            String password = "user";
            Connection connection = DriverManager.getConnection(url, user, password);
            System.setProperty("jdbc.drivers", "com.mysql.jdbc.Driver");
            


            //variables
            boolean salir = true;

        //iniciamos el menu

        do {

            //imprimimos el menu
            System.out.println("Pulsa ENTER para continuar");
            sc.nextLine();

            System.out.print("\033[H\033[2J");
            System.out.flush();
            
            System.out.println("--------------------------");
            System.out.println("1-Retirar fondos");
            System.out.println("2-Ingresar fondos");
            System.out.println("0-Salir");
            System.out.println("--------------------------");

            //Leemos por pantalla
            int opcion = sc.nextInt();
            
            //iniciamos el Switch dependiendo de las opcion elegida

            switch (opcion) {

                case 1:

                    Retirar(connection);

                    break;

                case 2:
                
                    Ingresar(connection);

                    break;

                case 0:
                    
                    System.out.println("Nos vemos en la siguiente.");
                    salir = false;

                    break;

                default:

                    System.out.println("Intente de nuevo");

                    break;
            }
        } while (salir);

        sc.close();
        connection.close();


    }

    private static void Retirar(Connection connection)
    {
        try
        {

        //Consulta de clientes

            System.out.println("Diga la cantidad a retirar:");
            sc.nextLine();
            Integer cantidad = sc.nextInteger();

            Statement statement = connection.createStatement();
            String query = "SELECT * FROM people WHERE dni='" + dni + "'";
            ResultSet resultSet = statement.executeQuery(query);

            while (resultSet.next()) {

                //Cogemos los resultados
                String columna1 = resultSet.getString("dni");
                String columna2 = resultSet.getString("nombre");
                String columna3 = resultSet.getString("apellidos");
                int columna4 = resultSet.getInt("telefono");
                
                //Imprimimos
                System.out.println("DNI: " + columna1 + " Nombre: " + columna2 + " Apellidos: " + columna3 + " Tlf: " + columna4);
            }

            resultSet.close();
            statement.close();
        }catch(SQLException sqle)
        {
            System.out.println(sqle);
        }
    }

    private static void Ingresar(Connection connection)
    {
        try
        {
        //Alta de clientes

            System.out.println("Introduzca los datos:");
            sc.nextLine();
            System.out.println("DNI:");
            String dni = sc.nextLine();
            System.out.println("Nombre:");
            String nombre = sc.nextLine();
            System.out.println("Apellido:");
            String apellidos = sc.nextLine();
            System.out.println("Telefono:");
            String telefono = sc.nextLine();
            dni.trim();
            nombre.trim();
            apellidos.trim();
            telefono.trim();

            //Insertamos
            Statement statement = connection.createStatement();
            String query = "INSERT INTO people VALUES('" + dni + "','" + nombre + "','" + apellidos + "','" + telefono + "')";
            statement.executeUpdate(query);

            //Consultamos para comprobar que esta en la base de datos
            query = "SELECT * FROM people WHERE dni='" + dni + "'";
            ResultSet resultSet = statement.executeQuery(query);
            while (resultSet.next()) {

                //Cogemos los resultados
                String columna1 = resultSet.getString("dni");
                String columna2 = resultSet.getString("nombre");
                String columna3 = resultSet.getString("apellidos");
                int columna4 = resultSet.getInt("telefono");
                
                //Imprimimos
                System.out.println("DNI: " + columna1 + " Nombre: " + columna2 + " Apellidos: " + columna3 + " Tlf: " + columna4);
            }


            statement.close();
        }catch(SQLException sqle)
        {
            System.out.println(sqle);
        }
    }

    private static void Borrar(Connection connection)
    {
        try
    {
        //Borrar clientes

            System.out.println("Diga el DNI de la persona a borrar...");
            sc.nextLine();
            String dni = sc.nextLine();
            dni.trim();

            Statement statement = connection.createStatement();
            String query = "DELETE FROM people WHERE dni = '" + dni + "'";
            statement.executeUpdate(query);

            statement.close();
        }catch(SQLException sqle)
        {
            System.out.println(sqle);
        }
    }

    private static void Modificar(Connection connection)
    {
        try
        {
            //Modificación de clientes

                System.out.println("Diga el DNI de la persona a Modificar...");
                sc.nextLine();
                String dni = sc.nextLine();
                dni.trim();

                Statement statement = connection.createStatement();
                String query = "SELECT * FROM people WHERE dni='" + dni + "'";
                ResultSet resultSet = statement.executeQuery(query);
                
                while (resultSet.next()) {

                    //Cogemos los resultados
                    String columna1 = resultSet.getString("dni");
                    String columna2 = resultSet.getString("nombre");
                    String columna3 = resultSet.getString("apellidos");
                    int columna4 = resultSet.getInt("telefono");
                    
                    //Imprimimos
                    System.out.println("DNI: " + columna1 + " Nombre: " + columna2 + " Apellidos: " + columna3 + " Tlf: " + columna4);
                }
                statement.close();
                resultSet.close();

                System.out.println("Diga los valores a modificar...");
                System.out.println("Nombre:");
                String nombre = sc.nextLine();
                System.out.println("Apellido:");
                String apellidos = sc.nextLine();
                System.out.println("Telefono:");
                String telefono = sc.nextLine();

                statement = connection.createStatement();
                query = "UPDATE people SET nombre = '" + nombre + "',apellidos = '" + apellidos + "',telefono = '" + telefono + "' WHERE dni = '" + dni + "'";
                statement.executeUpdate(query);
                
                statement.close();
            }catch(SQLException sqle)
            {
                System.out.println(sqle);
            }
    }

}