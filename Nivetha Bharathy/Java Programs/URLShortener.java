
import java.util.HashMap;
import java.util.Scanner;
public class URLShortener {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        HashMap<String, String> urlMap = new HashMap<>();
        System.out.print("Enter short code: ");
        String shortCode = sc.nextLine();
        System.out.print("Enter original URL: ");
        String originalURL = sc.nextLine();
        urlMap.put(shortCode, originalURL);
        System.out.print("Enter short code to retrieve URL: ");
        String searchCode = sc.nextLine();

        if (urlMap.containsKey(searchCode)) {
            System.out.println("Original URL: " + urlMap.get(searchCode));
        } else {
            System.out.println("Short code not found.");
        }

        sc.close();
    }
}

