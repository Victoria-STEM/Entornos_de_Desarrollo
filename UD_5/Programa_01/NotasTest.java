import org.junit.*;

public class NotasTest {
    @Test
    public void test() {
        Notas miNota = new Notas();
        String result = miNota.calcularNota(9);
        Assert.assertEquals("SOBRESALIENTE", result);
    }
}
