import java.util.Scanner;

public class aula07_exercicio3 {
    public static void main(String[] args){
        //Faça um programa que solicite quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
        Scanner scan = new Scanner(System.in);

        System.out.println("Informe o valor por hora trabalhada: ");
        double valorHora = scan.nextDouble();

        System.out.println("Informe a quantidade de horas trabalhadas: ");
        double horasTrabalhadas = scan.nextDouble();

        double salario = valorHora * horasTrabalhadas;

        System.out.println("O salário é: " + salario);
    }
}
