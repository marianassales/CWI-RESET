import java.util.Scanner;

public class aula10_exercicio1 {
    //Crie um programa que receba 5 valores e armazene em um vetor. Crie um segundo vetor de mesmo tipo e tamanho, contendo
    // os valores do primeiro vetor multiplicados por 2. Ou seja: segundoVetor[i] = primeiroVetor[i] * 2.
    // No final, imprima o conteúdo dos dois vetores.

    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);

        int[] primeiroVetor = new int[5];
        for (int i = 0; i < primeiroVetor.length; i++) {
            System.out.println("Informa o valor da posição " + i);
            primeiroVetor[i] = scan.nextInt();
        }

        int[] segundoVetor = new int[primeiroVetor.length];
        for (int i = 0; i < primeiroVetor.length; i++) {
            segundoVetor[i] = primeiroVetor[i] * 2;
        }

        System.out.println("Primeiro Vetor: ");
        for (int item : primeiroVetor) {
            System.out.println(item);
        }

        System.out.println("Segundo Vetor: ");
        for (int item : segundoVetor) {
            System.out.println(item);
        }
    }
}
