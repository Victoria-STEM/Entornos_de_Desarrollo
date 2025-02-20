public class Notas {

    String mensaje = "";

    public String calcularNota (int nota) {

        if (nota >= 9) {
            mensaje = "SOBRESALIENTE";
        }
        else if (nota >= 7) {
            mensaje = "NOTABLE";
        }
        else if (nota >= 6) {
            mensaje = "BIEN";
        }
        else if (nota >= 5) {
            mensaje = "SUFICIENTE";
        }
        else {
            mensaje = "SUSPENSO";
        }

        return mensaje;
    }

}