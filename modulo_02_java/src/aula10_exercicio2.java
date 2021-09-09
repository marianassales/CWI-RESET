import java.util.Scanner;

public class aula10_exercicio2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int[] idades = new int[10];
        for (int i = 0; i < idades.length; i++) {
            System.out.println("Informa a idade da pessoa de número " + i);
            idades[i] = scan.nextInt();
        }

        int quantidadeDeIdadesMaior = 0;
        for (int idade : idades) {
            if (idade >= 18) {
                quantidadeDeIdadesMaior++;
            }
        }

        System.out.println("Idades computadas:");
        for (int idade : idades) {
            System.out.println(idade);
        }
        System.out.println("---");

        System.out.println("Quantidade de pessoas maiores de idade: " + quantidadeDeIdadesMaior);
    }
}
