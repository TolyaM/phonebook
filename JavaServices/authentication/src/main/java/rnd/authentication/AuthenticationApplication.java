package rnd.authentication;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
@EnableResourceServer
public class AuthenticationApplication {
	public static void main(String[] args) {
		SpringApplication.run(AuthenticationApplication.class, args);
	}
}
