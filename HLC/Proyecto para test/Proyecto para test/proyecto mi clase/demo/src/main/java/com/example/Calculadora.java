package com.example;

import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int opcion;

        do {
            System.out.println("Menú:");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Verificar si es primo");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    System.out.print("Ingrese el primer número: ");
                    int num1 = scanner.nextInt();
                    System.out.print("Ingrese el segundo número: ");
                    int num2 = scanner.nextInt();
                    System.out.println("La suma es: " + sumar(num1, num2));
                    break;
                case 2:
                    System.out.print("Ingrese el primer número: ");
                    int num3 = scanner.nextInt();
                    System.out.print("Ingrese el segundo número: ");
                    int num4 = scanner.nextInt();
                    System.out.println("La resta es: " + restar(num3, num4));
                    break;
                case 3:
                    System.out.print("Ingrese el primer número: ");
                    int num5 = scanner.nextInt();
                    System.out.print("Ingrese el segundo número: ");
                    int num6 = scanner.nextInt();
                    System.out.println("La multiplicación es: " + multiplicar(num5, num6));
                    break;
                case 4:
                    System.out.print("Ingrese el dividendo: ");
                    int dividendo = scanner.nextInt();
                    System.out.print("Ingrese el divisor: ");
                    int divisor = scanner.nextInt();
                    try {
                        System.out.println("La división es: " + dividir(dividendo, divisor));
                    } catch (ArithmeticException ex) {
                        System.out.println(ex.getMessage());
                    }
                    break;
                case 5:
                    System.out.print("Ingrese un número para verificar si es primo: ");
                    int numero = scanner.nextInt();
                    System.out.println("¿Es primo? " + esPrimo(numero));
                    break;
                case 0:
                    System.out.println("Saliendo...");
                    break;
                default:
                    System.out.println("Opción no válida");
                    break;
            }

            System.out.println();
        } while (opcion != 0);

        scanner.close();
    }

    public static int sumar(int a, int b) {
        return a + b;
    }

    public static int restar(int a, int b) {
        return a - b;
    }

    public static int multiplicar(int a, int b) {
        return a * b;
    }

    public static double dividir(int dividendo, int divisor) {
        if (divisor == 0) {
            throw new ArithmeticException("No se puede dividir por cero");
        }
        return (double) dividendo / divisor;
    }

    public static boolean esPrimo(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}