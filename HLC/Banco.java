import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.time.LocalDateTime;
import java.util.Scanner;

public class Banco {
    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String dni, consulta, nombre, apellidos, cuenta = "";
        double saldo = 0, importe= 0, importe_total = 0;
        LocalDateTime fecha;
        Datejl dia;
        Time hora;
        Connection connection;
        Statement st;
        ResultSet rs;

        int opcion;

        System.setProperty("jdbc.drivers", "com.mysql.cj.jdbc.Driver");
        String url = "jdbc:mysql://localhost:3306/cuentas_bancarias";
        String user = "root";
        String pass = "user";

        try {

            connection = DriverManager.getConnection(url ,user, pass);
            System.out.println("Connection success.");

            do {
                System.out.println("\nCajero Automático");
                System.out.println("1- Retirar fondos");
                System.out.println("2- Ingresar fondos");
                System.out.println("3- Consultar movimientos");
                System.out.println("4- Listar todas las cuentas de un cliente (por DNI)");
                System.out.println("5- Consulta cuentas con saldo menor a una cantidad");
                System.out.println("0- Salir");
                System.out.print("Seleccione una opción: ");
                opcion = sc.nextInt();

                switch (opcion) {
                    case 1: // Retirar fondos

                        System.out.println("Introduzca la cuenta: ");
                        cuenta = sc.next();
                        System.out.print("Ingrese la cantidad a retirar: ");
                        importe = sc.nextDouble() * -1;
                
                        // Verificar que el saldo sea suficiente para el retiro
                        if (verificarSaldoSuficiente(connection, cuenta, importe)) {
                            fecha = LocalDateTime.now();
                            consulta = "insert into movimientos values ("
                                    + "'" + cuenta + "'" + ", " + "'" + fecha + "'" + " , " + importe + ")";
                            st = connection.createStatement();
                            st.executeUpdate(consulta);
                        } else {
                            System.out.println("Saldo insuficiente. Operación cancelada.");
                        }

                    break;
                    case 2: // Ingresar fondos

                        System.out.println("Introduzca la cuenta: ");
                        cuenta = sc.next();
                        System.out.print("Ingrese la cantidad a depositar: ");
                        importe = sc.nextDouble();
                    
                        fecha = LocalDateTime.now();
                        consulta = "insert into movimientos values ("
                                + "'" + cuenta + "'" + ", " + "'" + fecha + "'" + " , " + importe + ")";
                        st = connection.createStatement();
                        st.executeUpdate(consulta);

                    break;
                    case 3: // Consultar movimientos

                        System.out.print("Introduzca el Número de Cuenta : ");
                        cuenta = sc.next();
                        consulta = "select num_cuenta, fecha, importe from movimientos"
                                + " where num_cuenta = '" + cuenta + "'";
                        st = connection.createStatement();
                        rs = st.executeQuery(consulta);
                        System.out.println("Cuenta Fecha Importe");
                        System.out.println("-------------------- ------------------- ------------- ");
                        while (rs.next()) {
                            cuenta = rs.getString("num_cuenta");
                            dia = rs.getDate("fecha");
                            hora = rs.getTime("fecha");
                            importe = rs.getDouble("importe");
                            System.out.println(cuenta + " " + dia + " " + hora + " " + importe);
                        }

                    case 4: // Listar todas las cuentas de un cliente (por DNI)
                        listarCuentasCliente(connection);
                        break;
                    case 5: // Consulta cuentas con saldo menor a una cantidad
                        consultarCuentasSaldoMenor(connection);
                        break;
                    case 0: // Salir
                        System.out.println("Saliendo del sistema.");
                        break;
                    default:
                        System.out.println("Opción no válida. Intente nuevamente.");
                }
            } while (opcion != 0);

        } catch (SQLException sqle) {
            System.out.println(sqle.getMessage());
        }
    }


    private static boolean verificarSaldoSuficiente(Connection connection, String cuenta, double importe) throws SQLException {
        // Obtener el saldo actual de la cuenta
        String consultaSaldo = "select saldo from cuentas where num_cuenta = '" + cuenta + "'";
        Statement stSaldo = connection.createStatement();
        ResultSet rsSaldo = stSaldo.executeQuery(consultaSaldo);

        if (rsSaldo.next()) {
            double saldoActual = rsSaldo.getDouble("saldo");
            return (saldoActual + importe) >= 0; // Verificar si el saldo es suficiente
        } else {
            System.out.println("Cuenta no encontrada.");
            return false;
        }
    }
    
    private static void listarCuentasCliente(Connection connection) throws SQLException {
        System.out.print("Introduzca el DNI del cliente: ");
        String dni = sc.next();
        String consulta = "select num_cuenta from cuentas where dni_cliente = '" + dni + "'";
        Statement st = connection.createStatement();
        ResultSet rs = st.executeQuery(consulta);
        System.out.println("Cuentas del Cliente con DNI " + dni + ":");
        System.out.println("Número de Cuenta");
        System.out.println("-----------------");
        while (rs.next()) {
            String numCuenta = rs.getString("num_cuenta");
            System.out.println(numCuenta);
        }
    }
    
    private static void consultarCuentasSaldoMenor(Connection connection) throws SQLException {
        System.out.print("Introduzca la cantidad límite: ");
        double limiteSaldo = sc.nextDouble();
        String consulta = "select c.num_cuenta, c.saldo, cl.nombre, cl.apellidos"
                + " from cuentas c join clientes cl on c.dni_cliente = cl.dni"
                + " where c.saldo < " + limiteSaldo;
        Statement st = connection.createStatement();
        ResultSet rs = st.executeQuery(consulta);
        System.out.println("Cuentas con Saldo Menor a " + limiteSaldo + ":");
        System.out.println("Número de Cuenta Saldo Nombre Apellidos");
        System.out.println("----------------- ----- ------ ---------");
        while (rs.next()) {
            String numCuenta = rs.getString("num_cuenta");
            double saldo = rs.getDouble("saldo");
            String nombre = rs.getString("nombre");
            String apellidos = rs.getString("apellidos");
            System.out.println(numCuenta + " " + saldo + " " + nombre + " " + apellidos);
        }
    }
    
}
