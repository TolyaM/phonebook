package rnd.addresses.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import rnd.addresses.model.Addresses;
import rnd.addresses.repository.AddressesRepository;

import javax.validation.Valid;
import java.util.List;

@RequestMapping(path = "/api")
@RestController
@CrossOrigin
public class AddressesController {

    @Autowired
    private AddressesRepository addressesRepository;

    @Async
    @CrossOrigin
    @GetMapping("/addresses")
    public List<Addresses> getAllAddresses() {
        return addressesRepository.findAll();
    }

    @Async
    @CrossOrigin
    @PostMapping("/address")
    public Addresses createAddress(@Valid @RequestBody Addresses addresses) {
        return addressesRepository.save(addresses);
    }

    @Async
    @CrossOrigin
    @GetMapping("/address/{id}")
    public ResponseEntity<Addresses> getAddressById(@PathVariable(value = "id") Long addressId) {
        Addresses address = addressesRepository.findOne(addressId);
        if(address == null) {
            return ResponseEntity.notFound().build();

        }
        return ResponseEntity.ok().body(address);
    }

    @Async
    @CrossOrigin
    @PutMapping("/address")
    public ResponseEntity<Addresses> updateAddress(@RequestBody Addresses addressDetails) {
        Addresses addresses = addressesRepository.findOne(addressDetails.getId());
        if(addresses == null) {
            return ResponseEntity.notFound().build();
        }
        addresses.setEmail(addressDetails.getEmail());
        addresses.setSkype(addressDetails.getSkype());
        addresses.setPhone(addressDetails.getPhone());
        addresses.setRoom(addressDetails.getRoom());

        Addresses updatedAddress = addressesRepository.save(addresses);
        return ResponseEntity.ok(updatedAddress);
    }

    @Async
    @CrossOrigin
    @DeleteMapping("/address/{id}")
    public ResponseEntity<Addresses> deleteAddress(@PathVariable(value = "id") Long noteId) {
        Addresses addresses = addressesRepository.findOne(noteId);
        if(addresses == null) {
            return ResponseEntity.notFound().build();
        }

        addressesRepository.delete(addresses);
        return ResponseEntity.ok().build();
    }
}
