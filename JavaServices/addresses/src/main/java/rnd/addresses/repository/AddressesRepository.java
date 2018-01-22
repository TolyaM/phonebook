package rnd.addresses.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import rnd.addresses.model.Addresses;

public interface AddressesRepository extends JpaRepository<Addresses, Long> {

}
