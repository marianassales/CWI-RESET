import java.util.Scanner;

public class aula08_exercicio1 {
    // Faça um programa que tenha como entradas 4 notas e calcule a média. Ao final o programa deve apresentar:
    //A mensagem Aluno aprovado, se a média alcançada for igual ou superior a sete;
    //A mensagem Aluno reprovado, se a média for inferior a sete;
    //A mensagem Aluno aprovado com louvores, se a média for igual a dez.

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Informe a primeira nota: ");
        double primeiraNota = scan.nextDouble();

        System.out.println("Informe a segunda nota: ");
        double segundaNota = scan.nextDouble();

        System.out.println("Informe a terceira nota: ");
        double terceiraNota = scan.nextDouble();

        System.out.println("Informe a quarta nota: ");
        double quartaNota = scan.nextDouble();

        double media = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

        if (media == 10) {
            System.out.println("Aluno aprovado com louvores!");
        } else if (media >= 7) {
            System.out.println("Aluno aprovado!");
        } else {
            System.out.println("Aluno reprovado.");
        }
    }
}
