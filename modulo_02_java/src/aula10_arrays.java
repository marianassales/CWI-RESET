public class aula10_arrays {
    public static void main(String args[]){

        double tempDia001 = 31.3;
        double tempDia002 = 32;
        double tempDia003 = 33.7;

        double [] temperaturas = new double[365]; //java precisa indicar tamanho do array
        temperaturas[0] = 31.3;
        temperaturas[1] = 32;
        temperaturas[2] = 33.7;

        for(int i=0; i<temperaturas.length; i++){
            System.out.println("O Valor da temperatura do dia " + (i+1) + " é: " + temperaturas[i]);
        }
// For melhorado (somente acesso ao valor)

        for (double temp: temperaturas){
            System.out.println(temp);
        }


    }
}
