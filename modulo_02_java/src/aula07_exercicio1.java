import java.util.Scanner;

public class aula07_exercicio1 {
    public static void main(String[] args){
        // Faça um programa que tenha como entradas dois números e imprima a soma de ambos.
        // Utilize a classe Scanner para obter as entradas.
        Scanner scan = new Scanner(System.in);
        int num1, num2;

        System.out.printf("Informe o primeiro número: ");
        num1 = scan.nextInt();
        System.out.printf("Informe o segundo número: ");
        num2 = scan.nextInt();

        System.out.printf("\nResultados:\n");
        System.out.printf("%d + %d = %3d\n",num1,num2,(num1 +num2));

    }
}
