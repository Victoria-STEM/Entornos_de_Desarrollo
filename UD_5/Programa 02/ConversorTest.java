import org.junit.*;

public class ConversorTest {

    @Test
    public void test-0Farenheit-32celsius() {
        Conversor gradoCelsius = new Conversor();
        Double resultFarenheit = gradoCelsius.farenheitACelsius(0.0);
        Assert.assertEquals(32.0, resultFarenheit);
    }

    @Test
    public void test-32celsius-0farenheit() {
        Conversor gradoFarenheit = new Conversor();
        Double resultCelsius = gradoFarenheit.farenheitACelsius(32.0);
        Assert.assertEquals(0.0, resultCelsius);
    }

}