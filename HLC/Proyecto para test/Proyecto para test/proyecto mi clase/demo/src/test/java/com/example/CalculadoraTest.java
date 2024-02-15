package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class CalculadoraTest {

    @Test
    public void testSumar() {
        assertEquals(5, Calculadora.sumar(2, 3));
        assertEquals(-1, Calculadora.sumar(-2, 1));
        assertEquals(0, Calculadora.sumar(0, 0));
    }

    @Test
    public void testRestar() {
        assertEquals(-1, Calculadora.restar(2, 3));
        assertEquals(-3, Calculadora.restar(-2, 1));
        assertEquals(0, Calculadora.restar(0, 0));
    }

    @Test
    public void testMultiplicar() {
        assertEquals(6, Calculadora.multiplicar(2, 3));
        assertEquals(-2, Calculadora.multiplicar(-2, 1));
        assertEquals(0, Calculadora.multiplicar(0, 0));
    }

    @Test
    public void testDividir() {
        assertEquals(2.0, Calculadora.dividir(6, 3), 0.001); // Tercer parámetro es la tolerancia para números decimales
        assertEquals(-2.0, Calculadora.dividir(-6, 3), 0.001);
        assertEquals(Double.POSITIVE_INFINITY, Calculadora.dividir(6, 0), 0.001); // División por cero debe dar infinito
    }

    @Test
    public void testEsPrimo() {
        assertTrue(Calculadora.esPrimo(2));
        assertTrue(Calculadora.esPrimo(3));
        assertTrue(Calculadora.esPrimo(7));
        assertFalse(Calculadora.esPrimo(4));
        assertFalse(Calculadora.esPrimo(6));
        assertFalse(Calculadora.esPrimo(9));
    }
}
