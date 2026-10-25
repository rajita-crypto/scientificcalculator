import java.util.Scanner;

public class ScientificCalculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("\n===== Scientific Calculator =====");
            System.out.println("1. Addition");
            System.out.println("2. Subtraction");
            System.out.println("3. Multiplication");
            System.out.println("4. Division");
            System.out.println("5. Power");
            System.out.println("6. Square Root");
            System.out.println("7. Sine (degrees)");
            System.out.println("8. Cosine (degrees)");
            System.out.println("9. Tangent (degrees)");
            System.out.println("10. Log10");
            System.out.println("11. Natural Log (ln)");
            System.out.println("12. Exit");
            System.out.print("Choose an option: ");

            int choice;
            try {
                choice = sc.nextInt();
            } catch (Exception e) {
                System.out.println("Invalid input. Please enter a number.");
                sc.nextLine();
                continue;
            }

            if (choice == 12) {
                System.out.println("Goodbye!");
                break;
            }

            double result = 0.0;

            switch (choice) {
                case 1:
                    double a = readDouble(sc, "Enter first number: ");
                    double b = readDouble(sc, "Enter second number: ");
                    result = a + b;
                    System.out.println("Result: " + result);
                    break;

                case 2:
                    a = readDouble(sc, "Enter first number: ");
                    b = readDouble(sc, "Enter second number: ");
                    result = a - b;
                    System.out.println("Result: " + result);
                    break;

                case 3:
                    a = readDouble(sc, "Enter first number: ");
                    b = readDouble(sc, "Enter second number: ");
                    result = a * b;
                    System.out.println("Result: " + result);
                    break;

                case 4:
                    a = readDouble(sc, "Enter numerator: ");
                    b = readDouble(sc, "Enter denominator: ");
                    if (b == 0) {
                        System.out.println("Error: Division by zero.");
                    } else {
                        result = a / b;
                        System.out.println("Result: " + result);
                    }
                    break;

                case 5:
                    a = readDouble(sc, "Enter base: ");
                    b = readDouble(sc, "Enter exponent: ");
                    result = Math.pow(a, b);
                    System.out.println("Result: " + result);
                    break;

                case 6:
                    a = readDouble(sc, "Enter value: ");
                    if (a < 0) {
                        System.out.println("Error: Square root of a negative number is not valid.");
                    } else {
                        result = Math.sqrt(a);
                        System.out.println("Result: " + result);
                    }
                    break;

                case 7:
                    a = readDouble(sc, "Enter angle in degrees: ");
                    result = Math.sin(Math.toRadians(a));
                    System.out.println("Result: " + result);
                    break;

                case 8:
                    a = readDouble(sc, "Enter angle in degrees: ");
                    result = Math.cos(Math.toRadians(a));
                    System.out.println("Result: " + result);
                    break;

                case 9:
                    a = readDouble(sc, "Enter angle in degrees: ");
                    result = Math.tan(Math.toRadians(a));
                    System.out.println("Result: " + result);
                    break;

                case 10:
                    a = readDouble(sc, "Enter value: ");
                    if (a <= 0) {
                        System.out.println("Error: log10 only works for positive values.");
                    } else {
                        result = Math.log10(a);
                        System.out.println("Result: " + result);
                    }
                    break;

                case 11:
                    a = readDouble(sc, "Enter value: ");
                    if (a <= 0) {
                        System.out.println("Error: ln only works for positive values.");
                    } else {
                        result = Math.log(a);
                        System.out.println("Result: " + result);
                    }
                    break;

                default:
                    System.out.println("Invalid choice. Please select a valid option.");
                    break;
            }

            sc.nextLine(); // clear buffer
            System.out.print("\nPress Enter to continue...");
            sc.nextLine();
        }

        sc.close();
    }

    private static double readDouble(Scanner sc, String prompt) {
        System.out.print(prompt);
        while (true) {
            try {
                return Double.parseDouble(sc.nextLine());
            } catch (Exception e) {
                System.out.print("Invalid number. Try again: ");
            }
        }
    }
}
