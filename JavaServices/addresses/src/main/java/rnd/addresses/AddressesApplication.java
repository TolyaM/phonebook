package rnd.addresses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AddressesApplication {

	public static void main(String[] args) {
		SpringApplication.run(AddressesApplication.class, args);
	}
}
