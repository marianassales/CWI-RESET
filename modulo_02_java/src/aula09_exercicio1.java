import java.util.Scanner;

public class aula09_exercicio1 {
    // Faça um programa que peça uma nota, entre zero e dez. Caso o valor informado seja inválido, ou seja, não esteja entre
    // zero e dez, mostre uma mensagem informando o problema, mas mantenha o programa em execução pedindo novamente a nota
    // até que o usuário informe um valor válido. Quando o usuário informar uma nota válida, imprima o valor da nota.
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Informe uma nota entre zero e dez: ");

        boolean notaValida = false;
        do {
            double notaInformada = scan.nextDouble();
            if (notaInformada >= 0 && notaInformada <= 10) {
                notaValida = true;
                System.out.println("Nota válida: " + notaInformada);
            } else {
                System.out.println("Nota inválida! Informe uma nota entre zero e dez.");
            }

        } while (!notaValida);

    }


}
