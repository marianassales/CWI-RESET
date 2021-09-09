import java.util.Scanner;

public class aula08_exercicio2 {
    // Faça um Programa que leia um número e exiba o dia correspondente da semana. (1=Domingo, 2=Segunda, etc.), caso seja
    // informado um valor que não corresponda à um dia da semana, então deve imprimir a mensagem Valor inválido!
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.println("Informe um dia da semana [1-7]");

        int diaSemana = scan.nextInt();

        switch(diaSemana) {
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda-Feira");
                break;
            case 3:
                System.out.println("Terça-Feira");
                break;
            case 4:
                System.out.println("Quarta-Feira");
                break;
            case 5:
                System.out.println("Quinta-Feira");
                break;
            case 6:
                System.out.println("Sexta-Feira");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Valor inválido");
                break;
        }

    }

}
