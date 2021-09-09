import java.util.Scanner;

public class aula07_exercicio2 {
    public static void main(String[] args){
        //Faça um programa que tenha como entradas 4 notas e imprima a média. Utilize a classe Scanner para obter as entradas.
        Scanner scan = new Scanner(System.in);

        System.out.printf("Informe a primeira nota: ");
        double nota1 = scan.nextDouble();
        System.out.printf("Informe a segunda nota: ");
        double nota2 = scan.nextDouble();
        System.out.printf("Informe a terceira nota: ");
        double nota3 = scan.nextDouble();
        System.out.printf("Informe a quarta nota: ");
        double nota4 = scan.nextDouble();

        double media = (nota1+nota2+nota3+nota4)/4;

        System.out.println("A média é: " + media);




    }
}
